import styled from "styled-components";

export const AppStyle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  margin-top: 75px;
  width:335px;

  color: #666666;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
`;
export const Topper = styled(AppStyle)`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
  }

`;
export const HabitCreation = styled.div`
  display: ${(props) => (props.visibilidade ? "flex" : "none")};
  flex-direction:column;
  form {
    text-align: center;
  }
  h2{
    display:flex;
    justify-content:end;
    align-items:center;
    gap: 10px;
  }
  span{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;

color: #52B6FF;
  }
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
`;

export const Button = styled.button`
  box-sizing: border-box;
margin:2px;
  width: 30px;
  height: 30px;

  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  &.selected {
    background: #cfcfcf;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
  }
  `;
export const Buttons = styled(Button)`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
margin-right:15px;
`
export const TituloHabito = styled.p`
display:flex;
justify-content:space-between;
img{
  height:13px;
   width:13px;
   margin-right:15px;
}
`