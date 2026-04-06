const objs = [
    {
        "nome": "João",
        "idade": 20,
        "esta_trabalhando": false,
        "detalhes_profissao":{
            "profissao": null,
            "empresa": null
        },
        "hobbies": ["Programar","Jogar", "Filmes", "Academia"]
    },
    {
        "nome": "Matheus",
        "idade": 30,
        "esta_trabalhando": true,
        "detalhes_profissao":{
            "profissao": "Programador",
            "empresa": "Empresa X"
        },
        "hobbies": ["Programar","Correr", "Ler"]
    }
]

console.log(objs)

// JSON
// converter objeto para JSON

const jsonData = JSON.stringify(objs);

console.log(jsonData)
console.log(typeof jsonData)

// converter JSON para objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
});