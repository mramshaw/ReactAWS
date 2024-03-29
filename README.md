# ReactAWS

[![https://github.com/mramshaw/ReactAWS/workflows/CI/badge.svg](https://github.com/mramshaw/ReactAWS/workflows/CI/badge.svg)](https://github.com/mramshaw/ReactAWS/actions)

A quick test of using GitHub actions for a CI build and deploy of a React scaffold to AWS S3

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

## Routing

In order to test AWS S3 website hosting, we will create some stub pages.

1. Login (Home) page
2. Sign Up page 
3. Forgot Password page
4. Does not exist (404) page

Test the 404 page: http://react-aws-github-integration-test.s3-website.ca-central-1.amazonaws.com/does-not-exist

## Reference

Some useful references follow.

#### Create React App

In order to properly [twelve-factor](http://12factor.net/) our app, we will need to use environment variables.

[Adding Custom Environment Variables](http://create-react-app.dev/docs/adding-custom-environment-variables/)

__TL;DR__ Define application variables in a __.env__ file (which may be checked-in) and environment variables
in __.env.local__ (which can probably also be checked-in) as well as in __.env.staging__ or __.env.prod__ (which
should definitely NOT be checked-in). The normal practice is to define production variables in __.env__ but the
React.js workflow seems to be slightly different.

#### GitHub Actions

These seem to be the new kid on the block in terms of Jenkins/CircleCI/TravisCI/GitLab CI integrations.

But good examples (and even documentation) seem to be scarce. ___GitLab___ has a good linter for their YAML files!

[For an example of using GitHub Actions with __vue.js__, check out my [VueRender](http://github.com/mramshaw/VueRender) repo.]

[GitHub actions](http://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)

[Using Node.js with GitHub Actions](http://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)

[Caching dependencies](http://help.github.com/en/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)

[Caching of dependencies removed as it did not seem to be working.]

## Alternatives

There are a number of different options, both for CI/CD and for deployment targets.

#### CI/CD

* [AWS Amplify](http://aws.amazon.com/amplify/)
* [Buddy](http://buddy.works/)

#### Deployment

There are a number of deployment options (in addition to Amazon S3).

Check out this scaffold deployed on Netlify: https://compassionate-sinoussi-40e0e0.netlify.com/

For an extensive list of cloud deployment options (including some [Vue.js](http://vuejs.org/) deployments)
please check out my [Meatballs](http://github.com/mramshaw/Meatballs) repo.

## To Do

- [x] Add GitHub actions build badge
- [ ] Add linting
- [x] Add [prettier](htts://prettier.io/) code formatting
- [x] Add some routes so we can try out routing on AWS S3
- [ ] Add logging-in processing (currently, all `submit` buttons do not do anything)
- [ ] Add some React tests (also to CI workflow)
- [x] [Twelve-factor](http://12factor.net/) our build and CI
- [x] Configure AWS IAM for deploying react components to S3 after the build
- [x] Research Caching dependencies
- [ ] [Amazon Route 53](http://aws.amazon.com/route53/) for domain registration
- [ ] [Amazon CloudFront](http://aws.amazon.com/cloudfront/) for content distribution (CDN)
- [ ] [AWS Certificate Manager](http://aws.amazon.com/certificate-manager/) for certification
- [x] Add more notes on cloud deployment options
- [x] Move cloud deployment options to a new [Meatballs](http://github.com/mramshaw/Meatballs) repo
- [x] Remove link to deleted Heroku deployment (Heroku is no longer free)
- [x] Run 'npm audit fix' to fix some issues
