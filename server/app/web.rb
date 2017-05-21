require 'sequel'
require 'sinatra/base'
require 'sinatra/reloader'
require 'sinatra/json'
require 'sqlite3'

class Web < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
    DB = Sequel.connect('sqlite://coins.db')
    unless DB.table_exists?(:tradings)
      DB.create_table :tradings do
        primary_key :id
        DateTime :date_at
        Float :currency
      end
      items = DB[:tradings]
      items << { date_at: DateTime.now - 60*60, currency: rand * 100 }
      items << { date_at: DateTime.now - 60*30, currency: rand * 100}
      items << { date_at: DateTime.now - 60*15, currency: rand * 100}
    end
  end

  get '/' do
    json data: { currencies: DB[:tradings].select(:currency, :date_at).all }
  end
end
