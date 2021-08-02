class Event < ApplicationRecord
    has_many :event_users, dependent: :destroy
    has_many :users, through: :event_users
    has_many :invitations

    # The whole boolean validating false as not present thing....
    validates :name, presence: true
    validates :public, inclusion: {in: [true, false], message: "Must be set to either true or false."}
    validates :time, presence: true
end
