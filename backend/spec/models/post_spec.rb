require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'factory is valid' do
    let(:post) { build(:post) }

    it { expect(post).to be_valid }
  end
end
