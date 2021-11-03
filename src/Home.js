import PlayerList from './PlayerList';
import useFetch from './useFetch';

const Home = () => {
  const { data: players, isLoading, error } = useFetch('http://localhost:8000/players')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { players && <PlayerList players={players} title={'Players:'} /> }
    </div>
  );
}

 
export default Home;