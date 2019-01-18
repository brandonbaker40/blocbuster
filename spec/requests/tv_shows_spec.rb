require 'rails_helper'

RSpec.describe "TvShows", type: :request do
  describe "GET /tv_shows" do
    it "works! (now write some real specs)" do
      get tv_shows_path
      expect(response).to have_http_status(200)
    end
  end
end
