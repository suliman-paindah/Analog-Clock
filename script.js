const hourEl = document.querySelector('.hour');
const secondEl = document.querySelector('.second');
const minuteEl = document.querySelector('.minute');

const toggle = document.querySelector('.toggle');

const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time')

const circleEl = document.querySelector('.circle')
const clockEl = document.querySelector('.clock')


const days = ['sunday', 'Monday', 'Tuesday'
 ,'wendsday', 'Thursday','Friday','saturday'];

 const months =['Jun','Feb','Mar','Apr','May',
 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

 toggle.addEventListener('click',(e)=>{

    const body = document.querySelector('body');
    if(body.classList.contains('dark')){
      body.classList.remove('dark')
      toggle.classList.remove('bg-white')
      toggle.classList.remove('color-black')
      e.target.innerHTML = 'Dark Mode'

    }else{

      body.classList.add('dark')
      e.target.innerHTML = 'Light Mode'
      toggle.classList.add('bg-white')
      toggle.classList.add('color-black')
    }
    
 })

 // to set analog clock
const  scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
setTime()
setInterval(setTime, 100)
 function setTime(){

  const time = new Date();
  const month = time.getMonth();
  const day = time.getDate();
  const hours = time.getHours();
  const hourForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

      hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`
      minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
      secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

     timeEl.innerHTML = `${hourForClock}:${minutes}`
     dateEl.innerHTML =  `${days[day % 7 +1 ]}/${months[month]}`

      circleEl.innerHTML =  `${day}`


 }

