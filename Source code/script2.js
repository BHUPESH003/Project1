console.log("Welcome To Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songprogress = document.getElementById('songprogress');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [{
        songname: 'I Got Summer On My Mind',
        filepath: '1.mp3',
        coverpath: "covers/1.jpeg"
    },
    {
        songname: 'Heat Waves',
        filepath: '2.mp3',
        coverpath: "covers/2.jpeg"
    },
    {
        songname: 'In The Middle Of The Night',
        filepath: '3.mp3',
        coverpath: "covers/3.jpeg"
    },
    {
        songname: 'Toxic',
        filepath: '4.mp3',
        coverpath: "covers/4.jpeg"
    },
    {
        songname: 'Death Bed',
        filepath: '5.mp3',
        coverpath: "covers/5.jpeg"
    },
    {
        songname: 'Friends',
        filepath: '6.mp3',
        coverpath: "covers/6.jpeg"
    },
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})
// audioElement.play();
//Manage Play/Pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log("Time update")
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    songprogress.value = progress;
})

songprogress.addEventListener('change', () => {
    audioElement.currentTime = (songprogress.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// document.getElementById('songprogress').addEventListener('ended', () => {
//     if (progress<= 100) {
//         songIndex = 0;;
//         console.log("Hello");
//     } else {
//         songIndex += 1;
//     }
//     audioElement.src = `${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songname;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })
