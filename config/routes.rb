Rails.application.routes.draw do
  root 'tv_shows#index'

  resources :tv_shows, only: [:index, :show]

  resources :tv_shows do
    member do
      get :view_it
      get :search_results
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
