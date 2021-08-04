class EventDetailsSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :public, :time
  has_many :users
end
