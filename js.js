let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountone = document.getElementById('mountone');
let mounttwo = document.getElementById('mounttwo');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let welcome = document.querySelector('.welcome');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountone.style.top = value * 1.8 + 'px';
    mounttwo.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value * 3 + 'px';
    welcome.style.fontSize = value + 'px';
    if(scrollY >= 105) {
        welcome.style.fontSize = 105 + 'px';
        welcome.style.position = 'fixed';
        if(scrollY >= 653) {
            welcome.style.display = 'none';
        }
        else{
            welcome.style.display = 'block'
        }
        if(scrollY >= 148) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }
        else(
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        )
    }

}
