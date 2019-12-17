module Api      # create namespace
    module V1   # note: uppercase V
        class TasklabelsController < ApplicationController
            def index
                # query db for all tasklabels by date
                @tasklabels = TaskLabel.all() #.order('l_name ASC');
                render json: {status: 'SUCCESS', message:'Retrieved TaskLabel relationships', 
                    data: @tasklabels}, status: :ok
            end

            def show    # note, if TaskLabel note found { status: 404, error: "Not Found", ...rest } reply
                @tasklabel = TaskLabel.find(params[:id])
                render json: {status: 'SUCCESS', message:'Retrieved TaskLabel relationship', 
                    data: @tasklabel}, status: :ok
            end

            def create  # on duplicate: { status: "ERROR", ... }
                @tasklabel = TaskLabel.new(tasklabel_params)

                # client should not be able to enter an association between
                # between a task that doesnt exist and label that doesnt exist
                taskExists = Task.exists?(tasklabel_params[:task_id])
                labelExists = Label.exists?(tasklabel_params[:label_id])

                ## no duplicate Task-Label relationships
                relationshipDoesNotExists = ! TaskLabel.exists?(tasklabel_params)
                 
                errorData = { taskExists: taskExists, labelExists: labelExists, 
                    relationshipDoesNotExists: relationshipDoesNotExists }

                if ! taskExists or ! labelExists
                    render json: {status: 'ERROR', message:'Specified Task or Label could not be found',
                        data: errorData}, status: :unprocessable_entity
                elsif ! relationshipDoesNotExists
                    render json: {status: 'ERROR', message:'Specified TaskLabel relationship already exists',
                        data: errorData}, status: :unprocessable_entity
                elsif @tasklabel.save
                    render json: {status: 'SUCCESS', message:'Saved TaskLabel relationship', 
                        data: @tasklabel},status: :ok
                else
                    render json: {status: 'ERROR', message:'TaskLabel relationship not saved',
                        data: @tasklabel.errors, errorData: errorData}, status: :unprocessable_entity
                end
            end

            def destroy         # for DELETE request
                @tasklabel = TaskLabel.find(params[:id])
                @tasklabel.destroy
                render json: {status: 'SUCCESS', message:'Deleted TaskLabel relationship', 
                    data: @tasklabel},status: :ok
            end

            # note, if the json to update does not contain "l_name" params, it will still
            # return a success but nothing will change in the table
            # ive decided to keep it simple and just allow for this to go through rather
            # than do server side validation, at front end, check the data returned
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
