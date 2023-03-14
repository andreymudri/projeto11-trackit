
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import UserHistory from './Components/UserHistory';
import Today from './Components/Today';
import Habits from './Components/Habits';
import Register from './Components/Register';
import ResetStyle from './Style/ResetStyle';

function App() {
  return (
    <div className="App">
      <ResetStyle/>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/historico" element={<UserHistory />} />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
