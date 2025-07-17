"use client"
import { useEffect, useState } from "react";
import {io} from 'socket.io-client'


export default function Home() {

  const [val, setVal] = useState<string>("")
  const [roomval,seRoomval] = useState<string>("")
  const [socket, setSocket] = useState<any>(null)

  useEffect(() => {
    const socket = io('ws://localhost:3000/', {transports:['websocket']})
    socket?.on('code-changed', (data: any) => {
      console.log('code changed', data)
      setVal(data)
    })
    setSocket(socket)

  }, [])

  useEffect(() => {
    let data = {
      room:roomval,
      code:val
    }
    socket?.emit('code-changed',data)
  },[val])

  // socket?.on('user-connected', (data: any) => {
  //   console.log('user connected', data)
  // })
  

  return (
    <div className="flex flex-col justify-center items-center">
      Socket IO test
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} placeholder="this will change"  />

      <input type="text" value={roomval} onChange={(e)=>seRoomval(e.target.value)} placeholder="room value"/>
      <button className="border-black border-2 p-3.5" onClick={()=>{
        socket.emit('join-room',roomval)
        socket.on('user-connected', (data: any) => {
          console.log('user connected', data)
        })
        socket.on('code-changed-on-join',(data:any)=>{
          setVal(data)
        })
      }}>
        Join room
      </button>



      <button className="border-black border-2 p-3.5" onClick={()=>{

      }}>Show room</button>

      <button className="border-black border-2 p-3.5" onClick={()=>{
        socket.emit("get-room-users",roomval)
        socket.on('room-users', (data: any) => {
          console.log('room users', data)
        })

      }}>Show room users</button>
    </div>
  ); 
}
