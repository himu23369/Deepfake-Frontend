import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Dashboard } from './pages/Dashboard';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { LandingPage } from "./pages/LandingPage";
import UserState from "./components/context/userState";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <UserState>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Dashboard/>} /> */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserState>
  )
}

export default App;
