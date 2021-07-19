//console.log("Program Start");
//sample: Your Jupiter is in Aries
//sample: You have 'x' earth signs, and 'y' air signs.
const address = [
    'You',
    'Your'
]
const planets = [
    "Mercury",
    "Earth",
    "Jupiter",
    "Uranus",
    "Mars",
    "Venus",
    "Saturn",
    "Neptune",
    "Pluto"
    ]
const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
]

const getRandNum = (max) => {
    const num = Math.floor(Math.random() * max);
    return num;
}

const randomizer = {
    output(){
        let s = "";
        const startNum = getRandNum(2);
        s += address[startNum];
        if(startNum > 0) //Your
        {
            s += ' ';
            s += planets[getRandNum(planets.length)];
            s+= ' is in ';
            s += signs[getRandNum(signs.length)];
            s+= '.'
        }
        else{ //You
            const earthSigns = getRandNum(planets.length);
            const airSigns = Math.min(planets.length - earthSigns,getRandNum(planets.length));
            // console.log(earthSigns);
            // console.log(airSigns);
            // console.log(earthSigns + airSigns);
            let signsText = "sign";
            if(airSigns != 1){
                signsText += 's';
            }
            s+= ` have ${earthSigns} earth signs, and ${airSigns} air ${signsText}.`
        }
        console.log(s);
    }
}


randomizer.output();

