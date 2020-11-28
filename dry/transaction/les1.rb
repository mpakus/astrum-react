require 'awesome_print'
require 'dry/transaction'
require 'dry/monads'

class HelloUser
  include Dry::Transaction

  step :validate
  step :create

  private

  def validate(input)
    name = input.fetch(:name, '')
    return Failure(error: :blank_name) if name == ''

    Success(name: name)
  end

  def create(input)
    puts "Hey fucker, #{input.fetch(:name)}! How is going?"
    
    Success(msg: :all_good)
  end
end

puts "Hello, enter your name: "
name = gets.chomp

result = HelloUser.new.call(name: name)

if result.failure
    puts "Error: #{result.failure.fetch(:error)}!!!"
end 
