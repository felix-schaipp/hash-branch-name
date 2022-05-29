import {
  validateEncoding,
  validateBranchName,
  validateOutputLength
} from './helper'

let consoleSpy = jest.spyOn(process.stdout, 'write')

beforeEach(() => {
  consoleSpy.mockClear()
})

describe('helpers', () => {
  describe('validateBranchName', () => {
    test('throw when branch is not defined', () => {
      const consoleSpy = jest.spyOn(process.stdout, 'write')

      validateBranchName(undefined)
      expect(consoleSpy).toBeCalledTimes(2)
      // we expect both error matches since the call on exit 1 is not captured
      expect(consoleSpy).toMatchInlineSnapshot(`
          [MockFunction] {
            "calls": Array [
              Array [
                "::error::Can't obtain the branch from the environment. Please try again.
          ",
              ],
              Array [
                "::error::Branch name is empty please provide a branch with at least one character. Please try again.
          ",
              ],
            ],
            "results": Array [
              Object {
                "type": "return",
                "value": true,
              },
              Object {
                "type": "return",
                "value": true,
              },
            ],
          }
        `)
    })
    test('throw when branch name is empty', () => {
      const consoleSpy = jest.spyOn(process.stdout, 'write')

      validateBranchName(undefined)
      expect(consoleSpy).toBeCalledTimes(2)
      // we expect both error matches since the call on exit 1 is not captured
      expect(consoleSpy).toMatchInlineSnapshot(`
        [MockFunction] {
          "calls": Array [
            Array [
              "::error::Can't obtain the branch from the environment. Please try again.
        ",
            ],
            Array [
              "::error::Branch name is empty please provide a branch with at least one character. Please try again.
        ",
            ],
          ],
          "results": Array [
            Object {
              "type": "return",
              "value": true,
            },
            Object {
              "type": "return",
              "value": true,
            },
          ],
        }
      `)
    })
  })
  describe('validateEncoding', () => {
    test('throw when encoding is not one hex or base 64', () => {
      const consoleSpy = jest.spyOn(process.stdout, 'write')
      validateEncoding('wax')

      expect(consoleSpy).toMatchInlineSnapshot(`
          [MockFunction] {
            "calls": Array [
              Array [
                "::error::The input encoding you entered is not valid. Please provide either \\"hex\\" or \\"base64\\"
          ",
              ],
            ],
            "results": Array [
              Object {
                "type": "return",
                "value": true,
              },
            ],
          }
        `)
    })
  })
  describe('validateOutputLength', () => {
    test('throw output length is 0', () => {
      const consoleSpy = jest.spyOn(process.stdout, 'write')
      validateOutputLength('0')

      expect(consoleSpy).toMatchInlineSnapshot(`
        [MockFunction] {
          "calls": Array [
            Array [
              "::error::The desired ouput length must be at least 1
        ",
            ],
          ],
          "results": Array [
            Object {
              "type": "return",
              "value": true,
            },
          ],
        }
      `)
    })
  })
})
