let navbar = document.getElementById('ull');

document.querySelector('#menu-btn').onclick = () =>{
    if( navbar.style.visibility == '' ){
        navbar.style.visibility= 'visible'
    }else{
        navbar.style.visibility= ''
    }
}

