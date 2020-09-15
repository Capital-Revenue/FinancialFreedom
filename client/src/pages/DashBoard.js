import React from "react"
import "./DashBoard.css"
import { Link } from 'react-router-dom';
import Logout from "../component/Logout";

function DashBoard() {
  return(

    <div className="DashBoard">
      <div className="introImage center"></div>
      {/* company name */}
      <h2 className="introText uperLeft">Capital-Revenue!</h2>
      <div className="container center">
        {/* project name */}
        <h4 className="introText center">DashBoard!</h4>

        <h5 className="introText center">What would you like to do?</h5>
      </div>
      <div>
      <Link to="/BudGet"><button className="btn waves-effect waves-light" id="logIn-submit" name="action">Adjust your Budget
          </button></Link>
        </div>
        <div>
        <Link to="/Investments"><button className="btn waves-effect waves-light" id="logIn-submit" name="action">View Potential Investments
          </button></Link>
        </div>
        <Logout />
    </div>
    )
}
export default DashBoard