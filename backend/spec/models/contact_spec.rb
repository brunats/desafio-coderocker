require 'rails_helper'

RSpec.describe Contact, type: :model do
  context 'factory is valid' do
    let(:contact) { build(:contact) }

    it { expect(contact).to be_valid }
  end

  context 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:phone) }
    it { should validate_presence_of(:post) }
  end
end
