class Cliente{
    nome;
    cpf;
}


class contaCorrente{
    agencia;
    _saldo =0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }else{
            console.log("Saldo insuficiente!");
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cfp = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new contaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteRicardo);
const valorDepositado = contaCorrenteRicardo.depositar(2);
console.log(valorDepositado);
