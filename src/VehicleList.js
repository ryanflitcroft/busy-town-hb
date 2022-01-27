import React from 'react';
import Vehicle from './Vehicle';

export default function VehicleList(props) {

  return (
    <div className="traffic">
      {props.vehicles.map((vehicle, i) => 
        <Vehicle key={vehicle + i} vehicle={vehicle} />
      )}
    </div>
  );
}