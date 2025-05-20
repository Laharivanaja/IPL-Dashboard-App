// Write your code here
import TeamCard from '../TeamCard'

import './index.css'

const Home = () => (
  <div className="background">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
      />
      <h1>IPL Dashboard</h1>
    </div>
    <div className="blog-list ">
      <TeamCard />
    </div>
  </div>
)

export default Home
