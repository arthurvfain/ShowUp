class EventUsersController < ApplicationController

    # WARNING: Need to revisit this once we know what we need on front end
    def show
        user = User.find_by(id: params[:id])
        if user
            events = user.events
            render json: events, status: :ok
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end
    # ------------------------

    def create
        event_user = EventUser.create(event_user_params)
        if event_user.valid?
            render json: event_user, status: :created
        else
            render json: {errors: event_user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        event_user = EventUser.find_by(id: params[:id])
        event_user.destroy
        head :no_content
    end

    private

    def event_user_params
        params.permit(:user_id, :event_id, :visible)
    end
end
