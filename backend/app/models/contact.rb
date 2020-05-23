class Contact < ApplicationRecord
  default_scope { order('created_at DESC') }

  validates :name, presence: true
  validates :email, presence: true
  validates :phone, presence: true
  validates :post, presence: true
end
