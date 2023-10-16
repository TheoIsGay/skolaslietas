import {useState} from "react";
function Counter() {
    const [result, setResult] = useState(0);

    function addOne(){
        setResult(result+1);
        console.log("x veriba ir" + result);
    }
    function minusOne(){
        setResult(result-1);
        console.log("x veriba ir" + result);
    }
    return (
        <div>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <h1>{result}</h1>
        </div>
    )
}
export default Counter;