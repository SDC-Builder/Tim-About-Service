# Service - About

[![Coverage Status](https://coveralls.io/repos/github/Ingenuity-rpt26/shane-service-about/badge.svg?branch=setup)](https://coveralls.io/github/Ingenuity-rpt26/shane-service-about?branch=setup)
[![Build Status](https://www.travis-ci.com/Ingenuity-rpt26/shane-service-about.svg?branch=main)](https://www.travis-ci.com/Ingenuity-rpt26/shane-service-about)

> Coursera About Service
> Contains a description of the course, along with some strategic goals and possible outcomes of taking the course.
>
> [View the sample on Coursera under "About this Course"](https://www.coursera.org/learn/machine-learning)

## Related Projects

  - https://github.com/Ingenuity-rpt26/shane-proxy
  - https://github.com/Ingenuity-rpt26/vinayService1
  - https://github.com/Ingenuity-rpt26/Grant--Service_1
  - https://github.com/Ingenuity-rpt26/jsmithService1

## Table of Contents

1. [Usage](#Usage)
1. [CRUD_API](#CRUD_API)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> From within the `db` directory, run `seedRunner.js` to seed the database and wait for it to complete.
> Run `npm build` to build the webpack bundle
> Run `npm server-dev` to start the server. Server runs on port 3002.

## CRUD_API
### Endpoints:
```sh
/api/about/:id
```

### GET:
Request
```sh
GET /api/about/:id
```
Response
```sh
Status: 200
Body:
{
    "course_id": Number,
    "description": String,
    "what_you_will_learn": [
        ArrayOfStrings
    ],
    "skills_you_will_gain": [
        ArrayOfStrings
    ],
    "recent_views": Number,
    "learner_career_outcomes": [
        {
            "icon": String,
            "pct": Number,
            "outcome": String
        },
    ],
    "metadata": [
        {
            "icon": String,
            "title": String,
            "subtitle": String
        },
    ]
}
```

### PUT:
Request
```sh
PUT /api/about/:id

Body:
{
    "course_id": Number,
    "description": String,
    "what_you_will_learn": [
        ArrayOfStrings
    ],
    "skills_you_will_gain": [
        ArrayOfStrings
    ],
    "recent_views": Number,
    "learner_career_outcomes": [
        {
            "icon": String,
            "pct": Number,
            "outcome": String
        },
    ],
    "metadata": [
        {
            "icon": String,
            "title": String,
            "subtitle": String
        },
    ]
}
```
Response
```sh
Status: 200
Body: Record Added
```


### POST:
Request
```sh
POST /api/about/:id

Body:
{
  "recent_views": Number
}
```

Response
```sh
Status: 200
Body: Record Updated
```

### DELETE:
Request
```sh
DELETE /api/about/:id
```

Response
```sh
Status: 200
Body: Record Deleted
```


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

