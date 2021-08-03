class InvitationsController < ApplicationController

    def create
        invitation = Invitation.create(invitation_params)
        if invitation.valid?
            render json: invitation, status: :created
        else
            render json: {errors: invitation.errors.full_messages}, status: :unprocessable_entity
        end
    end
# WARNING: Need to revisit this once we know what we need on front end
    def show
        user = User.find_by(id: params[:id]) #should use session id
        if user
            invitations = user.invitations
            if invitations
                render json: invitations, status: :ok
            else
                head :no_content
            end
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end

    def destroy
        invitation = Invitation.find_by(id: params[:id])
        invitation.destroy
        head :no_content
    end

    private

    def invitation_params
        params.permit(:inviter_id, :invitee_id)
    end

end
