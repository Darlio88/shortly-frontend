import React, {useEffect, useState} from "react";
import axios from 'axios'

import styled from "styled-components"
import tw from 'twin.macro'
import { Link } from "react-router-dom";

import { FiLink, FiAlignCenter} from "react-icons/fi";

import {colors} from '../assets/colors'
import blob from '../assets/blob-main.png'


const WelcomeContainer = styled.div`
width:100vw;
heiht:100vh
flex:1;
${
  tw`
  px-5
  md:px-16
  `
}
`
const HeaderContainer = styled.div`
min-height:64px;
@media(min-width:678px){
  margin-bottom: 12px;
}
${tw`

flex
w-full
items-center
justify-between
`}
`
const HeaderLeft = styled.div`
flex:3;
${tw`
hidden
md:flex

justify-between
items-center
list-none
`}
`
const HeaderRight = styled.div`
flex:2;
${tw`
flex

justify-between
items-center
list-none
`}
`

const HeaderLinks =styled.h1`
color: #31093E;
cursor:pointer;
&:hover {
  color:#AC0E29;
}
${
  tw`font-semibold text-base `
}
`
const HeaderTitle = styled.h1`
color: #C106AD;
text
${tw`
text-3xl
font-bold
md:text-6xl
`}
`



const WelcomeContent = styled.div`
${tw`
mt-8
md:flex
w-full
justify-between
items-center
`}
`
const ContentLeft = styled.div`
flex:1
${tw``}
`
const ContentRight = styled.div`
flex:1
@media(max-width:768px){
  display:none;
}
${tw`

`}`
const Image =styled.img`

@media(max-width:768px){
  display:none;
}
width:440px;
height:auto;
inline-block
${tw``}
`
const Button = styled.button`
color:#F2F1FD;
min-width:40px;
display:inline-block;
&:hover{
  color:#F2F1FD;
  background-image: linear-gradient(90deg, #31093E,#31093E, #31093E);
  border:1px #F2F1FD solid;
}
background-image: linear-gradient(60deg,#C106AD,#C106AD,#C106AD, #F51230, #F51230);
${tw`
md:px-5 
md:py-3 
py-2
px-3
rounded-3xl
md:rounded-3xl 
transition`}
`

const ContentHeader = styled.h6`
color: #31093E;
${
  tw`
  text-lg
  md:text-4xl
font-bold`
}

`
const ContentBody = styled.p`
color:#A5A1B0;
${
  tw`
  my-5
font-extralight
md:font-light
text-sm
  `
}
`

const Toggler = styled.div`
@media(min-width:680px){
  display:none;
}
`
const InputContainer = styled.div`
box-shadow:-1px 1px 15px -1px #000000;
${tw`
md:my-4
md:max-w-md
my-3
px-2
py-1
rounded-lg
flex

justify-between
items-center
space-x-1
`}
`

const Input = styled.input`
color:
padding-left:4px;
border: 0;
outline:0;
${tw`


px-3
py-2
border-none
rounded-lg
`}
`

const InputHolder = styled.div`
flex:1;
${tw`
flex items-center
`}
`
const Seperator = styled.div`
background-color:#31093E;
min-height:1px;
@media(min-width:768px){

  display:none
  

}
${tw`

`}
`
const ResponseText = styled.p`
${tw`
text-base font-thin
pb-2
`}
`
function Welcome() {
  const baseUrl = process.env.REACT_APP_BASE_URI
const [longUrl, setLongUrl] = useState('')

const [short, setShort] = useState('')

const handleSubmit = () =>{
  console.log(process.env.REACT_APP_BASE_URI)
console.log(longUrl)
axios.post(baseUrl,{url:longUrl}).then(
(response)=>{
  console.log(response)
  setShort(response.data.shortUrl)
}
).catch((err)=>{console.log(err)})


}
  return (
    <WelcomeContainer>
    <HeaderContainer>

      <HeaderRight>
      <HeaderTitle>Shortly</HeaderTitle>
      </HeaderRight>
      <HeaderLeft>
        <HeaderLinks>Features</HeaderLinks>
        <Link to='/signin'  >
        <HeaderLinks>Signin</HeaderLinks>
        </Link>
        <Link to='/signup' >
        <HeaderLinks>Signup</HeaderLinks>
        </Link>
        <Button>Get started</Button>
      </HeaderLeft>
      <Toggler>
      <FiAlignCenter size={24} color='#31093E'/>
      </Toggler>
     
      </HeaderContainer>  
<Seperator>
  </Seperator>
  <WelcomeContent>
  <ContentLeft>
<ContentHeader>
  A simple but <br></br>powerful tool for Business
  </ContentHeader>
  <ContentBody>
  Lorem Ipsum has been the industry's<br></br>
   standard 
  dummy text ever since the 1500s,<br></br> 
  when an unknown printer took a galley of type 
  <br></br>
  and scrambled it to make a type specimen book. 
  <br></br>
  It has survived not only five centuries,
  <br></br>
   but also the leap into electronic typesetting, 
   remaining essentially unchanged. 
  </ContentBody>
  <InputContainer>
<InputHolder >
<FiLink size={24} color={colors.gray}/>
  <Input 
  value={longUrl}
  onChange={(e)=>setLongUrl(e.target.value)}
  placeholder="Enter your url here" />
</InputHolder>
  <Button
  onClick={handleSubmit}
   >Get Link</Button>
  </InputContainer>
  {short && (<ResponseText>
    {short}
  </ResponseText>)}
  <Button>Get Started</Button>
  </ContentLeft>
<ContentRight>
<Image  src={blob} alt='blob' />
  </ContentRight>
  </WelcomeContent>
    </WelcomeContainer>
  );
}

export default Welcome;
