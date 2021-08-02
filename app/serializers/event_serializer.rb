class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :public, :time
end
