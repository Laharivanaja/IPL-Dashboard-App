// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails
  return (
    <li key={id}>
      <div className="container">
        <div className="firstpart">
          <p>{umpires}</p>
          <p>{result}</p>
          <p>{manOfTheMatch}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{competingTeam}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="image"
          />
        </div>
        <div className="secondpart">
          <p>{firstInnings}</p>
          <p>{secondInnings}</p>
          <p>{matchStatus}</p>
        </div>
      </div>
    </li>
  )
}
export default LatestMatch
