class SongrequestsController < ApplicationController

	def index 
		@songrequest = Songrequest.all
		respond_to do |f|
			f.html 
			f.json {render json: @songrequest}
		end 

	end 

	def show 
		@songrequest = Songrequest.find(params[:id])
	end 

	def new
		@songrequest = Songrequest.new
	end 

	def create
		@songrequest = Songrequest.create(user_params)
		render 'main/main'
	end

	private 

		def user_params
			params.require(:songrequest).permit(:title, :artist, :requestor)
		end

end
