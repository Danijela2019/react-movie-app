import styled from 'styled-components';
import background from '../../../assets/blade_runner.jpg'


export const LoginBackground = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ),
url(${background}); ;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
box-shadow: 40px 40px 210px 130px black inset; 
`;

export const LoginContainer = styled.section`
 border-radius: 8px;
height: 400px;
 background: #3a3535;
 z-index: 100;
 opacity:.6;
 margin: 100px auto;
 max-width: 500px;
 padding: 45px 16px;
`

export const FormContainer = styled.form`
width: 400px;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto; 
    display:flex;
    flex-direction:column;
`

export const FormField = styled.div`
position: relative;
  margin-bottom:15px;
`

export const FormControl =  styled.input`
    width:100%;
    height:50px;
    border:none;
    padding:5px 7px 5px 15px;
    background:#fff;
    color:#666;
    border:2px solid #ddd;
      &:focus, &:focus {
        border-color:#13b300;
        color:#13b300}`


export const FormIcons = styled.span`
position: absolute;
  right:15px;
  top:17px;
  color:#999;
`
      

