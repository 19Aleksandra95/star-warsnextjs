import { useEffect, useState } from "react";
import { fetchData } from "../services/api";

interface ApiWars {
  id: number;
  name: string;
}

const Home = () => {
  const [apiWars, setApiWars] = useState<ApiWars[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getApiWars = async () => {
      try {
        const result = await fetchData("/endpoint");

        setApiWars(result);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    getApiWars();
  }, []);

  if (loading) return <p>Loading..</p>;

  return (
    <div>
      <h1>StarWars API from StarNavi Api</h1>
      <ul>
        {apiWars.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
 export default Home;