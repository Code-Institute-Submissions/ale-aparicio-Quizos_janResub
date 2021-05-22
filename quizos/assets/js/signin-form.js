window.onload=function(){
    
    document.getElementById('sign-up').addEventListener('click', function(){
        document.querySelector('.popup-s').style.display = 'flex';
    });

    document.querySelector('#exit-btn').addEventListener('click', function(){
        document.querySelector(".popup-s").style.display = 'none';
    })

    document.getElementById('log-in').addEventListener('click', function(){
        document.querySelector('.popup-l').style.display = 'flex';
    });

    document.querySelector('#exit-btn-2').addEventListener('click', function(){
        document.querySelector(".popup-l").style.display = 'none';
    })

}