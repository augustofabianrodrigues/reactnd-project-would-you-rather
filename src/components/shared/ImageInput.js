import React, { Component, createRef, Fragment } from 'react';
import PropTypes from 'prop-types';

class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  loadFile = () => {
    const fileInput = this.ref.current;
    if (!fileInput) return;

    fileInput.click();
  };

  handleChange = (e) => {
    const [file] = e.target.files;
    if (!file) return; // User didn't select a file

    this.props.onChange(file);
  };

  render() {
    return (
      <Fragment>
        <input
          ref={this.ref}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={this.handleChange}
        />
        {this.props.render(this.loadFile)}
      </Fragment>
    );
  }
}

ImageInput.propTypes = {
  render: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageInput;
