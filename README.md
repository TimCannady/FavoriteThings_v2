## Purpose & Goals
general: 
* port an app from Sinatra to Rails

* incorporate React (using react-rails for the first time)

* incorporate front-end routing / SPA (using react-router-rails for the first time)

stretch:

* use ES6

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

## Architecture & Design Notes

High-level view of how to design pages. For example, should the AppComponent just render the router? With this, maybe each page would be a parent component, like UserPage which renders sub-components like Header, UserList, UserCard and Footer. Another approach could be to instead have the header and footer components buit into AppComponent and use some if/then logic to decide which header to render.