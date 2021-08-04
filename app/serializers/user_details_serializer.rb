class UserDetailsSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :friends
  has_many :events
end
