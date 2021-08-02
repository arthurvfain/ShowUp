class Event < ApplicationRecord
    has_many :event_users, dependent: :destroy
    has_many :users, through: :event_users
    has_many :invitations

    validates :name, presence: true
    validates :public, presence: true
    validates :time, presence: true
end
