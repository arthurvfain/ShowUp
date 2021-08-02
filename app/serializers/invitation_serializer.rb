class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :inviter_id, :invitee_id, :event_id
end
