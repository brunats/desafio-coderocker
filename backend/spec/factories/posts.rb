FactoryBot.define do
    factory :post do
      author{ Faker::Name.name_with_middle }
      title { Faker::Book.title }
      body {  Faker::Lorem.paragraph_by_chars(number: 50) }
      image_url { Faker::Internet.url }
    end
end
