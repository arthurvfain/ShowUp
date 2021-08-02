class FriendshipsController < ApplicationController

    #REMINDER: Throw in a friend request ID to the fetch request
    def create
        friendship_one = Friendship.create(user_id: params[:user_id], friend_id: params[:friend_id])
        friendship_two = Friendship.create(user_id: params[:friend_id], friend_id: params[:user_id])

        if friendship_one.valid? && friendship_two.valid?
            friend_request = FriendRequest.find_by(id: params[:friend_request_id])
            friend_request.destroy
            render json: {friendships: [friendship_one, friendship_two]}, status: :created
        else
            render json: {errors: [{one: friendship_one.errors.full_messages}, {two: friendship_two.errors.full_messages}]}, status: :unprocessable_entity
        end
    
    end

    private
    
    def friendship_params
        params.permit(:user_id, :friend_id, :friend_request_id)
    end

end
