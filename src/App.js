import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

//add my onsubmit handler to sendemail

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === "name") {
      setName(e.target.value)
    }
    else {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      email
    }

    axios.post("/api/sendMail", dataToSubmit)

  }

  // FE
  // http://localhost:3000

  // BE
  // http://localhost:5000


  return (
    <div className="App">
      <header>
        EMAIL TESTING
        <form onSubmit={handleSubmit}>
          <input id="name" placeholder="Name" value={name} onChange={handleClick} />
          <input id="email" placeholder="Email" value={email} onChange={handleClick} /><br />
          <button onClick={handleSubmit}>Send Email</button>
        </form>

      </header>

    </div>
  );
}


export default App;
