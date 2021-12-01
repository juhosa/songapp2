import useSongs from "../useSongs";

const TopSection = () => {
  const { filteredSongCount, totalSongCount } = useSongs();

  return (
    <div className="flex-none h-24 bg-gray-200">
      <div className="p-6 flex items-center">
        <p>
          {filteredSongCount} / {totalSongCount} songs
        </p>
      </div>
    </div>
  );
};

export default TopSection;
