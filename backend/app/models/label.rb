class Label < ApplicationRecord
    validates :l_name, presence: true, uniqueness: { case_sensitive: false,
        message: "label name is already in use" }
    has_many :active_task_labels, class_name: "TaskLabel",
                                foreign_key: "label_id",
                                dependent: :destroy
    has_many :tasks, :through => :active_task_labels, source: :task
end
