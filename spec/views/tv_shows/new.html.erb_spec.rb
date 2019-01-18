require 'rails_helper'

RSpec.describe "tv_shows/new", type: :view do
  before(:each) do
    assign(:tv_show, TvShow.new(
      :name => "MyString"
    ))
  end

  it "renders new tv_show form" do
    render

    assert_select "form[action=?][method=?]", tv_shows_path, "post" do

      assert_select "input[name=?]", "tv_show[name]"
    end
  end
end
