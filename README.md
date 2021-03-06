# Fast Food Fast
[![Build Status](https://travis-ci.org/shegsteham/Swift-Foods.svg?branch=develop)](https://travis-ci.org/shegsteham/Swift-Foods) ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

## Table of Contents

* [Project Overview](#Project-Overview)
* [Features](#Features)
* [Demo](#demo)
* [Built with](#built-with)
* [API End Points](#API-End-Points)
* [Known Issues](#Known-issues)
* [Installation](#Installation)
* [Contributing](#contributing)
* [License](#License)

## Project Overview
**Fast Food Fast** is a food delivery service app for restaurants. it was built from scratch using `Html` , `Css` , `JavaScript`, `React.js` and `Node.js`

## Features

- Users can create an account and log in,
- A user can add food to cart,
- A user can order for food,
- A user can see a history of ordered food,
- A user can write a review/ query
- The admin can add, edit or delete the fast-food items,
- The admin can see a list of fast-food items,
- The admin can See a list of orders,
- The admin can accept and decline orders
- The admin can mark orders as completed

## Demo
![demogif](https://user-images.githubusercontent.com/25525765/46247609-baa42400-c405-11e8-923f-3df54b87ca0e.gif)

## Built with
- `HTML 5`
- `CSS`
- `JavaScript`
- `Node.js`
- `Express framework`

##### Middle Wares
- `body-parser`
- `morgan`

## API End Points
- `GET /api/v1/orders`                -   Fetches all Available Orders in the Database
- `GET /api/v1/orders/< orderId >`    -   Fetches a particular order in the database
- `POST /api/v1/orders/< orderId >`   -   Saves an Order in the database
- `PUT /api/v1/orders/< orderId >`    -   Updates the status of an order in the database
- `DELETE /api/v1/orders/< orderId >` -   Deletes an order in the database

## Known issues
- None

## Installation

- $ git clone `https://github.com/shegsteham/Swift-Foods.git`
- $ cd Fast-Food-Fast
- $ npm i , to install dependencies
- $ npm start, to start the server
Once the server starts-up, you can query the api at `http://localhost:8080/api/v1` using the end points stated above

## Contributing
>  Feel free to 🍴 fork this repository

>  👯 Clone this repository to your local machine using `https://github.com/shegsteham/Swift-Foods.git`

> Make Contributions

> 🔃 Create a new pull request using `https://github.com/shegsteham/Swift-Foods/compare`

## License
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

- **[MIT license](https://shegsteham.github.io/Fast-Food-Fast/UI/LICENSE.md)**
- Copyright 2018 © <a href="https://swift-foods.herokuapp.com/" target="_blank">Fast-Food-Fast</a>
