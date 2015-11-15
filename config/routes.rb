Rails.application.routes.draw do


  ACCEPTS_JSON = lambda {|request|
    request.accepts.include?(:json)
  }

  get "/users/email" => "users#id"
  get "/items/:id/like" => "items#checkhasliked"

  scope constraints: ACCEPTS_JSON do
    
    resources :users, only: [:show, :index] do
      resources :categories, only: [:show, :index], to:  'users#categoryitems'
    end

    resources :categories
    resources :items
  end

  get "/*path" => "app#main"

  # get '*path', to: 'react#show', constraints: { format: 'html' } # From the S3 SPA React tutorial. I wonder if I should use this instead for the SPA... http://blog.littleblimp.com/post/119230396893/direct-uploads-to-s3-with-react-rails-and

  post "/users" => "users#create"
  post "/items" => "items#create"

  post "/items/:id/like" => "items#like"

  post "/items/:id/unlike" => "items#unlike"

  post "/sessions" => "sessions#create"

  root 'app#main'


end
