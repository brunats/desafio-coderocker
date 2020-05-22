FactoryBot.define do
    factory :post do
      title { Faker::Book.title }
      body { Faker::Lorem.sentence }
      image_url { Faker::Internet.url }
    end
end
