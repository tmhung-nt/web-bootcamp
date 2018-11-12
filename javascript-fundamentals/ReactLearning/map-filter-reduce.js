const spotifySongs = [
    {id: 1, name: "Curl of the Burl", artist: "Mastodon", duration: 204},
    {id: 2, name: "Oblivion", artist: "Mastodon", duration: 306},
    {id: 3, name: "Flying Whales", artist: "Gojira", duration: 444},
    {id: 4, name: "L'Enfant Sauvage", artist: "Gojira", duration: 246},
];

const lastFmSongs = [
    {id: 5, name: "Chop Suey", artist: "System of a Down", duration: 192},
    {id: 6, name: "Throne", artist: "Bring me the Horizon", duration: 186},
    {id: 7, name: "Destrier", artist: "Agent Fresco", duration: 132},
    {id: 8, name: "Outof the Black", artist: "Royal Blood", duration: 240},
];

const allSongs = [...spotifySongs, ...lastFmSongs];


// ========== First solution
songNames = allSongs.filter(song => song.duration > 180 ).reduce( (acc, curValue) => {
    acc += curValue.name + ", ";
    return acc;
}, "");

console.log(songNames.substring(0, songNames.lastIndexOf(', ')));

// ========== Second solution
songNames = allSongs.filter(song => song.duration > 180 )
                .map(song => song.name)
                .join(', ');

console.log(songNames);