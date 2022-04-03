import React from 'react'
import styled from 'styled-components'
import {BsFillMoonFill} from 'react-icons/bs'

const Navi = styled.nav`
    width: 100%;
    height: 15vh;
    border-bottom: 1px solid lightgreen;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    color: ${props => props.cl};
`
const Head = styled.h1`
    display: inline-block;
    font-size: 3vw;
    @media (max-width:450px) {
        font-size: 2rem;
    }
`
const Sm = styled.span`
    font-size: 1.3vw;
    font-weight: 300;
    @media (max-width:450px) {
        font-size: .6rem;
    }
`

const Btn = styled.button`
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
`

function Nav({Switcher,darkMode}) {
  return (
    <Navi cl={darkMode ? '#f0f8ff': '#0a051d'}>
        <Head>HR<Sm>contact management Application</Sm></Head>
        <Btn onClick={Switcher}><BsFillMoonFill></BsFillMoonFill></Btn>
    </Navi>
  )
}

export default Nav