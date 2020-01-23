8.times do
    Task.create({
        title: Faker::Books::Lovecraft.tome,
        body: Faker::Books::Lovecraft.sentence
    })
end

for i in 1..5 do
    Label.create({
        l_name: Faker::Books::Lovecraft.location + i.to_s
    })
end

for i in 1..5 do
    k_limit = rand(0..3)
    if k_limit > 0
        for k in 1..k_limit do
            TaskLabel.create({
                task_id: i,
                label_id: k,
            })
        end
    end
end


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
