import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'

const PlayerDetails = () => {
  const { id } = useParams();
  const { data: player, error, isLoading } = useFetch('http://localhost:8000/players/' + id)
  const history = useHistory()

  const handleClick = () => {
    fetch('http://localhost:8000/players/' + player.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="player-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { player && (
        <div> 
          <h2>Player Details - { player.name }</h2>
          <button onClick={handleClick}>delete</button>
        </div> 
      )}
    </div>
  )
}

export default PlayerDetails