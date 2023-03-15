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
  }, []);

  function handleCheck(id, { done }) {
    let checkers = "uncheck";
    !done ? (checkers = "check") : (checkers = "uncheck");
    console.log(checkers);
    console.log(id);
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${checkers}`;
    setLoading(true);
    const promise = axios.post(URL,null, config);
    promise.then((response) => {
      setLoading(false);
    });
  }
  useEffect(() => {
    const quantHabitos = todayhabits.length;
    const habitosFeitos = todayhabits.filter(d => d.done === true);
    const porcentagem = quantHabitos > 0 ? (habitosFeitos.length / quantHabitos) * 100 : 0;
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
        onClick={() => {
          console.log(habbit);
        }}
        data-test="today"
      >
        {dataformat}
      </p>
      {todayhabits.length === 0
        ? "Nenhum hábito concluído ainda"
        : `${habbit}% dos hábitos concluídos`}
      {todayhabits.length >= 1 &&
        todayhabits.map((h) => {
          return (
            <HabitoDeHoje key={h.id} data-test="today-habit-container">
              <Texto>
               
                <p data-test="today-habit-name">{h.name}</p>
                Sequência atual: {h.currentSequence}
                <br />
                Seu recorde: {h.highestSequence}
              </Texto>

              <Botaozao
                src={h.done ? Check : Uncheck}
                onClick={() => handleCheck(h.id, h.done)}
                alt={h.done ? Check : Uncheck}
              />
            </HabitoDeHoje>
          );
        })}

      <Footer />
    </AppStyle>
  );
}

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
