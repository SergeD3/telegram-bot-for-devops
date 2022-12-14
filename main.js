// const axios = require('axios').default;

let TOKEN = '5718226294:AAGlZFU8-RazR0HmUPOuYwPybVjGN64MUL8';
let CHAT_ID = '-1001831051095';
let URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('inputGroupSelect01').addEventListener('input', function(t) {
    let get_t_u = get_user_team();

    switch(get_t_u.user_value){
        case '0':
            get_t_u.get_t.setAttribute('value', '-');
            break;
        case '1':
            get_t_u.get_t.setAttribute('value', 'А. Мяснова');
            break;
        case '2':
            get_t_u.get_t.setAttribute('value', 'М. Болсуновской');
            break;
        case '3':
            get_t_u.get_t.setAttribute('value', 'А. Тамма');
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
    let getUserTeam = get_user_team();

    let message = `<b>Stage:</b>  ${ stage }\n<b>Версия Core (cml_bench):</b>  ${ core_version }\n`+
    `<b>Версия UI (cml_ui):</b>  ${ ui }\n<b>Версия LM (licenses_manager_server):</b>  ${ lm }\n`+
    `<b>Версия и язык словарей (Рус/Англ):</b>  ${ dict }\n<b>Версия Elegans (elegans_server):</b>  ${ elegans }`+
    `\n<b>Пользователь:</b>  ${ getUserTeam.user_name }\n<b>Команда:</b>  ${ getUserTeam.teamName }`;

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
    alert('Необходимо заполнить хотя бы одно поле!');
};
});

const get_user_team = () => {
    let get_sel = document.querySelector('#inputGroupSelect01'); // получаю объект поля Пользователь select
    let get_team = document.querySelector('#team'); // получаю объект поля Команда
    let team_name = get_team.value; // получаю название команды
    let sel_text = get_sel.options[get_sel.selectedIndex].text; // получаю ФИО сотрудника
    let sel_value = get_sel.value; // получаю номер команды

    return {sel_obj: get_sel, get_t: get_team, user_name: sel_text, user_value: sel_value, teamName: team_name};
};

const refresh_window = () =>{
    window.location.reload();
};