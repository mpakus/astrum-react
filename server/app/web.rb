require 'sequel'
require 'sinatra/base'
require 'sinatra/reloader'
require 'sinatra/json'

class Web < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    json data: { msg: 'hello world' }
  end
end
