function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = window.document.getElementById('txtano')
    var res =window.document.querySelector('div#res')
    if (fano.value.length ==0 || fano.value > ano || fano.value < 1920){
   
   window.alert('verifique os dados e tente novamente!')
    }else {

       var idade = ano - Number(fano.value)
      
     
           if (  idade < 15) {
               //criança
            res.innerHTML = `Você não pode votar`
                       
           }  else if (idade >= 16 && idade < 18 || idade >= 65 ) {
               //jovem
               res.innerHTML = `Você tem ${idade} anos seu é opcional`
           } else  {
            res.innerHTML = `Você tem ${idade} anos seu <strong> obrigatório </strong>`
        
           }
       
       
       res.style.textAlign = 'center'
       res.style.color = 'blue'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
 
   }
   
   }