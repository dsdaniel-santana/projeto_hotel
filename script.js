// Classe Quarto:
// Representa um quarto de hotel com atributos como número, tipo, preço da diária e estado de reserva.

//     Atributos:
//         numero: Número identificador do quarto.
//         tipo: Tipo de quarto (ex: Standard, Luxo, Suíte).             
//         precoDiaria: Preço da diária do quarto.
//         reservado: Indica se o quarto está reservado (inicialmente falso).

//     Método verificarDisponibilidade():
//         Retorna um booleano indicando se o quarto está disponível para reserva.



// Classe Hospede:
// Representa um hóspede do hotel com atributos como nome e e-mail.

//     Atributos:
//         nome: Nome do hóspede.
//         email: Endereço de e-mail do hóspede.


// Classe Reserva:
// Representa uma reserva de quarto associada a um hóspede, um quarto e as datas de início e fim da estadia.

//     Atributos:
//         quarto: Quarto reservado.
//         hospede: Hóspede associado à reserva.
//         dataInicio: Data de início da reserva.
//         dataFim: Data de fim da reserva.
//         custoTotal: Custo total da estadia, calculado automaticamente.

//     Método calculaCustoTotal():
//         Calcula o custo total da estadia com base nas datas de início e fim e no preço da diária do quarto.


// Classe Hotel:
// Representa um hotel que possui quartos e gerencia reservas.

//     Atributos:
//         quartos: Array de quartos disponíveis no hotel.
//         reservas: Array de reservas realizadas no hotel.

//     Método adicionarQuarto(quarto):
//         Adiciona um quarto à lista de quartos disponíveis no hotel.

//     Método reservarQuarto(quarto, hospede, dataInicio, dataFim):
//         Reserva um quarto para um hóspede nas datas especificadas.
//         Retorna a reserva se bem-sucedida; caso contrário, retorna null.

//     Método exibirQuartosDisponiveis():
//         Exibe no console os quartos disponíveis no hotel.

// Exemplo de Uso:

//     Cria um hotel, adiciona quartos e exibe os quartos disponíveis.
//     Cria um hóspede.
//     Reserva um quarto para o hóspede e exibe o custo total da reserva.
//     Tenta reservar um quarto ocupado.
//     Exibe os quartos disponíveis após as reservas.


class quarto {
        constructor (numero, tipo, precoDiaria, reservado){
        this.numero = numero;
        this.tipo = tipo;
        this.precoDiaria = precoDiaria;
        this.reservado = reservado;
        reservado = false;
    }
    
    estaDisponivel() {
        return !this.reservado;
    }

    
}


class hospede {
    constructor (nome, email){
        this.nome = nome;
        this.email = email;

    }
}

// Classe Reserva:
// Representa uma reserva de quarto associada a um hóspede, um quarto e as datas de início e fim da estadia.

//     Atributos:
//         quarto: Quarto reservado.
//         hospede: Hóspede associado à reserva.
//         dataInicio: Data de início da reserva.
//         dataFim: Data de fim da reserva.
//         custoTotal: Custo total da estadia, calculado automaticamente.

//     Método calculaCustoTotal():
//         Calcula o custo total da estadia com base nas datas de início e fim e no preço da diária do quarto.


class Reserva {
    constructor(quarto, hospede, dataInicio, dataFim) {
        this.quarto = quarto;
        this.hospede = hospede;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        // this.custoTotal = this.calculaCustoTotal();
    }

    calculaCustoTotal() {
        const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
        const diferencaEmMilissegundos = this.dataFim- this.dataInicio;
        const diferencaEmDias = diferencaEmMilissegundos / umDiaEmMilissegundos;
        // return diferencaEmDias * this.quarto.precoDiaria;
        let total = diferencaEmDias * this.quarto.precoDiaria;
       return `Reserva Feita com sucesso! Quarto: ${this.quarto.numero}, custo total: ${total}`
    }
}

class hotel{
    constructor(){
        this.quartos= [];
        this.reservas = [];
    }
    
    adicionarQuarto(quarto){
        this.quartos.push(quarto);

    }
    
    reservarQuarto(quarto, hospede, dataInicio, dataFim) {
        if(quarto.estaDisponivel()){
            quarto.reservado = true;
            let reserva = new Reserva(quarto, hospede, dataInicio, dataFim);
            this.reservas.push(reserva);
            return reserva; // Reserva Efetuado com Sucesso
        }
         return `sem sucesso`
        //  else {
        //         return false; // não esta disponivel
        //     }
        
        // if (quarto.estaDisponivel()) {
        //     quarto.reservado = true;
        //     const novaReserva = new Reserva(quarto, hospede, dataInicio, dataFim);
        //     this.reservas.push(novaReserva);
        //     return novaReserva;
        // } else {
        //     console.log("Quarto indisponível para reserva.");
        //     return null;
        // }
    }


    exibirQuartosDisponiveis(){
        this.quartos.forEach(quarto=> {
            if(!quarto.reservado){
                console.log(`Quartos Disponiveis: ${quarto.numero} - Tipo: ${quarto.tipo} - Preço da diária: R$${quarto.precoDiaria}`);     
            }
        });
    
    }
    


}

// Criando instâncias de Quarto, Hospede e Hotel
const quarto1 = new quarto(101, "Standard", 100);
const quarto2 = new quarto(102, "Luxo", 150);
const hospede1 = new hospede("Ana", "ana@example.com");


console.log(quarto1);
console.log(quarto2);
console.log(hospede1);

// Adicionando quartos ao hotel
const meuHotel = new hotel();
meuHotel.adicionarQuarto(quarto1)
meuHotel.adicionarQuarto(quarto2)

console.log(meuHotel.quartos);

//reservar quarto
const reserva1 = meuHotel.reservarQuarto(meuHotel.quartos[0], hospede1,new Date ('2024-03-01'),new Date( '2024-03-05'));
console.log(reserva1.calculaCustoTotal());


meuHotel.exibirQuartosDisponiveis();