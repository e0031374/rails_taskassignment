Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    namespace 'api' do
        namespace 'v1' do
            resources :tasks do
                member do
                    get 'labels'
                end
            end
            resources :labels do
                member do
                    get 'tasks'
                end
            end
            resources :tasklabels do
    # https://stackoverflow.com/questions/20383936/how-to-add-extra-parameter-to-resources-in-routes
                collection do
                    delete ':task_id/:label_id', action: :destroy_relation
                end
            end
        end
    end
end
