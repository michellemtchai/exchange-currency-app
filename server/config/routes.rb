Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope 'exchange' do
    get '/:currency1/:currency2', to: 'exchange#convert'
  end

  if ENV['RAILS_ENV'] == 'production'
    root to: redirect('index.html')
  end
end
