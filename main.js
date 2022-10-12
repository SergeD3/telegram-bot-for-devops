document.querySelector('#sub_but').onclick = function() {
    let xhttp = new XMLHttpRequest();
    let token = '5718226294:AAGlZFU8-RazR0HmUPOuYwPybVjGN64MUL8';
    
    let stage = document.querySelector('#stage').value;

    let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-1001831051095&text=' + stage;
 //   alert(stage);
    xhttp.open("GET", url, true);
    xhttp.send();
    window.location.reload();
};