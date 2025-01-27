const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

const getNextEpisodeInPlaylist = (series) => series[0]

// function* series() {
//   yield* episodes;
// }

// var gOt = series()

// function getNextEpisodeInPlaylist() {
//   return gOt.next().value
// }

const addToPlaylist = (series, element) => {
  return [...series, element]
}

const removeFromPlaylist = (series, element) => {
  return series.filter(el => el != element)
}

function bingeWatch(playlist) {
  if (playlist.length > 0) {
    let first = getNextEpisodeInPlaylist(playlist);
    let removed = removeFromPlaylist(playlist, first);
    return bingeWatch(removed);
  }
  
  return 'Please let there be more!';
}