class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :inviter_id, :invitee_id, :event_id
  belongs_to :event
  belongs_to :inviter
end
