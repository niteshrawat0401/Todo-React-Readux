import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        Home
        <div>
            <Link to={"/shoes"}>go</Link>
        </div>
    </div>
  )
}

export default Home