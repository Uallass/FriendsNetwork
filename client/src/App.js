import { useState } from 'react';
import axios from 'axios';
import './App.css';
import e from 'cors';


function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    axios.post('http://localhost:8080/signup', {username: username, password: password})
    .then((data) => {
      console.log(data)

      setUsername('')
      setPassword('')
    })
  }

  //data will be the string we send from our server
  const apiCall = () => {
    axios.get('http://localhost:8080/testUser').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <h3>SignUp</h3>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <div>
          <button type='button'>Cancel</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;