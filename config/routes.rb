Rails.application.routes.draw do
  get 'chat_message/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :slides
  resources :logins

  #root to: 'slides#index'
  root to: 'logins#index'
end
