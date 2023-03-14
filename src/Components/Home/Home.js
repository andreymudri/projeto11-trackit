import homeIcon from '../../Assets/homeIcon.png';
import {HomeStyle, Button, Input, Form, Registrar} from './HomeStyle';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import {UserContext} from '../context'
export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(UserContext);
    function signIn(e) {
        e.preventDefault();

        setLoading(true)
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body = {
            email: email,
            password: password
        };
    
        const promise = axios.post(URL, body)
        promise.then(response => {
            setUser(response.data);
            console.log(setUser);
            navigate("/hoje");
            setLoading(false);
        })

        promise.catch(error => {
            alert(error.response.data.message)
            setLoading(false)})
    }  
    return (<HomeStyle>
        <img src={homeIcon} alt="home-icon" />
        <Form onSubmit={signIn}>

        <Input
          type="text"
          placeholder="E-mail"
          name={"email"}
          value={email}
          onChange={e => setEmail(e.target.value)}
                required
                disabled={loading}
                data-test="email-input"
        />        <Input
          type="password"
          placeholder="Senha"
          name={"password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
                required
                disabled={loading}
                data-test="password-input"
        />
            <Button disabled={loading} data-test="login-btn">{!loading ? <>Entrar</> : <ThreeDots 
                height="13" 
                width="51" 
                radius="9"
                color="white" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                
 />}</Button>
      </Form>

        
      <Registrar><Link to='/cadastro' data-test="signup-link" >Não tem uma conta? Cadastre-se!</Link></Registrar>



    </HomeStyle>
    )
}