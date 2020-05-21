50.times  do
    Article.create({
        title: Faker::Book.title,
        body: Faker::Lorem.sentence,
        image_url: Faker::Internet.url
    })
end