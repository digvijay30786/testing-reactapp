import { useState } from "react";
import Button from '../button/button';
export default function Counter()
{
    const [count, setCount] = useState(0);

    return (<>
        <h1 data-testid="test_counter">Counter</h1>
        <h1 data-testid="test_value">{count}</h1>
        <div>
            <Button label="ADD" onClick={()=>setCount(count+5)}/>
            <Button label="REDUCE" onClick={() => setCount(count - 5)} />
        </div>

    </>);
}