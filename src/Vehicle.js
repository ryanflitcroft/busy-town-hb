export default function Vehicle(props) {

  return <div className="vehicle">
    <span>{props.vehicle === 'car' ? '🚗' : ''}</span>
    <span>{props.vehicle === 'truck' ? '🚚' : ''}</span>
    <span>{props.vehicle === 'bus' ? '🚌' : ''}</span>
    <span>{props.vehicle === 'motorcycle' ? '🏍️' : ''}</span>
  </div>;
}