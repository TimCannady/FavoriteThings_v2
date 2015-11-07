Rails.application.routes.draw do


  ACCEPTS_JSON = lambda {|request|
    request.accepts.include?(:json)
  }

  get "/users/email" => "users#id"

  scope constraints: ACCEPTS_JSON do
    resources :users
    resources :categories
    resources :items
  end

  get "/*path" => "app#main"

  post "/users" => "users#create"

  post "/items/:id/like" => "items#like"
  post "/items/:id/unlike" => "items#unlike"
  post "/items/:id/checkhasliked" => "items#check_has_liked"

  post "/sessions" => "sessions#create"

  root 'app#main'
end
