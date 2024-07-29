const hourEl = document.getElementById('hours')
const minuteEl = document.getElementById('minutes')
const secondEl = document.getElementById('seconds')
const ampmEl = document.getElementById('ampm')

function updateclock() {
    let h =  new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if (h>12) {
        h -= 12
        ampm = "PM"
    } 

    h = h<10 ? '0' + h : h; 
    m = m<10 ? '0' + m : m; 
    s = s<10 ? '0' + s : s; 

    hourEl.innerHTML = h
    minuteEl.innerHTML = m
    secondEl.innerHTML = s
    ampmEl.innerHTML = ampm
    setTimeout(()=>{
        updateclock()
    },1000)
}
updateclock()