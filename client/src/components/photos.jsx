import React from 'react';

const Photos = (props) => (
    <div>
      {props.photo.map(photo => (
        <img className="food" src={photo} width="500"/>
      ))}
    </div>
);

export default Photos;
