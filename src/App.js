// import Global from '../src/styles/Global.module.scss'
import Subscribe from './pages/Newsletter/Subscribe';
import SuccessState from './pages/Success/SuccessState';
import { Route, Routes } from "react-router-dom";



function App() {
  return (

      <Routes>
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/success" element={<SuccessState />} />
      </Routes>


    
  );
}

export default App;
