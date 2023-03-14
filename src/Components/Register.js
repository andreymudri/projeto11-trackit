import homeIcon from '../Assets/homeIcon.png';
import {HomeStyle, Button, Input, Form, Registrar} from './Home/HomeStyle';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Register() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();
    function signUp(e) {

const body = {
	email: "...",
	name: "...",
	image: "...",
	password: "..."
        }
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        const promise = axios.post(URL, body)
        promise.then(response => {
            navigate("/");
            setLoading(false);
            alert('cadastro completo!')
        })

        promise.catch(error => {
            alert(error.response.data.message)
            setLoading(false)})
    }






    return (
        <HomeStyle>
            <img src={homeIcon} alt="home-icon" />
        
            





        </HomeStyle>
        
)

}