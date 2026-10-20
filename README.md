# Sabor da Esquina

Cardápio digital de consulta, com categorias, busca por nome ou ingrediente e preços por tamanho. A apresentação usa uma capa curta com imagem de pizza, categorias com ícones e um painel claro com itens e preços destacados sobre fundo escuro. Os itens são apresentados como texto, sem seleção, carrinho, formulários, pedido ou checkout.

## Conteúdo

Os nomes, preços e endereço foram transcritos de `CARDAPIO COMPLETO 11.pdf`, fornecido pelo usuário. O original está em `assets/cardapio-original.pdf`. Os dados editáveis estão em `menu.js`.

- Os preços de bebidas, misturas, pratos promocionais e Hot dog não constam no material; aparecem como “Sob consulta”.
- Choconana, Sonho de Valsa, Molho barbecue e Strogonoff têm um preço único no material, sem tamanho informado; o tamanho fica a confirmar.
- A classificação de Hot dog, Molho barbecue e Strogonoff não é visível no recorte recebido. Foram mantidos em “Mais sabores”. A linha cortada no topo da página 4 não tem identificação completa e não foi inventada.
- O prato Cubana foi mantido sem descrição porque parte dos ingredientes não está legível.
- A numeração do impresso foi omitida. Há salto do número 20 para 22 e repetição do número 46 no original; nenhum sabor foi inventado para preencher a lacuna.
- A indicação de borda grátis vem do cardápio fornecido.

## Edição e verificação

Edite os dados em `menu.js`, o layout em `index.html` e os estilos em `styles.css`. O site usa módulos ES nativos, fontes locais e não tem dependências de execução. A imagem de capa foi gerada para este projeto e não representa uma fotografia realizada no restaurante.

Os seis testes do projeto de origem foram executados com sucesso antes da exportação.

## GitHub Pages

Em Settings → Pages, selecione Deploy from a branch, branch main e pasta / (root).
