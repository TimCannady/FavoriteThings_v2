## FavoriteThings
*Share the products you own and love - expensive and modest alike. At FavoriteThings it's all about curating and discovering tried-and-true products that we couldn't live without.*

<!--
Add a little more. Open the app store and see how they describes themselves. 
-->

## Personal & Technical Goals
General:

* build my first post-bootcamp app from home (eg: without the assistance of teachers, students etc)

* port an app from Sinatra to Rails

* use React in a solo project

* learn then use front-end routing + SPA with functioning URL history (forward, back, copy/paste'able links, etc)

* handle user auth on the front-end

* use React in place of jQuery for DOM manipulation

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

## Run Locally

* fork / clone
* bundle exec rake db:create db: migrate db:seed
* bundle exec rails s
* localhost:3000

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

7) The React components request data using ajax during various lifecycle stages, such as *componentDidMount*

## DB Schema

![Schema](http://i.imgur.com/OIyZD4Y.png)

## App Structure

* Rails routes any path to app#main

* app#main renders main.html.erb

* main.html.erb begins React-Router using <%= react_router 'MyRoutes', 'HistoryLocation' %>

* React-Router handles all front-end routing by rendering different components based on the path. 

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

## Architecture, Design Notes & Lessons Learned
High-level view of how to design pages. For example, should the AppComponent just render the router? With this, maybe each page would be a parent component, like UserPage which renders sub-components like Header, UserList, UserCard and Footer. Another approach could be to instead have the header and footer components buit into AppComponent and use some if/then logic to decide which header to render.

No justify-self for flexbox.

[React's](https://facebook.github.io/react/docs/two-way-binding-helpers.html) valueLink for two-way binding. [Tutorial](https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/).


Front-end sessions: learned sessions are a back-end thing. Consider localStorage, sessionStorage, cookies, tokens, or something more secure. 

Ajax + Lifecycle: how initial render fires before ajax completes. Can patch with a conditional "loading".

Ajax + Form Submit + ReactRouter: debugging context and this to get transitionTo('home)') / pushState to work after a successful login.	

That = This: passing a method from a parent to a child wouldn't work with this.myFucntion()

Querying data: should the Item_Cards be querying their liked state? Or should the list view (parent) be doing this? With the goal of when, and minimizing how many times, the server is hit.

Decision: I first had it so Item_Card knew how to decide if it had been liked by the current user or not. This felt right, but what was happening is Item_Index was hitting the DB for all items. It then created an Item_Card for each item. And when each Item_Card was mounted, it then had to hit the DB to get it's individual *like status*. I decided to pass this logic to the Item controller and added like_status to the Item model and gave it a default of false. When Item_Index hits Items#Index, I have it gather all the items. I then loop over each item and update it's like_status using a get_like_status helper. Now Item_Index receives all the info it needs - and in one fell swoop. It can then pass the data as props. Speed!

Querying data: how to display the correct like/unlike for User_Show. Sometimes User_Show is for the logged_in user (looking at your own show), and sometimes you're viewing someone else's. And someone else's is showing their own Item_Cards, but the like_status needs to be fore the logged_in user!

TDD: weird bug when switching from using the model's id as a unique key, to using an iterator as the key. The latter is optimal, but it indroduced really strange bugs that took a while to de-bug. TDD would have caught this sooner.

Changing CSS classes with React (instead of jQuery). Created a boolean state to toggle the classname via onMouseOver and onMouseOut.
<!--

TO-DO

Header - categories

Show page from User and Category: only display Item Cards when, and from, the category that the user clicks on from the header

CRUD item - link -> popup form?

jQuery header

Host on Heroku / AWS

--> 


