export default function Vehicle(props) {
  console.log('||' + props);
  return <div className="vehicle">
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    <span>{props.vehicle === 'car' ? '🚗' : ''}</span>
    <span>{props.vehicle === 'truck' ? '🚚' : ''}</span>
    <span>{props.vehicle === 'car' ? '🚌' : ''}</span>
    <span>{props.vehicle === 'car' ? '🏍️' : ''}</span>
  </div>;
}