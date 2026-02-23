let currentSong = null;
let queqedSong;

let playing = false; 


const song1 = new Audio('assets/audio/Love Story.mp3')
const song2 = new Audio('assets/audio/Tingin.mp3')
const song3 = new Audio('assets/audio/Sagada.mp3')
const song4 = new Audio('assets/audio/Style.mp3')
const song5 = new Audio('assets/audio/Sinta.mp3')
const song6 = new Audio('assets/audio/Wildest Dreams.mp3')
const song7 = new Audio('assets/audio/Misteryoso.mp3')
const song8 = new Audio('assets/audio/Estranghero.mp3')
const song9 = new Audio('assets/audio/Ikot.mp3')

const insertTape = new Audio('assets/audio/insert cassette.mp3')
const hoverSound = new Audio('assets/audio/scroll.wav')
const buttonPress = new Audio('assets/audio/button press.wav')

const buttons = document.querySelectorAll('button');
const sagada = document.getElementById('sagada');
const misteryoso = document.getElementById('misteryoso');
const hoverZoneRight = document.getElementById('hoverZoneRight');
const playerContainer = document.querySelector('.playerContainer');
const body = document.body;

let currentIndex = 0; // tracks which paragraph is showing
const screenText = document.getElementById("screen-text");

const songMap = {
  "love-story": song1,
  "tingin": song2,
  "sagada": song3,
  "style": song4,
  "sinta": song5,
  "wildest-dream": song6,
  "misteryoso": song7,
  "estranghero": song8,
  "ikot": song9
};
const paragraphs = [
  "LOVEEEEEEEEEEEEEE!!! \n \n Malapit na monthsary natin hehe and I noticed lang na we're getting a lot better at handling each other:) \n 'Di na tayo masiyado nag-aaway di'ba? And if may tampuhan man ever, we're stayihg calmer na and naayos natin quickly:> \n \n Kaya I just wanted to say na I'm SUPER PROUD OF US and I'm SUPER PROUD OF YOUUUUUUU!!!!!!",
  "Hehe di ko na alam sasabihin ko. Mas maganda pa san site na gagawin ko kaso nakulangan ng time ToT \n \n MAS GAGANDAHAN KO SA MONTHSARY NATIN DON't WORRY. Hays, disappointed ako sa sarili ko kase kulang ng surprise surprise ko. Anyways, play tayo Minecraft maya maya hihi.",
  "MUAAAHHHHHHH MUAAAAAAAHHHHHHHHHHHHHH <3 \n \n Who's the prettiest girl in the world? Of course you areeeeee hehehehehe",
  "I WABBYYUUUUUUUU LOVEEEEYYYYYYYYYYYY!!!!! \n \n I'm sorry if medyo kulang 'to *sad emoji* \n I tried my best ToT",
  "That's all hehe ;) \n byebyeeeeeeeeeeeeee, kiss mo irl me ahhh:>"
];




buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const clickedId = event.currentTarget.id;

    // If it's one of the cassettes
    if (songMap[clickedId]) {
        queqedSong = songMap[clickedId];
        insertTape.play();
        playerContainer.style.animation = 'playerEnter 1s forwards';
    }

    // Play / pause logic
    if (clickedId === 'play') {
        buttonPress.play();

        let lightness = 0; // start at black
        const target = 90; // very light yellow (close to white)

        const interval = setInterval(() => {
            document.body.style.backgroundColor = `hsl(60, 30%, ${lightness}%)`;
            lightness++;

            if (lightness >= target) {
                clearInterval(interval); // stop when we reach target
            }
        }, 20);

        if (playing) {
            currentSong.pause();
            currentSong.currentTime = 0;
        }
        currentSong = queqedSong;
        currentSong.play();
        playing = true;

        screenText.textContent = `Hiii loveeyyyy^o^\n \n
I know you've been looking forward to this for a few days na hehe, pero I'll be honest, most of the time di pa rin ako sure kung ano gagawin ko ToT \n \n
At first, sa Minecraft lang plano ko but na carried away ako and nagawa ko 'to huhu. Pero I enjoyed it naman (Kahit walang tulog) and I hope you enjoy this too>.< \n \n (Click the red button sa baba)`;
    } 
    else if (clickedId === 'pause') {
        buttonPress.play();
        currentSong.pause();
    }
    else if (clickedId === 'switch') {
        buttonPress.play();

        // Show the current paragraph
        screenText.textContent = paragraphs[currentIndex];

        // Move to the next paragraph for the next click
        currentIndex++;

        // Wrap around if we reach the end
        if (currentIndex >= paragraphs.length) {
            currentIndex = 0;
        }
    }
  });
});


const cassettes = document.querySelectorAll(".cassette");

cassettes.forEach(cassette => {
    cassette.addEventListener("mouseenter", () => {
        const sound = hoverSound.cloneNode();
        sound.currentTime = 0;
        sound.play();
    });
});



        
  