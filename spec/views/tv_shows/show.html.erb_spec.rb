require 'rails_helper'

RSpec.describe "tv_shows/show", type: :view do
  before(:each) do
    @tv_show = assign(:tv_show, TvShow.create!(
      :name => "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
