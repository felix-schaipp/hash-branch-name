[![license](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

[![market](https://img.shields.io/badge/Get_it-on_the_Marketplace-informational.svg)](https://github.com/marketplace/actions/hash-branch-name)

# General

Slim action to hash the branch name of your pull request.
You can for example use the branch name to spawn an environment for you branch with the hash as an identifier (e.g. `389WKUDHFNFE.testsystem.mydomain.com`)

## Inputs

### `branch-name`

**Required** The branch name from the github environment variables.

### `output-length`

**Optional** The desired ouput length of the generated hash. Must be at least 1. Default `"none"`.

### `encoding`

**Optional** Desired encoding choose between `"base64"` and `"hex"`. Default `"hex"`.

### `uppercase`

**Optional** If the output should be uppercased. Default `false`.

## Outputs

### `hashedBranchName`

Ouputs a hashed version of your branch name:
`"feature-1" --> 389WKUDHFNFE`

## Example usage

```
uses: felix-schaipp/hash-branch-name@main
with:
  branch-name: ${GITHUB_HEAD_REF}
  output-length: 12
  uppercase: true
```

```
uses: felix-schaipp/hash-branch-name@main
with:
  output-length: '12'
```

```
uses: felix-schaipp/hash-branch-name@main
with:
  encoding: 'base64'
```

```
uses: felix-schaipp/hash-branch-name@main
with:
uppercase: true

```
