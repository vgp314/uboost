class User < ApplicationRecord
	attr_accessor :full_name, :email, :phone, :cep,:address,:neighborhood,:state,:city,:cpf,:birth_date
	has_secure_password
end
