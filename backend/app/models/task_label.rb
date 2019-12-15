class TaskLabel < ApplicationRecord
    belongs_to :label, class_name: "Label"
    belongs_to :task, class_name: "Task"
    validates :label_id, presence: true
    validates :task_id, presence: true
end
