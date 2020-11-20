# Bridge of Prosperity Backend

You can find the deployed project at https://bridges-a-api.herokuapp.com/

You can find a demo vidoe of codebase at https://www.youtube.com/watch?v=szCUG177M44&feature=youtu.be

## Contributors

|                                                            [David Ortega](https://github.com/dortega5185)                                                            |                                                       [Dominique Kitchenakow](https://github.com/domikitchen)                                                        |                                                         [Jonathan Thornton](https://github.com/Vippsi)                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars2.githubusercontent.com/u/16767688?s=400&u=0762bd7c50b27801ca11eda5c12bba0700b2abcd&v=4" width = "200" />](https://github.com/dortega5185) | [<img src="https://avatars2.githubusercontent.com/u/64430667?s=400&u=178a6af3c84b225d6b9ffe5df7735046b77334e5&v=4" width = "200" />](https://github.com/domikitchen) | [<img src="https://avatars2.githubusercontent.com/u/49133849?s=460&u=f5f7b8b7949d7aab509be5635c9895dbbf595949&v=4" width = "200" />](https://github.com/Vippsi) |
|                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/dortega5185)                                       |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/domikitchen)                                       |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Vippsi)                                       |
|                    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/david-m-ortega)                    |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/dominique-kitchenakow/)                |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jonathanthornton/)                |

<br>
<br>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

Trello Board: https://trello.com/b/5DFBGwvX/labs-28-bridges-to-prosperity-a

Back end: https://bridges-a-api.herokuapp.com/

Tech Stack: Node.js, Express, Knex, PostgreSql, Docker

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

```
PORT=
DS_API_URL=
DS_API_TOKEN=
DATABASE_URL=
OKTA_URL_ISSUER=
OKTA_CLIENT_ID=
```

# Installation Instructions

- run: `npm install` to download all dependencies.
- run: `cp .env.sample .env` and update the enviornment variables to match your local setup.
- run: `npm run knex migrate:latest` to create the starting schema.
- run: `npm run knex seed:run` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev enviornment.

<br/>

## API Documentation

