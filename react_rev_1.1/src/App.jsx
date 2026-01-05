import { useState ,useEffect} from 'react'

function App() {
  let [count, setCount] = useState(0)

  useEffect(()=>{
    console.log(count);
  },[count]);

  return (
    <>
      <h1> counter : {count}</h1>
      <button onClick={()=>{setCount(c=>c+1)}} >click here</button>
    </>
  )
}

export default App
