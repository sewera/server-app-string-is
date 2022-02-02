import dayjs, { Dayjs, extend } from 'dayjs'
import { isEmpty } from 'lodash'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { ConverterOptions } from '@lib/types'
import { input as timestampInput } from '@lib/inputs/TimestampInput'

extend(relativeTime)
extend(utc)
extend(timezone)

export const defaultOptions = {
  format: 'YYYY-MM-DD HH:mm',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
}

export const id = 'datetime'

const parse = (input: string, timezone: string): Dayjs => {
  const timestamp = timestampInput(input) || ''
  const multiplier = timestamp.length === 10 ? 1000 : 1
  const datetime = new Date(parseInt(timestamp, 10) * multiplier)
  if (isNaN(datetime.getTime())) {
    throw new Error('The input is not a valid timestamp')
  }

  return dayjs(datetime).tz(timezone)
}

export const output = (input: string, options: ConverterOptions): string => {
  if (isEmpty(input)) {
    return ''
  }

  const { format, timezone } = { ...defaultOptions, ...options }
  return parse(input, timezone as string).format(format as string)
}

export const relativeOutput = (
  input: string,
  options: ConverterOptions,
): string => {
  try {
    const { timezone } = { ...defaultOptions, ...options }
    const date = parse(input, timezone as string)

    return dayjs().to(date)
  } catch (err) {
    return ''
  }
}

export const timestampOutput = (input: string): string => {
  try {
    return parse(input, 'UTC').unix().toString()
  } catch (err) {
    return ''
  }
}

export const utcOutput = (input: string, options: ConverterOptions): string => {
  try {
    const { format } = { ...defaultOptions, ...options }
    return parse(input, 'UTC').format(format as string)
  } catch (err) {
    return ''
  }
}
