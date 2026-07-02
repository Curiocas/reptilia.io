'use strict';

window.REPTILIA = window.REPTILIA || {};

(() => {
  const R = window.REPTILIA;
  const findZone = id => R.ZONES.find(zone => zone.id === Number(id));

  function addLessons(id, lessons) {
    const zone = findZone(id);
    if (!zone) return;
    lessons.forEach(lesson => {
      if (!zone.lessons.some(existing => existing.title === lesson.title)) zone.lessons.push(lesson);
    });
  }

  function addQuestions(id, questions) {
    const zone = findZone(id);
    if (!zone) return;
    questions.forEach(question => {
      if (!zone.questions.some(existing => existing.q === question.q)) zone.questions.push(question);
    });
  }

  const lessons = {
    1: [
      {
        title: 'DOSSIÊ: COMO UM RÉPTIL VIVE EM TERRA',
        speech: 'Terra seca exige estratégia.',
        body: `<strong>Viver fora da água não é apenas "andar no chão".</strong>\n\nPara um vertebrado ocupar ambientes terrestres com sucesso, ele precisa resolver quatro problemas ao mesmo tempo: evitar desidratação, respirar ar, sustentar o corpo contra a gravidade e reproduzir sem depender de água externa. Os répteis resolvem isso com pele rica em queratina, pulmões funcionais, fecundação interna e ovo amniótico.\n\nA pele queratinizada age como uma barreira física. Ela reduz a evaporação, protege contra atrito e permite que lagartos, serpentes, tartarugas e crocodilianos explorem lugares onde anfíbios perderiam água rapidamente. Essa pele, porém, quase não participa da respiração. Por isso, os pulmões se tornam essenciais.\n\n<span class="highlight">Ideia-chave:</span> os répteis não são "anfíbios mais secos". Eles representam uma solução evolutiva diferente para o desafio de viver em terra.`
      },
      {
        title: 'ESTUDO DE CASO: TERMORREGULAÇÃO',
        speech: 'Sol e sombra são ferramentas.',
        body: `<strong>Ectotermia não significa fraqueza.</strong>\n\nUm réptil ectotérmico regula sua temperatura usando o ambiente. Ele pode se aquecer ao sol pela manhã, ficar sobre rochas quentes, buscar sombra ao meio-dia e reduzir atividade em horários frios. Esse comportamento é chamado de termorregulação comportamental.\n\nA vantagem é econômica: como não precisa produzir tanto calor interno quanto aves e mamíferos, o réptil gasta menos energia para se manter vivo. A desvantagem é a dependência das condições externas. Dias muito frios reduzem movimentos, digestão e caça.\n\n<span class="highlight">Para pensar:</span> o mesmo sol que permite atividade também pode causar superaquecimento. Por isso o habitat precisa ter microambientes: pedras, troncos, folhas, buracos e sombra.`
      }
    ],
    2: [
      {
        title: 'DOSSIÊ: CLASSIFICAR NÃO É DECORAR LISTA',
        speech: 'Parentesco conta história.',
        body: `<strong>Classificação biológica organiza parentescos.</strong>\n\nQuando falamos em Testudines, Squamata, Crocodylia e Rhynchocephalia, estamos falando de linhagens com histórias evolutivas diferentes. Tartarugas têm carapaça integrada ao esqueleto. Lagartos e serpentes pertencem aos escamados. Crocodilianos são arcossauros, mais próximos das aves do que dos lagartos.\n\nNa sistemática moderna, aves ficam dentro do grande grupo dos répteis porque descendem de dinossauros terópodes. Isso pode parecer estranho quando pensamos apenas em animais atuais, mas fica mais claro quando olhamos fósseis, crânios, ossos, penas e DNA.\n\n<span class="highlight">Ideia-chave:</span> grupos biológicos não são gavetas fixas; eles são hipóteses sobre ancestralidade comum.`
      },
      {
        title: 'COMPARAÇÃO: QUELÔNIOS, ESCAMADOS E CROCODILIANOS',
        speech: 'Cada corpo revela uma solução.',
        body: `<strong>Quelônios:</strong> tartarugas, cágados e jabutis possuem casco formado por carapaça e plastrão. O casco protege, mas também muda a respiração e a locomoção.\n\n<strong>Escamados:</strong> lagartos e serpentes formam o grupo mais diverso. Em serpentes, a perda de membros veio junto com crânio flexível, língua bífida e locomoção especializada.\n\n<strong>Crocodilianos:</strong> jacarés e crocodilos têm cuidado parental, coração com quatro câmaras e corpo adaptado à vida semiaquática.\n\n<span class="highlight">Resumo útil:</span> aprender grupos de répteis fica mais fácil quando associamos nome, forma corporal, ambiente e comportamento.`
      }
    ],
    3: [
      {
        title: 'DOSSIÊ: ANATOMIA COMO CONJUNTO',
        speech: 'Órgãos trabalham em equipe.',
        body: `<strong>A anatomia dos répteis combina economia de água, locomoção e alimentação.</strong>\n\nA cloaca é uma câmara comum para sistemas digestório, urinário e reprodutivo. Isso não significa simplicidade; significa integração. A excreção de ácido úrico economiza água e é muito importante tanto em ambientes secos quanto dentro do ovo amniótico.\n\nO sistema digestório varia conforme a dieta. Serpentes podem engolir presas inteiras e digerir lentamente. Quelônios herbívoros processam fibras vegetais. Crocodilianos possuem estômago poderoso e podem ingerir pedras que ajudam na trituração.\n\n<span class="highlight">Ideia-chave:</span> uma adaptação raramente age sozinha. Mandíbula, esôfago, metabolismo, excreção e comportamento se conectam.`
      },
      {
        title: 'SENTIDOS E SOBREVIVÊNCIA',
        speech: 'O mundo chega por sinais.',
        body: `<strong>Répteis percebem o ambiente de formas muito refinadas.</strong>\n\nSerpentes e alguns lagartos captam partículas químicas com a língua. Essas partículas chegam ao órgão de Jacobson, que ajuda a identificar presas, predadores, parceiros e trilhas químicas. Algumas serpentes também detectam infravermelho por fossetas sensíveis ao calor.\n\nA visão é importante em muitos lagartos, especialmente para comunicação por cores, postura e movimentos de cabeça. Já serpentes percebem vibrações pelo corpo e pelos ossos da mandíbula.\n\n<span class="highlight">Para pensar:</span> quando um réptil fica parado, ele pode estar observando, sentindo vibrações, avaliando temperatura e captando cheiros ao mesmo tempo.`
      }
    ],
    4: [
      {
        title: 'DOSSIÊ: EVOLUÇÃO DOS AMNIOTAS',
        speech: 'O ovo mudou o jogo.',
        body: `<strong>Amniotas são vertebrados cujo embrião se desenvolve protegido por membranas especiais.</strong>\n\nEsse grupo inclui répteis, aves e mamíferos. O ancestral comum dos amniotas viveu há centenas de milhões de anos e trouxe uma inovação decisiva: o embrião podia se desenvolver em um ambiente líquido próprio, mesmo fora da água externa.\n\nDepois disso, várias linhagens se diversificaram. Diápsidos deram origem a lagartos, serpentes, crocodilianos, dinossauros e aves. A história dos répteis, portanto, também é a história de grandes radiações evolutivas.\n\n<span class="highlight">Ideia-chave:</span> evolução não é uma escada. É uma árvore com muitos ramos, alguns extintos e outros vivos.`
      },
      {
        title: 'FÓSSEIS COMO EVIDÊNCIA',
        speech: 'Pedras guardam pistas.',
        body: `<strong>Fósseis não são apenas ossos antigos; são dados.</strong>\n\nUm fóssil pode mostrar formato do crânio, tipo de dente, posição dos membros, presença de penas, ovos, pegadas ou marcas de pele. Comparando muitos fósseis, cientistas constroem hipóteses sobre parentesco e mudança ao longo do tempo.\n\nO Archaeopteryx é famoso porque combina características de dinossauros e aves. Ele não é uma "mistura mágica"; é uma evidência de transição, mostrando que traços podem aparecer em mosaico.\n\n<span class="highlight">Para pensar:</span> uma única espécie fóssil não conta tudo. A força da evolução aparece no conjunto de evidências.`
      }
    ],
    5: [
      {
        title: 'DOSSIÊ: PEÇONHA COM BIOLOGIA, NÃO MEDO',
        speech: 'Conhecer reduz risco.',
        body: `<strong>Peçonha é uma mistura de moléculas com funções biológicas.</strong>\n\nEm serpentes, a peçonha pode imobilizar presas, iniciar digestão e defender o animal. Ela pode conter toxinas neurotóxicas, hemotóxicas, miotóxicas, coagulantes e enzimas que afetam tecidos. A composição varia entre espécies e até populações.\n\nIsso não torna a serpente "má". Ela usa a peçonha para sobreviver. O acidente acontece quando há encontro perigoso entre humanos e animais, geralmente por pisar perto, tentar capturar, matar ou manusear.\n\n<span class="highlight">Ideia-chave:</span> segurança vem de distância, informação e atendimento médico rápido, não de perseguição ao animal.`
      },
      {
        title: 'CONDUTA CORRETA EM ACIDENTES',
        speech: 'Primeiros atos importam.',
        body: `<strong>Em acidente ofídico, tempo e conduta correta salvam.</strong>\n\nA pessoa deve ficar em repouso, retirar anéis ou objetos apertados, evitar esforço e procurar atendimento médico. Se for possível observar o animal sem risco, uma foto distante pode ajudar; capturar a serpente não é necessário e aumenta o perigo.\n\nNão se deve cortar, sugar, colocar substâncias, fazer torniquete ou tentar "tratamentos caseiros". Essas ações podem piorar necrose, infecção, sangramento e atraso no soro.\n\n<span class="highlight">Resumo prático:</span> afastar, acalmar, imobilizar, registrar o horário e buscar hospital.`
      }
    ],
    6: [
      {
        title: 'DOSSIÊ: OVO AMNIÓTICO POR DENTRO',
        speech: 'Um sistema completo.',
        body: `<strong>O ovo amniótico funciona como uma unidade de suporte à vida.</strong>\n\nO âmnio envolve o embrião em líquido, protegendo contra choques e ressecamento. O saco vitelínico armazena nutrientes. O cório participa de trocas gasosas. O alantoide armazena resíduos nitrogenados e também auxilia na respiração embrionária.\n\nA casca precisa equilibrar proteção e troca. Se fosse totalmente impermeável, o embrião não respiraria; se fosse frágil demais, desidrataria ou seria destruído com facilidade.\n\n<span class="highlight">Ideia-chave:</span> o ovo amniótico não é só "casca". É um conjunto coordenado de membranas, reservas e trocas.`
      },
      {
        title: 'OVIPARIDADE, VIVIPARIDADE E AMBIENTE',
        speech: 'Nem todo réptil põe ovos fora.',
        body: `<strong>Muitos répteis são ovíparos, mas isso não vale para todos.</strong>\n\nAlgumas serpentes e lagartos são vivíparos: os filhotes se desenvolvem dentro do corpo da mãe e nascem vivos. Em ambientes frios, isso pode ser vantajoso porque a fêmea consegue se deslocar e escolher locais mais quentes durante o desenvolvimento.\n\nEm tartarugas e crocodilianos, a incubação externa é comum e a temperatura do ninho pode influenciar o sexo dos filhotes. Por isso mudanças climáticas e alteração de praias de postura podem ter efeitos populacionais.\n\n<span class="highlight">Para pensar:</span> reprodução é sempre ligada ao ambiente.`
      }
    ],
    7: [
      {
        title: 'DOSSIÊ: RÉPTEIS NO ECOSSISTEMA',
        speech: 'Toda espécie tem papel.',
        body: `<strong>Répteis participam de redes ecológicas complexas.</strong>\n\nSerpentes controlam populações de roedores, anfíbios, aves pequenas e outros animais. Lagartos consomem insetos e também servem de alimento para aves e mamíferos. Crocodilianos podem controlar presas aquáticas e abrir caminhos em áreas alagadas. Quelônios dispersam sementes e conectam ambientes aquáticos e terrestres.\n\nQuando uma espécie desaparece, o efeito não fica isolado. Pode haver aumento de presas, perda de alimento para predadores e mudanças no equilíbrio do habitat.\n\n<span class="highlight">Ideia-chave:</span> conservar répteis é conservar processos ecológicos.`
      },
      {
        title: 'FRAGMENTAÇÃO DE HABITAT',
        speech: 'Estradas cortam rotas.',
        body: `<strong>Habitat fragmentado é habitat quebrado em pedaços.</strong>\n\nEstradas, plantações, cidades e queimadas podem separar áreas que antes eram contínuas. Para répteis, isso é grave porque muitos dependem de rotas entre locais de alimentação, abrigo, reprodução e termorregulação.\n\nO atropelamento é comum porque estradas aquecem ao sol e atraem animais ectotérmicos. Além disso, cruzar pistas pode ser necessário para chegar a rios, ninhos ou matas.\n\n<span class="highlight">Solução:</span> corredores ecológicos, passagens de fauna, educação ambiental e preservação de matas reduzem o problema.`
      }
    ],
    8: [
      {
        title: 'DOSSIÊ: RÉPTEIS NOS BIOMAS DO BRASIL',
        speech: 'O Brasil muda muito.',
        body: `<strong>O Brasil reúne biomas com pressões ambientais diferentes.</strong>\n\nNa Amazônia, rios e florestas sustentam sucuris, jacarés, tracajás e muitos lagartos. No Cerrado, fogo natural, campos abertos e estações secas selecionam espécies resistentes. Na Caatinga, economia de água e atividade em horários adequados são decisivas. No Pantanal, cheias e secas moldam a vida de jacarés e quelônios. Na Mata Atlântica, fragmentação ameaça muitas espécies.\n\n<span class="highlight">Ideia-chave:</span> não existe "réptil brasileiro genérico". Cada espécie está ligada ao seu ambiente.`
      },
      {
        title: 'CONVIVÊNCIA COM A FAUNA',
        speech: 'Respeito é proteção.',
        body: `<strong>Convivência começa por reconhecer que animais silvestres não são pets.</strong>\n\nCapturar filhotes, retirar ovos, alimentar animais ou transportar espécies pode causar morte, doenças, desequilíbrio ecológico e crime ambiental. Mesmo quando a intenção parece boa, o manejo sem autorização prejudica.\n\nEm escolas e comunidades, educação ambiental ajuda a reduzir medo exagerado e violência contra serpentes. O objetivo é saber identificar risco, manter distância e acionar órgãos responsáveis.\n\n<span class="highlight">Resumo:</span> observar, registrar, proteger habitat e pedir ajuda especializada.`
      }
    ],
    9: [
      {
        title: 'DOSSIÊ: COMPORTAMENTO É INFORMAÇÃO',
        speech: 'O corpo fala.',
        body: `<strong>Répteis comunicam muito sem emitir sons altos.</strong>\n\nLagartos podem balançar a cabeça, inflar papadas, mudar postura e exibir cores para defender território ou atrair parceiros. Serpentes podem vibrar a cauda, achatar o corpo, sibilar ou fugir. Tartarugas usam movimentos, mordidas e disputa física em interações sociais.\n\nMuitos comportamentos que humanos interpretam como "ataque" são defesa. O animal tenta parecer maior, assustar ou ganhar tempo para escapar.\n\n<span class="highlight">Ideia-chave:</span> comportamento deve ser lido no contexto: distância, abrigo, temperatura, ameaça e época reprodutiva.`
      },
      {
        title: 'SENTIDOS QUÍMICOS',
        speech: 'Cheiro também vira mapa.',
        body: `<strong>O mundo químico é essencial para muitos répteis.</strong>\n\nA língua bífida das serpentes coleta partículas de dois lados diferentes. Isso ajuda a perceber direção de trilhas químicas, quase como comparar sinais esquerdo e direito. O órgão de Jacobson interpreta essas partículas e contribui para caça, reconhecimento de parceiros e exploração do ambiente.\n\nEm lagartos, sinais químicos também podem indicar território, estado reprodutivo e presença de predadores.\n\n<span class="highlight">Para pensar:</span> quando uma serpente "mostra a língua", ela não está provocando; está coletando informação.`
      }
    ],
    10: [
      {
        title: 'DOSSIÊ: REVISÃO INTEGRADA',
        speech: 'Junte as peças.',
        body: `<strong>Uma boa resposta de biologia conecta níveis.</strong>\n\nSe a pergunta fala de ovo amniótico, você pode conectar reprodução, conquista terrestre, anexos embrionários e economia de água. Se fala de peçonha, pode conectar evolução, alimentação, segurança e conservação. Se fala de classificação, pode conectar fósseis, ancestralidade e anatomia comparada.\n\nO desafio final exige essa habilidade: não decorar frases isoladas, mas explicar por que uma característica faz sentido dentro da vida do animal.\n\n<span class="highlight">Treino:</span> sempre pergunte "qual problema essa adaptação resolve?" e "qual custo ela pode ter?".`
      },
      {
        title: 'ERROS COMUNS EM RÉPTEIS',
        speech: 'Cuidado com atalhos.',
        body: `<strong>Alguns erros aparecem muito em provas e conversas.</strong>\n\nErro 1: chamar todo animal comprido de serpente peçonhenta. Muitas serpentes não são peçonhentas, e identificação segura exige especialista.\n\nErro 2: achar que répteis são "primitivos". Eles são linhagens atuais com adaptações próprias.\n\nErro 3: dizer que aves não têm relação com répteis. Pela evolução, aves descendem de dinossauros e estão dentro dos diápsidos/arcossauros.\n\nErro 4: pensar que todos os répteis põem ovos iguais. Há variação enorme em casca, cuidado parental, incubação e viviparidade.`
      }
    ],
    11: [
      {
        title: 'DOSSIÊ: FISIOLOGIA E ENERGIA',
        speech: 'Energia decide escolhas.',
        body: `<strong>Fisiologia explica limites e possibilidades.</strong>\n\nA ectotermia reduz gasto energético, mas torna a atividade dependente de temperatura ambiental. A digestão pode acelerar em temperaturas adequadas e ficar lenta no frio. Por isso muitos répteis alternam períodos de atividade intensa com longos intervalos de repouso.\n\nA circulação também varia. A maioria dos répteis tem coração com três câmaras e separação parcial; crocodilianos possuem quatro câmaras. Essa diferença ajuda a entender modos de vida, mergulho e eficiência circulatória.\n\n<span class="highlight">Ideia-chave:</span> metabolismo, circulação, respiração e comportamento formam um pacote funcional.`
      },
      {
        title: 'OSMORREGULAÇÃO',
        speech: 'Água é recurso caro.',
        body: `<strong>Osmorregulação é o controle de água e sais no corpo.</strong>\n\nEm ambientes secos, perder água rapidamente pode ser fatal. A pele queratinizada reduz evaporação, e a excreção de ácido úrico permite eliminar nitrogênio com pouca água. Algumas espécies também possuem glândulas de sal, especialmente em ambientes marinhos ou muito salinos.\n\nDentro do ovo, o ácido úrico é vantajoso porque pode ficar armazenado sem intoxicar o embrião como aconteceria com amônia em alta concentração.\n\n<span class="highlight">Resumo:</span> economizar água é tão importante quanto conseguir alimento.`
      }
    ],
    12: [
      {
        title: 'DOSSIÊ: PENSAR COMO HERPETÓLOGO',
        speech: 'Observe antes de concluir.',
        body: `<strong>Herpetologia é o estudo de anfíbios e répteis.</strong>\n\nUm bom herpetólogo observa habitat, horário, temperatura, comportamento, marcas corporais, alimentação e evidências reprodutivas. Ele não conclui apenas pela aparência. Cor, tamanho e formato podem enganar, especialmente em serpentes.\n\nA ciência trabalha com evidências revisáveis. Uma hipótese boa precisa explicar dados atuais e aceitar correção quando aparecem dados melhores.\n\n<span class="highlight">Ideia-chave:</span> jogar bem aqui é pensar como cientista: comparar, justificar e revisar.`
      },
      {
        title: 'PROJETO FINAL DA TURMA',
        speech: 'Aprender também é compartilhar.',
        body: `<strong>Depois do jogo, a turma pode transformar conhecimento em ação.</strong>\n\nIdeias de projeto: cartaz sobre conduta em acidente ofídico, mapa dos répteis do bioma local, campanha contra atropelamento de fauna, apresentação sobre ovo amniótico, ou guia de convivência segura com animais silvestres.\n\nO ranking do jogo mede acertos, mas o aprendizado real aparece quando a turma explica com clareza, sem medo exagerado e sem romantizar o risco.\n\n<span class="highlight">Missão final:</span> conhecimento bom protege pessoas e animais.`
      }
    ]
  };

  const questions = {
    1: [
      {
        context: 'Um lagarto sai da toca cedo, fica sobre uma pedra aquecida e depois se esconde nas folhas ao meio-dia.',
        q: 'Qual interpretação biológica explica melhor esse comportamento?',
        options: ['Ele está fazendo termorregulação comportamental', 'Ele está respirando pela pele', 'Ele está produzindo calor como um mamífero', 'Ele está evitando usar os pulmões'],
        correct: 0,
        time: 50,
        explanation: 'O lagarto alterna locais quentes e frios para manter a temperatura corporal em faixa adequada.',
        deep: 'Ectotermia depende do ambiente, mas não é passividade. O animal escolhe microambientes para otimizar digestão, locomoção, defesa e caça.'
      },
      {
        context: 'Compare um anfíbio de pele úmida com um réptil de pele seca e escamosa em um ambiente com baixa umidade.',
        q: 'Qual vantagem a pele queratinizada oferece ao réptil?',
        options: ['Reduz perda de água e protege contra atrito', 'Permite respiração cutânea intensa', 'Impede totalmente a troca de calor', 'Substitui a fecundação interna'],
        correct: 0,
        time: 50,
        explanation: 'A queratina torna a pele mais resistente e menos permeável, ajudando na vida terrestre.',
        deep: 'Essa vantagem tem custo: a pele seca não serve para trocas gasosas importantes, então a respiração pulmonar se torna indispensável.'
      }
    ],
    2: [
      {
        context: 'Um professor afirma que crocodilianos são mais próximos das aves do que dos lagartos, embora todos pareçam "répteis".',
        q: 'Por que essa afirmação faz sentido na classificação evolutiva?',
        options: ['Crocodilianos e aves pertencem aos arcossauros', 'Lagartos não possuem DNA', 'Aves surgiram de tartarugas atuais', 'Crocodilianos são mamíferos aquáticos'],
        correct: 0,
        time: 50,
        explanation: 'Crocodilianos e aves compartilham ancestralidade dentro de Archosauria.',
        deep: 'A aparência externa pode enganar. Classificação moderna usa ancestralidade, fósseis, anatomia comparada e dados moleculares.'
      },
      {
        context: 'Um animal possui carapaça dorsal, plastrão ventral e bico córneo sem dentes.',
        q: 'Esse conjunto de características indica qual grupo?',
        options: ['Testudines', 'Squamata', 'Crocodylia', 'Rhynchocephalia'],
        correct: 0,
        time: 45,
        explanation: 'Tartarugas, cágados e jabutis são Testudines/quelônios e possuem casco integrado ao esqueleto.',
        deep: 'A carapaça não é uma "casa solta"; ela envolve costelas, vértebras e placas ósseas modificadas.'
      }
    ],
    3: [
      {
        context: 'Uma serpente captura uma presa maior que sua cabeça e consegue engoli-la inteira.',
        q: 'Qual adaptação torna isso possível?',
        options: ['Crânio e mandíbulas com grande mobilidade ligamentar', 'Dentes molares para mastigar como mamífero', 'Respiração por brânquias durante a digestão', 'Casco flexível'],
        correct: 0,
        time: 50,
        explanation: 'Serpentes possuem articulações cranianas flexíveis que ampliam a abertura da boca.',
        deep: 'Elas não "deslocam a mandíbula" como mito popular. O crânio já possui ossos e ligamentos adaptados para grande mobilidade.'
      },
      {
        context: 'Dentro do ovo, o embrião não pode eliminar resíduos líquidos em grande quantidade.',
        q: 'Por que o ácido úrico é útil nesse contexto?',
        options: ['Pode ser armazenado com pouca água e menor toxicidade', 'Vira oxigênio para o embrião', 'Dissolve a casca para facilitar a saída', 'Substitui o saco vitelínico'],
        correct: 0,
        time: 50,
        explanation: 'O ácido úrico precipita e economiza água, sendo adequado para embriões em ovos fechados.',
        deep: 'Essa mesma lógica ajuda répteis de ambientes secos a economizar água na excreção.'
      }
    ],
    4: [
      {
        context: 'Um fóssil apresenta penas, dentes, cauda óssea longa e características de dinossauro terópode.',
        q: 'Por que ele pode ser considerado importante para entender evolução?',
        options: ['Mostra combinação de características em transição evolutiva', 'Prova que evolução é uma linha reta', 'Mostra que aves surgiram de mamíferos', 'Anula a importância de outros fósseis'],
        correct: 0,
        time: 55,
        explanation: 'Fósseis de transição mostram mosaicos de características entre linhagens aparentadas.',
        deep: 'Evolução não exige que um fóssil seja "meio animal". O importante é o conjunto de traços comparáveis em uma sequência de parentesco.'
      },
      {
        context: 'Aves atuais têm penas, metabolismo alto e voo em muitas espécies, mas descendem de dinossauros.',
        q: 'Na sistemática moderna, isso significa que aves:',
        options: ['São répteis avianos dentro dos arcossauros', 'Não têm relação com répteis', 'São anfíbios modificados', 'Surgiram antes dos peixes'],
        correct: 0,
        time: 45,
        explanation: 'Aves pertencem à linhagem dos dinossauros terópodes e ficam dentro de Archosauria.',
        deep: 'O termo "répteis" do cotidiano costuma excluir aves, mas a classificação por ancestralidade inclui as aves no grande grupo reptiliano.'
      }
    ],
    5: [
      {
        context: 'Uma pessoa encontra uma serpente no quintal e pensa em tentar capturá-la para identificar a espécie.',
        q: 'Qual atitude é mais segura e biologicamente correta?',
        options: ['Manter distância e acionar ajuda especializada', 'Pegar pela cauda para fotografar melhor', 'Fazer torniquete preventivo', 'Tentar matar para levar ao hospital'],
        correct: 0,
        time: 45,
        explanation: 'Distância reduz acidentes e profissionais treinados podem manejar o animal com segurança.',
        deep: 'A maioria dos acidentes ocorre quando alguém tenta manipular ou matar a serpente. Segurança humana e conservação caminham juntas.'
      },
      {
        context: 'Uma toxina só causa dano se o animal for tocado ou ingerido. Outra é injetada por presas especializadas.',
        q: 'Como diferenciar corretamente esses casos?',
        options: ['Venenoso é passivo; peçonhento inocula ativamente', 'Peçonhento nunca possui toxina', 'Venenoso sempre usa presas ocas', 'São termos sem diferença biológica'],
        correct: 0,
        time: 45,
        explanation: 'Animais peçonhentos possuem estrutura de inoculação; venenosos causam dano por contato ou ingestão.',
        deep: 'Na fala popular, "venenoso" é usado para tudo, mas em biologia e saúde essa diferença ajuda a entender riscos e tratamentos.'
      }
    ],
    6: [
      {
        context: 'Um ovo precisa proteger o embrião, permitir trocas gasosas e evitar perda excessiva de água.',
        q: 'Qual alternativa descreve melhor esse equilíbrio?',
        options: ['A casca deve proteger, mas não pode impedir totalmente a passagem de gases', 'A casca precisa ser totalmente impermeável a tudo', 'O ovo não precisa de oxigênio', 'A gema faz a troca gasosa sozinha'],
        correct: 0,
        time: 50,
        explanation: 'O embrião precisa de oxigênio e elimina dióxido de carbono, então trocas gasosas são essenciais.',
        deep: 'O ovo amniótico é um sistema de compromisso: proteção mecânica, controle hídrico e comunicação gasosa com o ambiente.'
      },
      {
        context: 'Em tartarugas, a temperatura de incubação pode alterar a proporção entre machos e fêmeas.',
        q: 'Por que mudanças climáticas podem ser preocupantes para essas espécies?',
        options: ['Podem desequilibrar a razão sexual dos filhotes', 'Eliminam a necessidade de ninhos', 'Transformam tartarugas em anfíbios', 'Impedem qualquer postura de ovo imediatamente'],
        correct: 0,
        time: 50,
        explanation: 'Temperaturas alteradas podem gerar proporções sexuais desbalanceadas em espécies com TSD.',
        deep: 'Além de temperatura, destruição de praias, iluminação artificial e coleta ilegal também afetam o sucesso reprodutivo.'
      }
    ],
    7: [
      {
        context: 'Uma estrada corta uma área de mata e muitos répteis aparecem atropelados nos meses quentes.',
        q: 'Qual explicação ecológica é mais completa?',
        options: ['A estrada fragmenta habitat e pode atrair ectotérmicos pelo calor', 'Répteis procuram carros por alimento', 'Atropelamento não afeta populações', 'A estrada cria ovos amnióticos'],
        correct: 0,
        time: 50,
        explanation: 'Estradas separam áreas de vida e o asfalto aquecido pode atrair animais ectotérmicos.',
        deep: 'Passagens de fauna, sinalização, cercas direcionadoras e preservação de corredores ecológicos reduzem impactos.'
      },
      {
        context: 'Em uma região, serpentes foram mortas em grande número por medo. Depois, aumentaram relatos de roedores.',
        q: 'Que relação ecológica pode explicar isso?',
        options: ['Serpentes podem controlar populações de presas', 'Serpentes são produtoras primárias', 'Roedores surgem de ovos de serpente', 'A morte das serpentes não altera cadeias alimentares'],
        correct: 0,
        time: 45,
        explanation: 'Predadores ajudam a regular populações de presas em cadeias alimentares.',
        deep: 'Eliminar predadores por medo pode gerar desequilíbrio e até aumentar problemas sanitários ligados a roedores.'
      }
    ],
    8: [
      {
        context: 'Na Amazônia, quelônios usam praias fluviais para postura de ovos.',
        q: 'Qual ameaça afeta diretamente esse ciclo?',
        options: ['Coleta ilegal de ovos e alteração das praias', 'A presença de pulmões', 'A existência de escamas', 'O uso do órgão de Jacobson'],
        correct: 0,
        time: 45,
        explanation: 'Retirar ovos e alterar locais de postura reduz o nascimento de filhotes.',
        deep: 'A conservação precisa proteger adultos, ninhos, praias, rios e comunidades que convivem com esses animais.'
      },
      {
        context: 'O Pantanal alterna períodos de cheia e seca, criando muitos ambientes aquáticos temporários.',
        q: 'Qual grupo se beneficia muito desse tipo de paisagem?',
        options: ['Jacarés e outros répteis semiaquáticos', 'Somente animais de deserto extremo', 'Apenas aves domésticas', 'Fungos sem relação com água'],
        correct: 0,
        time: 45,
        explanation: 'Áreas alagadas sustentam jacarés, quelônios, peixes, aves e diversas cadeias alimentares.',
        deep: 'Mudanças no regime de cheias, queimadas intensas e poluição podem afetar a reprodução e alimentação desses animais.'
      }
    ],
    9: [
      {
        context: 'Uma serpente move a língua repetidamente enquanto cruza uma trilha.',
        q: 'O que ela provavelmente está fazendo?',
        options: ['Coletando partículas químicas para o órgão de Jacobson', 'Tentando respirar pela língua', 'Produzindo veneno na boca', 'Chamando filhotes por som'],
        correct: 0,
        time: 45,
        explanation: 'A língua leva partículas químicas ao órgão vomeronasal/Jacobson.',
        deep: 'A língua bífida pode ajudar a comparar a intensidade do sinal em cada lado, orientando direção de presas ou parceiros.'
      },
      {
        context: 'Um lagarto infla a papada, muda postura e balança a cabeça perto de outro macho.',
        q: 'Esse comportamento pode indicar:',
        options: ['Comunicação territorial ou reprodutiva', 'Ausência de sistema nervoso', 'Troca de pele obrigatória naquele instante', 'Respiração por brânquias'],
        correct: 0,
        time: 45,
        explanation: 'Posturas e sinais visuais são comuns em disputas e corte de lagartos.',
        deep: 'Comunicação visual economiza contato físico perigoso. Muitas disputas terminam antes de mordidas reais.'
      }
    ],
    10: [
      {
        context: 'Uma questão pede para relacionar pele queratinizada, pulmões, fecundação interna e ovo amniótico.',
        q: 'Qual tema geral une essas características?',
        options: ['Conquista e manutenção da vida terrestre', 'Retorno obrigatório à água para reprodução', 'Perda da coluna vertebral', 'Transformação em mamífero'],
        correct: 0,
        time: 45,
        explanation: 'Essas características ajudam os répteis a viver e reproduzir em terra.',
        deep: 'A melhor resposta integra anatomia, fisiologia e reprodução, mostrando qual problema cada adaptação resolve.'
      },
      {
        context: 'Um aluno diz: "répteis são atrasados porque dependem do sol".',
        q: 'Qual resposta corrige melhor essa ideia?',
        options: ['Ectotermia é estratégia energética, não sinal de atraso evolutivo', 'Todo réptil é incapaz de se mover no frio absoluto', 'Mamíferos vieram diretamente das tartarugas atuais', 'Dependência do sol significa ausência de metabolismo'],
        correct: 0,
        time: 50,
        explanation: 'Ectotermia é uma estratégia funcional com vantagens e limitações.',
        deep: 'Evolução não produz seres "mais avançados" em fila. Ela seleciona soluções adequadas a contextos ecológicos.'
      }
    ],
    11: [
      {
        context: 'Depois de uma refeição grande, uma serpente busca um local mais quente e fica menos ativa.',
        q: 'Qual relação fisiológica explica isso?',
        options: ['Temperatura adequada favorece digestão em ectotérmicos', 'Serpentes digerem por fotossíntese', 'Calor impede qualquer atividade enzimática', 'A presa aquece o ambiente externo'],
        correct: 0,
        time: 45,
        explanation: 'Processos metabólicos e digestivos dependem da temperatura corporal.',
        deep: 'Se a temperatura ficar baixa demais, digestão e defesa podem piorar. Se ficar alta demais, há risco de estresse térmico.'
      },
      {
        context: 'Crocodilianos são citados como exceção importante quando estudamos circulação dos répteis atuais.',
        q: 'Qual característica justifica essa exceção?',
        options: ['Coração com quatro câmaras', 'Respiração cutânea principal', 'Ausência de pulmões', 'Sangue sem células'],
        correct: 0,
        time: 45,
        explanation: 'Crocodilianos têm coração tetracameral, diferente da maioria dos répteis não avianos.',
        deep: 'Essa característica dialoga com mergulho, circulação e parentesco com aves dentro dos arcossauros.'
      }
    ],
    12: [
      {
        context: 'Um grupo quer montar uma campanha escolar sobre serpentes, mas parte da turma tem muito medo.',
        q: 'Qual abordagem educativa é mais adequada?',
        options: ['Ensinar risco real, distância segura e importância ecológica', 'Dizer que nenhuma serpente oferece risco', 'Estimular captura para perder medo', 'Ensinar que toda serpente deve ser morta'],
        correct: 0,
        time: 45,
        explanation: 'Boa educação ambiental equilibra segurança humana e conservação.',
        deep: 'Minimizar o risco é perigoso, mas exagerar o medo aumenta perseguição e acidentes por tentativa de matar o animal.'
      },
      {
        context: 'Durante uma investigação, surgem novos dados que contradizem uma explicação antiga.',
        q: 'O que uma postura científica deve fazer?',
        options: ['Revisar a hipótese à luz das evidências', 'Ignorar dados novos', 'Escolher a resposta mais famosa', 'Proibir comparação com fósseis'],
        correct: 0,
        time: 45,
        explanation: 'Ciência é um processo de revisão baseado em evidências.',
        deep: 'Isso vale para classificação, evolução, ecologia e saúde. Uma explicação boa precisa sobreviver à comparação com dados.'
      }
    ]
  };

  Object.entries(lessons).forEach(([id, list]) => addLessons(id, list));
  Object.entries(questions).forEach(([id, list]) => addQuestions(id, list));
})();
