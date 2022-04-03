import React from 'react'
import styled from 'styled-components'
import {MdDeleteForever} from 'react-icons/md'

const Noted = styled.div`
    height: 25vh;
    background: lightgreen;
    margin-top: 5%;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 5%;
    justify-content: center;
    border-radius: 10px;
    padding: 2%;
    position: relative;
    .md{
        position: absolute;
        bottom: 2%;
        cursor: pointer;
        left: 85%;
        transition: all .3s linear;
        &:hover{
            transform: scale(1.1);
            color: red;
        }
    }
    p{
        @media (max-width:450px) {
            font-size: 1rem;
        }
        font-size: 1.3vw;
    }
`
function Note({userName,PhoneNumber,EmailAdd,id,date,deleteNote}) {
  return (
      
    <Noted>
        <p><b>Employee:</b> {userName}</p>
        <p><b>Phone:</b> {PhoneNumber}</p>
        <p><b>Work Mail:</b> {EmailAdd}</p>
        <p><b>date:</b> {date}</p>
        <MdDeleteForever onClick={()=>deleteNote(id)} className='md' size='1.6rem'/>
    </Noted>
  )
}

export default Note