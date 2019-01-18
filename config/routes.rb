Rails.application.routes.draw do
  root 'tv_shows#index'

  resources :tv_shows

  resources :tv_shows do
    member do
      get :view_it
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
