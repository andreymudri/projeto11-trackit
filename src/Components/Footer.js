import styled from "styled-components";
import { Link } from "react-router-dom";
import circulo from '../Assets/circulo.png'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import HabbitContext from './HabbitContext';
import { useContext} from "react";
export default function Footer() {

  const {habbit} = useContext(HabbitContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (<Bottom>
        <Options data-test="menu">
            <Link to='/habitos' data-test="habit-link"><div>Habitos</div></Link>
            

        <Link to='/hoje' data-test="today-link">
          
<div><img src={circulo} alt="circulo" />      {habbit === 0 ? '' : <Circulo><CircularProgressbar
        value={habbit}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent"
            })}
          /></Circulo>}
          </div></Link>
            

            <Link to ='/historico' data-test="history-link"><div>Historico</div></Link>

        </Options>
    </Bottom>
)
}

const Bottom = styled.div`
  display: flex;
  position: fixed;
  bottom: 00px;
  left:00px;
  height: 70px;
  align-items: center;
  width: 375px;
  justify-content: space-between;
  margin-left:10px;
  img {
    display:flex;
    width: 70px;

    position:fixed;
    right: 50%;
  transform: translate(40%,-55%);
  }
a{ color: #52B6FF;
  text-decoration:none;
}
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  width:360px;
  justify-content: space-between;
  margin-left: 5px; 
  margin-right: 5px;
`;
const Circulo = styled.div`   
  z-index:1;
  display:flex;
  position:fixed;
  right: 50%;
transform: translate(40%,-55%);
width: 70px;
`
