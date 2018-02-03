![MobX React logo](https://cdn-images-1.medium.com/max/897/1*fVyLVvnbisXOgh1v3EhTrg.png)

# MobX React

- Front End with React, MobX and mobx-state-tree

### Back End
- Rest API with Node Express and MongoDB
- Cloud with Heroku and mLab

| Api | GitHub |
|--|--|
| https://rest-api-node.herokuapp.com | https://github.com/renanlopescoder/rest-api-node |

### Install and Running

1. Download or clone the project
2. Access the project folder `cd mobx-react`
3. `npm install`
4. `npm start`

#### Code Style Pattern
Airbnb React: https://github.com/airbnb/javascript/tree/master/react

#### Project Architecture
##### MobX
- Stores
-- actions - Actions manipulate shared state and connect api and models of the store
-- views - Views manipulate only view data
-- models - Models require data type format

##### Requests
- requests
-- Http request to handle with AJAX requests

##### Shared
- shared
-- Default styles shared of the project

##### Helpers
- helpers
-- Shared logics to use in the project
