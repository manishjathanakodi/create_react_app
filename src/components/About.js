import React from 'react'
import User from './User'
import UserClass from './UserClass'

export default function About() {
  return (
    <div><h1>About</h1>
      <User name="Manish" age={20}/>
      <UserClass name ="Manish" age={20}/>
    </div>

  )
}
