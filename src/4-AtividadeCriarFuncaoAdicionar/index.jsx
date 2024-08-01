// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

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
  return (
    <div>
        <h1>Discos de Vinil</h1>

        {
          listaProdutos.map((produto)=>
            <div key={produto.id}>
              <p>{produto.nome}</p>
              <p>{produto.preço}</p>
            </div>
              )
        }
    </div>
);
}