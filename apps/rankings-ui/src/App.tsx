import './App.css';
import { useFirms, Query } from './hooks/useFirms';

function App() {
  const query: Query = { regionId: 170 }; 
  const firms = useFirms(query);
  console.log('firms', firms);

  return (
    <>
      <h1>Rankings</h1>
      <ul>
      {
        firms.map((item) => {
          return <li key={item.id}>{item.firm.name}</li>
        })
      }
      </ul>
      
    </>
  )
}

export default App
