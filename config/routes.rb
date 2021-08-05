Rails.application.routes.draw do
  resources :friendships, only: [:index, :show, :create]
  resources :friend_requests, only: [:show, :create, :destroy]
  resources :invitations, only: [:create, :show, :destroy]
  resources :event_users, only: [:create, :destroy, :show]
  resources :events, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy]
  resources :sessions, only: [:create]
  delete '/sessions', to: 'sessions#destroy'
  get '/me', to: 'sessions#me'
  post '/accept_invite', to: 'event_users#accept_invite'
  delete '/cancel_request/:requester/:requestee', to: 'friend_requests#cancel_request'
  delete '/unfriend/:user/:friend', to: 'friendships#destroy'
  delete '/flakeout/:user/:event', to: 'event_users#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
