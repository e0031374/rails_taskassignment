class Task < ApplicationRecord
    validates :body, presence: true
    has_many :active_task_labels, class_name: "Task_Label",
                                foreign_key: "task_id",
                                dependent: :destroy
    has_many :labels, :through => :active_task_labels, source: :label
end
