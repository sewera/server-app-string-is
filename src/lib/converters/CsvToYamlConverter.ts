import { ConverterOptions } from '@lib/types'
import { input as csvInput } from '@lib/inputs/CsvInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'

export const id = 'csvToYaml'

export const outputId = 'yaml'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = csvInput(data)
  if (!obj) {
    return ''
  }

  return yamlOutput(obj, options)
}
