class Post < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
    validates :image_url, presence: true
end
