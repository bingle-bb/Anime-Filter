import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Filter from "./components/Filter";

const App = () => {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://kitsu.io/api/edge/anime?filter[subtype]=movie&filter[seasonYear]=2025&page[limit]=16"
      )
      .then((res) => setAnimeList(res.data.data))
      .catch((err) => console.log("Error:", err))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredAnime = animeList.filter((anime) =>
    anime.attributes.canonicalTitle
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-vh-100 bg-light p-4">
        <h1 className="text-center mb-4">Anime Movies (2025)</h1>
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light p-4">
      <h1 className="text-center mb-4">Anime Movies (2025)</h1>
      <Filter search={search} setSearch={setSearch} />
      <div className="row g-4 justify-content-center">
        {filteredAnime.length > 0 ? (
          filteredAnime.map((anime) => (
            <div key={anime.id} className="col-sm-6 col-md-4 col-lg-3">
              <Card anime={anime} />
            </div>
          ))
        ) : (
          <p className="text-center">No anime found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
