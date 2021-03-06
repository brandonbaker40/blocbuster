# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'tv_shows/show', type: :view do
  let(:valid_tv_show) do
    {
      "backdrop_path": '/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg',
      "created_by": [
        {
          "id": 211_962,
          "credit_id": '537523f9c3a3681ef4000177',
          "name": 'Geoff Johns',
          "gender": 2,
          "profile_path": '/1hiQjkIkeFoiwvD4yIk2Dq6tnOa.jpg'
        },
        {
          "id": 1_216_615,
          "credit_id": '5bd5a45ec3a36820f002e57f',
          "name": 'Andrew Kreisberg',
          "gender": 2,
          "profile_path": '/giFmwdBAw6uwC8yeHPaW6dq6YT8.jpg'
        },
        {
          "id": 88_967,
          "credit_id": '5bd5a46d0e0a2622bd02be75',
          "name": 'Greg Berlanti',
          "gender": 2,
          "profile_path": '/AbocIYSo4KXx7nT6lz2dj3qMD8H.jpg'
        }
      ],
      "episode_run_time": [
        44
      ],
      "first_air_date": '2014-10-07',
      "genres": [
        {
          "id": 18,
          "name": 'Drama'
        },
        {
          "id": 10_765,
          "name": 'Sci-Fi & Fantasy'
        }
      ],
      "homepage": 'http://www.cwtv.com/shows/the-flash/',
      "id": 60_735,
      "in_production": true,
      "languages": [
        'en'
      ],
      "last_air_date": '2019-01-15',
      "last_episode_to_air": {
        "air_date": '2019-01-15',
        "episode_number": 10,
        "id": 1_629_007,
        "name": 'The Flash & The Furious',
        "overview": 'While Nora grapples with the revelation that Thawne killed her grandmother, Team Flash must stop the formidable team-up of a newly sprung from jail Weather Witch and Silver Ghost, a new meta-tech villain who can control engines and motorized technology. Meanwhile, Caitlin and Cisco discuss creating a meta-human cure.',
        "production_code": '',
        "season_number": 5,
        "show_id": 60_735,
        "still_path": '/rX7ztaeuUokOs8BJfE3U17MKDJU.jpg',
        "vote_average": 0,
        "vote_count": 0
      },
      "name": 'The Flash',
      "next_episode_to_air": {
        "air_date": '2019-01-22',
        "episode_number": 11,
        "id": 1_666_783,
        "name": 'Seeing Red',
        "overview": "During a battle with Cicada, Nora is severely injured. Due to Cicada's dampening powers, Nora's speed healing isn't working, leaving Barry and Iris scared for their daughter's future. Upset about his injured child, The Flash is filled with rage and confronts Cicada in a brutal battle. Meanwhile, Killer Frost keeps interfering with Caitlin's work on the cure.",
        "production_code": '',
        "season_number": 5,
        "show_id": 60_735,
        "still_path": '/byRXCsqAm4BdTaepm1rgLKfwHIn.jpg',
        "vote_average": 0,
        "vote_count": 0
      },
      "networks": [
        {
          "name": 'The CW',
          "id": 71,
          "logo_path": '/ge9hzeaU7nMtQ4PjkFlc68dGAJ9.png',
          "origin_country": 'US'
        }
      ],
      "number_of_episodes": 105,
      "number_of_seasons": 5,
      "origin_country": [
        'US'
      ],
      "original_language": 'en',
      "original_name": 'The Flash',
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "popularity": 256.566,
      "poster_path": '/fki3kBlwJzFp8QohL43g9ReV455.jpg',
      "production_companies": [
        {
          "id": 1957,
          "logo_path": '/nmcNfPq03WLtOyufJzQbiPu2Enc.png',
          "name": 'Warner Bros. Television',
          "origin_country": 'US'
        },
        {
          "id": 27_711,
          "logo_path": '/3e294jszfE6cE8TOogmj0zNd6pL.png',
          "name": 'Berlanti Productions',
          "origin_country": 'US'
        },
        {
          "id": 9993,
          "logo_path": '/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
          "name": 'DC Entertainment',
          "origin_country": 'US'
        },
        {
          "id": 105_514,
          "logo_path": null,
          "name": 'Mad Ghost Productions',
          "origin_country": 'US'
        }
      ],
      "seasons": [
        {
          "air_date": '2016-04-19',
          "episode_count": 5,
          "id": 79_954,
          "name": 'Specials',
          "overview": '',
          "poster_path": '/hce9A21ANLi4n9QtBZEdPFD2eZk.jpg',
          "season_number": 0
        },
        {
          "air_date": '2014-10-07',
          "episode_count": 23,
          "id": 60_523,
          "name": 'Season 1',
          "overview": '',
          "poster_path": '/nOUQ03eFsbvSbQB235YrBRuo00.jpg',
          "season_number": 1
        },
        {
          "air_date": '2015-10-06',
          "episode_count": 23,
          "id": 66_922,
          "name": 'Season 2',
          "overview": 'Following the dramatic events of season 1, Team Flash quickly turns their attention to a threat high above Central City. Armed with the heart of a hero and the ability to move at super speeds, will Barry be able to save his city from impending doom?',
          "poster_path": '/pZE6s1yo668pWg7LG4r7TSWnSXG.jpg',
          "season_number": 2
        },
        {
          "air_date": '2016-10-04',
          "episode_count": 23,
          "id": 77_888,
          "name": 'Season 3',
          "overview": '',
          "poster_path": '/qxagPKSYMhyGEgWLkC1NG43uWeN.jpg',
          "season_number": 3
        },
        {
          "air_date": '2017-10-10',
          "episode_count": 23,
          "id": 90_247,
          "name": 'Season 4',
          "overview": '',
          "poster_path": '/zBF3wcUp3SgnlYNOXQeaDg5XfTu.jpg',
          "season_number": 4
        },
        {
          "air_date": '2018-10-09',
          "episode_count": 13,
          "id": 104_777,
          "name": 'Season 5',
          "overview": '',
          "poster_path": '/z3CqL2vnjgLuefOiR5AYD9Tf91S.jpg',
          "season_number": 5
        }
      ],
      "status": 'Returning Series',
      "type": 'Scripted',
      "vote_average": 6.7,
      "vote_count": 2456
    }
  end

  # search results page
  describe 'tv_shows/1548217010273/search_results?query=Arrow' do
    it 'infers the controller path' do
      expect(controller.request.path_parameters[:controller]).to eq('tv_shows')
      expect(controller.request.path_parameters[:action]).to eq('show')
    end
  end

  # tv show profile page
  describe 'tv_shows/1412/view_it' do
    it 'infers the controller path' do
      expect(controller.request.path_parameters[:controller]).to eq('tv_shows')
      expect(controller.request.path_parameters[:action]).to eq('show')
    end
  end
end
