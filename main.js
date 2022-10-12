// const axios = require('axios').default;

let TOKEN = '5718226294:AAGlZFU8-RazR0HmUPOuYwPybVjGN64MUL8';
let CHAT_ID = '-1001831051095';
let URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('feedback').addEventListener('submit', function(e) {
    e.preventDefault();
    let stage = document.querySelector('#stage').value;
    let core_version = document.querySelector('#core').value;
    let ui = document.querySelector('#ui').value;
    let lm = document.querySelector('#lm').value;
    let dict = document.querySelector('#dict').value;
    let elegans = document.querySelector('#elegans').value;

    let message = `<b>Stage:</b> ${ stage }\n<b>Версия Core (cml_bench):</b> ${ core_version }\n`+
    `<b>Версия UI (cml_ui):</b> ${ ui }\n<b>Версия LM (licenses_manager_server):</b> ${ lm }\n`+
    `<b>Версия и язык словарей (Рус/Англ):</b> ${ dict }\n<b>Версия Elegans (elegans_server):</b> ${ elegans }`;

    axios.post(URL, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    });
});