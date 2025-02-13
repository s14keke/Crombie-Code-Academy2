import { useEffect, useState } from "react";

const RandomName = () => {
  const [name, setName] = useState();

  const fetchName = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setName(data.results[0].name.first))
  };

  useEffect(() => {
    fetchName();
  }, []);

  return (
    <div>
      <h2>Random Name</h2>
      <p>{name}</p>
      <button onClick={fetchName}>Generate</button>
    </div>
  );
};

export default RandomName;