Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'users#main'


	get '/login', to: 'users#login', as: 'login'
	post 'users/update', to: 'users#update', as:"users_update"
end

