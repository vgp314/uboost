class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :email
      t.string :tel
      t.date :birth_date
      t.timestamps
    end
  end
end
