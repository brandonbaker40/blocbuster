require 'rails_helper'

RSpec.describe "tv_shows/index", type: :view do
  before(:each) do
    assign(:tv_shows, [
      TvShow.create!(
        :name => "Name"
      ),
      TvShow.create!(
        :name => "Name"
      )
    ])
  end

  it "renders a list of tv_shows" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
