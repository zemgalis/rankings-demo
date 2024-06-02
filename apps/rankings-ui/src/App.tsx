import { useState } from 'react';
import { useFirms, Query } from './hooks/useFirms';
import { ListItem } from './components/ListItem';
import { Filter } from './components/Filter';
import { mapItem } from './utils/mapItem';
import { filterByRegion } from './utils/filterByRegion';

function App() {
  const query: Query = { regionId: 170 }; 
  const firms = useFirms(query);
  const [filter, setFilter] = useState<string>('')

  const transformedItems = firms.map(mapItem);
  const filteredByRegion = transformedItems.filter((item) => filterByRegion(item, filter));
  
  return (
    <div className='bg-white text-black flex'>
      <aside className='flex-none w-[300px] ml-5 mt-5'>
        <Filter onClick={setFilter} selected={filter} />
      </aside>
      <main className='flex-1 mt-5'>
      <ul>
        {filteredByRegion.map((item) => {
          return (<ListItem id={item.id} name={item.name} region={item.region} />)
        })}
      </ul>
      </main>
    </div>
  )
}

export default App
