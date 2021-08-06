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
User.create(username: 'Bob', address: 'bob@gmail.com', password: '123')

Friendship.create(user_id: 1, friend_id: 2)
Friendship.create(user_id: 2, friend_id: 1)

Friendship.create(user_id: 1, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 1)

Friendship.create(user_id: 2, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 2)

Friendship.create(user_id: 3, friend_id: 4)
Friendship.create(user_id: 4, friend_id: 3)

#FriendRequest.create(requester_id: , requestee_id: )

Event.create(name: "Lumpy's Lump Party", location: "The Lumps Bar and Grille", public: false, time: Time.now.to_datetime)
Event.create(name: "Gregs's Greg Party", location: "The Gregs Bar and Grille", public: true, time: Time.now.to_datetime)
Event.create(name: "Test Party 1", location: "This Location is Fake", public: true, time: Time.now.to_datetime)
Event.create(name: "Test Party 2", location: "This Location is Fake", public: true, time: Time.now.to_datetime)
Event.create(name: "Test Party 3", location: "This Location is Fake", public: true, time: Time.now.to_datetime)
Event.create(name: "Test Party 4", location: "This Location is Fake", public: true, time: Time.now.to_datetime)
Event.create(name: "Test Party 5", location: "This Location is Fake", public: true, time: Time.now.to_datetime)
Event.create(name: "Test Party 6", location: "This Location is Fake", public: true, time: Time.now.to_datetime)
Event.create(name: "Test Party 7", location: "This Location is Fake", public: true, time: Time.now.to_datetime)

#Invitation.create(inviter_id: , invitee_id: , event_id: )

EventUser.create(user_id: 4, event_id: 1, visible: true)
EventUser.create(user_id: 4, event_id: 2, visible: true)
EventUser.create(user_id: 4, event_id: 3, visible: true)
EventUser.create(user_id: 4, event_id: 4, visible: true)
EventUser.create(user_id: 4, event_id: 5, visible: true)
EventUser.create(user_id: 4, event_id: 6, visible: true)
EventUser.create(user_id: 4, event_id: 7, visible: true)
EventUser.create(user_id: 4, event_id: 8, visible: true)
EventUser.create(user_id: 4, event_id: 9, visible: true)
EventUser.create(user_id: 4, event_id: 10, visible: true)
EventUser.create(user_id: 1, event_id: 2, visible: true)
EventUser.create(user_id: 2, event_id: 2, visible: true)
EventUser.create(user_id: 3, event_id: 2, visible: true)
EventUser.create(user_id: 5, event_id: 2, visible: true)


puts "Seeding done!"