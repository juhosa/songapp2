import useSongs from "../useSongs";

function FilterBy() {
  const { filterChange, setSearchWord, filterby, searchWord } = useSongs();

  const changeFilter = (e) => {
    filterChange(e.target.value);
  };

  return (
    <div>
      <h3 className="text-lg">Filter by</h3>
      <input
        onChange={changeFilter}
        type="radio"
        name="filter"
        id="name"
        value="name"
        checked={filterby === "name"}
      />
      <label className="font-light text-sm" htmlFor="name">
        Song
      </label>

      <input
        onChange={changeFilter}
        type="radio"
        name="filter"
        id="artist"
        value="artist"
        checked={filterby === "artist"}
      />
      <label className="font-light text-sm" htmlFor="artist">
        Artist
      </label>

      <input
        onChange={changeFilter}
        type="radio"
        name="filter"
        id="year"
        value="year"
        checked={filterby === "year"}
      />
      <label className="font-light text-sm" htmlFor="year">
        Year
      </label>

      <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </div>
  );
}

export default FilterBy;
