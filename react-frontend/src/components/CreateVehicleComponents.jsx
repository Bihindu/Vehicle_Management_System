import React from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleService from '../services/VehicleService';

function CreateVehicleComponents() {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        type: '',
        brand: '',
        number: '',
        phoneNumber: '',
    });

    const saveVehicle = (e) => {
        e.preventDefault();
        let vehicle = { ...formData };
        console.log('vehicle => ' + JSON.stringify(vehicle));

        VehicleService.createVehicle(vehicle).then((res) => {
            navigate('/vehicles'); // Use the navigate function for navigation
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const cancel = () => {
        navigate('/vehicles');
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offser-md-3 mt-5">
                        <h3 className="text-center p-4">Add Vehicle</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Vehicle Brand</label>
                                    <input
                                        placeholder="Enter the Vehicle Brand"
                                        name="brand"
                                        className="form-control"
                                        value={formData.brand}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        placeholder="Enter the Customer's Phone number"
                                        name="phoneNumber"
                                        className="form-control"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Vehicle Type</label>
                                    <input
                                        placeholder="Enter the Vehicle Type"
                                        name="type"
                                        className="form-control"
                                        value={formData.type}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Vehicle Number</label>
                                    <input
                                        placeholder="Enter the Vehicle Number"
                                        name="number"
                                        className="form-control"
                                        value={formData.number}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button className="btn btn-success" onClick={saveVehicle}>
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={cancel}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateVehicleComponents;
