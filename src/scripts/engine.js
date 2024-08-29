const painoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input")

let audio = new Audio('src/tunes/a.wav');
audio.volume = 0.2;

function playTune(key) {
  audio.src = `src/tunes/${key}.wav`
  audio.play();
  
  const clicledKey = document.querySelector(`[data-key="${key}"]`)
  clicledKey.classList.add("active")
  setTimeout(()=>{
    clicledKey.classList.remove("active")
  },150)
}

painoKeys.forEach((key) => {
  
  key.addEventListener("click", () => playTune(key.dataset.key));
});



document.addEventListener("keydown",(e)=>{
    const teclasTocaveis = ["a","w","s","e","d","f","t", "g","y","h","u","j","k","o","l","p","ç"]
   if (teclasTocaveis.includes(e.key)){
    playTune(e.key)
   }
   
})

const handleVolume = (e)=>{
    audio.volume = e.target.value
}

volumeSlider.addEventListener("input", handleVolume)



const showHideKeys = ()=>{
  painoKeys.forEach(key =>key.classList.toggle("hide"))
}

keysCheck.addEventListener("click",showHideKeys)



