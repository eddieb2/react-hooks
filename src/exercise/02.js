// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

// NOTE Extra Credit 3&4
const useLocalStorageState = (keyName, initialVal = '') => {
  let localStorageVal = JSON.parse(window.localStorage.getItem('name'))

  const [state, setState] = React.useState(() => localStorageVal ?? initialVal)

  React.useEffect(() => {
    window.localStorage.setItem(keyName, JSON.stringify(state))
  }, [state, keyName])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  // NOTE Extra credit #3- Custom Hook
  const [name, setName] = useLocalStorageState('name')

  // NOTE Excerise && Extra credit #2
  // React.useEffect(() => {
  //   window.localStorage.setItem('name', name)
  //   console.log('loc stor: ', window.localStorage.getItem('name'))
  // }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
