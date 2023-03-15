import Header from './Header';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import UserContext from './UserContext';
import HabbitContext from './HabbitContext';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { AppStyle } from './habitsstyle';
export default function Today() {
    const { user } = useContext(UserContext);
    const [todayhabits, setTodayHabits] = useState([]);
    const { Habits, setHabbit } = useContext(HabbitContext);
    const data = dayjs().locale('pt-br');
    const dataformat = data.format('dddd, DD/MM')

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        const promise = axios.get(URL, config);
        promise.then(response => {
            setTodayHabits(response.data)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <AppStyle>
            <Link to="/"> <Header data-test="header" image={user.image} /></Link>
            <p onClick={() => { console.log(todayhabits) }}>{dataformat}</p>
            {todayhabits === 0 &&'Nenhum hábito concluído ainda'}
            {todayhabits >= 1 && todayhabits.map((h) => {
                return <HabitoDeHoje key="h.id">
                    <p>{h.name}</p>
                    {h.days.map(day => {
                        return dayjs().day(day).format('dddd');
                    })}</HabitoDeHoje>
            })}
                    
                
            <Footer />
        </AppStyle>
    )
}

const Corpo = styled.div`
margin-top:70px;
`

const HabitoDeHoje = styled.div`
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
`