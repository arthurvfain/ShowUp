class FriendRequest < ApplicationRecord
    belongs_to :requester, class_name: "User"
    belongs_to :requestee, class_name: "User"

    validate :already_friended?

    def already_friended?
        if Friendship.find_by(user_id: self.requester_id, friend_id: self.requestee_id)
            self.errors.add(:Friendship, "Y'all are already friends !")
        end
    end
        
end
