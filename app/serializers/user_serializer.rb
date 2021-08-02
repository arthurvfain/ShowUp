class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :password_digest
end
