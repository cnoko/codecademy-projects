import React from 'react';
import ReactDOM from 'react-dom';
import CopyCat from '../components/CopyCat.js';

class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({
          input: event.target.value
      });
  }

  toggleTape() {
    this.setState({ 
        copying: !this.state.copying 
    });
  }

  render() {
    return <CopyCat 
        copying={this.state.copying} 
        toggleTape={this.toggleTape}
        input={this.state.input}
        onChange={this.handleChange}
        />;
  };
}


ReactDOM.render(
    <CopyCatContainer />, 
    document.getElementById('app')); 