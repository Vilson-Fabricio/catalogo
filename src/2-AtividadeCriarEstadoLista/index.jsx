// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Dire Straits', preço: 'R$ 260,00',},
    { id: 2, nome: 'A hard days night', preço: 'R$ 231,00',},
    { id: 3, nome: 'The dark side of the moon', preço: 'R$ 430,00',}
  ]);

  return (
    <div>
        <h1>Discos de Vinil</h1>
    </div>
);
}

