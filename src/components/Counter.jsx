const Counter = ({ amount }) => (
    <input 
        type="number"
        value={amount}
        onChange={(e) => increment(parseInt(e.target.value, 10))}
    />
    

)

export default Counter