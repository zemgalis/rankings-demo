type Item = {
  id: 'string';
  name: 'string';
  value: 'string';
}

type DropdownProps = {
  items: Item[];
  selected: string;
  onSelect: (value: string) => void;
};
export const Dropdown = ({ items } : DropdownProps) => {
  return <div>
    <select>
      <option value="">Sort by: Tier ranking</option>
      {
        items.map((item) => {
          return <option
            key={item.id}
            value={item.value}
            onChange={(e) => {
              console.log(e.target)
            }}>{item.name}</option>
        })
      }
    </select>
  </div>
}