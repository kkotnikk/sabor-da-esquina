// Transcrição do cardápio fornecido pelo restaurante. Valores em reais.
export const restaurant = {
  name: 'Sabor da Esquina',
  address: 'Av. Marechal Argolo Ferrão, 83 · Vila Sabrina · São Paulo, SP',
};
export const categories = [
  { id: 'pratos', name: 'Pratos' },
  { id: 'pizzas', name: 'Pizzas', note: 'Borda de catupiry grátis.' },
  { id: 'porcoes', name: 'Porções' },
  { id: 'caldos', name: 'Caldos' },
  { id: 'beirutes', name: 'Beirutes' },
  { id: 'lanches', name: 'Lanches' },
  { id: 'doces', name: 'Pizzas doces' },
  { id: 'bebidas', name: 'Bebidas' },
];
let sequence = 0;
export const menu = [];
function item(category, group, name, description, options, extra = {}) {
  menu.push({ id: `item-${++sequence}`, category, group, name, description, options: options.map(([label, price]) => ({ label, price })), ...extra });
}
const fixed = (category, group, name, price, description = '', extra = {}) => item(category, group, name, description, [['Individual', price]], extra);
const pizzaRows = [
  ['À moda',58,40,'Presunto, ervilha, bacon, palmito e mussarela.'],
  ['Alemã',58,40,'Mussarela, bacon, cebola e parmesão ralado.'],
  ['Aliche',58,40,'Aliche, rodelas de tomate e parmesão.'],
  ['Americana',58,40,'Mussarela, presunto, cebola e catupiry.'],
  ['Atum I',65,46,'Atum, cebola e azeitonas.'],
  ['Atum II',81,57,'Atum sólido com cebola.'],
  ['Alho e óleo',56,40,'Alho frito com mussarela.'],
  ['Bacon',57,37,'Bacon frito com mussarela.'],
  ['Brócolis',56,40,'Brócolis, bacon, alho e óleo, com mussarela ou catupiry.'],
  ['Baiana I',57,40,'Calabresa moída, pimenta, ovos e cebola.'],
  ['Baiana II',57,40,'Mussarela, calabresa moída, ovo, pimenta e cebola.'],
  ['Bauru',58,41,'Presunto, tomate e mussarela.'],
  ['Calabresa',53,38,'Calabresa fatiada com cebola.'],
  ['Caipira',56,40,'Frango, catupiry e milho verde.'],
  ['Camarão',75,55,'Camarão com catupiry ou mussarela.'],
  ['Canadense',56,40,'Lombo canadense, catupiry e cebola.'],
  ['Carne seca',67,47,'Carne seca com catupiry ou mussarela.'],
  ['Champignon',58,40,'Champignon e mussarela.'],
  ['Da casa',58,40,'Catupiry, calabresa e rúcula.'],
  ['Do cara',58,40,'Presunto picado, champignon, mussarela, bacon e parmesão.'],
  ['Dois queijos',53,38,'Catupiry e mussarela.'],
  ['Francesa',60,42,'Presunto, ovo, champignon e mussarela ou catupiry.'],
  ['Escarola',53,38,'Escarola, mussarela e bacon.'],
  ['Frango com catupiry',58,40,'Peito de frango temperado com catupiry.'],
  ['Jardineira',58,40,'Presunto, palmito, ervilha, milho e mussarela.'],
  ['Milho verde',53,38,'Milho verde com mussarela.'],
  ['Marguerita',53,38,'Mussarela, rodelas de tomate, parmesão e manjericão fresco.'],
  ['Mexicana',56,40,'Milho, bacon e catupiry.'],
  ['Mussarela',53,38,'Mussarela.'],
  ['Napolitana',53,38,'Mussarela, rodelas de tomate e parmesão.'],
  ['Palmito',53,38,'Palmito com mussarela ou catupiry.'],
  ['Peperoni',65,46,'Peperoni com mussarela ou catupiry.'],
  ['Peruana',58,40,'Atum sólido, palmito, ervilha e provolone.'],
  ['Portuguesa',58,41,'Presunto, mussarela, ovo, ervilha e cebola.'],
  ['Primavera',58,41,'Atum, palmito, ervilha e mussarela.'],
  ['Provolone',58,40,'Provolone e tomate.'],
  ['Quatro queijos',59,42,'Mussarela, catupiry, provolone e parmesão.'],
  ['Romana',58,40,'Mussarela com aliche importado.'],
  ['Rúcula',58,40,'Rúcula, mussarela e tomate seco.'],
  ['Salame',65,42,'Salame fatiado com mussarela ou catupiry.'],
  ['Siciliana',58,41,'Mussarela, bacon e champignon.'],
  ['Toscana',53,38,'Mussarela e calabresa moída.'],
  ['Três queijos',53,38,'Mussarela, catupiry e parmesão.'],
  ['Vegetariana',58,40,'Mussarela, brócolis, palmito, ervilha e milho verde.'],
  ['Batatosa',65,45,'Batata, mussarela, cheddar e bacon.'],
];
pizzaRows.forEach(([name,g,b,d]) => item('pizzas','Pizzas salgadas',name,d,[['Grande',g],['Broto',b]]));
fixed('pizzas','Pizzas salgadas','Barbecue',75,'Frango desfiado, catupiry, bacon e barbecue.');
fixed('pizzas','Pizzas salgadas','Strogonoff',75,'Strogonoff de frango e batata palha.');
fixed('pizzas','Pizzas salgadas','Hot dog',65,'Salsicha ao molho, catupiry e batata palha.');
[
  ['Banana','Banana, açúcar, canela e leite condensado.'],
  ['Chocolate','Chocolate e granulado.'],
  ["M&M’s","Chocolate com M&M’s."],
  ['Prestígio','Chocolate e coco ralado.'],
  ['Romeu e Julieta','Goiabada e mussarela.'],
].forEach(([name,d])=>item('doces','Pizzas doces',name,d,[['Grande',56],['Broto',40]]));
item('doces','Pizzas doces especiais','Choconana','Banana cortada e chocolate branco.',[['Tamanho a confirmar',80]]);
item('doces','Pizzas doces especiais','Sonho de Valsa','Bombom picado, chocolate ao leite e leite condensado.',[['Tamanho a confirmar',90]]);

