 //Lista provisória com todos exemplos de dados para produtos;

/*export const Dados = [
    {
        id: "id1",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/160367-1000-1000/batom-liquido-mate-metalico-azuluz-aberto.jpg?v=636247775539130000",
        titulo: "Batom Líquido Mate Metálico Azuluz",
        marca: "Avon",
        preco: 27.99,
        estoque: 10,
        tipoProduto: "Batom",
        descricao: "O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!",
        multiColor: true,
        
    },
    {
        id: "id2",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/160437-1000-1000/batom-liquido-mate-metalico-vermeluz-aberto.jpg?v=636259455546800000",
        titulo: "Líquido Mate Metálico Vermeluz",
        marca: "Avon",
        preco: 227.99,
        estoque: 7,
        tipoProduto: "Batom",
        descricao: "O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!",
        multiColor: true,
        
    },
    {
        id:"id3",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/156065-1000-1000/primer-instamatte-quem-disse-berenice-30g_1_812781.jpg?v=636046099692370000",
        titulo: "Primer Instamatte 30g",
        marca: "Quem disse berenice",
        preco: 237.99,
        estoque: 3,
        tipoProduto: "Creme para a pele",
        descricao: "O primer Instamatte é uma inovação pra quem curte ficar bem na foto. Ele é um primer que matifica a pele instantaneamente. Outra super novidade é o efeito blur (se fala blâr) que disfarça as marquinhas e ruguinhas através de partículas difusoras de luz. Sua pele lisinha e sem brilho, pra você fica bem na foto e na festa! Se joga.",
        multiColor: false,
    },
    {
        id: "id4",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/157964-1000-1000/hidratante-facial-tchau-pros-poros_814491.jpg?v=636069540312330000",
        titulo: "Hidratante Facial Tchau Poros 40Ml",
        marca: "Natura",
        preco: 954.99,
        estoque: 9,
        tipoProduto: "Hidratante",
        descricao: "Hidratante facial Antioxidante. Efeito detox hidratação até 30 horas. Aumento de colágeno – que deixa a pele mais firme.",
        multiColor: false,
        
    },
    {
        id: "id5",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/156687-1000-1000/Blush-quem-disse-berenice_1_810125.jpg?v=636046197936000000",
        titulo: "Blush QDB",
        marca: "Natura",
        preco: 1165.99,
        estoque: 5,
        tipoProduto: "Blush",
        descricao: "A gente adora blush. Afinal, uma corzinha nas bochechas levanta qualquer astral, não é mesmo? Então resolvemos criar várias cores pra você experimentar e variar. Por ter uma textura super fininha o blush QDB tem uma ótima fixação na pele dá aquele efeito natural e saudável. Viva!!",
        multiColor: false,
        
    },{
        id:"id6",
        img:"https://qbbr.vteximg.com.br/arquivos/ids/160473-488-488/pigmento-liquido-metalico-pra--olhos-peroluz-aberto.jpg?v=636259716125170000",
        titulo: "Pigmento Líquido Metálico Pra Olhos Peroluz",
        marca: "Avon",
        preco: 27.99,
        estoque:3,
        tipoProduto: "Sombra",
        descricao: "Os pigmentos deixam qualquer maquiagem mais bonita, ainda mais quando combinados com uma sombra esfumada, não é mesmo? O pigmento líquido metálico une o melhor dos dois: o efeito do pigmento e a facilidade de esfumar da sombra em pó. Incrível, né? Ele é líquido, mas ao secar parece pó, dura 10 horas e o efeito metalizado ilumina o olhar e fica ainda mais lindo esfumado. Além disso, é fácil de aplicar e por ser à base d’água, é fácil de retirar também! Tá esperando o que pra testar?",
        multiColor: true,
    },{
        id: "id7",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/160205-1000-1000/Lapis-Contorno-Labial-Incolor.jpg?v=636216593706530000",
        titulo: "Lápis Barreira Invisível Labial 1.1g - Lápis Barreira Invisível Labial 1.1G",        
        marca: "Avon",
        preco: 227.99,
        estoque: 0,
        tipoProduto: "Lápis",
        descricao: "O lápis barreira invisível pode ser usado pra contornar os lábios, criando uma película que ajuda o batom a não borrar no momento da aplicação. Ele também pode ser usado como primer, para segurar o batom no lugar por muito mais tempo.",
        multiColor: false,
        
    },{
        id:"id8",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/162619-1000-1000/Po_Translucido_Antibrilho_Amarele_1_819436.jpg?v=636493784569670000",
        titulo: "Pó Translucido Instamatte Amarelê",
        marca: "Quem disse berenice", 
        preco: 237.99, 
        estoque: 6,
        tipoProduto: "Creme para a pele", 
        descricao: "Com textura ultrafina e aveludada, o pó translúcido solto matifica a pele instantaneamente! Reduz a aparência dos poros e linhas de expressão e controla a oleosidade do rosto ao longo do dia! Sua pele sequinha e sem brilho por até 6 horas! Demais, né? Ah! E por ele ter uma corzinha, também ajuda a uniformizar o tom da sua pele. Encontrar a sua cor é fácil:",
        multiColor:false,
        
    },{
        id: "id9",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/162616-1000-1000/Primer_instamatte_bastao_1_819435.jpg?v=636493782540300000",
        titulo: "Primer instamatte bastão",
        marca: "Natura", 
        preco: 954.99,
        estoque: 5,
        tipoProduto: "Primer",
        descricao: "A gente adora uma pele bem sequinha e por isso, resolvemos trazer o nosso primer instamatte no formato bastão! O primer instamatte em bastão matifica a pele instantaneamente, sem falar do efeito blur (se fala blâr), que disfarça as marquinhas, poros e ruguinhas através de partículas difusoras de luz. Sua pele lisinha e sem brilho a qualquer hora!", 
        multiColor: false,
        
    },{
        id: "id10",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/155598-1000-1000/Base-Alta-Cobertura-Quem-disse-berenice_1_813778.jpg?v=636045408136970000",
        titulo: "Base Alta Cobertura",
        marca: "Natura",
        preco: 1165.99,
        estoque: 0,
        tipoProduto: "Base",
        descricao: "A base alta cobertura é ideal para quem quer cobrir todas as marquinhas. Ela tem alta cobertura, efeito mate, FPS 15 e dura o dia inteiro! Além de possuir ingredientes especiais que absorvem a oleosidade da pele e não obstruem os poros, ela não transfere e é resistente à água e ao suor!",
        multiColor: true,
        
    }
]*/

