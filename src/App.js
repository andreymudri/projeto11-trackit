import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserHistory from './Components/UserHistory';
import Habits from './Components/Habits';
import Today from './Components/Today';
import Register from "./Components/Home/Register";
import ResetStyle from "./Style/ResetStyle";
import UserContext from "./Components/UserContext";
import HabbitContext from "./Components/HabbitContext";
import { useState } from "react";
import styled from "styled-components";
function App() {
  const [user, setUser] = useState({});
  const [habbit, setHabbit] = useState({});
  return (
    <div className="App">
      <ResetStyle />
      <AppSize>
      <HabbitContext.Provider value={{ habbit, setHabbit }}>
      <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/hoje" element={<Today />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/historico" element={<UserHistory />} />
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </HabbitContext.Provider>        
        
        </AppSize>
    </div>
  );
}

export default App;

const AppSize = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:375;
`