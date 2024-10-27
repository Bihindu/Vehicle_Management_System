import React, { useEffect, useState } from 'react';
import VehicleService from '../services/VehicleService';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ListVehicleComponents = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  const editVehicle = (id) => {
    navigate(`/update-vehicles/${id}`);
  };

  const deleteVehicle = (id) => {
    VehicleService.deleteVehicle(id).then(() => {
      setVehicles((prevVehicles) => prevVehicles.filter((vehicle) => vehicle.id !== id));
    });
  };

  const viewVehicle = (id) => {
    navigate(`/view-vehicles/${id}`);
  };


  const handleReportGen = () => {
    const doc = new jsPDF();
  
    doc.text("Vehicle Service Report", 20, 8);
  
    doc.autoTable({
      head:[["Type", "Brand", "Number", "Phone"]],
      body: vehicles.map(vehicle => [vehicle.type, vehicle.brand, vehicle.number, vehicle.phoneNumber]),
      headStyles: {
        fillColor: [0, 51, 102],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
      },
    });
  
    doc.save('vehicleServiceReport.pdf');
  }
  


  useEffect(() => {
    VehicleService.getVehicles().then((res) => {
      setVehicles(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center pt-5">Vehicle List</h2>
      <button style={{ marginLeft: '10px' }} onClick={() =>handleReportGen() } className="btn btn-outline-primary m-2 ml-5" > Generate Report </button>
      <div className="row">
      </div>
        <div className="row">
          <table className="table table-striped table-bordered ml-5">
            <thead>
              <tr>
                <th>Vehicle type</th>
                <th>Vehicle Brand</th>
                <th>Vehicle Number</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.number}</td>
                  <td>{vehicle.phoneNumber}</td>
                  <td>
                    <button onClick={() => editVehicle(vehicle.id)} className="btn btn-primary">
                      Update
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => deleteVehicle(vehicle.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => viewVehicle(vehicle.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ListVehicleComponents;
