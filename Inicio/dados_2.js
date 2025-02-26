let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto)

let nome = "Caderno"    // String -> texto
let categoria = "papelaria" // String -> texto
console.log(nome + categoria) // Concatenação
console.log(nome + " " + categoria) // Concatenação com espaço
// Concatenação é basicamente juntar duas strings
console.log("Produto: " + nome  // String -> Sequencia de caracteres
     + ", Categoria: " + categoria
     + ", Preco: " + preco
     + ", Desconto: " + desconto)