import { isEmpty } from 'lodash'
import { parse } from 'papaparse'

const defaults = {
  header: true,
}

export const input = (data: string): unknown[] | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  // Replace blank lines, and any final linebreak, since they break the CSV parser.
  const noBlanks = data.replace(/^\s*[\r\n]/gm, '').replace(/[\r\n]$/gm, '')

  const { data: obj, errors } = parse(noBlanks, defaults)

  if (errors.length > 0) {
    throw new Error(errors[0].message)
  } else if (isEmpty(obj)) {
    throw new Error('The input could not be parsed as a valid CSV')
  }

  return obj
}
