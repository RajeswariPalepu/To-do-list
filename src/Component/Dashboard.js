import React, { useState } from 'react'
import MediaCard from './Charts/Cards'
import ResponsiveAppBar from './Charts/Header'

function Dashboard() {
  const[title, setTitle]=useState(false)
  const handletitle=(name)=>{
setTitle(name)
  }

  return (

    <div className="p-5 text-center bg-image"
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6XN1t96T7NJpb-oWScbE8epHxFNdH41ySmW724tG3eABz8M_0n8W8FAGv2JqHDq-W_Q&usqp=CAU')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: "#ccb4c8"
      }}>
        <ResponsiveAppBar/>

   <div className='d-flex1'>
   <MediaCard name="+ Addtask"  className="addtask" Description="Addtask" handletitles={handletitle} >
</MediaCard>
<MediaCard name="+ Addtask" Description="Progress" handletitles={handletitle} >
</MediaCard>
<MediaCard name="+ Addtask" Description="Done" handletitles={handletitle} >
</MediaCard>

</div>
</div>
  )
}

export default Dashboard
