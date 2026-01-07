import { useState } from 'react'


function App() {
  const [num, setnum] = useState("0")

  return (
    <>
     <div>{num}</div>
     <button  onClick={(e)=>setnum(e.target.innerText)}>1</button>
     <button onClick={(e)=>setnum(e.target.innerText)}>2</button>
     <button onClick={(e)=>setnum(e.target.innerText)}>3</button>
     <button onClick={(e)=>setnum(e.target.innerText)}>4</button>
     <button onClick={(e)=>setnum(e.target.innerText)}>5</button>
    </>
  )
}

export default App
