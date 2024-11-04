import React from 'react'


export default function Todoitems() {

const handleSubmit = (e) => {
e.preventDefault()
}
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <div className='formcolor'>
            <input type="text" placeholder='what is your task' className='text' /><br /><br />
            Task completed?<input type="checkbox" />
            <br/>
            {/* <br /> */}
            </div>
        </form>
        <div className="formcolor">
        <button className='delete'>Delete</button><br />
        <button className='save' >save</button>
        </div>
       
    </div>
  )
}
