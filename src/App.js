import './App.css';
import { useEffect, useState } from 'react'
import Pokemon from './Pokemon';

function App() {


  const [searchTarget, setSearchTarget] = useState('1')
  const [name, setName] = useState('')
  const [img, setImg] = useState('')


  useEffect(() => {

      if(searchTarget){
        const logic = async () => {
          const url = `https://pokeapi.co/api/v2/pokemon/${searchTarget.toLocaleLowerCase()}`
    
    
          const res = await fetch(url).then(response => response.json())
          setName(res.name)
          setImg(res.sprites.front_default)
          
        }
        logic()
      }

  }, [searchTarget])

 

  return (
    <div className="App">
      <header className="App-header">
        <input value={searchTarget} onChange={(e) => setSearchTarget(e.target.value)}/>
        <button onClick={() => setSearchTarget(searchTarget)}>Buscar</button>
        <Pokemon name={name.toLocaleUpperCase()} img={img}/>
      </header>
    </div>
  );
}

export default App;
