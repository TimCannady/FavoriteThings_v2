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

  post "/sessions" => "sessions#create"

  root 'app#main'
end
