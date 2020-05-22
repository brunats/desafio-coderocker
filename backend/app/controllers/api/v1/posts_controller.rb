module API
    module V1
        class PostsController < ApplicationController
            def index
              posts = Post.order('created_at DESC');
              render json: {status: :ok, message: 'Posts carregados', data: posts}, status: :ok
            end

            def show
              begin
                post = Post.find(params[:id])
                render json: {status: :ok, message:'Loaded post', data: post}, status: :ok
              rescue => exception
                render json: {status: :bad_request, message:'Post not found', data: exception},status: :bad_request
              end
            end
        end
    end
end