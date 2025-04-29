import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement } from '../slices/counterSlice';

function Search() {
  const [inputValue, setInputValue] = React.useState("");
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(`Search button clicked with input: ${inputValue}`);
  };

  return (
    <>
      <input 
        type="text" 
        placeholder="Search" 
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>Search</button>
      <p>{inputValue}</p>
      <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
}

export default Search;