import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponents';
import HeaderComponent from './components/HeaderComponents';
import ListVehicleComponent from './components/ListVehicleComponents'; 
import CreateVehicleComponent from './components/CreateVehicleComponents';
import UpdateVehicleComponent from './components/UpdateVehicleComponents';
import ViewVehicleComponent from './components/ViewVehicleComponents';
import LottieAnimation from './pages/home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
          <Sidebar />
            <Routes>
              <Route path="/" element={<LottieAnimation />} />
              <Route path="/vehicles" element={<ListVehicleComponent />} />
              <Route path="/add-vehicle" element={<CreateVehicleComponent />} />
              <Route path="/update-vehicles/:id" element={<UpdateVehicleComponent/>} />
              <Route path="/view-vehicles/:id" element={<ViewVehicleComponent/>} />
              
              
            </Routes>
          </div>
          <FooterComponent />
        
      </Router>
    </div>
  );
}

export default App;