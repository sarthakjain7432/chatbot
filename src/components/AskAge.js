import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../features/dataSlice'

const AskAge = (props) => {
    const {name} = useSelector((store)=>store.data)
    const initialAge = 18;
    const maxAge = 40;
    const [selectedAge, setSelectedAge] = useState(initialAge)
    const dispatch = useDispatch();
    const ageOptions = [];
    for(let age = initialAge; age<=maxAge; age++){
        ageOptions.push(
            <option key={age} value={age}>
            {age}
            </option>
        )
    }
    const handleAgeChange = (event)=>{
        setSelectedAge(event.target.value);
    }
    const submitAge = ()=>{
        dispatch(setData({name:name,age:selectedAge}))
        props.actions.exitmsg()
    }
  return (
    <div>
        <select name="age" id="age" value = {selectedAge} onChange={handleAgeChange} className='age-selector'>
            {ageOptions}
        </select>
        <button className='btn' onClick={submitAge}>Submit</button>
    </div>
  )
}

export default AskAge