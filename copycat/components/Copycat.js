import React from 'react';
import styles from './styles.js';
import ProTypes from 'prop-types'
const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

class CopyCat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const showText = this.props.copying ? this.props.input : '';
    const imgSrc = this.props.copying ? images.copycat : images.quietcat;
    
    return (
      <div style={{styles.divStyles}}>
        <h1>Copy Cat</h1>
        <input 
            type="text"
            value={this.props.input} 
            onChange={this.props.onChange} />
        <img alt='cat'
          style={styles.imgStyles}
          src={imgSrc}
          onClick={this.props.toggleTape}
        />
        <p>{showText}</p>
      </div>
    );
  }
}
CopyCat.propTypes = {
  input: PropTypes.string,
  toggleTape: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  copying: PropTypes.boolean.isRequired
}
export default CopyCat;