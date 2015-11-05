## FavoriteThings
*Share the products you own and love - expensive and modest alike. At FavoriteThings it's all about curating and discovering tried-and-true products that we couldn't live without.*

<!--
Add a little more. Open the app store and see how they describes themselves. 
-->

## Personal Goals
General: 
* port an app from Sinatra to Rails

* use React in a solo project

* use front-end routing / SPA in a solo project 

* use React-based user auth

* experiment with *display: flexbox* in place of media queries

Stretch:

* incorporate ES6

* use the Imgur API or AWS/S3 for image hosting

* OAuth

## Demo
Heroku link TBD
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
* React.js 
* jQuery

Backend:
* Ruby/Rails
* Postgresql

Ruby Gems:
* [bcrypt-ruby](https://github.com/codahale/bcrypt-ruby)
* [react-rails](https://github.com/reactjs/react-rails)
* [react-router](https://github.com/rackt/react-router)
* [react-router-rails](https://github.com/mariopeixoto/react-router-rails)

## How it Works
1) Ruby uses five models. *Italics* are join tables:
  * User
  * *Like*
  * Item
  * *Label*
  * Category

2) Data stored with Postgres, served via Rails endpoints

3) jQuery for async loading

4) React-Rails gem provides helpers to connect React and Rails

5) React-Router gem for front-end routing, pushState browser history

6) React-Router-Rails gem to handle data between the Rails enpoints and the React-Router

## DB Schema

![Schema](http://i.imgur.com/OIyZD4Y.png)

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

## Project Management

Tabs:

![Project Manager](http://i.imgur.com/jlZrg41.png)

Use cases:
![Use Cases](http://i.imgur.com/jbIC3zs.png)

Road map:
![Road Map](http://i.imgur.com/us2fDOB.png)
![Road Map](http://i.imgur.com/NyyKoWV.png)

## Invitation
Feel free to clone, tinker, refactor, break and rebuild, submit pull requests, issues or feature ideas. Get in touch [on Twitter](https://twitter.com/TCannadySF)!

To setup locally:

* fork / clone
* bundle exec rake db:create db: migrate db:seed
* rails s
* localhost:3000

## Architecture, Design Notes & Lessons Learned
High-level view of how to design pages. For example, should the AppComponent just render the router? With this, maybe each page would be a parent component, like UserPage which renders sub-components like Header, UserList, UserCard and Footer. Another approach could be to instead have the header and footer components buit into AppComponent and use some if/then logic to decide which header to render.

No justify-self for flexbox.

[React's](https://facebook.github.io/react/docs/two-way-binding-helpers.html) valueLink for two-way binding. [Tutorial](https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/).


Front-end sessions. Session is a back-end thing. Consider localStorage, sessionStorage, cookies, tokens, or something more secure. 

Ajax + lifecycle! How initial render fires before ajax completes. Can patch with a conditional "loading".

Ajax + From Submit + ReactRouter: debugging context and this to get transitionTo('home)') / pushState to work after a successful login.	
<!--

TO-DO

Signup - CRUD user

CRUD item (attribute to the logged-in user)

Like/Unlike (conditional based on the logged-in user)

jQuery header



--> 


