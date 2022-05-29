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

    const branchName = validateBranchName(core.getInput('branch-name'))
    const desiredOutputLength = validateOutputLength(
      core.getInput('output-length')
    )
    const encoding = validateEncoding(core.getInput('encoding'))
    const isUppercase = Boolean(core.getInput('uppercase'))

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
        return
      }
    }
    if (isUppercase) {
      core.setOutput('hashedBranchName', hashedBranchName.toUpperCase())
      return
    }
    core.setOutput('hashedBranchName', hashedBranchName)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
