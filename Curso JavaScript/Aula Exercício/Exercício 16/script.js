function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    res.innerHTML = 'Impossível de contar'
    window.alert('Faltam Dados')

} else {
    res.innerHTML = 'Contando: '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0 ){
        window.alert('Passo Inválido, Considerando Passo 1')
        p = 1
    }
    if (i < f ) {

    for( let c = i ; c <= f ; c += p ){
         res.innerHTML += `${c} \u{1F929}`
    }
        res.innerHTML += ` \u{1F3C1}`
}   else{
    for(c = i ; c >= f; c -=p){

        res.innerHTML +=`${c} \u{1F929}`

    }
        res.innerHTML += ` \u{1F3C1}`
}

}
}