class FriendRequestSerializer < ActiveModel::Serializer
  attributes :id, :requester_id, :requestee_id
  belongs_to :requester
end
