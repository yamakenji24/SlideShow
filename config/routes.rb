Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :slides
  resources :logins

  #root to: 'slides#index'
  root to: 'logins#index'
end
