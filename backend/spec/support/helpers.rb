require_relative 'request_helpers/json_helper'

RSpec.configure do |config|
  config.include(Rails.application.routes.url_helpers, type: :request)

  config.include(JSONHelper, type: :request)
end
