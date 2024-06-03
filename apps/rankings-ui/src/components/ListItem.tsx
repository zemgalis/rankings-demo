type ListItemProps = {
  id: number;
  name: string;
  region: string;
  tier: string;
};

export const ListItem = (listItem: ListItemProps) => {
  return (<li className="flex mt-2 mb-2 border-solid border-black border-2 p-5" key={listItem.id}>
      <div className="flex flex-col">
        <div>{listItem.name}</div>
        <div className="flex">
          <div className="mr-2">Region: {listItem.region}</div>
          <div className="ml-2">Tier: {listItem.tier}</div>
        </div>
      </div>
    </li>);
}