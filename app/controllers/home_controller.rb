class HomeController < ApplicationController

	def index
	end

	def download_pdf
	  send_file(
	    "#{Rails.root}/public/Hans_Palacios_Resume.pdf",
	    filename: "Hans_Palacios_Resume.pdf",
	    type: "application/pdf"
	  )
	end
end
