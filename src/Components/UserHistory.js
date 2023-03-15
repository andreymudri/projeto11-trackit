import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import UserContext from "./UserContext";
import { useContext } from "react";
import { AppStyle } from "./habitsstyle";
export default function UserHistory() {
    const { user } = useContext(UserContext);
    return (<div>
        <AppStyle>
        <div><Header data-test="header" image={user.image}/></div>
        <Container>
        <Title>Histórico</Title>            
        <SubTitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitle>
        </Container>
        
            <Footer />
            </AppStyle>
    </div>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    margin-top:85px;
`;
const Title = styled.p`
    margin-bottom: 2rem;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;

`;
const SubTitle = styled.h2`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;
`;
