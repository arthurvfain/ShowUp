class EventsController < ApplicationController
    
    def index
        events = Event.all
        render json: events, status: :created
    end

    def create
        event = Event.create(event_params)
        if event.valid?
            render json: event, status: :created
        else
            render json: {errors: event.errors.full_messages}, status: :unprocessable_entity
        end
    end
# WARNING: Need to revisit this once we know what we need on front end
    def show
        event = Event.find_by(id: params[:id])
        if event
            render json: event, status: :created
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
        params.permit(:name, :location, :public, :time)
    end
end
