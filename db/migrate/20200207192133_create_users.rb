class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :account, null: false
      t.string :password_digest
      t.string :nick
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
