const fechaFinal = new Date('1976-04-08');
const resultado = document.getElementById('resultado');

const ms_anno = 1000 * 60 *60 * 24 * 365;
const ms_mes = 1000 * 60 *60 * 24 * 30;
const ms_dia = 1000 * 60 *60 * 24;
const ms_hora = 1000 * 60 *60;
const ms_minuto = 1000 * 60;
const ms_segundo = 1000;

setInterval(() => {
    

const hoy = new Date();

let resto;

const diffMilisegundos =  Math.abs(fechaFinal - hoy);
const anno = Math.floor(diffMilisegundos /ms_anno);

resto =diffMilisegundos % ms_anno;
const mes = Math.floor(diffMilisegundos /ms_mes);
resto =diffMilisegundos % ms_mes;
const dia = Math.floor(diffMilisegundos /ms_dia);
resto =diffMilisegundos % ms_dia;
const hora = Math.floor(diffMilisegundos /ms_hora);
resto =diffMilisegundos % ms_hora;
const minuto = Math.floor(diffMilisegundos /ms_minuto);
resto =diffMilisegundos % ms_minuto;
const segundo = Math.floor(diffMilisegundos /ms_segundo);

resultado.innerText = `${anno}: ${mes}: ${dia}: ${hora}: ${minuto}: ${segundo}`;
}, 10);

