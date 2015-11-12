Rails.application.routes.draw do


  ACCEPTS_JSON = lambda {|request|
    request.accepts.include?(:json)
  }

  get "/users/email" => "users#id"
  get "/items/:id/like" => "items#checkhasliked"

  scope constraints: ACCEPTS_JSON do
    resources :users, only: [:show] do
      #proper way to do what I was trying to do here: get "/users/:u_id/categories/:c_id " => "users#categoryitems"
      resources :categories, only: [:show], to:  'users#categoryitems'
    end

    resources :categories
    resources :items
  end



  get "/*path" => "app#main"

  post "/users" => "users#create"
  post "/items" => "items#create"

  post "/items/:id/like" => "items#like"

  post "/items/:id/unlike" => "items#unlike"

  post "/sessions" => "sessions#create"

  root 'app#main'
end
