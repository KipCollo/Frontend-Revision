import { useState } from 'react'

function FnComponent(){

    const [name, setName] = useState("Collins");

    function update(){
        setName("Kosgei");
        console.log(name)
    }
    return (
    <div>
    <h1>Function Component</h1>
    <b>This is a function component</b>
    <p>{name}</p>
    <button type="submit" onClick={update}>Change</button>
    </div>)
}

export default FnComponent;