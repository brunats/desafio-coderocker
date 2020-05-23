require 'rails_helper'

RSpec.describe API::V1::ContactsController, type: :request do
  describe 'Contacts #index' do
    context 'when id doesnt pass' do
      let(:contacts) { create_list(:contact, 3) }
      
      before(:each) do
        contacts
        get api_v1_contacts_path
      end

      it 'returns http success' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns all contacts' do
        expect(json_response[:data].size).to eq(3)
      end
    end
  end
end
