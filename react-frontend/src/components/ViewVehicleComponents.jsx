import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate
import VehicleServices from '../services/VehicleService';

const ViewVehicleComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // Initialize useNavigate
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    VehicleServices.getVehicleById(id).then((res) => {
      setVehicle(res.data);
    });
  }, [id]);

  const cancel = () => {
    navigate('/vehicles');
  };

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3 mt-3">
        <h3 className="text-center p-4"> View Vehicle Details</h3>
        <div className="card-body">
          <div className="row">
            <label> Vehicle type: </label>
            <div> {vehicle.type}</div>
          </div>
          <div className="row">
            <label> Vehicle Brand: </label>
            <div> {vehicle.brand}</div>
          </div>
          <div className="row">
            <label> Vehicle Number: </label>
            <div> {vehicle.number}</div>
          </div>
          <div className="row">
            <label> Phone Number: </label>
            <div> {vehicle.phoneNumber}</div>
          </div>
        </div>
        <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: '10px' }}>Go Back</button>
      </div>
    </div>
  );
};

export default ViewVehicleComponent;
