function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundos = data.getSeconds()
var n = window.document.getElementById('teste')
 var dia = data.getDate()
 var mes = data.getMonth() 
 var ano = data.getFullYear()
msg.innerText = `Última Atualização às ${hora}:${minuto}:${segundos}
do dia ${dia}/${mes+1}/${ano}`


if(hora >= 0 && hora < 12) {
    //bom dia
    n.innerHTML ='Bom Dia !'
document.body.style.background = '#4F4F4F'
} else if (hora >= 12 && hora <= 18 ){
    //boa tarde
    n.innerHTML ='Boa Tarde !'
        
} else {
    //boa noite
    n.innerHTML ='Boa Noite !'
    }  



if(hora >= 0 && hora < 12) {
    //bom dia
    img.src ='fotomanha.jpg'
document.body.style.background = '#4F4F4F'
} else if (hora >= 12 && hora <= 18 ){
    //boa tarde
    img.src = 'fototarde.jpg'
    document.body.style.background = '#696969'
    
} else {
    //boa noite
    img.src = 'fotonoite.jpg'
    
        document.body.style.background = 'black'
    }  
}   
