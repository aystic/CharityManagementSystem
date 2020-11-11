
let scrollinpx=window.scrollY;
let btn=document.getElementById('gototop');
btn.classList.add("invisible");
function myscrollfunction(){
    if (window.scrollY <= 500)
    {
        btn.classList.add("invisible");  
    }
    else{
        btn.classList.remove("invisible")
    }
}

