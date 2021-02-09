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
&:after{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.1);
  }
` 

export const LoginContainer = styled.section`
 border-radius: 8px;
height: 400px;
 background: #3a3535;
position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    text-align: center;
    padding: 60px 32px;
    width: 450px;
    transform: translate(-50%,-50%);
    background: rgba(255,255,255,0.04);
    box-shadow: -1px 4px 28px 0px rgba(0,0,0,0.75);
    @media (max-width: 600px) {
    width: 100%;
    padding:10rem 0;
    height:100vh;
    }`

export const FormContainer = styled.form`
width: 400px;
    margin-top: 16px auto;
    display:flex;
    flex-direction:column;
    @media (max-width: 600px) {
    width: 90%;
    }
    @media (max-width: 600px) {
    width: 100%;
    }`


export const FormField = styled.div`
position: relative;
  margin-bottom:20px;
  @media (max-width: 600px) {
    margin-bottom:30px;
}
`
export const FormControl =  styled.input`
    width:100%;
    height:50px;
    border:none;
    padding:5px 7px 5px 15px;
    background:#fff;
    color:#585353;
    font-size:15px;
    border:2px solid #ddd;
    &:focus, &:focus {
        border-color:#13b300;
        color:#13b300}
    @media (max-width: 600px) {
        width: 80%;
        font-size:20px;
    }`


export const FormIcons = styled.span`
position: absolute;
  right:15px;
  top:17px;
  @media (max-width: 600px) {
    right:60px;
    top:17px;
    }`

      
export const LoginText = styled.p`
color:white;
margin-top:10px;
`
export const LoginAnchor = styled.a`
text-decoration: none;
color:white;
margin:0 1rem;
`
export const LoginTextWrapper = styled.div`
display:flex;
align-items:baseline;
margin:auto;`
