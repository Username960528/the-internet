require 'puma'
require 'nio'
require './server'  # Assuming './server' is the correct path to your server file

run Rack::URLMap.new({
  "/" => Public,
  "/digest_auth" => Protected
})
