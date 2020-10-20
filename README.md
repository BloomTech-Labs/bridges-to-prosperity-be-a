# Bridge of Prosperity Backend

You can find the deployed project at https://labs27-a-bridges-api.herokuapp.com/

You can find a demo vidoe of codebase at PLACEHOLDER

(Previous cohort: https://www.youtube.com/watch?v=PARd7apawNM&feature=youtu.be)

## Contributors

|                                                            [Mark Loegel](https://github.com/meloegel)                                                            |                                        [Lisa Maskovich](https://github.com/LeesahMasko)                                         |                                                           [Anthony Johnson](https://github.com/anthonyj713)                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://ca.slack-edge.com/ESZCHB482-W012H6TMD9T-e9dfc68e55cc-512" width = "200" />](https://github.com/meloegel) |   [<img src="https://ca.slack-edge.com/ESZCHB482-W0138D971RN-6a25607f711a-512" width = "200" />](https://github.com/LeesahMasko)   | [<img src="https://ca.slack-edge.com/ESZCHB482-W012JHXB19Q-054009bb3aa9-512" width = "200" />](https://github.com/anthonyj713) |
|                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/meloegel)                                       |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/LeesahMasko)                    |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/anthonyj713)                                       |
|                   [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mark-loegel/)                   | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/lisamjmaskovich/) |                    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/anthonyjohnson89/)                     |

<br>
<br>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

Trello Board: https://trello.com/b/vvO28bPw/labs-27-bridges-to-prosperity-team-a

Back end: https://labs27-a-bridges-api.herokuapp.com/

Tech Stack: Node.js, Express, Knex, PostgreSql, Docker

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

```
DS_API_URL=
DS_API_TOKEN=
DATABASE_URL=
OKTA_URL_ISSUER=
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

<br/>

### Bridges Endpoints

<br/>
GET REQUEST TO:

https://labs27-a-bridges-api.herokuapp.com/data/bridges

Returns:

```
{
        "id": 1,
        "country": "Rwanda",
        "district_id": 37,
        "province": "Western Province",
        "district": "Nyamasheke",
        "sector": "Kanjongo",
        "sector_id": "3706",
        "cell": "Kibogora",
        "cell_id": "370601",
        "village": "Kagarama",
        "village_id": "37060104",
        "name": "Kagarama",
        "stage": "Complete",
        "sub_stage": "In Service",
        "project_code": "1007325",
        "bridge_type": "Suspension",
        "span": 48,
        "lat": -2.322534,
        "long": 29.141945,
        "individuals_directly_served": "0",
        "communities_served": [],
        "form_name": "Project Assessment - 2017.7.12",
        "case_safeid_form": "a1if1000002NJhdAAG",
        "bridge_opportunity_id": "006f100000a82Qz",
        "bridge_image": "https://farm5.staticflickr.com/4829/44946210045_874f324731_k.jpg"
    },
    {
        "id": 2,
        "country": "Rwanda",
        "district_id": 57,
        "province": "Eastern Province",
        "district": "Bugesera",
        "sector": "Juru",
        "sector_id": "5702",
        "cell": "Kabukuba",
        "cell_id": "570202",
        "village": "Gikana",
        "village_id": "57020201",
        "name": "Gikana",
        "stage": "Rejected",
        "sub_stage": "Technical",
        "project_code": "1007327",
        "bridge_type": "?",
        "span": 140,
        "lat": -2.072628,
        "long": 30.204382,
        "individuals_directly_served": "0",
        "communities_served": [],
        "form_name": "Project Assessment - 2018.11.30",
        "case_safeid_form": "a1if1000002hTA9AAM",
        "bridge_opportunity_id": "006f100000a86Cp",
        "bridge_image": null
    }

    ETC
```

<br/>

GET REQUEST TO:

https://labs27-a-bridges-api.herokuapp.com/bridges/:id (Ex. 13)

Returns:

```
{
        "id": 13,
        "country": "Rwanda",
        "district_id": 42,
        "province": "Northern Province",
        "district": "Gakenke",
        "sector": "Mataba-Minazi",
        "sector_id": "4210",
        "cell": "Gitwa-Gitwa-Nyundo-Mwanza",
        "cell_id": "421003",
        "village": "Mwanza",
        "village_id": "42100307",
        "name": "Gitwa",
        "stage": "Identified",
        "sub_stage": "Identified in Needs Assessment",
        "project_code": "1007340",
        "bridge_type": "Suspended",
        "span": 50,
        "lat": -1.738888,
        "long": 29.755278,
        "individuals_directly_served": "0",
        "communities_served": [
            "Gitwa",
            "Muhororo",
            "Mwanza"
        ],
        "form_name": "Project Assessment - 2018.8.17",
        "case_safeid_form": "a1if1000002Vi9TAAS",
        "bridge_opportunity_id": "006f100000a86D2",
        "bridge_image": null
    },
```

<br/>

PUT REQUEST TO:

https://labs27-a-bridges-api.herokuapp.com/bridges/:id (Ex. 13)

Returns:

```
{
        "id": 13,
        "country": "Rwanda",
        "district_id": 42,
        "province": "Northern Province",
        "district": "Gakenke",
        "sector": "Mataba-Minazi",
        "sector_id": "4210",
        "cell": "Gitwa-Gitwa-Nyundo-Mwanza",
        "cell_id": "421003",
        "village": "Mwanza",
        "village_id": "42100307",
        "name": "Gitwa",
        "stage": "Identified",
        "sub_stage": "Identified in Needs Assessment",
        "project_code": "1007340",
        "bridge_type": "Suspended",
        "span": 50,
        "lat": -1.738888,
        "long": 29.755278,
        "individuals_directly_served": "0",
        "communities_served": [
            "Gitwa",
            "Muhororo",
            "Mwanza"
        ],
        "form_name": "Project Assessment - 2018.8.17",
        "case_safeid_form": "a1if1000002Vi9TAAS",
        "bridge_opportunity_id": "006f100000a86D2",
        "bridge_image": null
    },
```

Allows you to edit bridges information.
<br/>
