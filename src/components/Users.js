import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.numOfUsers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    numOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
