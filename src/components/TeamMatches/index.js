import {Component} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesList: {}, isLoading: true}

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formatteddata = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }

    this.setState({teamMatchesList: formatteddata, isLoading: false})
  }

  onClickLogout = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {teamMatchesList, isLoading} = this.state

    if (isLoading) {
      return (
        <div className="loader-container" data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      )
    }

    const matchStatusCounts = [
      {
        name: 'Won',
        count: teamMatchesList.recentMatches.filter(
          match => match.matchStatus === 'Won',
        ).length,
      },
      {
        name: 'Lost',
        count: teamMatchesList.recentMatches.filter(
          match => match.matchStatus === 'Lost',
        ).length,
      },
      {
        name: 'Draw',
        count: teamMatchesList.recentMatches.filter(
          match => match.matchStatus === 'Draw',
        ).length,
      },
    ]

    return (
      <div className="back-container">
        <img
          src={teamMatchesList.teamBannerUrl}
          alt="team banner"
          className="team-banner"
        />
        <h1 className="heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={teamMatchesList.latestMatchDetails} />

        <ul className="match-list">
          {teamMatchesList.recentMatches.map(each => (
            <MatchCard matchCardDetails={each} key={each.id} />
          ))}
        </ul>

        <h1 className="heading">Match Status Overview</h1>

        <div data-testid="team-matches-pie-chart" className="pie-chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                cx="50%"
                cy="50%"
                data={matchStatusCounts}
                startAngle={0}
                endAngle={360}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="count"
                label
              >
                <Cell name="Won" fill="#fecba6" />
                <Cell name="Lost" fill="#b3d23f" />
                <Cell name="Draw" fill="#a44c9e" />
              </Pie>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <button
          type="button"
          onClick={this.onClickLogout}
          className="back-button"
        >
          Back
        </button>
      </div>
    )
  }
}

export default TeamMatches
