class User < ApplicationRecord

    has_secure_password

    #has_many :friend_requests, foreign_key: :requester_id, dependent: :destroy
    has_many :friend_requests, foreign_key: :requestee_id, dependent: :destroy

    has_many :invitations, foreign_key: :invitee_id, dependent: :destroy
    #has_many :invitations, foreign_key: :inviter_id, dependent: :destroy

    has_many :friendships, dependent: :destroy
    has_many :friends, through: :friendships

    has_many :event_users, dependent: :destroy
    has_many :events, through: :event_users

    validates :username, presence: true, uniqueness: true
    validates :address, presence: true, uniqueness: true



end
