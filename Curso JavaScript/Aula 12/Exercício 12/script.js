function t() {
    var num = document.getElementById('txtn')
    var res =window.document.querySelector('div#res')
    var n =Number(num.value)
    if ( num.value.length  == 0 )  {
      
    window.alert('Digite um número')
    } else if (n == 0 ){
        
        res.innerHTML = `Domingo`
            
    } else if (n == 1){
        //boa noite
        res.innerHTML ='Segunda-Feira!'
        }  else if (n==2){
            res.innerHTML ='Terça-Feira!'
        } else if (n==3){
            res.innerHTML ='Quarta-Feira!'
        } else if (n==4){
            res.innerHTML ='Quinta-Feira!'
         } else if (n==5){
            res.innerHTML ='Sexta-Feira!'
         } else if (n==6) {
            res.innerHTML ='Sábado!'
         }else {
            res.innerHTML ='<strong> NÚMERO INVÁLIDO </strong>!'
            window.alert('Digite um número VÁLIDO')
            res.style.color = 'red'
         }
        
    }