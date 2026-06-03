function Counter({count, setCount}) {
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrease</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;