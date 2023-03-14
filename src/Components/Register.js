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
        e.preventDefault();
    const body = {
	email: email,
	name: name,
	image: image,
	password: password
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
            <img src={homeIcon} alt="home-icon" onClick={()=> navigate('/') } />
        
            <Form onSubmit={signUp}>

        <Input
          type="text"
          placeholder="E-mail"
          name={"email"}
          value={email}
          onChange={e => setEmail(e.target.value)}
                required
                disabled={loading}
                data-test="email-input"
                />
                <Input
          type="password"
          placeholder="Senha"
          name={"password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
                required
                disabled={loading}
                data-test="password-input"
                />
                <Input
          type="text"
          placeholder="Name"
          name={"name"}
          value={name}
          onChange={e => setName(e.target.value)}
                required
                disabled={loading}
                data-test="user-name-input"
                />
                <Input
          type="url"
          placeholder="Imagem"
          name={"imagem"}
          value={image}
          onChange={e => setImage(e.target.value)}
                required
                disabled={loading}
                data-test="user-image-input"
                />
            <Button disabled={loading} 
                data-test="signup-btn">{!loading ? <>Cadastrar</> : <ThreeDots 
                height="13" 
                width="51" 
                radius="9"
                color="white" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                />}</Button>
                
               <Registrar> <Link to="/" data-test="login-link">Já tem uma conta? Faça login!</Link></Registrar>
      </Form>





        </HomeStyle>
        
)

}