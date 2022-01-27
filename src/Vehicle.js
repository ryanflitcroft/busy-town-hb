export default function Vehicle(props) {
  console.log('||vehicle: ' + props.vehicle);
  return <div className="vehicle">
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    {props.vehicle === 'car' ? '🚗' : ''}
    {props.vehicle === 'truck' ? '🚚' : ''}
    {props.vehicle === 'bus' ? '🚌' : ''}
    {props.vehicle === 'motorcycle' ? '🏍️' : ''}
  </div>;
}