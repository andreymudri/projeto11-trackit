import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import UserContext from "./UserContext";
import HabbitContext from "./HabbitContext";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { AppStyle } from "./habitsstyle";
import Check from "../Assets/Check.png";
import Uncheck from "../Assets/Uncheck.png";

export default function Today() {
  const { user } = useContext(UserContext);
  const [todayhabits, setTodayHabits] = useState([]);
  const { habbit, setHabbit } = useContext(HabbitContext);
  const data = dayjs().locale("pt-br");
  const dataformat = data.format("dddd, DD/MM");
  const [loading, setLoading] = useState(false);
  const [updateRender, setUpdateRender] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    setLoading(true);
    const promise = axios.get(URL, config);
    promise.then((response) => {
      setLoading(false);
      setTodayHabits(response.data);

    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateRender]);

  function handleCheck(id, done ) {
    let checkers = "uncheck";
    !done ? (checkers = "check") : (checkers = "uncheck");
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${checkers}`;
    setLoading(true);
    const promise = axios.post(URL,null, config);
    promise.then((response) => {
      setLoading(false);
      setUpdateRender(!updateRender);

    });
  }
  useEffect(() => {
    const quantHabitos = todayhabits.length;
    const habitosFeitos = todayhabits.filter(d => d.done === true);
    const porcentagem = (quantHabitos > 0 ? (habitosFeitos.length / quantHabitos) * 100 : 0).toFixed(2);
    
    setHabbit(porcentagem);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todayhabits]);
  
  
  if (loading) {
    return (
      <AppStyle>
        <Link to="/">
          {" "}
          <Header data-test="header" image={user.image} />
        </Link>
        Carregando
        <Footer />
      </AppStyle>
    );
  }
  return (
    <AppStyle>
      <Link to="/">
        {" "}
        <Header data-test="header" image={user.image} />
      </Link>
      <p
                data-test="today"
      >
        {dataformat}
      </p>
      {todayhabits.length === 0 ? (
        <div data-test="today-counter">{`"Nenhum hábito concluído ainda"`}</div>
) : (
  <HabitosConcluidos data-test="today-counter">{`${habbit}% dos hábitos concluídos`}</HabitosConcluidos>
)}

      {todayhabits.length >= 1 &&
        todayhabits.map((h) => {
          return (
            <HabitoDeHoje key={h.id} data-test="today-habit-container">
              <Texto>
               
                <p data-test="today-habit-name">{h.name}</p>
                <Textao data-test="today-habit-sequence">Sequência atual: <GreenText done={h.done}> {h.currentSequence} dias</GreenText></Textao>
                <br />
                <Textao data-test="today-habit-record">
                Seu recorde:
                <Recorde
                  done={h.done}
                  currentSequence={h.currentSequence}
                  highestSequence={h.highestSequence}>{h.highestSequence} dias
                  </Recorde>
                  </Textao>
              </Texto>

              <Botaozao
                src={h.done ? Check : Uncheck}
                onClick={() => handleCheck(h.id, h.done)}
                alt={h.done ? Check : Uncheck}
                data-test="today-habit-check-btn"
              />
            </HabitoDeHoje>
          );
        })}

      <Footer />
    </AppStyle>
  );
}

const HabitosConcluidos = styled.div`
display:flex;
color: #8FC549;
`
const Textao = styled.div`
display:flex;
`
const Recorde = styled.div`
display:flex;
  color: ${(props) =>
    props.done && props.currentSequence === props.highestSequence
      ? "#8FC549"
      : "#666666"};
`
const GreenText = styled.h4`
    color: ${props => props.done ? "#8FC549" : "#666666"};

`

const HabitoDeHoje = styled.div`
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 25px;
  margin-bottom: 25px;
  align-items: center;
  text-align: center;
`;
const Texto = styled.div``;
const Botaozao = styled.img`
  margin-right: 5px;
  width: 69px;
  height: 69px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 1);
  background: #ebebeb;
`;
