class EventUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :visible
end