fixed('pratos','Pratos do dia','Virado à paulista',45,"Segunda-feira. Arroz, tutu de feijão, couve e banana frita.\nBisteca, linguiça toscana, ovo e torresmo.",{ days: [1] });
fixed('pratos','Pratos do dia','Bife a rolê',40,"Terça-feira. Bife enrolado ao molho com batata, cenoura, bacon e calabresa cortados.\nAcompanha arroz, feijão, purê de batata e salada.",{ days: [2] });
item('pratos','Pratos do dia','Dobradinha',"Terça-feira. Bucho bovino, costelinha, calabresa e feijão branco.\nAcompanha arroz e salada.",[['Média',40],['Grande',55]],{days:[2]});
item('pratos','Pratos do dia','Feijoada',"Quartas e sábados. Feijão com costelinha de porco, calabresa e carne seca.\nAcompanha arroz, couve, bisteca e torresmo.\nCaipirinha à parte.",[['Pequena',50],['Média',65],['Grande',85]],{days:[3,6]});
fixed('pratos','Pratos do dia','Macarrão com galinha caipira',25,"Quinta-feira. Macarrão à bolonhesa ou alho e óleo.\nAcompanha galinha caipira ao molho e batata cozida.",{ days: [4] });
fixed('pratos','Pratos do dia','Frango assado',25,"Quinta-feira. Acompanha arroz, feijão, fritas e salada.\nPara trocar por macarrão, avise ao fazer o pedido.",{ days: [4] });
fixed('pratos','Pratos do dia','Filé de peixe ao molho de camarão',45,"Sexta-feira. Tilápia ou merluza à milanesa, coberta com molho de camarão.\nAcompanha arroz, feijão, purê de batata e salada.",{ days: [5] });
item('pratos','Pratos do dia','Baião de dois',"Aos domingos. Arroz, carne seca desfiada, queijo coalho e torresmo.\nAcompanha bisteca ou costela.",[['Pequeno',70],['Grande',95]],{days:[0]});
[
 ["Calabresa",25,"Acompanha arroz, feijão, fritas e salada."],
 ["Bisteca",25,""],
 ["Costela",25,"Costela ao molho com batata cozida.\nAcompanha arroz, feijão e salada."],
 ["Fígado",25,"Acompanha arroz, feijão, fritas e salada."],
 ["Galinha caipira",25,"Galinha caipira ao molho com batata cozida.\nAcompanha arroz, feijão e salada."],
 ["Filé de frango",25,"Acompanha arroz, feijão, fritas e salada."],
 ["Picadinho",25,"Carne de panela com batata e cenoura.\nAcompanha arroz, feijão e salada."],
 ["Espaguete",25,"À bolonhesa ou alho e óleo.\nAcompanhamentos à escolha; o preço pode variar."],
].forEach(([n,p,d])=>fixed('pratos','Pratos comerciais',n,p,d));
fixed('pratos','Pratos executivos','Carne assada',30);
fixed('pratos','Pratos executivos','Contra filé',30,"Acompanha arroz, feijão, fritas e salada.");
fixed('pratos','Pratos executivos','Rabada',35,"Rabada ao molho.\nAcompanha arroz, feijão e salada.");
fixed('pratos','Pratos executivos','Contra a cavalo',40,"Contrafilé com 2 ovos.\nAcompanha arroz, feijão, fritas e salada.");
fixed('pratos','Pratos executivos','Cubana',40,"Carne ou frango, com banana frita e palmito refogado na manteiga com ervilha, bacon e presunto.\nAcompanha arroz, feijão, fritas e salada.");
item('pratos','Pratos executivos','Parmegiana',"Carne ou frango à milanesa, com molho de tomate.\nAcompanha arroz, feijão, fritas e salada.",[['Pequena',70],['Grande',90]],{choices:['Carne','Frango']});
item('pratos','Pratos executivos','Bacalhau',"Sexta-feira. Bacalhau em postas com leguminosas.\nAcompanha arroz, feijão e salada.\nVerifique a disponibilidade no dia.",[['Pequeno',45],['Grande',90]],{days:[5]});
item('pratos','Pratos executivos','Filé de tilápia',"Filé de tilápia à milanesa.\nAcompanha arroz, feijão, fritas e salada.",[['Pequeno',45],['Grande',90]]);
item('pratos','Pratos executivos','Filé de merluza',"Filé de merluza à milanesa.\nAcompanha arroz, feijão, fritas e salada.",[['Pequeno',45],['Grande',90]]);
item('pratos','Pratos executivos','Moqueca de peixe',"Somente sob encomenda antecipada.\nAcompanha arroz, feijão e salada.",[['Pequena',60],['Grande',120]]);
item('pratos','Pratos executivos','Picanha brasileira',"Picanha na tábua com molho da casa e vinagrete.\nAcompanha arroz, feijão, fritas e salada.",[['2 pessoas',120],['4 pessoas',240]]);
fixed('pratos','Peixes','Tilápia inteira',120,'Sob encomenda antecipada',{ advanceOrder: true });
item('pratos','Pratos promocionais','Linguiça com ovo','',[['Consultar',null]]);
[
 ['Azeitona',20],['Frios',70],['Batata frita',25],['Calabresa',40],['Contra filé na tábua',85],['Costela ao molho',45],
 ['Filé de merluza',65],['Frango a passarinho',40],['Galinha ao molho',35,'Acompanha arroz, feijão e salada.'],['Mandioca',35],['Ovo de codorna',30],
 ['Porquinho',65],['Salame',50],['Filé de tilápia',65],['Provolone à milanesa',85],['Camarão à milanesa',90],['Picanha',100],
 ['Carne seca com mandioca',90],['Bolinho de costela · 6 unidades',30],['Tripa',30],['Torresmo',50],['Fritas com cheddar e bacon',65],
].forEach(([n,p,d=''])=>item('porcoes','Porções',n,d,[['Porção',p]]));
item('caldos','Caldos','Mocotó','',[['Pequeno',20],['Grande',30]]);
item('caldos','Caldos','Verde','',[['Pequeno',20],['Grande',30]]);
item('caldos','Caldos','Sururu','',[['Pequeno',20],['Grande',35]]);
item('caldos','Caldos','Mocotó em pedaço','',[['Porção',35]]);
[
 ["Calabresa",40,"Alface, tomate, maionese, queijo prato, presunto e ovo, com calabresa fatiada."],
 ["Contra filé",65,"Alface, tomate, maionese, queijo prato, presunto e ovo, com contrafilé cortado."],
 ["Filé de frango",45,"Alface, tomate, maionese, queijo prato, presunto e ovo, com filé de frango cortado."],
 ["Filé de frango cheddar",50,"Alface, tomate, maionese, queijo prato, presunto e ovo, com filé de frango cortado e cheddar."],
 ["Lombo",55,"Alface, tomate, maionese, queijo prato, presunto e ovo, com lombo canadense cortado."],
 ["Tradicional",40,"Alface, tomate, maionese, queijo prato, presunto e ovo."],
 ["Beirute de hambúrguer",45,"Alface, tomate, maionese, queijo prato, presunto e ovo, com 4 hambúrgueres."],
 ["À moda da casa",65,"Alface, tomate, maionese, queijo prato, presunto e ovo, com ervilha, palmito e bacon."],
 ["Beirute de picanha",90,"Alface, tomate, maionese, queijo prato, presunto e ovo, com picanha cortada."],
].forEach(([n,p,d])=>item('beirutes','Beirutes',n,d,[['Unidade',p]]));
[
 ["X-bacon",20,"Hambúrguer, maionese, queijo prato, bacon, alface e tomate."],
 ["X-burger",20,"Hambúrguer, maionese e queijo prato."],
 ["X-calabresa",20,"Pão francês, calabresa fatiada, queijo prato, maionese e vinagrete (tomate e cebola)."],
 ["X-egg",20,"Hambúrguer, ovo, maionese, queijo prato, alface e tomate."],
 ["X-salada",20,"Hambúrguer, maionese, queijo prato, alface e tomate."],
 ["X-tudo",30,"Hambúrguer, maionese, queijo prato, presunto, ovo, calabresa fatiada, bacon, alface e tomate."],
 ["X-churrasco",30,"Pão francês e vinagrete (tomate e cebola)."],
].forEach(([n,p,d])=>item('lanches','Lanches',n,d,[['Unidade',p]]));
item('bebidas','Bebidas','Bebidas em geral','Refrigerantes, sucos, cervejas e destilados. Consulte as opções, tamanhos e valores.',[['Consultar',null]]);

export const money = value => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(value);
export const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function filterMenu(category, query = '') {
  const term = normalize(query.trim());
  return menu.filter(x => (term || x.category === category) && (!term || normalize(`${x.name} ${x.description} ${x.group} ${categories.find(c=>c.id===x.category)?.name}`).includes(term)));
}
