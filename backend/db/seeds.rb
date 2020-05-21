20.times  do
    Post.create({
        title: Faker::Book.title,
        body: Faker::Lorem.sentence,
        image_url: Faker::Internet.url
    })
end