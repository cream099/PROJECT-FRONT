import axios from 'axios'
import { Carousel } from 'flowbite-react';
import {useEffect, useState} from 'react'

export default function UserHome() {
  const [todos, setTodos] = useState([])

  useEffect( ()=>{
    const run = async()=>{
      let token = localStorage.getItem('token')
      const rs = await axios.get('http://localhost:8000/todos', {
        headers : { Authorization : `Bearer ${token}`}
      })
      setTodos(rs.data.todos)
    }
    run()
  }, [] )

  return (
    <div className='bg-slate-400'>
    {/* <div>UserHome</div>
    { JSON.stringify(todos)} */}
    <div className="mt-10 h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img src="src/assets/fai.jpg" alt="..." className='h-full w-full object-cover'/>
        <img src="src/assets/fai2.jpg" alt="..." className='h-full w-full object-cover'/>
      </Carousel>
    </div>
    </div>
  )
}
