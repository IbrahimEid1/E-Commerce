import "./List.css";
const List = () => {
  const GroupList = ["About us", "Blog", "Contact us", "Help & support"];
  return (
    <div className="ParentList">
      <ul className="ChildList">
        {GroupList.map((item, idx) => {
          return (
            <li className="list" key={idx}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default List;
