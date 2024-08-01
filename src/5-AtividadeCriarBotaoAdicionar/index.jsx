// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

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
              <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
            </div>
              )
        }
    </div>
);
}
