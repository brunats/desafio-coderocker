class Post < ApplicationRecord
  default_scope { order('created_at DESC') }

  validates :title, presence: true
  validates :body, presence: true
  validates :image_url, presence: true
end
