2.times  do
    Post.create({
      author: Faker::Name.name_with_middle,
      title: Faker::Book.title,
      body: Faker::Lorem.paragraph_by_chars(number: 1200),
      image_url: "https://source.unsplash.com/640x640/?Rock-concert"
    })
end