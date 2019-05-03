# NanoTwitterTweetService
* Course project for Cosi105b - Software Engineering for Scalability.
* This repo is for the tweet service of the NanoTwitter application.
* This repo is not complete yet, but the methods that are included in tweet_helper.rb is workable.
* This service communicate with the main server through RabbitMQ. However, current version can only run on thin rather than puma.

## Table of Contents
- [NanoTwitter](#nanotwitter)
  - [Table of Contents](#table-of-contents)
  - [Team Member](#team-member)
  - [To Build and Run](#to-build-and-run)
    - [Build](#build)
    - [Run](#run)
    - [Test](#test)
  - [Deployment:](#deployment)
  - [Documentations:](#documentations)

## Team Member
* Fengzhencheng Zeng fzeng@brandeis.edu
* Ziyu Liu ziyuliu@brandeis.edu
* Yirun Zhou yirunzhou@brandeis.edu

## To Build and Run
Ruby, bundler, postgresql is required to be installed first.

### Build
```
bundle install
rake db:create db:migrate
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
