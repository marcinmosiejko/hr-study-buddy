import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

class UsersList extends React.Component {
  state = {
    users: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    mockAPI()
      .then((data) => this.setState({ users: data, isLoading: false }))
      .catch((err) => console.error(err.message));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.isLoading !== this.state.isLoading)
      console.log('Loading state has changed');
  }

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading data...' : 'Users list'}</h1>
        <ul>
          {this.state.users?.map((userData, i) => (
            <UsersListItem
              deleteUser={this.deleteUser}
              index={i}
              key={Object.values(userData).join('')}
              userData={userData}
            />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default UsersList;
