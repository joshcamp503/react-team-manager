import { useState } from "react";
import { useHistory } from "react-router-dom"

const Add = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const player = { name, email }

    setIsLoading(true)

    fetch('http://localhost:8000/players', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(player)
    }).then(() => {
      setIsLoading(false)
      // history.go(-1)
      history.push('/')
    })

  }

  return ( 
    <div className="add">
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        <label>Player name:</label>
        <input 
          type="text" 
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input 
          type="text" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        { !isLoading && <button>Add Player</button> }
        { isLoading && <button disabled>Adding player...</button> }
      </form>  
    </div>
   );
}
 
export default Add