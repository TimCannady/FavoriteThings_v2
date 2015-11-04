## FavoriteThings
*Share the products you love - expensive and modest alike. At FavoriteThings it's all about sharing the stuff you can't live without.*

## Purpose & Goals
general: 
* port an app from Sinatra to Rails

* incorporate React (using react-rails for the first time)

* incorporate front-end routing / SPA (using react-router-rails for the first time)

stretch:

* use ES6

## Demo
Heroko link TBD
<!-- 
Feel free to create a new account, including a photo URL.

Navigate by using the menu in the upper-right, and by also clicking the large photos in the header.

Your favorite items will be empty from the start. You can create a new one that doesn't already exist in the database. You can also add them to your collection by "liking" them from another user's page or from the Categories sections.

Here's creds for a fake, seeded profile:

username: es@gmail.com

password: test -->

## Technologies

Frontend:
* HTML + CSS
* React.js (gems incl: [react-rails](https://github.com/reactjs/react-rails), [react-router](https://github.com/rackt/react-router), [react-router-rails](https://github.com/mariopeixoto/react-router-rails))
* jQuery

Backend:
* Ruby/Rails
* Postgresql

## How it Works

1) Ruby uses five models. *Italics* are join tables:
  * User
  * *Like*
  * Item
  * *Label*
  * Category

2) Data stored with Postgres, served via Rails endpoints

3) jQuery for async loading

4) React-Rails gem for some helpers

5) React-Router for front-end routing and browser history

6) React-Router-Rails to handle data between the Rails enpoints and the React-Router

## Models
* User
* Like
* Item
* Label
* Category

## DB Schema

## App Structure

## Wireframe & Component Structure

![Login/Signup](http://i.imgur.com/WfZcQS0.png)
---
---
![Home](http://i.imgur.com/0clU8ZZ.png)
---
---
![User](http://i.imgur.com/i5778Ox.png)
---
---
![Category](http://i.imgur.com/pMWO3Ep.png)
---
---
![Item](http://i.imgur.com/L80QkJy.png)

## Invitation

Feel free to clone, tinker, refactor, break and rebuild, submit pull requests, issues or feature ideas. Get in touch [on Twitter](https://twitter.com/TCannadySF)!

To setup locally:

* fork / clone
* bundle exec rake db:create db: migrate db:seed
* rails s
* localhost:3000

## Architecture & Design Notes

High-level view of how to design pages. For example, should the AppComponent just render the router? With this, maybe each page would be a parent component, like UserPage which renders sub-components like Header, UserList, UserCard and Footer. Another approach could be to instead have the header and footer components buit into AppComponent and use some if/then logic to decide which header to render.