const prompt = require("prompt-sync")();
console.clear();

console.log("                JORNADA DO HERÓI!");
let = respostaSim = 0

let pergunta_1 = prompt('Você encontrou a capa da invisibilidade? ');
let pergunta_2 = prompt('Você encontrou a varinha das varinhas? ');
let pergunta_3 = prompt('Você encontrou a pedra de ressurreição? ');
let pergunta_4 = prompt('Você esta com o chapéu magico? ');
let pergunta_5 = prompt('deixou a vassoura voadora na entrada da gruta? ');
console.log();

if(pergunta_1 == 'SIM' || pergunta_1 == 'sim'){
      respostaSim++
}if(pergunta_2 == 'SIM' || pergunta_2 == 'sim'){
      respostaSim++
}if(pergunta_3 == 'SIM' || pergunta_3 == 'sim'){
      respostaSim++
}if(pergunta_4 == 'SIM' || pergunta_4 == 'sim'){
      respostaSim++
}if(pergunta_5 == 'SIM' || pergunta_5 == 'sim'){
      respostaSim++
}
if(respostaSim == 0){
    console.log('Você falhou miseravelmente');
}else if(respostaSim > 0 && respostaSim <= 2){
    console.log('Você falhou, mas ainda consegue fugir da situação.');
}else if(respostaSim == 3){
    console.log('Você chegou perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.')
}else if(respostaSim == 4){
    console.log('Depois de muito esforço você conquistou seu objetivo, embora não de maneira perfeita.')
}else if(respostaSim == 5){
    console.log('Você triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
}
console.log();

