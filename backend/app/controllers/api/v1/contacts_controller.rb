module API
  module V1
      class ContactsController < ApplicationController
        def index
          contacts = Contact.all
          render json: { data: contacts }, status: :ok
        end
      end
  end
end