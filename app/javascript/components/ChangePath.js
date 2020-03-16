import React from "react"
import {NavLink} from "react-router-dom"

class ChangePath extends React.Component {
  render(){
    return (
      <div className="app">
        <div>
          <ul className="menus">
            <li><NavLink to="/slides" activeClassName="active">Slides</NavLink></li>
          </ul>
        </div>
        <div className="clear">
        </div>
        {this.props.children}
      </div>
    )
  }
}
export default ChangePath
