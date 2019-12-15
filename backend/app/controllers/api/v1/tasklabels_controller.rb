module Api      # create namespace
    module V1   # note: uppercase V
        class TasklabelsController < ApplicationController
            #def index
            #    # query db for all tasklabels by date
            #    @tasklabels = TaskLabel.order('l_name ASC');
            #    render json: {status: 'SUCCESS', message:'Retrieved tasklabels', data: @tasklabels}, status: :ok
            #end

            def show    # note, if TaskLabel note found { status: 404, error: "Not Found", ...rest } reply
                @tasklabel = TaskLabel.find(params[:id])
                render json: {status: 'SUCCESS', message:'Retrieved tasklabel', data: @tasklabel}, status: :ok
            end

            def create  # on duplicate: { status: "ERROR", ... }
                @tasklabel = TaskLabel.new(tasklabel_params)

                if @tasklabel.save
                    render json: {status: 'SUCCESS', message:'Saved TaskLabel relationship', 
                        data: @tasklabel},status: :ok
                else
                    render json: {status: 'ERROR', message:'TaskLabel relationship not saved',
                        data: @tasklabel.errors}, status: :unprocessable_entity
                end
            end

            #def destroy         # for DELETE request
            #    @tasklabel = TaskLabel.find(params[:id])
            #    @tasklabel.destroy
            #    render json: {status: 'SUCCESS', message:'Deleted tasklabel', data: @tasklabel},status: :ok
            #end

            ## note, if the json to update does not contain "l_name" params, it will still
            ## return a success but nothing will change in the table
            ## ive decided to keep it simple and just allow for this to go through rather
            ## than do server side validation, at front end, check the data returned
            #def update          # for PUT request, ret: 404 on not found, 
            #    @tasklabel = TaskLabel.find(params[:id])
            #    if @tasklabel.update_attributes(tasklabel_params)
            #        render json: {status: 'SUCCESS', message:'Updated tasklabel', data: @tasklabel},status: :ok
            #    else
            #        render json: {status: 'ERROR', message:'TaskLabel not updated',
            #            data: @tasklabel.errors}, status: :unprocessable_entity
            #    end
            #end
            
            private
            def tasklabel_params
                params.permit(:label_id, :task_id)
            end
        end
    end
end
