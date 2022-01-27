import React from 'react';

export default function TrafficLight(props) {
 
  return (
    <div className='traffic-light'>
      <div className={`red circle ${props.color === 'red' ? 'on' : ''}`} ></div>
      <div className={`yellow circle ${props.color === 'yellow' ? 'on' : ''}`}></div>
      <div className={`green circle ${props.color === 'green' ? 'on' : ''}`}></div>
    </div>
  );
}
