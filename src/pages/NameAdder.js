import '../App.css'
import React, { useEffect, useState } from 'react'
import Child from '../components/element'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

function NameAdder () {
  const [names, setNames] = useState([])
  const [newName, setNewName] = useState('')

  const addName = name => {
    if (name !== '' && !names.includes(name)) setNames(prev => [...prev, name])
    setNewName('')
  }

  const removeName = name => {
    setNames(prev => prev.filter(i => i !== name))
  }

  useEffect(() => {
    console.log('name added.', newName)
  }, [names])

  return (
    <div>
      <div
        style={{ padding: '20px', textAlign: 'center', background: 'orange' }}
      >
        <h1 style={{ color: 'white' }}>Name Adder</h1>
      </div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Add a name:</h3>
        <TextField
          label='Name'
          type='text'
          value={newName}
          onChange={event => setNewName(event.target.value)}
        />

        <Button
          onClick={() => addName(newName)}
          color='primary'
          variant='contained'
        >
          Add name
        </Button>
        <div>
          {names.map((name, index) => {
            return <Child name={name} remove={removeName} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default NameAdder
