import { format } from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'

import { ConverterOptions } from '@lib/types'

/**
 * The default options used to format JavaScript strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'javaScript'

/**
 * Formats the given JavaScript string, using the given formatting options.
 *
 * @param input   - The string to format.
 * @param options - A subset of JavaScript formatting options defined by prettier.
 *
 * @returns the formatted JavaScript string.
 */
export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'babel',
    plugins: [parserBabel],
  })
}
