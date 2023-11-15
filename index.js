const input = require('readline-sync'); // Realiza a entrada de dados

let nivel = "";
let xp = 1;
let nomeHeroi = "";



                                // EEstrutura de repetição
while (true) {

    // Operação de atribuição - valor a ser atribuido 
    nomeHeroi = input.question("Informe o nome do Heroi: ");
    xp = input.questionInt("Informe a quantidade de experiencia (xp) do seu heroi: ");


    
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }


    
                                    // Possiveis Saídas 
     if (nomeHeroi !== "" && xp !== 0)
     console.log(`O Heroi de nome: ${nomeHeroi}, esta no nivel: ${nivel}.`);
 else
     console.log(`Você precisa informar o nome do heroi e seu xp para verificar o nivel.`);


 let verificarOutroNivel = input.question("Deseja verificar mais algum nivel de heroi? [y/n]: ");

                                // Estrutura encerramento
 if (verificarOutroNivel.toLowerCase() === 'n')
     break;

}