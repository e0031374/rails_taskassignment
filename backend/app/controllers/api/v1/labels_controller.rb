module Api      # create namespace
    module V1   # note: uppercase V
        class LabelsController < ApplicationController
            def index
                # query db for all labels by date
                @labels = Label.order('l_name ASC');
                render json: {status: 'SUCCESS', message:'Retrieved labels', data: @labels}, status: :ok
            end

            def show    # note, if Label note found { status: 404, error: "Not Found", ...rest } reply
                @label = Label.find(params[:id])
                render json: {status: 'SUCCESS', message:'Retrieved label', data: @label}, status: :ok
            end

            def create  # on duplicate: { status: "ERROR", ... }
                @label = Label.new(label_params)

                if @label.save
                    render json: {status: 'SUCCESS', message:'Saved label', data: @label},status: :ok
                else
                    render json: {status: 'ERROR', message:'Label not saved',
                        data: @label.errors}, status: :unprocessable_entity
                end
            end

            def destroy         # for DELETE request
                @label = Label.find(params[:id])
                @label.destroy
                render json: {status: 'SUCCESS', message:'Deleted label', data: @label},status: :ok
            end

            # note, if the json to update does not contain "l_name" params, it will still
            # return a success but nothing will change in the table
            # ive decided to keep it simple and just allow for this to go through rather
            # than do server side validation, at front end, check the data returned
            def update          # for PUT request, ret: 404 on not found, 
                @label = Label.find(params[:id])
                if @label.update_attributes(label_params)
                    render json: {status: 'SUCCESS', message:'Updated label', data: @label},status: :ok
                else
                    render json: {status: 'ERROR', message:'Label not updated',
                        data: @label.errors}, status: :unprocessable_entity
                end
            end

            # gets tasks labeled with provided label?
            def tasks 
                @label = Label.find(params[:id])
                # get list of Task-Label associations with the provided label
                @tasklabels = TaskLabel.where(label_id: @label.id)
                @tasks = @tasklabels.map { |x| Task.find(x.task_id) }
                render json: {status: 'SUCCESS', message:'Retrieved task label associations', 
                    data: { relationship: @tasklabels, entity: @tasks }}, status: :ok
            end
            
            private
            def label_params
                params.permit(:l_name)
            end
        end
    end
end
