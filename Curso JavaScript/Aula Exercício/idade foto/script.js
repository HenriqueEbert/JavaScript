function verificar(){
 var data = new Date()
 var ano = data.getUTCFullYear()
 var fano = window.document.getElementById('txtano')
 var res =window.document.querySelector('div#res')
 if (fano.value.length ==0 || fano.value > ano){

window.alert('verifique os dados e tente novamente!')
 }else {
    var fsex =document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ``
    var img = window.document.createElement(`img`)
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if ( idade >= 0 && idade < 10) {
            //criança
            img.setAttribute(`src`, `criançahomem.png`)
        }  else if (idade < 20 ) {
            //jovem
            img.setAttribute(`src`, `homemadolescente.png`)
        } else if (idade < 50) {
            //adulto
            img.setAttribute(`src`, `homemadulto.png`)
        }else {
            //idoso 
            img.setAttribute(`src`, `idoso.png`)
        }
    
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if ( idade >= 0 && idade < 10) {
            //criança
            img.setAttribute(`src`, `criançamulher.png`)
        }  else if (idade < 20 ) {
            //jovem
           img.setAttribute(`src`, `mulhweadolescente.png`)
        } else if (idade < 50) {
            //adulto
            img.setAttribute(`src`, `mulheradulta.png`)
        }else {
            //idoso
            img.setAttribute(`src`, `idosa.png`)
        }

    }
    res.style.textAlign = 'center'
    res.style.color = 'red'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}





}