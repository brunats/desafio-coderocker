module API
    module V1
        class PostsController < ApplicationController
            def index
              posts = Post.all
              render json: { data: posts }, status: :ok
            end

            def show
              post = Post.find(params[:id])
              render json: { data: post }, status: :ok
            rescue
              render json: { }, status: :not_found
            end
        end
    end
end