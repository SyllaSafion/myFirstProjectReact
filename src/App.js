 import React, {useState} from 'react';
 import Tweet from './Tweet'

 function App(){

    const [users, setUsers] = useState([
        {name: "Safion", message: "Hello world"},
        {name: "Jhon", message: "I am Jhon Snow"},
        {name: "Bill", message: "I am Bill Gate"},
    ])

    // // increment 
    // const [isRed, setRed] = useState(false);
    // const [count, setCount] = useState(false);
    
    // const increment = () =>{
    //     setCount(count + 1)
    //     setRed(!isRed)
    // }
    
     return(
        <div className="app">
             {users.map(user =>(
           <Tweet name={user.name} message={user.message} /> 
        ))}
            {/* <h1 className={isRed ? 'red' : ''}>Change my color</h1>
            <button onClick= {increment}>Increment</button>
            <h1> {count} </h1> */}

            {/* <Tweet name="Jimy Lanister" message="This is my firts radom tweet"/>
            <Tweet name="Jhon Snow" message="This is my second radom tweet"/>
            <Tweet name="Deneris Targarerin" message="This is my third radom tweet"/>
            <Tweet name="Aria stark" message="This is my fourth radom tweet"/> */}

        </div>
     )
 }
 export default App