import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// this component is used to render images pulled by fotos component

export default class Lightbox extends Component {
  static propTypes = {
    misFotos: PropTypes.array.isRequired,
  }

  render() {
    const { misFotos } = this.props;
    return (
      <div>
        {misFotos.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </div>
    );
  }
}