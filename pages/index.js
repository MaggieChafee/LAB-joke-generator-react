import { useState } from 'react';
import { Button } from 'react-bootstrap';
import JokeGenerator from '../components/Joke';
import getJoke from '../api/jokeData';

function Home() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const jokeButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
      jokeButton('Get Punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>We got jokes!</h1>
      <JokeGenerator joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? (
        <Button type="button" onClick={getAJoke}>
          {btnText}
        </Button>
      ) : (
        <Button type="button" onClick={() => jokeButton('Get A New Joke')}>
          {btnText}
        </Button>
      )}

    </div>
  );
}

export default Home;
