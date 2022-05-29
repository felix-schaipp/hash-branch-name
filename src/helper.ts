import * as core from '@actions/core'

export const validateBranchName = (
  branchName: typeof process.env.GITHUB_HEAD_REF
): string => {
  if (!branchName) {
    core.setFailed(
      "Can't obtain the branch from the environment. Please try again."
    )
  }

  if (!branchName?.length) {
    core.setFailed(
      'Branch name is empty please provide a branch with at least one character. Please try again.'
    )
  }

  return branchName as string
}

type AllowedInputEncodings = 'hex' | 'base64' // these are coming from the BinaryToTextEncoding type
export const validateEncoding = (
  inputEncoding: string
): AllowedInputEncodings => {
  if (!['hex', 'base64'].includes(inputEncoding)) {
    core.setFailed(
      'The input encoding you entered is not valid. Please provide either "hex" or "base64"'
    )
  }
  return inputEncoding as AllowedInputEncodings
}

export const validateOutputLength = (
  inputOutputLength: string
): number | undefined => {
  if (inputOutputLength !== 'none') {
    let validatedInput
    validatedInput = parseInt(inputOutputLength)
    if (validatedInput === 0) {
      core.setFailed('The desired ouput length must be at least 1')
    }
    return validatedInput
  }
  return
}
