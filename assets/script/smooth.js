const body=document.body,
    smooth=document.querySelector('.smooth'),
    height=smooth.getBoundingClientRect().height-1,
    speed = 0.04;

let offset = 500

function smoothScroll(){
    offset += (window.pageYOffset - offset) * speed
    let scroll = "translateY(-" + offset + "px) translateZ(0)";
    smooth.style.transform=scroll

    callScroll = requestAnimationFrame(smoothScroll)

}
smoothScroll()