import {useDispatch, useSelector} from "react-redux";
import {increment , decrement} from "./CounterSlice";

const Counter =()=>{
   const counter= useSelector(state => state.counter)
    const dispatch = useDispatch();
    return(
        <div>
            <h1>counter state</h1>
            <h2>counter: {counter.value}</h2>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;