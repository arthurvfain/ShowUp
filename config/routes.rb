Rails.application.routes.draw do
  resources :friendships, only: [:index, :show, :create]
  resources :friend_requests, only: [:show, :create, :destroy]
  resources :invitations, only: [:destroy]
  resources :event_users, only: [:create, :destroy, :show]
  resources :events, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy]
  resources :sessions, only: [:create]
  delete '/sessions', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
