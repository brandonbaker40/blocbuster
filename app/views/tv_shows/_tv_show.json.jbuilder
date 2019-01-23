# frozen_string_literal: true

json.extract! tv_show, :id, :name, :created_at, :updated_at
json.url tv_show_url(tv_show, format: :json)
