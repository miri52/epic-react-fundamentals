// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// BASIC SOLUTION 

// function UsernameForm({onSubmitUsername}) {

//   function handleSubmit(e) {
//     e.preventDefault()
//     console.dir(e.target)
//     onSubmitUsername(e.target.elements.usernameInput.value)
//   }
  
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input name="usernameInput" id="usernameInput" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// 1. EXTRA CREDIT - using refs
// he claims the basic solution is better in this case, refs have different use cases, which will be covered later on

// function UsernameForm({onSubmitUsername}) {

//   const usernameInputRef = React.useRef()

//   function handleSubmit(e) {
//     e.preventDefault()
//     console.dir(e.target)
//     onSubmitUsername(usernameInputRef.current.value)
//   }
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input ref={usernameInputRef} id="usernameInput" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// 2. EXTRA CREDIT - LOWER CASE VALIDATION
// I enjoyed this challenge

// function UsernameForm({onSubmitUsername}) {

//   const [error, setError] = React.useState(null)

//   function handleSubmit(e) {
//     e.preventDefault()
//     console.dir(e.target)
//     onSubmitUsername(e.target.elements.usernameInput.value)
//   }

//   function handleChange(e){
//     const inputValue = e.target.value
//     const isValid = inputValue === inputValue.toLowerCase()
//     setError(!isValid && 'Username must be lower case')
//   }
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input onChange={handleChange} name="usernameInput" id="usernameInput" type="text" />
//       </div>
//       {error && <p role="alert" style={{color: 'red'}}>{error}</p>}
//       <button disabled={error} type="submit">Submit</button>
//     </form>
//   )
// }

// 3. EXTRA CREDIT - CONTROLLED INPUT
// controlled - stored in a state variable & onChange handler will call setState to keep the value up-to-date 
// vs. uncontrolled when the browser is maintaining the input state 
// also a good challenge

function UsernameForm({onSubmitUsername}) {

  const [username, setUsername] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.dir(e.target)
    onSubmitUsername(username)
  }

  function handleChange(e){
    const inputValue = e.target.value
    setUsername(inputValue.toLowerCase())
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleChange} name="usernameInput" value={username} id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
