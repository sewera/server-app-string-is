import { isObject } from 'lodash'

import { ConverterOptions } from '@lib/types'
import { output as csvOutput } from '@lib/outputs/CsvOutput'
import { input as jsonInput } from '@lib/inputs/JsonInput'

export const id = 'jsonToCsv'

export const outputId = 'csv'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  let obj = jsonInput(data)
  if (!obj) {
    return ''
  }

  // papaparse doesn't work for arrays of primitives - it expects column names (ie key → value objects).
  if (Array.isArray(obj)) {
    obj = obj.map((entry) => {
      if (isObject(entry)) {
        return entry
      }

      return { 'field 1': entry }
    })
  }

  return csvOutput(obj, options)
}
