import {Card} from "./card";

export function List({list}) {
  return (
    <div className="cards-list">
      <ul>
        {list.map((item) => (
          <li className="card-item" key={item.id}>
            <Card {...item}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
