import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment } from '../slices/counterSlice';
import { setUserData } from '../slices/dummySlice';

function Search() {
  const [inputValue, setInputValue] = React.useState("");
  const count = useSelector((state: RootState) => state.counter.value);
  const name = useSelector((state: RootState) => state.userData.dummyUser.name);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(`Search button clicked with input: ${inputValue}`);
  };

  const addUser = () => {
    dispatch(setUserData({ name: "John Doe", email: "john.doe@gmail.com"}));
  }

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
      <h1>Welcome {name}</h1>
      <button onClick={addUser}>Add User</button>
      <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
}

export default Search;