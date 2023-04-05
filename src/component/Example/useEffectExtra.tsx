import React, { Component } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  userId: number;
};

type State = {
  user: User | null;
};

class UserDetail extends Component<Props, State> {
  state: State = {
    user: null,
  };

  componentDidMount() {
    const { userId } = this.props;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => this.setState({ user: data }));
  }

  componentDidUpdate(prevProps: Props) {
    const { userId } = this.props;

    if (prevProps.userId !== userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => this.setState({ user: data }));
    }
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>User Detail</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}

export default UserDetail;
