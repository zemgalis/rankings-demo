type ListItemProps = {
  id: number;
  name: string;
  region: string;
};

export const ListItem = (listItem: ListItemProps) => {
  return (<li className="w[500px] flex mt-2 mb-2" key={listItem.id}>
      <div className="flex flex-col">
        <div>{listItem.name}</div>
        <div>{listItem.region}</div>
      </div>
    </li>);
}