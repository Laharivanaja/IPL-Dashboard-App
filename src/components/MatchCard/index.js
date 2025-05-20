// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
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
  } = matchCardDetails
  return (
    <li key={id}>
      <div className="background">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="image"
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
