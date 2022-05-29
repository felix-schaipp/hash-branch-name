[![license](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

<!-- [![market](https://img.shields.io/badge/Get_it-on_the_Marketplace-informational.svg)](https://github.com/marketplace/actions/add-release-channel) -->

# General

Slim action to hash the branch name of your pull request.

## Inputs

### `branch-name`

**Required** The branch name from the github environment variables. Default `"GITHUB_HEAD_REF"`.

### `output-length`

**Optional** The desired ouput length of the generated hash. Must be at least 1. Default `"none"`.

### `encoding`

**Optional** Desired encoding choose between `"base64"` and `"hex"`. Default `"hex"`.

## Outputs

### `hashedBranchName`

Ouputs a hashed version of your branch name:
`"feature-1" --> 389WKUDHFNFe`

## Example usage

```
uses: felix-schaipp/hash-branch-name@main
with:
  branch-name: GITHUB_HEAD_REF
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
