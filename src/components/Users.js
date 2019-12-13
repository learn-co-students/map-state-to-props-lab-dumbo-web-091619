import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { stat } from 'fs';

class Users extends Component {

  render() {
    let users = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          {users}
          {users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
