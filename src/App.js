import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Note from './Components/Note';
import {nanoid} from 'nanoid'
import Form from './Components/Form';
import Nav from './Components/Nav';


const Notes = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    z-index: 50;
    background: ${props => props.bg};
    transition: all .5s linear;
`

const Noted = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
    justify-content: space-between;
    padding: 3%;
    gap: 2%;
`

function App() {
  // state for dark mode
  const [darkMode, setDarkMode] = useState(false)

  // state for the notes array
  const [notes, setNotes] = useState([

  ])

  // function that grabs the value from the inputs. it will be passed as a prop to *Form component*
  const AddCard = (userName,PhoneNumber,EmailAdd) => {

    if(userName === '' || PhoneNumber === '' || EmailAdd === '' ){
      alert('Fill in all the inputs field...')
      return
    }
    // getting the date
    const date = new Date()

    // an object that will take values of the inputs from *Form-components*
    const newNote = {
      id: nanoid(),
      userName:userName,
      PhoneNumber:PhoneNumber,
      EmailAdd:EmailAdd,
      date: date.toLocaleDateString()
    }

    // this will replace the *notes state* with the value of *newNotes*
    const newNotes = [...notes,newNote]

    // this will update the state of *notes* with *newNotes*
    setNotes(newNotes)


  }

  // this function will delete an object in the notes array
  const deleteNote = (id) => {
    const newNotes =  notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }
  
  // this function will set darkmode to the opposite of it's initial value
  const Switcher = () => {
    setDarkMode(!darkMode)
  }

  // this will retrieve the objects in the notes array from the local storatge whenever we refresh our browser
  useEffect(()=>{
    const savedItems = JSON.parse(localStorage.getItem('EmloyeeDetails'))

    if(savedItems){
      setNotes(savedItems)
    }
  },[])

  // this will save the notes array to the localStorage
  useEffect(() => {
    localStorage.setItem('EmloyeeDetails', JSON.stringify(notes))
  },[notes])

  // this will retrieve the state of the darkMode from the local storatge and change the 
  // background to the state of our darkMode whenever we refresh our browser
  useEffect(()=>{
    const savedTheme = JSON.parse(localStorage.getItem('theme'))

    if(savedTheme){
      setDarkMode(savedTheme)
    }
  },[])

  // this will save the state of darkMode to the localStorage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode))
  },[darkMode])


  return (
    <Notes bg={darkMode ? '#0a051d' : '#f0f8ff'} cl={darkMode ? '#f0f8ff' : '#0a051d'} className="App">
        <Nav Switcher={Switcher} darkMode={darkMode}/>
        <Form handleAddCard = {AddCard}/>
        <Noted>
          {notes.map((n)=>(<Note userName={n.userName} PhoneNumber={n.PhoneNumber} EmailAdd={n.EmailAdd} id={n.id} date={n.date} deleteNote={deleteNote} />))}
        </Noted>
        
    </Notes>
  );
}

export default App;
