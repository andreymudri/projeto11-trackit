import Header from './Header';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import UserContext from './UserContext';
import Trash from '../Assets/trashcan.png'
import { AppStyle, HabitCreation, Topper, Input, Button, Buttons,TituloHabito } from './habitsstyle';
import { useNavigate } from 'react-router-dom';


export default function Habits() {
    const [creatingHabit, setCreatingHabit] = useState(false)
    const { user } = useContext(UserContext);
    const [habitsList, setHabitsList] = useState([]);
    const [dias, setDias] = useState([]);
    let [nome, setNome] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const createhabit = {
        name: nome,
        days: dias
    };
    
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    };
    useEffect(() => {
        setLoading(true);
        axios.get(URL, config)
            .then(response => {
                setHabitsList(response.data);
                setLoading(false);
            })
            .catch(response => console.log(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleButtons(id) {
        if (dias.includes(id)) {
            setDias(dias.filter(d => d !== id))
        } else {
            setDias([...dias, id])
        }
    }


    function handleHabit() {
        setLoading(true);
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
       const response = axios.post(URL, createhabit, config)
            response.then(() => {
                console.log('postado');
                navigate('/hoje');
                setLoading(false);
            })
        response.catch(error => {
            alert(error.response.data.message)
            setLoading(false)})

            
    }

    function deleteHabit(id) {
        const confirmed = window.confirm("Tem certeza que quer deletar este habito?");
        setLoading(true);
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        if (confirmed) {
            const res = axios.delete(URL, config)
                .then(() => {
                    console.log('Deletera');
                    navigate('/hoje');
                    setLoading(false);
                })
            res.catch(error => {
                alert(error.response.data.message)
                setLoading(false)
            })
        }
    }


    return (
        <AppStyle>
            <div><Header data-test="header" image={user.image}/></div>
            <Topper><h1>Meus hábitos</h1><button onClick={() => setCreatingHabit(true)} data-test="habit-create-btn">+</button></Topper>
            <HabitCreation visibilidade={creatingHabit} data-test="habit-create-container">
                <form>
                <Input
                        type="text"
                        data-test="habit-name-input"
                        placeholder="nome do hábito"
                        value={nome}
                        onChange={e => { setNome(e.target.value)}}
                    />
                    <div>
                        <Button data-test="habit-day"
        className={dias.includes("0") ? "selected" : ""} type="button" onClick={()=> handleButtons('0')}> D</Button>
                        <Button data-test="habit-day"
        className={dias.includes("1") ? "selected" : ""} type="button" onClick={()=> handleButtons('1')}> S</Button>
                        <Button data-test="habit-day"
        className={dias.includes("2") ? "selected" : ""} type="button" onClick={()=> handleButtons('2')}> T</Button>
                        <Button data-test="habit-day"
        className={dias.includes("3") ? "selected" : ""} type="button" onClick={()=> handleButtons('3')}> Q</Button>
                        <Button data-test="habit-day"
        className={dias.includes("4") ? "selected" : ""} type="button" onClick={()=> handleButtons('4')}> Q</Button>
                        <Button data-test="habit-day"
        className={dias.includes("5") ? "selected" : ""} type="button" onClick={()=> handleButtons('5')}> S</Button>
                        <Button data-test="habit-day"
        className={dias.includes("6") ? "selected" : ""} type="button" onClick={()=> handleButtons('6')}> S</Button>
                    </div>                    
                </form>
                <h2><span data-test="habit-create-cancel-btn" onClick={()=>setCreatingHabit(false)}>cancelar</span> <Buttons data-test="habit-create-save-btn" onClick={()=>{handleHabit()}}>Salvar</Buttons></h2>
            </HabitCreation>

            
            {loading === true ? 'Carregando...' : habitsList.length === 0 ?
                "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
                :
                habitsList.map((h) => {
                return (
                    <div key={h.key} data-test="habit-container">
                        <TituloHabito data-test="habit-name">{h.name} <img src={Trash} alt="trash" onClick={()=>deleteHabit(h.id)} data-test="habit-delete-btn"/></TituloHabito>
                        <Button data-test="habit-day"
        className={h.days.includes(0) ? "selected" : ""} type="button" onClick={()=> handleButtons('0')}> D</Button>
                        <Button data-test="habit-day"
        className={h.days.includes(1) ? "selected" : ""} type="button" onClick={()=> handleButtons('1')}> S</Button>
                        <Button data-test="habit-day"
        className={h.days.includes(2) ? "selected" : ""} type="button" onClick={()=> handleButtons('2')}> T</Button>
                        <Button data-test="habit-day"
        className={h.days.includes(3) ? "selected" : ""} type="button" onClick={()=> handleButtons('3')}> Q</Button>
                        <Button data-test="habit-day"
        className={h.days.includes(4) ? "selected" : ""} type="button" onClick={()=> handleButtons('4')}> Q</Button>
                        <Button data-test="habit-day"
        className={h.days.includes(5) ? "selected" : ""} type="button" onClick={()=> handleButtons('5')}> S</Button>
                        <Button data-test="habit-day"
        className={h.days.includes(6) ? "selected" : ""} type="button" onClick={()=> handleButtons('6')}> S</Button> 
                    </div>
            )})}
            <Footer/>
        </AppStyle>
        )
}

