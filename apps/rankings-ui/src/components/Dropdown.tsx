type Item = string;

type DropdownProps = {
  items: Item[];
  onSelect: (value: string) => void;
};
export const Dropdown = ({ items, onSelect } : DropdownProps) => {
  return <div>
    <select onChange={(e) => {
      const { selectedIndex } = e.target;
      const value = selectedIndex > 0 ? items[e.target.selectedIndex - 1] : '';
      onSelect(value)
    }}>
      <option value="">Tier ranking</option>
      {
        items.map((item) => {
          return <option key={item} value={item}>{item}</option>
        })
      }
    </select>
  </div>
}