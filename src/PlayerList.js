import { Link } from "react-router-dom";

const PlayerList = ({ players, title }) => {


  return ( 
    <div className="player-list">
      <h2>{ title }</h2>
      {players.map((player) => (
        <div className="player-preview" key={player.id}>
          <Link to={ `/players/${player.id}` }>
            <h2>{ player.name }</h2>
            <p>{ player.email }</p>
          </Link>
        </div>
      ))}
    </div>
   );
}
 
export default PlayerList;