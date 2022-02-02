import { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'urlEncode'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

/**
 * @see https://kimizuka.hatenablog.com/entry/2015/07/19/000000
 * @see https://stackoverflow.com/a/62436236
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#description
 */
export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return encodeURIComponent(input)
    .replace(/[!'()]/g, escape)
    .replace(/\*/g, '%2A')
}
