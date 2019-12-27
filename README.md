# ReactAWS

![https://github.com/mramshaw/ReactAWS/workflows/build_and_deploy/badge.svg](https://github.com/mramshaw/ReactAWS/workflows/build_and_deploy/badge.svg)

A quick test of using GitHub actions for a CI build and deploy of a React app to AWS S3

In this case: http://react-aws-github-integration-test.s3-website.ca-central-1.amazonaws.com

## Prerequisites

1. node.js installed
2. `npm` installed
3. `create-react-app` installed

## Create minimal react app

    $ npx create-react-app minimal-react

## Smoke test

    $ cd minimal-react
    $ npm start

This should make the app available at : http://localhost:3000/

## Build

    $ npm run build

## Upload to S3

1. Create an S3 bucket
2. Upload the contents of the `build` folder to this bucket
3. Enable `Static website hosting`
4. Make a note of the URL

In this case: http://react-aws-github-integration-test.s3-website.ca-central-1.amazonaws.com

## Reference

[GitHub actions](http://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)

## Alternatives

There are a number of different options:

* [AWS Amplify](http://aws.amazon.com/amplify/)
* [Buddy](http://buddy.works/)

## To Do

- [x] Add GitHub actions build badge
- [ ] Add linting
- [ ] Add some React tests (also to CI workflow)
- [ ] Configure AWS S3 and IAM for deploying react components after the build
- [x] [Cache dependencies](http://help.github.com/en/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)
- [ ] [Amazon Route 53](http://aws.amazon.com/route53/) for domain registration
- [ ] [Amazon CloudFront](http://aws.amazon.com/cloudfront/) for content distribution (CDN)
- [ ] [AWS Certificate Manager](http://aws.amazon.com/certificate-manager/) for certification
