class User < ApplicationRecord

    has_secure_password

    has_many :friend_requests, dependent: :destroy

    has_many :invitations, dependent: :destroy

    has_many :friendships, dependent: :destroy
    has_many :friends, through: :friendships

    has_many :event_users, dependent: :destroy
    has_many :events, through: :event_users

    validates :username, presence: true
    validates :address, presence: true

end
