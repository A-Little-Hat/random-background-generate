const bg = [
    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
    "linear-gradient(9deg, rgba(220,63,251,1) 0%, rgba(70,77,252,1) 100%)",
    "radial-gradient(circle, rgba(220,63,251,1) 0%, rgba(70,77,252,1) 100%)",
    "linear-gradient(90deg, rgba(220,63,251,1) 0%, rgba(70,77,252,1) 100%)",
    "linear-gradient(9deg, rgba(251,173,63,1) 0%, rgba(252,70,80,1) 100%)",
    "linear-gradient(15deg, rgba(160,160,254,1) 36%, rgba(255,165,91,0.9976365546218487) 73%)",
    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
    "linear-gradient(90deg, rgba(251,173,63,1) 0%, rgba(252,70,80,1) 100%)",
    "radial-gradient(circle, rgba(220,63,251,1) 0%, rgba(70,77,252,1) 100%)",
    "linear-gradient(90deg, rgba(160,160,254,1) 36%, rgba(255,165,91,0.9976365546218487) 73%)"
]
setInterval(()=>{
    var index = Math.floor(Math.random() * 10);
    document.body.style.background = bg[index]
},1000)