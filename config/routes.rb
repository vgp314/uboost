Rails.application.routes.draw do
  get 'sessions/new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	root 'static_pages#landing'


	#get '/login', to: 'users#login', as: 'login'
	post 'users/update', to: 'users#update', as:"users_update"
	post 'users/create', to: 'users#create', as:"create_user"
	get "users/home", to: 'users#home', as:'home'

	get    '/login',   to: 'sessions#new'
    post   '/login',   to: 'sessions#create'
    delete '/logout',  to: 'sessions#destroy'
end

