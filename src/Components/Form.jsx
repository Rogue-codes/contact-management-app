import React, { useState } from 'react'
import styled from 'styled-components'
const Formm = styled.form`
    @media (max-width:450px) {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
    }
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5%;
    padding: 2%;
    input{
        @media (max-width:450px) {
            width: 100%;
            margin-bottom: 5%;
            height: 8vh;
            font-size: .7rem;
        }
        width: 30%;
        height: 6vh;
        border-radius: 5px;
        font-size: 1vw;
        border: 1px solid lightgrey;
        padding-left: 1%;
        &:focus{
            outline: none;
        }
    }
    button{
        @media (max-width:450px) {
            width: 30%;
            font-size: .8rem;
        }
        width: 10%;
        height: 6vh;
        border-radius: 5px;
        border: none;
        background: lightgreen;
        font-size: 1vw;
        cursor: pointer;
        &:hover{
            background: #65a165;
        }
    }
`
    function Form({handleAddCard}) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [emal, setEmal] = useState('')

    const handlesubmit = (e) => {
        // prevent the browser from refreshing when we click on the save button
        e.preventDefault()

        // a funtion coming from our App.js component. 
        // this will take the value of inputs and pass them to the notes array
        handleAddCard(name,number,emal)
        // this will empty the name input after submiting
        setName('')

        // this will empty the Phone input after submiting
        setNumber('')

        // this will empty the Email input after submiting
        setEmal('')
    }
  return (
    <Formm onSubmit={handlesubmit}>
        <input type="text"  value = {name} onChange={(e) => setName(e.target.value)} placeholder='Name' name="staff" />
        <input type="number" value = {number}  onChange={(e) => setNumber(e.target.value)} placeholder='phone' name="phone" id="" />
        <input type="email" name="email" value = {emal}  onChange={(e) => setEmal(e.target.value)} placeholder='email' id="" />
        <button>save</button>
    </Formm>
  )
}

export default Form