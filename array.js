
let produto = {
    nome: 'setup gamer',
    preco: 4000,
    emEstoque: true
    };
    let inventario = [
        { nome: 'Teclado mecanico', preco: 200, emEstoque: true },
        { nome: 'Mouse', preco: 150, emEstoque: false },
        { nome: 'Monitor', preco: 1000, emEstoque: true }
        { nome: 'mesa', preco: 200, emEstoque: true },
        { nome: 'cadeira gamer', preco: 800, emEstoque: false },
        { nome: 'lixeira', preco: 50, emEstoque: true } 
        { nome: 'led', preco: 100, emEstoque: true },
        { nome: 'volante gamer', preco: 300, emEstoque: false },
        { nome: 'xbox', preco: 2000, emEstoque: true }
        { nome: 'controle', preco: 250, emEstoque: true },
        { nome: 'cabo extensor', preco: 70, emEstoque: false },
        { nome: 'gabinete', preco: 200, emEstoque: true }
        { nome: 'mouse ped', preco: 100, emEstoque: true },
        { nome: 'culer', preco: 50, emEstoque: false },
        { nome: 'fone gamer', preco: 400, emEstoque: true }
        ];
        for (let i = 0; i < inventario.length; i++) {
            if (inventario[i].emEstoque) {
            console.log(inventario[i].nome + ' está em estoque.');
            }
            }