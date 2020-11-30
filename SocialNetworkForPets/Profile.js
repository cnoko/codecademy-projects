import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userData: null
    };
  }
  get isLoading() {
    return this.state.userData === null;
  }
  loadUserData() {
    this.setState({
      userData: null
    });
    this.fetchID = fetchUserData(this.props.username, (userData) => {
  this.setState({ userData });
});
  }
  componentDidMount() {
    this.loadUserData();
  }
  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }
  componentDidUpdate(prevProps) {
    if(this.props.username !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }
  render() {
    let name, bio, friends, img;
    if (this.isLoading) {
      name = 'Loading...'
      bio = 'Bio...';
      friends = [];
      img = '';
    } else {
      name = this.state.userData.name;
      bio = this.state.userData.bio;
      friends = this.state.userData.friends;
      img = <img src={this.state.userData.profilePictureUrl} alt="" />;

    }

    let className = 'Profile';
    if (this.isLoading) {
      className += ' loading';
    }

    return (
      <div className={className}>
        <div className="profile-picture">{img}</div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}