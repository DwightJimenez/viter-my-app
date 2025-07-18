import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardHome from "./components/pages/developer/home/DashboardHome";
import Home from "./components/pages/website/home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='*'
            element={<h1 className='text-center mt-96'>404 - Not Found</h1>}
          />
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<DashboardHome />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
