class FriendshipsController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        if user
            friends = user.friends
            if friends
                render json: friends, status: :ok
            else
                head :no_content
            end
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end
    
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

    def destroy
        friendship_one = Friendship.find_by(user_id: params[:user], friend_id: params[:friend])
        friendship_two = Friendship.find_by(user_id: params[:friend], friend_id: params[:user])

        friendship_one.destroy
        friendship_two.destroy
    end

    private
    
    def friendship_params
        params.permit(:user_id, :friend_id, :friend_request_id)
    end

end
