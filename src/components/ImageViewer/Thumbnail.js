import React from 'react';

const Thumbnail = ({ image, className, title }) => (
  <img src={image} alt={title} className={className} />
);

export default Thumbnail;
