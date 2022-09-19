



let valorSacado = 100;
if(this.saldo >= valorSacado){
   this.saldo -= valorSacado;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";   
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();
 cliente2.nome = "Alice";
 cliente2.cpf = 88822233309;
 cliente2.agencia = 1001;
 cliente2.saldo = 0;

 const contaCorrenteRicardo = new contaCorrente();
 contaCorrenteRicardo.saldo = 0;
 contaCorrenteRicardo.agencia = 1001;


 
 console.log(contaCorrenteRicardo.saldo);
 contaCorrenteRicardo.depositar(100);
 contaCorrenteRicardo.depositar(200);
 contaCorrenteRicardo.depositar(-1);
 console.log(contaCorrenteRicardo.saldo);
 //contaCorrenteRicardo.sacar(110)

  
 


 console.log(`Saldo disponível:${contaCorrenteRicardo.saldo}`)
console.log(cliente1);
console.log(cliente2);