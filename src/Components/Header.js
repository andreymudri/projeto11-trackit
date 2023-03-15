
import styled from "styled-components";
export default function Header({image}) {
    
    return (
        <Topo data-test="header"><span>TrackIt!</span>   <Imagem src={image}/></Topo>
    )
}
    

const Topo = styled.div`
display:flex;
justify-content:space-between;
width:100%;
align-items: center;
color: #FFFFFF;
height: 70px;
background-color:#126BA5;
position:fixed;
top:0px;
left:0px;
span{
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
margin-left:10px;}
`

const Imagem = styled.img`
border-radius: 98.5px;
width: 51px;
height: 51px;
margin-right:20px;
`;