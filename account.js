document.getElementById('loaned-button').addEventListener('click', function(){
    document.querySelector('.loaned-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.loaned-modal').style.display = 'none';
});

document.getElementById('rented-button').addEventListener('click', function(){
    document.querySelector('.rented-modal').style.display = 'flex';
});

document.querySelector('.rented-close').addEventListener('click', function() {
    document.querySelector('.rented-modal').style.display = 'none';
});