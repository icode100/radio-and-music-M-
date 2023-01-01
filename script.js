// initialize the variables
let songs=[
    {songName: "hanuman chalisa" ,filePath:"audio/hanuman_chalisa.mp3",coverPath:"covers/hanuman.jpg"},
    {songName: "krishna nee begane baro" ,filePath:"audio/krishna_nee_begane_baaro.mp3",coverPath:"covers/krishna.jpg"},
    {songName: "sahasranam" ,filePath:"audio/sahasranam.mp3",coverPath:"covers/sahasranam.jpg"}
]
let audioElement = new Audio('audio/hanuman_chalisa.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('progress_bar');
let songname = document.getElementById('playcontent');
let songitem = [...document.getElementsByClassName('songitem')];
songitem.forEach((element,i) => {
    // console.log(element.querySelectorAll('img'));
    element.querySelector('img').src = songs[i].coverPath;
    element.querySelector('.songname').innerText = songs[i].songName;
});
const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');

    })
}
const cleanall = ()=>{
    Array.from(document.getElementsByClassName('giphy-embed')).forEach((element)=>{
        element.style.opacity = 0;
    })
}
// playing songs
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause');
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        makeallplay()
    }
})
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = (myprogressbar.value/100)*audioElement.duration;
})


let index = 0;
Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
    // console.log(element);
    element.addEventListener('click',(e)=>{
        makeallplay();
        // console.log(e.target);
        cleanall();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[index].filePath;
        audioElement.currentTime = 0;
        songname.innerText = songs[index].songName;
        let gif = document.getElementById(`gif${index}`);
        if(audioElement.paused||audioElement.currentTime<=0){
            audioElement.play();
            masterplay.classList.remove('fa-play')
            masterplay.classList.add('fa-pause');
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            makeallplay();
            gif.style.opacity=0;
            
        }
    })
})
document.getElementById('prev').addEventListener('click',()=>{
    if(index==0){
        index=2;
    }
    else{
        index-=1;
    }
    makeallplay();
    cleanall();
    i = document.getElementById(index.toString());
    i.classList.remove('fa-play-circle');
    i.classList.add('fa-pause-circle');
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    songname.innerText = songs[index].songName;
    let gif = document.getElementById(`gif${index}`);
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        makeallplay();
        gif.style.opacity=0;
    }

})
document.getElementById('for').addEventListener('click',()=>{
    if(index==2){
        index=0;
    }
    else{
        index+=1;
    }
    makeallplay();
    cleanall();
    i = document.getElementById(index.toString());
    i.classList.remove('fa-play-circle');
    i.classList.add('fa-pause-circle');
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    songname.innerText = songs[index].songName;
    let gif = document.getElementById(`gif${index}`);
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        makeallplay();
        gif.style.opacity=0;
    }

})
