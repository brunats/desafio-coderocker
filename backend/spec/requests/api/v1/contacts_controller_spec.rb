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

  describe 'Contacts #create' do
    context 'when pass valid contact' do
      let(:contact) { build(:contact) }
      
      before(:each) do
        contact
        post api_v1_contacts_path, params: {
          contact: {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            post: contact.post
          }
        }
      end

      it 'return http created' do
        expect(response).to have_http_status(:created)
      end

      it 'return created true' do
        expect(json_response[:created]).to eq(true)
      end

      it 'returns erros empty ' do
        expect(json_response[:errors]).to be_empty
      end
    end

    context 'when pass invalid contact without post attribute' do
      let(:contact) { build(:contact) }
      
      before(:each) do
        contact
        post api_v1_contacts_path, params: {
          contact: {
            name: contact.name,
            email: contact.email,
            phone: contact.phone
          }
        }
      end

      it 'returns http bad_request' do
        expect(response).to have_http_status(:bad_request)
      end

      it 'return created false' do
        expect(json_response[:created]).to eq(false)
      end

      it 'returns erros not empty' do
        expect(json_response[:errors]).not_to be_empty
      end

      it 'return post attribute error cannot be null' do
        expect(json_response[:errors][:post]).to eq(['can\'t be blank'])
      end
    end
  end
end
