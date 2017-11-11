Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
	get "home/download_pdf" => "home#download_pdf", :as => 'download_pdf'
end
