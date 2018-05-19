class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
  	add_column :users, :cep, :string
  	add_column :users, :address, :string
  	add_column :users, :neighborhood, :string
  	add_column :users, :state, :string
  	add_column :users, :city, :string
  	add_column :users, :cpf, :string
  	add_column :users, :password_digest, :string
  end
end
