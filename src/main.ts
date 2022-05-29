import * as core from '@actions/core'
const {createHash} = await import('node:crypto')
import {
  validateBranchName,
  validateEncoding,
  validateOutputLength
} from './helper'

async function run(): Promise<void> {
  try {
    core.debug(process.env.GITHUB_HEAD_REF || 'No head ref available')
    core.debug(process.env.GITHUB_REF || 'No ref available')
    core.debug(process.env.GITHUB_REF_NAME || 'no ref name available')

    const branchName = validateBranchName(process.env.GITHUB_HEAD_REF)
    const desiredOutputLength = validateOutputLength(
      core.getInput('output-length')
    )
    const encoding = validateEncoding(core.getInput('encoding'))

    let hashedBranchName = createHash('sha512')
      .update(branchName as string)
      .digest(encoding)

    if (desiredOutputLength) {
      if (typeof hashedBranchName === 'string' && hashedBranchName.length) {
        hashedBranchName = hashedBranchName.slice(0, desiredOutputLength)
      } else {
        core.setFailed(
          "Couldn't create a hash from your branch name. Please try a different branch."
        )
      }
    }
    core.setOutput('hashedBranchName', hashedBranchName)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
