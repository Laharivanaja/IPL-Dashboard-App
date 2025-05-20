import {Link} from 'react-router-dom'

import './index.css'

const TeamItem = props => {
  const {teamCardDetails} = props
  const {name, id, teamImageUrl} = teamCardDetails
  return (
    <li className="bg">
      <Link to={`/team-matches/${id}`}>
        <p className="name">{name}</p>
        <img src={teamImageUrl} alt={name} />
      </Link>
    </li>
  )
}
export default TeamItem
