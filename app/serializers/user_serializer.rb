class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address
  has_many :friend_requests
  has_many :friends
end
