class EventsController < ApplicationController
    
    def index
        events = Event.where(public: true)
        render json: events, status: :created
    end

    def create
        event = Event.create(event_params)
        if event.valid?
            event_user = EventUser.create(user_id: event_creator[:creator], event_id: event.id, visible: event.public)
            byebug
            render json: event, status: :created
        else
            render json: {errors: event.errors.full_messages}, status: :unprocessable_entity
        end
    end
# WARNING: Need to revisit this once we know what we need on front end
    def show
        event = Event.find_by(id: params[:id])
        if event
            render json: event, serializer: EventDetailsSerializer, status: :created
        else
            render json: {error: "event not Found"}, status: :not_found
        end
    end

    def destroy
        event = Event.find_by(id: params[:id])
        event.destroy
        head :no_content
    end

    private

    def event_params
        params.require(:event).permit(:name, :location, :public, :time)
    end

    def event_creator
        params.permit(:creator)
    end
end
