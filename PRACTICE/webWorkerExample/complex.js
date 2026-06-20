let btn1 = document.getElementById('btn1');
window.addEventListener('load', () => {
    console.log('page is fully loaded');
});

btn1.addEventListener('click', () => {
   const workerObj = new Worker("worker.js");
    workerObj.postMessage("Start woker");
    workerObj.onmessage = function(e) {
        document.querySelector('#output').innerHTML = e.data;
    }
});

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function() {
    document.querySelector('#hi').innerText += " Hi !!"
})  