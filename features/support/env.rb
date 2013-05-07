# Generated by cucumber-sinatra. (2013-05-07 14:22:58 +0100)

ENV['RACK_ENV'] = 'test'

require File.join(File.dirname(__FILE__), '..', '..', 'lib/collaborator.rb')

require 'capybara'
require 'capybara/cucumber'
require 'rspec'

Capybara.app = Collaborator

class CollaboratorWorld
  include Capybara::DSL
  include RSpec::Expectations
  include RSpec::Matchers
end

World do
  CollaboratorWorld.new
end
