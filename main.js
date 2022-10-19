// const axios = require('axios').default;

let TOKEN = '5718226294:AAGlZFU8-RazR0HmUPOuYwPybVjGN64MUL8';
let CHAT_ID = '-1001831051095';
let URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('inputGroupSelect01').addEventListener('input', function(t) {
    let get_sel = document.querySelector('#inputGroupSelect01');
    let get_team = document.querySelector('#team');
    let sel_value = get_sel.value;
    
    switch(sel_value){
        case '0':
            get_team.setAttribute('value', '-');
            break;
        case '1':
            get_team.setAttribute('value', 'Команда А. Мяснова');
            break;
        case '2':
            get_team.setAttribute('value', 'Команда М. Болсуновской');
            break;
        case '3':
            get_team.setAttribute('value', 'Команда А. Тамма');
            break;
    };
});

document.getElementById('res_but').addEventListener('click', function(){
    let get_team_reset = document.querySelector('#team');
    get_team_reset.setAttribute('value', '-');
});

document.getElementById('feedback').addEventListener('submit', function(e) {
    e.preventDefault();
    let stage = document.querySelector('#stage').value;
    let core_version = document.querySelector('#core').value;
    let ui = document.querySelector('#ui').value;
    let lm = document.querySelector('#lm').value;
    let dict = document.querySelector('#dict').value;
    let elegans = document.querySelector('#elegans').value;
    let success = document.getElementById('success');

    let get_sel1 = document.querySelector('#inputGroupSelect01');
    let sel_text1 = get_sel1.options[get_sel1.selectedIndex].text;
    let get_team1 = document.querySelector('#team').value;

    let message = `<b>Stage:</b>  ${ stage }\n<b>Версия Core (cml_bench):</b>  ${ core_version }\n`+
    `<b>Версия UI (cml_ui):</b>  ${ ui }\n<b>Версия LM (licenses_manager_server):</b>  ${ lm }\n`+
    `<b>Версия и язык словарей (Рус/Англ):</b>  ${ dict }\n<b>Версия Elegans (elegans_server):</b>  ${ elegans }`+
    `\n<b>Пользователь:</b>  ${ sel_text1 }\n<b>Команда:</b>  ${ get_team1 }`;

    if(stage != '' || core_version != '' || ui != '' || lm != '' || dict != '' || elegans != ''){
    axios.post(URL, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        console.log(res);
        success.innerHTML = 'Сообщение успешно отправлено!';
        success.style.display = 'block';
        setTimeout(refresh_window, 2000);
    })
    .catch((err) => {
        console.warn(err);
        success.innerHTML = 'Возникла ошибка!';
        success.style.display = 'block';
    });
}else{
    alert('Заполни поля, Братан!');
};
});

const refresh_window = () =>{
    window.location.reload();
};