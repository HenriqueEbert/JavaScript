let amigo = {nome: 'Henrique',
idade: 24.5,
peso: 65,
sexo:'M', 
engordar(p=0){
console.log('Engordou')
this.peso += p
 }}
 amigo.engordar(85)
 console.log ( `${amigo.nome} pesa ${amigo.peso}` )