module API
  module V1
      class ContactsController < ApplicationController
        def index
          contacts = Contact.all
          render json: { data: contacts }, status: :ok
        end

        def create
          contact = Contact.new(contact_params)
          if contact.save
            render json: { created: true, errors: {} }, status: :created 
          else
            render json: { created: false, errors: contact.errors }, status: :bad_request
          end
        end

        private
        
        def contact_params
          params[:contact].permit(:name, :email, :phone, :post)
        end
      end
  end
end