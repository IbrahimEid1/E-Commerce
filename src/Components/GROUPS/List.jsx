import { memo } from "react";
import "./List.css";
import { useNavigate } from "react-router-dom";

const List = () => {
  const GroupList = ["About us", "Blog", "Contact us", "Help & support"];
  const navigate = useNavigate();

  return (
    <div className="ParentList">
      <ul className="ChildList">
        {GroupList.map((item, idx) => (
          <li
            key={idx}
            className="list"
            onClick={() => {
              if (item === "Blog") {
                navigate("/blog");
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(List);
