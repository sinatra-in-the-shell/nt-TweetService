# NanoTwitter
* Course project for Cosi105b - Software Engineering for Scalability.
* Implement an SNS website including most basic funtions of Twitter. Use [Sinatra](http://sinatrarb.com/) + [React](https://reactjs.org/) as primary tech tools.

## Table of Contents
- [NanoTwitter](#nanotwitter)
  - [Table of Contents](#table-of-contents)
  - [Team Member](#team-member)
  - [To Build and Run](#to-build-and-run)
    - [Build](#build)
    - [Run](#run)
  - [Deployment:](#deployment)
  - [Documentations:](#documentations)
  - [Version Changelogs](#version-changelogs)
    - [NT0.1](#nt01)
    - [NT0.2](#nt02)
    - [NT0.3](#nt03)
    - [NT0.4](#nt04)
    - [NT0.5](#nt05)

## Team Member
* Fengzhencheng Zeng fzeng@brandeis.edu
* Ziyu Liu ziyuliu@brandeis.edu
* Yirun Zhou yirunzhou@brandeis.edu

## To Build and Run
Ruby, bundler, npm/yarn, postgresql is required to be installed first.

### Build
```
bundle install
rake db:create db:migrate
cd client
npm install
npm run build
```
### Run
```
ruby app.rb
```

### Test
```
rake test
```

## Deployment:
The project is hooked to Codeship and deployed on [Heroku](https://nano-twitter-sits.herokuapp.com/).

## Documentations:
* [Route](/doc/ROUTE.md)
* [Schema](/doc/SCHEMADB.md)
* [API 1.0](https://app.swaggerhub.com/apis-docs/sinatra-in-the-shell/nano-twitter-api/1.0.0)
* [loadio experiments](/doc/LOAD_EXPERIMENT.md)

## Version Changelogs

### NT0.1
* Created github repo.
* Designed basic UI, routes and schemadb.

### NT0.2
* Created all tables and migrations.
* Created skeleton sinatra app and React app.
* Completed Register/Login pages.
* Implemented authentication mechanism.
* Heroko deployment experiment succeeded.

### NT0.3
* Set up Codeship auto testing and deployment (onto Heroku).
* Designed [NanoTwitter API 1.0](https://app.swaggerhub.com/apis-docs/sinatra-in-the-shell/nano-twitter-api/1.0.0).(**Not implemented yet.**)
* Added unittests on the server side of register/login/authenticate.
* Cookie-based authentication.
* Implemented [test interface](http://cosi105b.s3-website-us-west-2.amazonaws.com/content/topics/nt/01_nt_functionality.md/).


### NT0.4
* Fix some bugs in [test interface] - Fengzhencheng Zeng, Yirun Zhou, Ziyu Liu
* Added loader.io verification and tried some test in loader.io - Yirun Zhou
* Separated api(twitter_api.rb, test_api.rb) from app.rb - Fengzhencheng Zeng

### NT0.5
* Implemented [NanoTwitter API 1.0](https://app.swaggerhub.com/apis-docs/sinatra-in-the-shell/nano-twitter-api/1.0.0). - Fengzhencheng Zeng, Yirun Zhou, Ziyu Liu
* Start using new relic to collect internal performance data. - Yirun Zhou, Ziyu Liu
* Created basic load experiments. Created a [doc file](/doc/LOAD_EXPERIMENT.md) to describe each test. - Ziyu Liu, Yirun Zhou
* Switched to using scope to handle queries with options. See in [user.rb](models/user.rb) and [tweet.rb](models/tweet.rb). - Fengzhencheng Zeng, Ziyu Liu
* Switched web server from `WebBrick` to `thin`. Observed a significant performance improvement. - Fengzhencheng Zeng, Yirun Zhou

### NT0.6
* Updated [NanoTwitter API 1.0](https://app.swaggerhub.com/apis-docs/sinatra-in-the-shell/nano-twitter-api/1.0.0). - Fengzhencheng Zeng, Yirun Zhou, Ziyu Liu
* Implemented user interface of timeline and fix login/logout session issue - Fengzhengcheng Zeng
* Added Redis caching for users' timeline and followers to speed up timeline api - Yirun Zhou
