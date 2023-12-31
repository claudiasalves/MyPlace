import keys from "../../data/keys";

const Key = () => {
  return (
    <div className="keys__container">
      <ul className="keys__list">
        {keys.map((key) => {
          return (
            <li
              key={key.text}
              className="key__item"
              style={{ color: key.color }}
            >
              {key.icon}
              <h5>{key.text}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Key;
