import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Ticketbooking from "./pages/ticketbooking/ticketbooking";
import Ticketcancel from "./pages/ticketcancel/ticketcancel";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Ticketdetails from "./pages/ticketdetails/ticketdetails";
import AuthRoute from "./authRoute";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/booking' element={<AuthRoute><Ticketbooking/></AuthRoute>} />
        <Route exact path='/cancel' element={<AuthRoute><Ticketcancel/></AuthRoute>}/>
        <Route exact path='/details' element={<AuthRoute><Ticketdetails/></AuthRoute>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
