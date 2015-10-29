Rails.application.routes.draw do
  root 'app#main'
  get "/*path" => "app#main"
end
