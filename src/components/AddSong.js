import { useState } from "react";
import useSongs from "../useSongs";

const AddSong = () => {
  const { songAdd } = useSongs();

  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");

  const addSong = () => {
    let s = { name, artist, year };
    songAdd(s);

    // tyhjennä kentät
    setName("");
    setArtist("");
    setYear("");
  };

  return (
    <div>
      <h3 className="text-lg">Add a song</h3>
      <div>
        <div>
          <label className="font-light text-sm" htmlFor="name">
            Song name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            value={name}
          />
        </div>
        <div>
          <label className="font-light text-sm" htmlFor="artist">
            Artist name
          </label>
          <input
            onChange={(e) => setArtist(e.target.value)}
            type="text"
            name="artist"
            id="artist"
            value={artist}
          />
        </div>
        <div>
          <label className="font-light text-sm" htmlFor="release">
            Release year
          </label>
          <input
            onChange={(e) => setYear(e.target.value)}
            type="text"
            name="year"
            id="year"
            value={year}
          />
        </div>
      </div>
      <input onClick={addSong} className="btn" type="button" value="Save" />
    </div>
  );
};

export default AddSong;