//Lista provisória dados para compras efetuadas
export const Compras = [
    {
        user: 'usuario1@exemplo.com',
        produto: 'Base Alta Cobertura',
        produtoId: 'id10',
        qtd: 2,
        data: '18-05-2019 13:05',
        codigo: '#1'
    },
    {
        user: 'usuario2@exemplo.com',
        produto: 'Primer instamatte bastão',
        produtoId: 'id9',
        qtd: 3,
        data: '17-05-2019 13:05',
        codigo: '#2'
    },
    {
        user: 'usuario3@exemplo.com',
        produto: 'Primer instamatte bastão',
        produtoId: 'id9',
        qtd: 1,
        data: '16-05-2019 18:01',
        codigo: '#3'
    },
]

//Lista provisória dados para publicações em blog
export const Public = [
    {
        id: 'idblog1',
        titulo: 'Dinterdum pretium es loremous dorus condimentus',
        local: 'dinterdum-pretium-es-loremous-dorus-condimentus',
        data: '30 de Maio, 2019',
        capa: '//cdn.shopify.com/s/files/1/1825/4753/articles/img-blog-02_1024x1024_9b214c6e-abeb-48f5-8b3c-6d6b07cf3520_1024x1024.jpg?v=1527677937',
        preExibicao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis dan molestie, sem...',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis dan molestie, sem in sollicitudin sodales, mi justo sagittis est, id consequat ipsum ligula a ante. Pellentesque sapien dui, miverra et commodo id ductus id est. Cras eu tempor eros donec ut porttitor lacus, nec ullamcorper massa maecenas eu nulla nisl. Destibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.',
    },{
        id: 'idblog2',
        titulo: 'Naminos elementum disumos an cosmo tincidunts loremous',
        local: 'naminos-elementum-disumos-an-cosmo-tincidunts-loremous',
        data: '30 de Maio, 2019',
        capa: '//cdn.shopify.com/s/files/1/1825/4753/articles/img-blog-01_1024x1024_6d8d098a-b141-4ba3-8164-a1cdac8a998b_1024x1024.jpg?v=1527677840',
        preExibicao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis dan molestie, sem...',
        texto: '<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis dan molestie, sem in sollicitudin sodales, mi justo sagittis est, id consequat ipsum ligula a ante. Pellentesque sapien dui, miverra et commodo id ductus id est. Cras eu tempor eros donec ut porttitor lacus, nec ullamcorper massa maecenas eu nulla nisl. Destibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.<br/><br/><br/><br/><iframe id="ytplayer" type="text/html" width="100%" height="360" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com">',
    },{
        id: 'idblog1',
        titulo: 'Dinterdum pretium es loremous dorus condimentus 2',
        local: 'dsinterdum-pretium-es-loremous-dorus-condimentus-2',
        data: '30 de Maio, 2019',
        capa: '//cdn.shopify.com/s/files/1/1825/4753/articles/img-blog-03_1_1024x1024_ae1f4a54-cc95-4f5f-9bcd-f7f529d1466e_1024x1024.jpg?v=1527677695',
        preExibicao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis dan molestie, sem...',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis dan molestie, sem in sollicitudin sodales, mi justo sagittis est, id consequat ipsum ligula a ante. Pellentesque sapien dui, miverra et commodo id ductus id est. Cras eu tempor eros donec ut porttitor lacus, nec ullamcorper massa maecenas eu nulla nisl. Destibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.',
    },
]