- [Bridges Endpoints](#bridges-endpoints)
  - [GET](#get-bridges)
  - [GET by project code](#get-by-project-code)
  - [PUT by project code](#put-bridge-by-project-code)
- [Hospital Endpoints](#hospitals-endpoints)
  - [GET](#get-hospitals)
  - [GET by id](#get-hospitals-by-id)
    <br/>
    <br/>

## Bridges Endpoints

<br/>

### GET bridges

https://bridges-a-api.herokuapp.com/bridges

Returns:

```
{
        "country": null,
        "district": "Nyaruguru",
        "province": "Southern Province",
        "cell": null,
        "village": null,
        "name": "Bukinga",
        "stage": "Cancelled",
        "project_code": "1009317",
        "type": "Suspension Bridge",
        "span": null,
        "lat": -2.760833,
        "long": 29.488056,
        "individuals_directly_served": null,
        "form_requested_by": "aimablengirabakunzi taroworks",
        "rejected_comments": "Unavailable",
        "case_safe_id": "006f100000asFErAAM",
        "bridge_image": null,
        "land_ownership": "Unknown",
        "land_ownership_permission": "Unknown",
        "nearest_city": "Huye",
        "crossing_deaths": null,
        "crossing_injuries": null,
        "crossing_incident_desc": null,
        "social_info": null,
        "distance_from_hospital": 4.6322184
    },
    {
        "country": null,
        "district": "Nyamasheke",
        "province": "Western Province",
        "cell": null,
        "village": null,
        "name": "Kagarama",
        "stage": "Complete",
        "project_code": "1007325",
        "type": "Suspension Bridge",
        "span": "48",
        "lat": -2.322534,
        "long": 29.141945,
        "individuals_directly_served": "4000",
        "form_requested_by": "Stephanie May",
        "rejected_comments": "Unavailable",
        "case_safe_id": "006f100000a82QzAAI",
        "bridge_image": "https://flic.kr/s/aHskvedfPB",
        "land_ownership": "Unknown",
        "land_ownership_permission": "Unknown",
        "nearest_city": "Kibogora-Kabuga",
        "crossing_deaths": 2,
        "crossing_injuries": 15,
        "crossing_incident_desc": "the injuries and deaths are caused by trying fording the river on foot when the timber bridge is washed away and sometimes fall off from the timber bridge.",
        "social_info": "Most of the facilities locate at the left side of the river and this shows how the right side community is in the need of the safe bridge",
        "distance_from_hospital": 0.7188005
    }

    ETC
```

<br/>

### GET by project code

https://bridges-a-api.herokuapp.com/bridges/:project_code (Ex. 1007325)

Returns:

```
{
        "country": null,
        "district": "Nyamasheke",
        "province": "Western Province",
        "cell": null,
        "village": null,
        "name": "Kagarama",
        "stage": "Complete",
        "project_code": "1007325",
        "type": "Suspension Bridge",
        "span": "48",
        "lat": -2.322534,
        "long": 29.141945,
        "individuals_directly_served": "4000",
        "form_requested_by": "Stephanie May",
        "rejected_comments": "Unavailable",
        "case_safe_id": "006f100000a82QzAAI",
        "bridge_image": "https://flic.kr/s/aHskvedfPB",
        "land_ownership": "Unknown",
        "land_ownership_permission": "Unknown",
        "nearest_city": "Kibogora-Kabuga",
        "crossing_deaths": 2,
        "crossing_injuries": 15,
        "crossing_incident_desc": "the injuries and deaths are caused by trying fording the river on foot when the timber bridge is washed away and sometimes fall off from the timber bridge.",
        "social_info": "Most of the facilities locate at the left side of the river and this shows how the right side community is in the need of the safe bridge",
        "distance_from_hospital": 0.7188005
    }
```

<br/>

### PUT bridge by project code:

https://bridges-a-api.herokuapp.com/bridges/update/:project_code (Ex. 1007325)

Returns:

```
{
        "country": null,
        "district": "Nyamasheke",
        "province": "Western Province",
        "cell": null,
        "village": null,
        "name": "Kagarama",
        "stage": "Complete",
        "project_code": "1007325",
        "type": "Suspension Bridge",
        "span": "48",
        "lat": -2.322534,
        "long": 29.141945,
        "individuals_directly_served": "4000",
        "form_requested_by": "Stephanie May",
        "rejected_comments": "Unavailable",
        "case_safe_id": "006f100000a82QzAAI",
        "bridge_image": "https://flic.kr/s/aHskvedfPB",
        "land_ownership": "Unknown",
        "land_ownership_permission": "Unknown",
        "nearest_city": "Kibogora-Kabuga",
        "crossing_deaths": 2,
        "crossing_injuries": 15,
        "crossing_incident_desc": "the injuries and deaths are caused by trying fording the river on foot when the timber bridge is washed away and sometimes fall off from the timber bridge.",
        "social_info": "Most of the facilities locate at the left side of the river and this shows how the right side community is in the need of the safe bridge",
        "distance_from_hospital": 0.7188005
    }
```

Allows you to edit bridges information.
<br/>

## Hospitals Endpoints

<br/>

### GET hospitals

https://bridges-a-api.herokuapp.com/hospitals

Returns:

```
{
        "hospital_id": 1,
        "hospital_name": "Bushenge PH",
        "lat": -2.4451,
        "long": 28.9858,
        "hospital_image": "https://www.ktpress.rw/wp-content/uploads/2016/03/m_This-is-Bushenge-hospital-e1513791584336.jpg",
        "emergency_number": "785813726"
    },
    {
        "hospital_id": 2,
        "hospital_name": "Butaro DH",
        "lat": -1.4089,
        "long": 29.8366,
        "hospital_image": "https://inhabitat.com/wp-content/blogs.dir/1/files/2011/01/Butaro-Hospital-9.jpg",
        "emergency_number": "783849767"
    },
```

<br/>

### GET hospitals by id

https://bridges-a-api.herokuapp.com/hospitals/:hospital_id (Ex. 1)

Returns:

```
{
        "hospital_id": 1,
        "hospital_name": "Bushenge PH",
        "lat": -2.4451,
        "long": 28.9858,
        "hospital_image": "https://www.ktpress.rw/wp-content/uploads/2016/03/m_This-is-Bushenge-hospital-e1513791584336.jpg",
        "emergency_number": "785813726"
    },
```