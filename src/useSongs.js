import { useContext, useEffect } from "react";
import { AppContext } from "./app-context";

const useSongs = () => {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    filterSongs();
  }, [state.searchWord, state.filterby, state.songs]);

  const loadSongs = async () => {
    const API_URL = "https://songapp-api.netlify.app/api/get-songs";

    let response = await fetch(API_URL);

    let data = await response.json();

    saveSongs(data.songs);
  };

  const filterSongs = () => {
    // jos ei hakua, filtersongs -> songs
    if (state.searchWord === "") {
      setState({ ...state, filteredSongs: state.songs });
    }
    // jos haku, filteredsongs -> haun mukainen tulos
    else {
      let filtered = state.songs.filter((song) => {
        return (
          song[state.filterby]
            .toString()
            .toLowerCase()
            .indexOf(state.searchWord.toLowerCase()) !== -1
        );
      });
      setState({ ...state, filteredSongs: filtered });
    }
  };

  const addSong = (song) => {
    let new_songs = [...state.songs, song];
    setState({ ...state, songs: new_songs });
  };

  const saveSongs = (songs) => {
    let all_songs = [...state.songs, ...songs];
    setState({ ...state, songs: all_songs });
  };

  const filterChange = (filter) => {
    setState({ ...state, filterby: filter });
  };

  const setSearchWord = (word) => {
    setState({ ...state, searchWord: word });
  };

  const deleteSong = (s) => {
    let new_songs = state.songs.filter((song) => {
      return !(
        s.name === song.name &&
        s.artist === song.artist &&
        s.year === song.year
      );
    });
    setState({ ...state, songs: new_songs });
  };

  return {
    loadSongs,
    songAdd: addSong,
    deleteSong,
    filteredSongs: state.filteredSongs,
    filterby: state.filterby,
    filterChange,
    setSearchWord,
    searchWord: state.searchWord,
    filteredSongCount: state.filteredSongs.length,
    totalSongCount: state.songs.length,
  };
};

export default useSongs;
