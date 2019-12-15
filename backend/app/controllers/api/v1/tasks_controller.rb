module Api      # create namespace
    module V1   # note: uppercase V
        class TasksController < ApplicationController
            def index
                # query db for all tasks by date
                @tasks = Task.order('created_at DESC');
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
            
            private
            def task_params
                params.permit(:title, :body)
            end
        end
    end
end
