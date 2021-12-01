import useSongs from "../useSongs";
import Song from "./Song";

const SongList = () => {
  const { filteredSongs } = useSongs();

  return (
    <div className="flex-auto overflow-y-auto w-full">
      {filteredSongs.map(({ name, artist, year }, index) => {
        return (
          <Song
            key={name + "-" + index}
            name={name}
            artist={artist}
            year={year}
          />
        );
      })}
    </div>
  );
};

export default SongList;
