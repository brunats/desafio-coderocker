require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'factory is valid' do
    let(:post) { build(:post) }

    it { expect(post).to be_valid }
  end

  context 'validations' do
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:image_url) }
  end
end
