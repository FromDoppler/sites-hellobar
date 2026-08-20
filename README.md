# Sites HelloBar

## What is this about?

It is for the "hello bar" or "sticky bar" you use on all fromdoppler sites.

![alt text](https://i.imgur.com/q4UMwyc.png)

## Usage

1. After cloning the repository, we must run the "yarn" command in the console to install the necessary dependencies.
1. Once the previous step has been executed, you are ready to execute the "yarn run dev" command to run the code locally and see the hello bar.

### Branch usage for continuous deployment

1.  When merging to the main branch, https://cdn.fromdoppler.com/doppler-sites-hellobar/asset-manifest-main.json is generated.
1.  When a PR is done or commits are pushed, https://cdn.fromdoppler.com/doppler-sites-hellobar/asset-manifest-pr-{PRNUMBER}.json is generated.
1.  When you push to the INT branch, https://cdn.fromdoppler.com/doppler-sites-hellobar/asset-manifest-INT.json is generated.
1.  When a tag with version format is pushed, for example v1.2.3, several equal manifests are generated:
    1.  https://cdn.fromdoppler.com/doppler-sites-hellobar/asset-manifest-v1.json
    1.  https://cdn.fromdoppler.com/doppler-sites-hellobar/asset-manifest-v1.2.json
    1.  https://cdn.fromdoppler.com/doppler-sites-hellobar/asset-manifest-v1.2.3.json

## CDN cleanup during deployment

The Jenkins publishing pipeline runs a CDN cleanup after uploading mutable packages such as `main`,
`INT`, and pull request builds. If the pipeline needs to run faster or the cleanup has to be skipped
temporarily, pass `--skip-clean` to `build-n-publish.sh`.

Example:

```sh
sh build-n-publish.sh \
    --package=${PKG_NAME} \
    --commit=${GIT_COMMIT} \
    --name=main \
    --skip-clean
```
