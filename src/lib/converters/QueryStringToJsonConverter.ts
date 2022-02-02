import { ConverterOptions, Obj } from '@lib/types'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'
import { input as queryStringInput } from '@lib/inputs/QueryStringInput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'queryStringToJson'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'json'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = queryStringInput(data)
  if (!obj) {
    return ''
  }

  return jsonOutput(obj as Obj, options)
}
