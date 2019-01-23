# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'TvShows', type: :request do
  describe 'GET /tv_shows' do
    it 'shows a list of popular tv shows' do
      get tv_shows_path
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /tv_shows/60735/view_it' do
    it "shows the tv show profile page for 'The Flash' " do
      get view_it_tv_show_path(60_735)
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET search results on a query' do
    it 'shows a list of tv shows relevant to the search keyword' do
      search_query = 'pokemon'
      get "/tv_shows/1548186232984/search_results?query=#{search_query}"
      expect(response).to have_http_status(200)
    end
  end
end
