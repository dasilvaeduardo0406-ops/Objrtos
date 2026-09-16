const cliente = {
    nome: "AURELIO",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.endereços = [
{
    rua: "r. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);
if (!chavesDoObjeto.includes("endereços")){
    console.error ("erro. é necessário ter um endereço cadastrado");
}