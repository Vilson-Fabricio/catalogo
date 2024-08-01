// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Dire Straits', preço: 'R$ 260,00',},
    { id: 2, nome: 'A hard days night', preço: 'R$ 231,00',},
    { id: 3, nome: 'The dark side of the moon', preço: 'R$ 430,00',}
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);
  
  const adicionarItemPedidos = (Objeto) => {
    setListaPedidos([...listaPedidos, Objeto])
  }

  const removerItemPedido = (id) => {
    let remover = false;
    let listaAux = listaPedidos.filter((produto) => {
      if(remover == false){
        if(produto.id !== id){
          return produto
        } else {
          remover = true;
          return null
        }
      } else {
        return produto
      }
    })
    setListaPedidos(listaAux);
  }
  return (
    <div>
        <h1>Discos de Vinil</h1>

        {
          listaProdutos.map((produto)=>
            <div key={produto.id}>
              <p>{produto.nome}</p>
              <p>{produto.preço}</p>
              <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
            </div>
              )
        }
        {
          listaPedidos.map((produto)=>
            <div key={produto.id}>
              <p>{produto.nome}</p>
              <p>{produto.preço}</p>
            </div>
        )
        }
    </div>
);
}