import { useEffect } from "react";
import AddSong from "./components/AddSong";
import FilterBy from "./components/FilterBy";
import SongList from "./components/SongList";
import Title from "./components/Title";
import TopSection from "./components/TopSection";
import useSongs from "./useSongs";

function App() {
  const { loadSongs } = useSongs();
  useEffect(() => {
    loadSongs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <div className="w-64 bg-gray-300 p-4 flex flex-col space-y-4">
        <Title appname="SongApp" />

        <FilterBy />

        <AddSong />
      </div>

      <div className="flex flex-row flex-auto bg-gray-100 rounded-tl-xl border-l shadow-xl">
        <div className="flex flex-col w-full">
          <TopSection />
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default App;
