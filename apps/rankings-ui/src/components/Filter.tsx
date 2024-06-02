import { useEffect } from 'react';

type Setting = {
  id: string;
  name: string;
  value: string;
}

type FilterProps = {
  onClick: (value: string) => void;
  selected: string;
}

export const Filter = ({ onClick, selected } : FilterProps) => {
  const settings: Setting[] = [
    { id: 'all', name: 'All firms', value: 'all' },
    { id: 'local', name: 'Local Firms', value: 'local' },
    { id: 'global', name: 'Global Firms', value: 'global' }
  ];

  useEffect(() => {
    if (selected === '') {
      onClick('all')
    }
  }, [selected, onClick]);

  return <div>
    {
      settings.map((setting) => {
        const isChecked = setting.value === selected;
        return <div key={setting.id} >
        <input checked={isChecked} type="radio" id={setting.id} value={setting.value} name='filter' onChange={(e) => {
          onClick(e.target.value)
        }} /><label className="ml-2">{setting.name}</label></div>
      })
    }

  </div>
}