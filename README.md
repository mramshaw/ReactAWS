# ReactAWS

![https://github.com/mramshaw/ReactAWS/workflows/CI/badge.svg](https://github.com/mramshaw/ReactAWS/workflows/CI/badge.svg)

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

[GitHub actions](http://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)

[Using Node.js with GitHub Actions](http://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)

[Cacheing dependencies](http://help.github.com/en/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)

[Cacheing of dependencies removed as it did not seem to be working.]

## Alternatives

There are a number of different options, both for CI/CD and for deployment targets.

#### CI/CD

* [AWS Amplify](http://aws.amazon.com/amplify/)
* [Buddy](http://buddy.works/)

#### Deployment

Depending upon your deployment requirements, any of the following may be an option:

* [Bitbucket Cloud](http://confluence.atlassian.com/bitbucket/publishing-a-website-on-bitbucket-cloud-221449776.html)
* [Firebase](http://firebase.google.com/)
* [GitHub Pages](http://pages.github.com/)
* [GitLab Pages](http://docs.gitlab.com/ee/user/project/pages/)
* [Heroku](http://www.heroku.com/)
* [Netlify](http://www.netlify.com/)
* [Render](http://render.com/)
* [Stackbit](http://www.stackbit.com/)
* [Surge](http://surge.sh/)
* [Zeit](http://zeit.co/)

[They all seem to offer various free options. Most will require installing a CLI tool.]

__Bitbucket Cloud__ is a Bitbucket option (Bitbucket is one of the Atlassian companies).

Like both GitHub and GitLab, Bitbucket has a deployment option.

__Firebase__ was acquired by Google in 2014.

Features [React Firebase](http://react-firebase-js.com/).

> Firebase helps mobile and web app teams succeed

From: http://firebase.google.com/

Definitely worth a look for ___Mobile___, known for authentication and Crashlytics.

__GitHub Pages__ are pretty straightforward.

__GitLab Pages__ seem to be pretty much the same thing as __GitHub Pages__, but for ___GitLab___ of course.

__Heroku__ is owned by Salesforce.com and offers a number of attractive services.

It uses containers, which are referred to as `dynos`.

For more on `dynos`: http://www.heroku.com/dynos

Deploying to Heroku can be a little bit complicated.

Check out this app on Heroku: https://react-aws.herokuapp.com/

__Netlify__ is very easy to use, so a pretty good option.

Check out this app on Netlify: https://compassionate-sinoussi-40e0e0.netlify.com/

Of course, Netlify are known for defining [Jamstack](http://en.wikipedia.org/wiki/Netlify#Jamstack) (formerly JAMstack).

Mathias Biilmann (CEO & Co-founder of Netlify):

> A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup

[The JAM in Jamstack stands for Javascript, APIs, and Markup. So ... somewhat more than a __static__ website.]

>  It’s a new way of building websites and apps that delivers better performance, higher security,
> lower cost of scaling, and a better developer experience.

From: http://jamstack.org/

Not surprisingly, Netlify is really optimal for __Jamstack__ deployments.

Check out Jamstack examples here: http://jamstack.org/examples/

[Incidentally, Jamstack sites are considered by AWS to be
[well-architected](http://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/).]

To achieve optimal efficiency and cost reduction, Jamstack sites require a __CDN__.

Jamstack sites are __serverless__:

> The thing that they all have in common is that they don’t depend on a web server.

From: http://jamstack.org/

While Jamstack sites are effectively serverless, Jamstack itself is not considered to be __serverless__.

__Render__ seems to be an interesting alternative to __Heroku__, probably worth investigating.

Note that Render can integrate with either a GitHub repo or a GitLab repo.

These appear to be the only deployment options available (for now?).

Apart from the GitHub / GitLab root repo proviso, seems like a nice service.

Check out this [Vue.js](http://vuejs.org/) scaffold that I deployed to Render: http://vuerender.onrender.com

__Stackbit__ describe themselves as:

> THE BEST WAY TO JAMSTACK

[I am including them here for completeness, but they are probably only for __Jamstack__ deployments.]

__Surge__ appears to be for __static__ websites only, so perhaps not suitable for React.

Surge describes themselves as:

> Static web publishing for Front-End Developers

From: http://surge.sh/

[Note the __Static__ part.]

And:

> Surge has been built from the ground up for [native web application](https://blog.andyet.com/2015/01/22/native-web-apps)
> publishing and is committed to being the best way for Front-End Developers to put HTML5 applications into production.

From: http://surge.sh/help/getting-started-with-surge

__Zeit__

[Sometimes referred as simply __Now__.]

> ZEIT Now is a cloud platform for static frontends and serverless functions.
> It enables developers to host websites and web applications that deploy
> instantly, scale automatically, and require no supervision.

From: http://github.com/zeit/now/tree/master/examples

## To Do

- [x] Add GitHub actions build badge
- [ ] Add linting
- [x] Add [prettier](htts://prettier.io/) code formatting
- [x] Add some routes so we can try out routing on AWS S3
- [ ] Add logging-in processing (currently, all `submit` buttons do not do anything)
- [ ] Add some React tests (also to CI workflow)
- [x] [Twelve-factor](http://12factor.net/) our build and CI
- [x] Configure AWS IAM for deploying react components to S3 after the build
- [x] Research Cacheing dependencies
- [ ] [Amazon Route 53](http://aws.amazon.com/route53/) for domain registration
- [ ] [Amazon CloudFront](http://aws.amazon.com/cloudfront/) for content distribution (CDN)
- [ ] [AWS Certificate Manager](http://aws.amazon.com/certificate-manager/) for certification
- [x] Add more notes on cloud deployment options
- [x] Run 'npm audit fix' to fix some issues
