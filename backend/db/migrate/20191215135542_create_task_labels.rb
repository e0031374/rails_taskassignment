class CreateTaskLabels < ActiveRecord::Migration[6.0]
  def change
    create_table :task_labels do |t|
      t.integer :label_id
      t.integer :task_id

      t.timestamps
    end
    add_index :task_labels, :label_id
    add_index :task_labels, :task_id
    add_index :task_labels, [:label_id, :task_id], unique: true
  end
end
