# Service - About
![Build Status](https://travis-ci.com/SDC-Builder/Tim-About-Service.svg?branch=main)


> Coursera About Service
> Contains a description of the course, along with some strategic goals and possible outcomes of taking the course.
>
> [View the sample on Coursera under "About this Course"](https://www.coursera.org/learn/machine-learning)

## Related Projects

  - https://github.com/SDC-Builder/Tim-Proxy-Server
  - https://github.com/SDC-Builder/Tim-About-Service

## Table of Contents

1. [Usage](#Usage)
1. [CRUD_API](#CRUD_API)
1. [API_Performance](#API_Performance)

## Usage

- Run `npm install` from the root directory to install dependencies
- From within the `database` directory, run `csvCreator.js` to generate 10 million records.
- Seed a Cassandra database with `database/cassandra/cassandraFiller.js`
- Run `npm build` to build the webpack bundle
- Run `npm server-dev` to start the server. Server runs on port 3002
- Run `npm run test` to run the jest and Enzyme tests, CI/CD also enabled

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


## API_Performance

### Local Testing

- Using K6 I tested a Cassandra DB against a Postgres DB in local development

Database | Requests | Total Requests | Latency (ms) | % Status Code 200
--- | --- | --- | --- | ---
Cassandra | 10,000 RPS | 600000 | 3420 | 87%
Postgres | 10,000 RPS | 60000 | 5026 | 79%
Cassandra | 1,000 RPS | 600000 | 52 | 99%
Postgres | 1,000 RPS | 60000 | 139 | 97%




### Deployment
- Deployed 3 cassandra nodes and 3 EC2 Micro instances behind an NGINX load balancer
- Sustained 1,500 RPS to random routes at back 10% of db, tested wtih Loader.io

<img width="1248" alt="Screen Shot 2021-06-16 at 10 47 43 PM" src="https://user-images.githubusercontent.com/71040019/123898948-1edbd580-d91b-11eb-9d1a-aac97251ba99.png">


### SSR Deployment and Performance

Google PageSpeed insight score of 99

<img width="660" alt="Screen Shot 2021-06-21 at 11 42 21 PM" src="https://user-images.githubusercontent.com/71040019/123899243-a6c1df80-d91b-11eb-8578-b66656dd44ca.png">

System Architecture
![Server Design (1)](https://user-images.githubusercontent.com/71040019/123899600-5eef8800-d91c-11eb-8650-daf6c353eedf.jpeg)