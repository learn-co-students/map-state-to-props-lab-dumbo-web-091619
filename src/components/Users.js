import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    debugger
    const renderedUsers = this.props.users.map((user) => {
      return <li>{user.username}</li>
    })

    const countOfUsers = this.props.users.length

    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {renderedUsers}
          {/* In addition, display the total number of users curently in the store */}
          {countOfUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return ({ users: state.users, userCount: state.userCount })
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
