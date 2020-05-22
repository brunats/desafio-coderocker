require 'rails_helper'

RSpec.describe API::V1::PostsController, type: :request do
  describe 'POST #index' do
    context 'without id' do
      let(:posts) { create_list(:post, 3) }
      
      before(:each) do
        posts
        get api_v1_posts_path
      end

      it 'returns http success' do
        expect(response).to have_http_status(:ok)
      end

      it 'return all posts' do
        expect(json_response[:data].size).to eq(3)
      end
    end
  end

  describe 'POST #show' do
    context 'when pass valid id' do
      let(:posts) { create_list(:post, 3) }

      before(:each) do
        posts
        get api_v1_post_path(posts.first)
      end

      it 'returns http success' do
        expect(response).to have_http_status(:ok)
      end

      it 'return selected post' do
        expect(json_response[:data][:id]).to eq(posts.first.id)
        expect(json_response[:data][:title]).to eq(posts.first.title)
      end
    end
  end
end
  