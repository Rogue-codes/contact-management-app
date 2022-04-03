import React from 'react'
import { MdSearch } from 'react-icons/md'
import styled from 'styled-components'
const Searchh = styled.div`
    width: 60%;
    margin-left: 2%;
    height: 6vh;
    padding-left: 1%;
    display: flex;
    background: lightgrey;
    align-items: center;
    border-radius: 10px;
    margin-top: 3%;
    input{
        height: 100%;
        width: 95%;
        background:lightgrey;
        border: none;
        padding-left: 2%;
        font-size: 1.2vw;
        &:focus{
            outline: none;
        }
    }
`
function Search({setSearchValue}) {
  return (
    <Searchh>
        <MdSearch size='2rem'/>
        <input type="text" placeholder='search for an employee' onChange={(e)=>setSearchValue(e.target.value)} />
    </Searchh>
  )
}

export default Search