
let btn=document.getElementById('gototop');
function myscrollfunction(){
    if (window.scrollY >=300)
    {
        btn.style.visibility= 'visible';
    }
    else{
        btn.style.visibility= 'hidden';

    }
}
