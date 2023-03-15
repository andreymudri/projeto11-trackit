import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import UserContext from "./UserContext";
import { useContext } from "react";
export default function UserHistory() {
    const { user } = useContext(UserContext);
    return (<>
        <Header image={user.image}/>
        <Container>
        <Title>Histórico</Title>            
        <SubTitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitle>
        </Container>
        
        <Footer />
    </>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #f5f5f5;
    margin-top:70px;
`;
const Title = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    color: #2f2f2f;
    margin-bottom: 1rem;
`;
const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #2f2f2f;
    margin-bottom: 1rem;
`;
