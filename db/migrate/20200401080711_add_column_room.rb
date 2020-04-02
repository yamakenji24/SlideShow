class AddColumnRoom < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :content, :string
  end
end
