/* Music Control */
const music = document.getElementById("bgMusic");
function toggleMusic(){
if(music.paused) music.play();
else music.pause();
}

/* Typing Title */
const titleText = "🎉 Happy New Year 2026 🎉";
let i = 0;
const typing = document.getElementById("typing");
if(typing){
setInterval(()=>{
typing.innerHTML = titleText.slice(0,i++);
if(i > titleText.length) i = 0;
},150);
}

/* Name Animation */
const nameText = "SNIGDHA 💖";
let n = 0;
const nameEl = document.getElementById("nameAnim");
if(nameEl){
setInterval(()=>{
nameEl.innerHTML = nameText.slice(0,n++);
if(n > nameText.length) n = 0;
},200);
}

/* Dark Light Mode */
function toggleMode(){
document.body.classList.toggle("light");
}

/* Countdown */
const target = new Date("January 1, 2026 00:00:00").getTime();
setInterval(()=>{
const now = new Date().getTime();
const diff = target - now;
if(diff > 0){
document.getElementById("d").innerText = Math.floor(diff/(1000*60*60*24));
document.getElementById("h").innerText = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
document.getElementById("m").innerText = Math.floor((diff%(1000*60*60))/(1000*60));
document.getElementById("s").innerText = Math.floor((diff%(1000*60))/1000);
}
},1000);

/* Advanced Fireworks */
const canvas = document.getElementById("canvas");
if(canvas){
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

function createFirework(){
for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*4,
vy:(Math.random()-0.5)*4,
life:100,
color:`hsl(${Math.random()*360},100%,60%)`
});
}
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach((p,i)=>{
p.x += p.vx;
p.y += p.vy;
p.life--;
ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle=p.color;
ctx.fill();
if(p.life<=0) particles.splice(i,1);
});
requestAnimationFrame(animate);
}

setInterval(createFirework,800);
animate();
}
