# frozen_string_literal: true

json.array! @tv_shows, partial: 'tv_shows/tv_show', as: :tv_show
