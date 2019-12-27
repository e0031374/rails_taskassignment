module Api      # create namespace
    module V1   # note: uppercase V
        class TasksController < ApplicationController
            def index
                # query db for all tasks by date
                @tasks = Task.order('updated_at DESC')
                    .map { |task| JSON.parse(task.to_json) }
                    .each { |x| puts x}
                    .map { |task| task.merge(labels: findLabels(task["id"]) ) } ;
                #@tasks = TaskLabel.joins(:task, :label).order('updated_at DESC');
                render json: {status: 'SUCCESS', message:'Retrieved tasks', data: @tasks}, status: :ok
            end

            def show
                @task = Task.find(params[:id])
                render json: {status: 'SUCCESS', message:'Retrieved task', data: @task}, status: :ok
            end

            def create
                @task = Task.new(task_params)

                if @task.save
                    render json: {status: 'SUCCESS', message:'Saved task', data: @task},status: :ok
                else
                    render json: {status: 'ERROR', message:'Task not saved',
                        data: @task.errors}, status: :unprocessable_entity
                end
            end

            def destroy         # for DELETE request
                @task = Task.find(params[:id])
                @task.destroy
                render json: {status: 'SUCCESS', message:'Deleted task', data: @task},status: :ok
            end

            def update          # for PUT request
                @task = Task.find(params[:id])
                if @task.update_attributes(task_params)
                    render json: {status: 'SUCCESS', message:'Updated task', data: @task},status: :ok
                else
                    render json: {status: 'ERROR', message:'Task not updated',
                        data: @task.errors}, status: :unprocessable_entity
                end
            end

            # task -> all labels belonging to task
            def labels
                @task = Task.find(params[:id])
                # all users
                @tasklabels = TaskLabel.where(task_id: @task.id)
                @labels = @tasklabels.map { |x| Label.find(x.label_id) }
                render json: {status: 'SUCCESS', message:'Retrieved task label associations', 
                    data: { relationship: @tasklabels, entity: @labels }}, status: :ok
            end
            
            private
            def task_params
                params.permit(:title, :body)
            end

            def findLabels(param_id)
                task = Task.find(param_id)
                # all users
                tasklabels = TaskLabel.where(task_id: task.id)
                labels = tasklabels.map { |x| Label.find(x.label_id) }
            end
        end
    end
end
