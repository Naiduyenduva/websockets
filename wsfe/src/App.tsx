import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [ socket , setSocket ] = useState();
  const inputRef = useRef();

  function sendmessage () {
    if(!socket) {
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore 
    socket.send(message)
    
  }

  useEffect (() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  },[])

  return (
    <>
      <div>
        <h1>hi there</h1>
        <input placeholder='messhe' ref={inputRef} type='text' />
        <button onClick={sendmessage}>send message</button>
       </div>
    </>
  )
}

export default App
