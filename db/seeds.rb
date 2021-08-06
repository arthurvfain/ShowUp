# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.reset_pk_sequence
Event.destroy_all
Event.reset_pk_sequence
Friendship.destroy_all
Friendship.reset_pk_sequence
Invitation.destroy_all
Invitation.reset_pk_sequence
EventUser.destroy_all
EventUser.reset_pk_sequence
FriendRequest.destroy_all
FriendRequest.reset_pk_sequence

User.create(username: 'Kyle', address: 'kyle@gmail.com', password: '123')
User.create(username: 'Arthur', address: 'arthur@gmail.com', password: '123')
User.create(username: 'Greg', address: 'greg@gmail.com', password: '123')
User.create(username: 'Lumpy', address: 'lumpy@gmail.com', password: '123')
User.create(username: 'Brendan', address: 'brendan@gmail.com', password: '123')
User.create(username: 'Adreena', address: 'adreena@gmail.com', password: '123')
User.create(username: 'Adrienne', address: 'adrienne@gmail.com', password: '123')
User.create(username: 'Carlos', address: 'carlos@gmail.com', password: '123')
User.create(username: 'Dan', address: 'dan@gmail.com', password: '123')
User.create(username: 'Darren', address: 'darren@gmail.com', password: '123')
User.create(username: 'Edward', address: 'edward@gmail.com', password: '123')
User.create(username: 'Jack', address: 'jack@gmail.com', password: '123')
User.create(username: 'Kenny', address: 'kenny@gmail.com', password: '123')
User.create(username: 'Lucy', address: 'lucy@gmail.com', password: '123')
User.create(username: 'Nisa', address: 'nisa@gmail.com', password: '123')
User.create(username: 'Ryan', address: 'ryan@gmail.com', password: '123')
User.create(username: 'Shev', address: 'shev@gmail.com', password: '123')
User.create(username: 'Terry', address: 'terry@gmail.com', password: '123')
User.create(username: 'Zeus', address: 'zeus@gmail.com', password: '123')

puts "Seeded Users!"

Friendship.create(user_id: 1, friend_id: 2)
Friendship.create(user_id: 2, friend_id: 1)

Friendship.create(user_id: 1, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 1)

Friendship.create(user_id: 2, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 2)

Friendship.create(user_id: 3, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 3)

Friendship.create(user_id: 5, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 5)

Friendship.create(user_id: 7, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 7)

Friendship.create(user_id: 9, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 9)

Friendship.create(user_id: 11, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 11)

Friendship.create(user_id: 13, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 13)

Friendship.create(user_id: 15, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 15)

Friendship.create(user_id: 11, friend_id: 2)
Friendship.create(user_id: 2, friend_id: 11)

Friendship.create(user_id: 13, friend_id: 1)
Friendship.create(user_id: 1, friend_id: 13)

Friendship.create(user_id: 3, friend_id: 17)
Friendship.create(user_id: 17, friend_id: 3)

puts "Seeded Friendships!"

#FriendRequest.create(requester_id: , requestee_id: )

Event.create(name: "Lumpy's Lump Party", location: "The Lumps Bar and Grille", public: false, time: Time.now.to_datetime)
Event.create(name: "Gregs's Greg Party", location: "The Gregs Bar and Grille", public: true, time: Time.now.to_datetime)
Event.create(name: "Flatiron Graduation", location: "Manhattan Campus", public: true, time: Time.now.to_datetime)
Event.create(name: "Code Challenge", location: "Virtual", public: true, time: Time.now.to_datetime)
Event.create(name: "Greg's Reviews", location: "Zoom Room Kaboom", public: true, time: Time.now.to_datetime)
Event.create(name: "Friday Feelz", location: "Our Safe Space", public: true, time: Time.now.to_datetime)
Event.create(name: "End of Phase Survey", location: "Your Browser", public: true, time: Time.now.to_datetime)

puts "Seeded Events!"

#Invitation.create(inviter_id: , invitee_id: , event_id: )

EventUser.create(user_id: 4, event_id: 1, visible: true)
EventUser.create(user_id: 4, event_id: 2, visible: true)
EventUser.create(user_id: 4, event_id: 3, visible: true)
EventUser.create(user_id: 4, event_id: 4, visible: true)
EventUser.create(user_id: 4, event_id: 5, visible: true)
EventUser.create(user_id: 4, event_id: 6, visible: true)
EventUser.create(user_id: 4, event_id: 7, visible: true)


EventUser.create(user_id: 1, event_id: 2, visible: true)
EventUser.create(user_id: 2, event_id: 2, visible: true)
EventUser.create(user_id: 3, event_id: 2, visible: true)
EventUser.create(user_id: 5, event_id: 2, visible: true)

EventUser.create(user_id: 1, event_id: 3, visible: true)
EventUser.create(user_id: 2, event_id: 3, visible: true)
EventUser.create(user_id: 3, event_id: 3, visible: true)
EventUser.create(user_id: 4, event_id: 3, visible: true)
EventUser.create(user_id: 5, event_id: 3, visible: true)
EventUser.create(user_id: 6, event_id: 3, visible: true)
EventUser.create(user_id: 7, event_id: 3, visible: true)
EventUser.create(user_id: 8, event_id: 3, visible: true)
EventUser.create(user_id: 9, event_id: 3, visible: true)
EventUser.create(user_id: 11, event_id: 3, visible: true)
EventUser.create(user_id: 12, event_id: 3, visible: true)
EventUser.create(user_id: 13, event_id: 3, visible: true)
EventUser.create(user_id: 14, event_id: 3, visible: true)
EventUser.create(user_id: 15, event_id: 3, visible: true)
EventUser.create(user_id: 16, event_id: 3, visible: true)
EventUser.create(user_id: 17, event_id: 3, visible: true)
EventUser.create(user_id: 18, event_id: 3, visible: true)
EventUser.create(user_id: 19, event_id: 3, visible: true)

EventUser.create(user_id: 1, event_id: 6, visible: true)
EventUser.create(user_id: 2, event_id: 6, visible: true)
EventUser.create(user_id: 3, event_id: 6, visible: true)
EventUser.create(user_id: 4, event_id: 6, visible: true)
EventUser.create(user_id: 5, event_id: 6, visible: true)
EventUser.create(user_id: 6, event_id: 6, visible: true)
EventUser.create(user_id: 7, event_id: 6, visible: true)
EventUser.create(user_id: 8, event_id: 6, visible: true)
EventUser.create(user_id: 9, event_id: 6, visible: true)
EventUser.create(user_id: 11, event_id: 6, visible: true)
EventUser.create(user_id: 12, event_id: 6, visible: true)
EventUser.create(user_id: 13, event_id: 6, visible: true)
EventUser.create(user_id: 14, event_id: 6, visible: true)
EventUser.create(user_id: 15, event_id: 6, visible: true)
EventUser.create(user_id: 16, event_id: 6, visible: true)
EventUser.create(user_id: 17, event_id: 6, visible: true)
EventUser.create(user_id: 18, event_id: 6, visible: true)
EventUser.create(user_id: 19, event_id: 6, visible: true)






puts "Seeding done!"