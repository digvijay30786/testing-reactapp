import { useState } from "react";
import Question from './question';
export default function Slider()
{
    const data = [
        {
            id: 1,
            q: "what is the capital of India ?",
            a: "New Delhi",
        },
        {
            id: 2,
            q: "React is a framework or library",
            a: "Library",
        },
        {
            id: 3,
            q: "What is full Form of NPM ?",
            a: "Node Package Manager",
        },
        {
            id: 4,
            q: "what is the latest version of react js ?",
            a: "17.0.2",
        },
        {
            id: 5,
            q: "Who is original author of Reactjs ?",
            a: "Jordan Walke",
        },

    ];

    const [next, setNext] = useState(0);

    return (<>
        <div>
            <Question Qa={data[next]} />
            <button  data-testid="prev" disabled={next===0?"disabled":""} onClick={()=>setNext(next-1)}>Prev</button>
            <button  data-testid="next" disabled={next===data.length-1?"disabled":""} onClick={()=>setNext(next+1)}>Next</button>
        </div>
    </>)
}