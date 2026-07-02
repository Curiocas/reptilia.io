/* ═══════════════════════════════════════════════════════
   REPTILIA.IO — GAME DATA
   All educational content, questions, and zone data
═══════════════════════════════════════════════════════ */
'use strict';

window.REPTILIA = window.REPTILIA || {};

// ── ZONES DEFINITION ──────────────────────────────────
window.REPTILIA.ZONES = [
  {
    id: 1,
    name: "Zona 1: Características Gerais",
    shortName: "Características",
    emoji: "🦎",
    color: "#4fc3f7",
    badge: "🏅",
    mapX: 120, mapY: 95,
    guardianName: "GECKO DAS PEDRAS",
    guardianEmoji: "🦎",
    playerEmoji: "🧑‍🔬",
    lessons: [
      {
        title: "O QUE SÃO RÉPTEIS?",
        sprite: "🦎",
        speech: "Eu sou ectotérmico!",
        body: `Os <strong>répteis</strong> são vertebrados amniotas caracterizados por:\n\n• Pele <span class="highlight">seca e queratinizada</span> com escamas ou osteodermos\n• Ectotermia (animais de sangue frio)\n• Respiração pulmonar exclusiva\n• Fecundação interna\n• Presença de anexos embrionários (âmnio, alantóide, cório, saco vitelínico)\n\nRepresentam uma transição evolutiva crucial dos vertebrados aquáticos para os terrestres!`
      },
      {
        title: "ECTOTERMIA — SANGUE FRIO",
        sprite: "🌞",
        speech: "Preciso do sol!",
        body: `<strong>Ectotermia</strong> (ou poiquilotermia) significa que a temperatura corporal varia com o ambiente.\n\nIsso não é fraqueza — é uma <span class="highlight">estratégia de economia energética</span>!\n\nRépteis regulam sua temperatura por:\n• Banho de sol (heliotermia)\n• Sombra e tocas (evitar superaquecimento)\n• Mudanças de postura corporal\n\nResultado: precisam de muito menos alimento que mamíferos!`
      },
      {
        title: "INDEPENDÊNCIA DA ÁGUA",
        sprite: "🏜️",
        speech: "Adoro o deserto!",
        body: `Uma das maiores conquistas evolutivas dos répteis foi a <strong>independência da água</strong> para reprodução.\n\nDiferente dos anfíbios, répteis:\n• Possuem ovos com <span class="highlight">casca calcária ou coriácea</span>\n• Realizam fecundação interna\n• Embriões se desenvolvem protegidos pela membrana amniótica\n• Pele impermeável evita perda de água\n\nIsso permitiu colonizar ambientes áridos e secos!`
      },
      {
        title: "PELE DOS RÉPTEIS",
        sprite: "🐍",
        speech: "Minha pele é especial!",
        body: `A pele dos répteis é uma das mais especializadas:\n\n<strong>Escamas:</strong> dobras da epiderme endurecidas por queratina\n<strong>Osteodermos:</strong> placas ósseas dérmicas (jacarés e tartarugas)\n<strong>Muda (ecdise):</strong> troca periódica da pele (mais visível nas serpentes)\n\nFunções da pele:\n• <span class="highlight">Impermeabilização</span> — reduz perda hídrica\n• Proteção mecânica\n• Termorregulação\n• Camuflagem e comunicação`
      },
      {
        title: "RESPIRAÇÃO E CIRCULAÇÃO",
        sprite: "🫀",
        speech: "Três câmaras!",
        body: `<strong>Respiração:</strong> exclusivamente pulmonar (sem respiração cutânea).\n\n<strong>Coração:</strong>\n• A maioria possui <span class="highlight">3 câmaras</span> (2 átrios + 1 ventrículo com divisão incompleta)\n• Crocodilianos possuem 4 câmaras completas (convergência com aves/mamíferos)\n\nIsso resulta em <span class="highlight">mistura parcial de sangue</span> oxigenado e não-oxigenado, exceto nos crocodilianos.\n\nO coração completo dos crocodilos é considerado o mais avançado entre os répteis!`
      }
    ],
    questions: [
      {
        q: "Qual característica define os répteis como ectotérmicos?",
        options: ["Produzem calor internamente", "Dependem do ambiente para regular a temperatura", "Hibernam sempre no inverno", "Possuem pelo para se aquecer"],
        correct: 1,
        explanation: "Ectotermia significa que a temperatura corporal varia conforme o ambiente externo, ao contrário dos mamíferos que são endotérmicos."
      },
      {
        q: "O que é a ECDISE nos répteis?",
        options: ["O processo de digestão", "A troca periódica de pele", "O tipo de respiração", "O modo de locomoção"],
        correct: 1,
        explanation: "A ecdise é a muda da pele, especialmente visível em serpentes, onde a camada externa da epiderme é descartada inteiramente."
      },
      {
        q: "Qual grupo de répteis possui coração com QUATRO câmaras completas?",
        options: ["Serpentes", "Lagartos", "Crocodilianos", "Quelônios"],
        correct: 2,
        explanation: "Os crocodilianos (jacarés, crocodilos e gaviais) são os únicos répteis com coração tetracameral verdadeiro, semelhante ao das aves e mamíferos."
      },
      {
        q: "A pele dos répteis é impermeável principalmente devido a:",
        options: ["Muco produzido por glândulas", "Queratina nas escamas", "Camada de gordura subcutânea", "Pigmentos protetores"],
        correct: 1,
        explanation: "A queratina presente nas escamas torna a pele dos répteis impermeável, reduzindo a perda de água e permitindo vida em ambientes secos."
      },
      {
        q: "O que diferencia os répteis dos anfíbios em relação à reprodução?",
        options: ["Répteis se reproduzem na água", "Répteis possuem fecundação externa", "Répteis têm ovos com casca e fecundação interna", "Répteis são vivíparos sempre"],
        correct: 2,
        explanation: "Répteis possuem fecundação interna e ovos com casca (amniota), tornando-os independentes da água para reprodução."
      }
    ]
  },
  {
    id: 2,
    name: "Zona 2: Classes dos Répteis",
    shortName: "Classes",
    emoji: "🐢",
    color: "#81c784",
    badge: "🏅",
    mapX: 340, mapY: 80,
    guardianName: "MESTRE CÁGADO",
    guardianEmoji: "🐢",
    playerEmoji: "🧑‍🔬",
    lessons: [
      {
        title: "CLASSIFICAÇÃO DOS RÉPTEIS",
        sprite: "📚",
        speech: "Quatro ordens!",
        body: `Os répteis modernos são classificados em <strong>4 ordens principais</strong>:\n\n🐢 <strong>Testudinos</strong> — tartarugas, cágados, jabuti\n🦎 <strong>Escamados</strong> — lagartos e serpentes\n🐊 <strong>Crocodilianos</strong> — crocodilos, jacarés, gaviais\n🦕 <strong>Rinocefalos</strong> — apenas o tuatara (Nova Zelândia)\n\nAs aves são consideradas répteis avianos pela sistemática moderna — descendem dos dinossauros teropodas!`
      },
      {
        title: "ORDEM TESTUDINOS (Quelônios)",
        sprite: "🐢",
        speech: "Minha concha é minha casa!",
        body: `<strong>Características únicas:</strong>\n• Concha (carapaça + plastrão) formada por osteodermos e vértebras fundidas\n• Sem dentes — possuem bico córneo\n• Pulmões fixos (respiram movendo pescoço e pernas)\n\n<strong>Grupos:</strong>\n• <span class="highlight">Tartarugas</span> — marinhas, patas em formato de nadadeiras\n• <span class="highlight">Cágados</span> — dulcícolas, pescoço retrátil lateralmente\n• <span class="highlight">Jabutis</span> — terrestres, patas colunares\n\nPode viver até 180 anos!`
      },
      {
        title: "ORDEM SQUAMATA — LAGARTOS",
        sprite: "🦎",
        speech: "Posso perder a cauda!",
        body: `<strong>Subordem Lacertilia (Sauria)</strong>\n\n• Maior grupo de répteis (~6.000 espécies)\n• Maioria possui 4 patas e cauda longa\n• Língua bífida em muitas espécies (quimiorrecepção)\n• <span class="highlight">Autotomia caudal</span>: perdem a cauda para escapar de predadores!\n\n<strong>Exemplos marcantes:</strong>\n• Dragão-de-komodo (maior lagarto, até 3m)\n• Camaleão (muda de cor, olhos independentes)\n• Geco (ventosas adesivas — forças de Van der Waals)\n• Basilisco (anda sobre a água!)`
      },
      {
        title: "ORDEM SQUAMATA — SERPENTES",
        sprite: "🐍",
        speech: "Sinto o calor!",
        body: `<strong>Subordem Ophidia (Serpentes)</strong>\n\n• Pernas ausentes (vestigiais em boídeos: pélvis rudimentar)\n• Maxilares com articulação ligamentosa — engole presas grandes\n• <span class="highlight">Jacobson</span> detecta odores com a língua\n• Órgão de fosseta loreal (cobras de fosseta) detecta calor\n• Algumas possuem peçonha (toxinas venenosas)\n\n<strong>Locomoção:</strong> ondulação lateral, concertina, lateral, e retilínea\n\nHá ~3.700 espécies de serpentes no mundo!`
      },
      {
        title: "CROCODILIANOS E RINOCEFALOS",
        sprite: "🐊",
        speech: "Sou o mais antigo!",
        body: `<strong>Ordem Crocodilia:</strong>\n• ~23 espécies (crocodilos, jacarés, gaviais)\n• Coração 4 câmaras, septo vertical completo\n• Dentes em alvéolos (como mamíferos)\n• <span class="highlight">Trocânter</span>: patas semifletidas permitem galope!\n• Cuidado parental elaborado\n\n<strong>Ordem Rhynchocephalia:</strong>\n• Apenas o <span class="highlight">tuatara</span> (Sphenodon punctatus) — Nova Zelândia\n• Espécie relíquia — não muda há 200 milhões de anos\n• Terceiro olho parietal funcional\n• Pode viver mais de 100 anos`
      }
    ],
    questions: [
      {
        q: "A autotomia caudal é uma estratégia de defesa encontrada em:",
        options: ["Serpentes", "Crocodilianos", "Lagartos", "Quelônios"],
        correct: 2,
        explanation: "A autotomia caudal (perda voluntária da cauda) é uma estratégia antipredatória de muitos lagartos. A cauda depois se regenera."
      },
      {
        q: "O tuatara é o único representante vivo de qual ordem?",
        options: ["Testudinos", "Crocodilia", "Rhynchocephalia", "Squamata"],
        correct: 2,
        explanation: "O tuatara (Sphenodon) é o único representante vivo da ordem Rhynchocephalia, um grupo que dominou no Mesozoico e hoje está restrito à Nova Zelândia."
      },
      {
        q: "Como os quelônios (tartarugas) respiram se seus pulmões são fixos?",
        options: ["Por difusão através da concha", "Movendo pescoço e membros para ventilação", "Respiração branquial nas tartarugas jovens", "Trocas gasosas pela cloaca"],
        correct: 1,
        explanation: "Como a caixa torácica é fundida à carapaça, quelônios ventilam os pulmões movendo pescoço e membros, criando variações de pressão."
      },
      {
        q: "Qual grupo de répteis possui fosseta loreal sensível ao calor?",
        options: ["Quelônios", "Crocodilianos", "Algumas serpentes (cobras-de-fosseta)", "Todos os lagartos"],
        correct: 2,
        explanation: "As cobras-de-fosseta (como cascavéis e jibóias) possuem órgãos termorreceptores (fosseta loreal) que detectam radiação infravermelha de presas."
      },
      {
        q: "O Dragão-de-Komodo pertence a qual grupo?",
        options: ["Crocodilianos", "Lagartos (Lacertilia)", "Serpentes (Ophidia)", "Quelônios"],
        correct: 1,
        explanation: "O Dragão-de-Komodo (Varanus komodoensis) é o maior lagarto vivo, chegando a 3 metros de comprimento, pertencente à família Varanidae."
      }
    ]
  },
  {
    id: 3,
    name: "Zona 3: Anatomia e Reprodução",
    shortName: "Anatomia",
    emoji: "🫀",
    color: "#ff8a65",
    badge: "🏅",
    mapX: 110, mapY: 215,
    guardianName: "IGUANA SÁBIA",
    guardianEmoji: "🦖",
    playerEmoji: "🧑‍🔬",
    lessons: [
      {
        title: "SISTEMA DIGESTÓRIO",
        sprite: "🍖",
        speech: "Engulo inteiro!",
        body: `O sistema digestório dos répteis é altamente especializado:\n\n• Boca: dentes pleurodontes, acodontes ou teocodontes\n• <strong>Esôfago extensível</strong> — essencial para serpentes\n• Estômago muscular potente\n• <span class="highlight">Cloaca</span>: câmara comum para fezes, urina e reprodução\n\n<strong>Adaptações especiais:</strong>\n• Serpentes engolm presas inteiras (mandíbulas desarticuladas)\n• Crocodilos armazenam pedras no estômago (gastrólitos)\n• Tartarugas têm bico córneo cortante\n\nDigestão pode ser lenta — anacondas comem a cada semanas!`
      },
      {
        title: "SISTEMA NERVOSO E SENTIDOS",
        sprite: "🧠",
        speech: "Sinto o mundo!",
        body: `<strong>Encéfalo:</strong> mais desenvolvido que anfíbios, menos que aves/mamíferos\n\n<strong>Sentidos especiais:</strong>\n• <span class="highlight">Língua bífida + Órgão de Jacobson</span>: quimiorrecepção (detecta odores e feromônios)\n• <span class="highlight">Olho parietal</span>: "terceiro olho" — detecta ciclos luz/escuridão (tuatara e algumas lagartos)\n• <span class="highlight">Fosseta loreal</span>: detecta calor (serpentes boídeas e crotalíneas)\n• Visão em cores (muitas espécies)\n• Tímpano externo (maioria) ou sem ouvido externo (serpentes, vibração transmitida pelos ossos)`
      },
      {
        title: "REPRODUÇÃO DOS RÉPTEIS",
        sprite: "🥚",
        speech: "Meus ovos são blindados!",
        body: `<strong>Fecundação sempre interna!</strong>\n\nMachos possuem:\n• <span class="highlight">Hemipênis</span> (pares!) em serpentes e lagartos\n• Pênis único em quelônios e crocodilianos\n\n<strong>Quanto ao desenvolvimento:</strong>\n• <span class="highlight">Ovíparos</span>: põem ovos (maioria)\n• <span class="highlight">Vivíparos</span>: filhotes nascem vivos com placenta (víboras, algumas serpentes)\n• <span class="highlight">Ovovivíparos</span>: ovo retido internamente até o nascimento\n\n<strong>Partenogênese:</strong> fêmeas produzem filhotes sem fertilização (algumas lagartos e serpentes)!`
      },
      {
        title: "OVOS AMNIÓTICOS",
        sprite: "🥚",
        speech: "Amnio me protege!",
        body: `O <strong>ovo amniótico</strong> é uma das maiores inovações evolutivas dos vertebrados.\n\n<strong>Componentes:</strong>\n• <span class="highlight">Âmnio</span>: envolve o embrião em líquido amniótico (proteção)\n• <span class="highlight">Alantóide</span>: armazena resíduos metabólicos e faz trocas gasosas\n• <span class="highlight">Cório</span>: envolve tudo, troca gasosa com exterior\n• <span class="highlight">Saco vitelínico</span>: reserva de nutrientes (gema)\n• <span class="highlight">Casca</span>: coriácea (serpentes, lagartos) ou calcária (quelônios, crocodilianos)\n\nO âmnio simula o ambiente aquático!`
      },
      {
        title: "DETERMINAÇÃO SEXUAL",
        sprite: "♂️",
        speech: "Temperatura decide!",
        body: `Muitos répteis não têm sexo determinado geneticamente — é determinado pela <strong>temperatura de incubação!</strong>\n\n<strong>TSD — Determinação Sexual pelo Temperatura:</strong>\n• Temperatura baixa → machos ou fêmeas (varia por espécie)\n• Temperatura alta → fêmeas ou machos\n• Temperatura intermediária → proporção mista\n\n<span class="highlight">⚠️ ALERTA CLIMÁTICO:</span> Com o aquecimento global, a proporção de fêmeas de tartarugas marinhas aumentou drasticamente em algumas populações — ameaça grave à reprodução!\n\nSerpentes e lagartos escamados usam determinação genética (ZZ/ZW ou XX/XY).`
      }
    ],
    questions: [
      {
        q: "Qual membrana embrionária armazena os resíduos metabólicos do embrião do réptil?",
        options: ["Âmnio", "Cório", "Alantóide", "Saco vitelínico"],
        correct: 2,
        explanation: "O alantóide é a membrana que acumula os resíduos metabólicos do embrião (ácido úrico). Também participa das trocas gasosas com o exterior."
      },
      {
        q: "O órgão de Jacobson nos répteis é responsável por:",
        options: ["Equilibrio", "Detecção de calor", "Quimiorrecepção (olfato/paladar aprimorado)", "Visão noturna"],
        correct: 2,
        explanation: "O órgão de Jacobson (vomeronasal) analisa partículas captadas pela língua bífida, funcionando como um olfato/paladar altamente sensível."
      },
      {
        q: "Serpentes e lagartos machos possuem órgãos copuladores chamados:",
        options: ["Pênis único", "Hemipênis (par)", "Cloaca reprodutora", "Espermatóforos"],
        correct: 1,
        explanation: "Serpentes e lagartos (Squamata) possuem hemipênis — dois órgãos copuladores, dos quais apenas um é usado por vez durante a cópula."
      },
      {
        q: "A TSD (Determinação Sexual pela Temperatura) é importante hoje porque:",
        options: ["Permite escolher o sexo em laboratório", "O aquecimento global pode desequilibrar proporções sexuais", "Facilita a criação de répteis em cativeiro", "Explica por que répteis são ectotérmicos"],
        correct: 1,
        explanation: "O aquecimento global eleva as temperaturas de incubação, podendo produzir quase 100% de fêmeas em populações de tartarugas, ameaçando a reprodução das espécies."
      },
      {
        q: "Qual afirmativa sobre a reprodução dos répteis é CORRETA?",
        options: ["Todos os répteis são ovíparos", "A fecundação pode ser interna ou externa", "Répteis vivíparos existem e possuem placenta", "Partenogênese é impossível em répteis"],
        correct: 2,
        explanation: "Alguns répteis são vivíparos com estruturas placentárias (ex: algumas víboras e lagartinhas), nascendo filhotes vivos com conexão materna."
      }
    ]
  },
  {
    id: 4,
    name: "Zona 4: Origem e Evolução",
    shortName: "Evolução",
    emoji: "🦕",
    color: "#ffb74d",
    badge: "🏅",
    mapX: 340, mapY: 210,
    guardianName: "PTEROSSAURO ANCIEN",
    guardianEmoji: "🦕",
    playerEmoji: "🧑‍🔬",
    lessons: [
      {
        title: "ORIGEM DOS RÉPTEIS",
        sprite: "🌍",
        speech: "Vim dos anfíbios!",
        body: `Os répteis surgiram há cerca de <strong>310-320 milhões de anos</strong> (Carbonífero Superior).\n\n<strong>Antepassados:</strong> Reptiliomorfos — anfíbios que desenvolveram adaptações terrestres.\n\nO grupo ancestral são os <span class="highlight">cotilossauros</span> ("répteis-toco"), que deram origem a todos os amniotas.\n\n<strong>Principal inovação:</strong> o ovo amniótico — permite reprodução longe d'água.\n\nEm ~100 milhões de anos, os répteis dominaram completamente os continentes, mares e céus do planeta!`
      },
      {
        title: "DIÁPSIDOS, ANÁPSIDOS E SINÁPSIDOS",
        sprite: "💀",
        speech: "Meu crânio revela tudo!",
        body: `A classificação ancestral dos répteis usa as <strong>fenestrações temporais</strong> (aberturas no crânio):\n\n• <span class="highlight">Anápsida</span>: sem fenestras — tartarugas (primitivo)\n• <span class="highlight">Diápsida</span>: 2 fenestras — lagartos, serpentes, crocodilos, AVES e dinossauros\n• <span class="highlight">Sinápsida</span>: 1 fenestra — ancestrais dos MAMÍFEROS (pelicossauros, terapsídeos)\n\nAs aves são diápsidos — descendentes diretos dos dinossauros terópodos!\n\nNa sistemática moderna: <span class="highlight">aves SÃO répteis</span>!`
      },
      {
        title: "ERA DOS DINOSSAUROS",
        sprite: "🦖",
        speech: "Dominei por 165 Mi de anos!",
        body: `Os <strong>dinossauros</strong> dominaram a Terra por ~165 milhões de anos (Triássico-Cretáceo).\n\n<strong>Grupos principais:</strong>\n• <span class="highlight">Ornitísquios</span> — quadris de ave (Triceratops, Estegossauro, Hadrossauros)\n• <span class="highlight">Saurísquios</span> — quadris de lagarto (T-Rex, Braquiossauro, Pterossauros)\n\n<strong>Extinção K-Pg</strong> (66 Ma): asteroide de ~10km + vulcanismo + inverno de impacto.\n\n⚠️ <span class="highlight">Atenção:</span> Pterossauros e plesiosauros NÃO são dinossauros — são répteis voadores/marinhos do mesmo período!`
      },
      {
        title: "RÉPTEIS MARINHOS EXTINTOS",
        sprite: "🌊",
        speech: "Conquistei os mares!",
        body: `Durante o Mesozoico, répteis conquistaram os oceanos:\n\n🌊 <strong>Ictiossauros</strong> — convergência com golfinhos, vivíparos\n🌊 <strong>Plesiosauros</strong> — pescoço longo (Elasmossauro) ou cabeça grande (Pliosauros)\n🌊 <strong>Mosassauros</strong> — lagartos marinhos gigantes\n🌊 <strong>Mesosuquios</strong> — crocodilianos marinhos\n\n<span class="highlight">Convergência evolutiva:</span> formas de nado similares a peixes/golfinhos evoluíram independentemente várias vezes!\n\nTodos se extinguiram na crise K-Pg (66 Ma).`
      },
      {
        title: "RÉPTEIS E AVES — A CONEXÃO",
        sprite: "🐦",
        speech: "Sou um dinossauro!",
        body: `<strong>As aves são dinossauros aviários!</strong>\n\nEvidências:\n• <span class="highlight">Archaeopteryx</span> (~150 Ma): fóssil de transição — penas + dentes + cauda óssea\n• DNA comparativo confirma parentesco com crocodilos e dinossauros\n• Escamas nas pernas das aves\n• Penas evoluíram antes do voo (termorregulação e display)\n\n<strong>Filogenia atual:</strong>\n Répteis (clado Reptilia)\n ├── Lepidossauria (lagartos, serpentes, tuatara)\n └── Archosauria\n     ├── Crocodilia\n     └── Aves + Dinossauros ◀ MESMO GRUPO!`
      }
    ],
    questions: [
      {
        q: "Há quantos milhões de anos surgiram os primeiros répteis?",
        options: ["~65 Ma (Cretáceo)", "~150 Ma (Jurássico)", "~310-320 Ma (Carbonífero)", "~500 Ma (Cambriano)"],
        correct: 2,
        explanation: "Os primeiros répteis surgiram no Carbonífero Superior, há cerca de 310-320 milhões de anos, a partir de ancestrais anfíbios."
      },
      {
        q: "As AVES são classificadas evolutivamente como:",
        options: ["Mamíferos evoluídos", "Répteis diápsidos (dinossauros aviários)", "Anfíbios derivados", "Um grupo completamente separado dos répteis"],
        correct: 1,
        explanation: "As aves são dinossauros terópodos que sobreviveram à extinção K-Pg. São répteis diápsidos e o grupo irmão dos crocodilos dentro de Archosauria."
      },
      {
        q: "Pterossauros são dinossauros?",
        options: ["Sim, são dinossauros voadores", "Não, são répteis voadores distintos dos dinossauros", "São ancestrais das aves", "São mamíferos primitivos"],
        correct: 1,
        explanation: "Pterossauros são répteis voadores do Mesozoico, mas NÃO são dinossauros. São archossauros, porém de uma linhagem diferente. Os dinossauros são outro clado."
      },
      {
        q: "O Archaeopteryx é um fóssil importante porque:",
        options: ["É o maior dinossauro já encontrado", "É um fóssil de transição entre dinossauros e aves", "Prova que todos os répteis voaram", "É o mais antigo réptil conhecido"],
        correct: 1,
        explanation: "O Archaeopteryx (~150 Ma) é um fóssil de transição com características de dinossauros (dentes, cauda óssea) e de aves (penas, fúrcula), evidenciando a origem aviária."
      },
      {
        q: "O que são crânios DIÁPSIDOS?",
        options: ["Crânio sem nenhuma fenestra temporal", "Crânio com uma fenestra temporal", "Crânio com duas fenestras temporais", "Crânio totalmente fechado"],
        correct: 2,
        explanation: "Diápsidos possuem dois pares de aberturas (fenestras) no crânio atrás das órbitas oculares. Incluem lagartos, serpentes, crocodilos, dinossauros e aves."
      }
    ]
  },
  {
    id: 5,
    name: "Zona 5: Répteis Peçonhentos",
    shortName: "Peçonhentos",
    emoji: "☠️",
    color: "#ef5350",
    badge: "🏅",
    mapX: 230, mapY: 265,
    guardianName: "COBRA-CORAL",
    guardianEmoji: "🐍",
    playerEmoji: "🧑‍🔬",
    lessons: [
      {
        title: "VENENO vs PEÇONHA",
        sprite: "⚗️",
        speech: "Não me confunda!",
        body: `<strong>Distinção fundamental:</strong>\n\n<span class="highlight">VENENOSO</span>: toxina que causa dano se ingerida ou tocada\n• Ex: sapos-venenosos, algumas salamandras\n\n<span class="highlight">PEÇONHENTO</span>: toxina inoculada ativamente por aparelho especializado (ferrão, presas)\n• Ex: serpentes peçonhentas, aranha-marrom\n\nA maioria das serpentes "venenosas" na linguagem popular são na verdade <strong>peçonhentas</strong>!\n\nTodos os répteis peçonhentos são também venenosos se ingeridos, mas o contrário não é verdade.`
      },
      {
        title: "APARELHO INOCULADOR DAS SERPENTES",
        sprite: "🐍",
        speech: "Minhas presas são fatais!",
        body: `As serpentes peçonhentas possuem glândulas veneníferas e presas especializadas:\n\n<strong>Tipos de presas:</strong>\n• <span class="highlight">Opistóglifa</span>: presas no fundo da boca (cobra-cipó) — menos perigosa\n• <span class="highlight">Proteróglifa</span>: presas fixas na frente (cobras-corais, mambas) — peçonha neurotóxica\n• <span class="highlight">Solenóglifa</span>: presas dobráveis e ocas (cascavel, urutu) — mais eficiente\n\nAs presas solenóglifas são dobradas para atrás quando a boca fecha, e erguidas na hora do bote — como seringas hipodérmicas!`
      },
      {
        title: "TIPOS DE PEÇONHA",
        sprite: "💀",
        speech: "Conheça meu veneno!",
        body: `<strong>Classificação bioquímica das peçonhas:</strong>\n\n🔴 <strong>Neurotóxica</strong>: ataca o sistema nervoso — paralisa músculos respiratórios\n• Ex: cobras-corais, mambas, cobra-naja\n\n🟡 <strong>Hemotóxica/Coagulante</strong>: destrói hemácias e causa hemorragia interna\n• Ex: cascavel (crotoxina), jararaca\n\n🟠 <strong>Proteolítica/Citotóxica</strong>: destrói tecidos localmente — necrose\n• Ex: jararaca, urutu, caiçaca\n\n<span class="highlight">Muitas peçonhas são mistas</span> — a cascavél tem componentes hemotóxicos E neurotóxicos!`
      },
      {
        title: "SERPENTES PEÇONHENTAS DO BRASIL",
        sprite: "🇧🇷",
        speech: "Conheça-me bem!",
        body: `<strong>Principais gêneros peçonhentos no Brasil:</strong>\n\n🐍 <span class="highlight">Bothrops</span> (jararacas): mais acidentes — hemotóxica + proteolítica\n🐍 <span class="highlight">Crotalus</span> (cascavel): grave — hemotóxica + neurotóxica\n🐍 <span class="highlight">Lachesis</span> (surucucu): maior serpente peçonhenta das Américas (até 3,5m)\n🐍 <span class="highlight">Micrurus</span> (cobras-corais verdadeiras): neurotóxica potente\n\n<strong>Bizu da Coral:</strong>\n• Coral VERDADEIRA: faixas completas ao redor do corpo\n• Coral FALSA: faixas não circundam completamente\n<span class="highlight">⚠️ Regra não é 100% confiável — não toque!</span>`
      },
      {
        title: "CONDUTA EM ACIDENTES",
        sprite: "🏥",
        speech: "Saiba o que fazer!",
        body: `<strong>EM CASO DE ACIDENTE COM SERPENTE:</strong>\n\n✅ <strong>FAZER:</strong>\n• Ligar imediatamente para SAMU (192) ou ir ao pronto-socorro\n• Manter a vítima em repouso e calma\n• Imobilizar o membro afetado\n• Anotar hora do acidente e descrever a cobra\n• Retirar anéis, pulseiras (mincha pode ocorrer)\n\n❌ <strong>NÃO FAZER:</strong>\n• <span class="highlight">NÃO</span> fazer torniquete\n• <span class="highlight">NÃO</span> cortar e sugar o veneno\n• <span class="highlight">NÃO</span> aplicar garrote elétrico\n• <span class="highlight">NÃO</span> dar bebida alcoólica\n\n🩺 <strong>Soro antiofídico</strong> = único tratamento eficaz!`
      }
    ],
    questions: [
      {
        q: "Qual é a CORRETA diferença entre animal VENENOSO e PEÇONHENTO?",
        options: ["São a mesma coisa", "Venenoso: causa dano se tocado/ingerido. Peçonhento: injeta ativamente", "Peçonhento é mais fraco que venenoso", "Venenoso injeta a toxina, peçonhento libera ao toque"],
        correct: 1,
        explanation: "Peçonhento possui aparelho ativo de inoculação (presas, ferrão), enquanto venenoso libera toxinas passivamente ao contato ou ingestão."
      },
      {
        q: "As serpentes com presas SOLENÓGLIFAS (dobráveis) incluem:",
        options: ["Cobras-corais (Micrurus)", "Cobra-cipó (Philodryas)", "Cascavel e urutu (Crotalus, Bothrops)", "Cobra-d'água"],
        correct: 2,
        explanation: "As presas solenóglifas (canaliculadas e dobráveis) caracterizam as víboras como cascavel (Crotalus) e jararacas (Bothrops), sendo o sistema mais eficiente de inoculação."
      },
      {
        q: "A peçonha NEUROTÓXICA age principalmente:",
        options: ["Destruindo tecidos localmente", "Causando hemorragia interna", "Paralisando o sistema nervoso e muscular", "Coagulando o sangue"],
        correct: 2,
        explanation: "A peçonha neurotóxica bloqueia a transmissão nervosa neuromuscular, causando paralisia que pode afetar os músculos respiratórios levando à morte."
      },
      {
        q: "O que NÃO se deve fazer em caso de acidente ofídico?",
        options: ["Ir imediatamente ao hospital", "Fazer torniquete no membro afetado", "Manter vítima em repouso", "Anotar hora do acidente"],
        correct: 1,
        explanation: "Torniquete é CONTRAINDICADO pois concentra o veneno localmente, agravando a necrose tecidual e podendo levar a amputação."
      },
      {
        q: "Qual gênero de serpente causa o MAIOR número de acidentes no Brasil?",
        options: ["Crotalus (cascavel)", "Lachesis (surucucu)", "Bothrops (jararacas)", "Micrurus (cobra-coral)"],
        correct: 2,
        explanation: "O gênero Bothrops (jararacas, urutu, caiçaca) é responsável por cerca de 80-90% dos acidentes ofídicos no Brasil, pela abundância e proximidade com áreas humanas."
      }
    ]
  },
  {
    id: 6,
    name: "Zona 6: Anexos Embrionários",
    shortName: "Embriologia",
    emoji: "🔬",
    color: "#ce93d8",
    badge: "🏅",
    mapX: 410, mapY: 255,
    guardianName: "OVO ANCESTRAL",
    guardianEmoji: "🥚",
    playerEmoji: "🧑‍🔬",
    lessons: [
      {
        title: "O OVO AMNIÓTICO — REVOLUÇÃO",
        sprite: "🥚",
        speech: "Sou uma piscina portátil!",
        body: `O <strong>ovo amniótico</strong> é considerado uma das maiores inovações evolutivas dos vertebrados.\n\nAvant do ovo amniótico:\n• Vertebrados dependiam totalmente da água para se reproduzir\n• Ovos precisavam ser postos na água (como peixes e anfíbios)\n\nCom o ovo amniótico:\n• Embrião carrega seu próprio "oceano" — o <span class="highlight">líquido amniótico</span>\n• Reprodução possível em ambientes completamente secos\n• Proteção mecânica, controle hídrico e gasoso\n\nIsso permitiu a explosão da diversidade de vertebrados terrestres!`
      },
      {
        title: "ÂMNIO E LÍQUIDO AMNIÓTICO",
        sprite: "💧",
        speech: "Sou a piscina do embrião!",
        body: `<strong>ÂMNIO:</strong>\n• Membrana mais interna\n• Envolve completamente o embrião\n• Produz e mantém o <span class="highlight">líquido amniótico</span>\n\nFunções do líquido amniótico:\n• Proteção mecânica contra choques\n• Ambiente isotônico para o embrião\n• Permite movimentos do embrião\n• Evita desidratação\n• Estabiliza temperatura\n\nO âmnio nos mamíferos é a "bolsa d'água" que se rompe no parto — a mesma estrutura presente nos répteis há 310 Ma!`
      },
      {
        title: "ALANTÓIDE — SISTEMA URINÁRIO EMBRIONÁRIO",
        sprite: "♻️",
        speech: "Guardo os resíduos!",
        body: `<strong>ALANTÓIDE:</strong>\n• Evaginação do intestino posterior do embrião\n• Funções vitais:\n\n🗑️ <strong>Excreção</strong>: armazena ácido úrico (resíduo metabólico)\n🫁 <strong>Respiração</strong>: vasos sanguíneos fazem trocas de O₂/CO₂ com o exterior\n🩸 <strong>Hematopoiese</strong>: produção de células sanguíneas no embrião\n\n<span class="highlight">Por que ácido úrico?</span> Ao contrário da ureia (tóxica em concentração) ou amônia (precisa de água), o ácido úrico é sólido e pode ser armazenado com segurança no ovo fechado!`
      },
      {
        title: "CÓRIO E SACO VITELÍNICO",
        sprite: "🔵",
        speech: "Juntos protegemos tudo!",
        body: `<strong>CÓRIO (Serosa):</strong>\n• Membrana mais externa\n• Envolve todas as outras estruturas\n• Regula trocas gasosas entre o interior do ovo e o ambiente\n• Participa da formação da placenta em mamíferos vivíparos\n\n<strong>SACO VITELÍNICO:</strong>\n• Contém o <span class="highlight">vitelo (gema)</span> — reserva nutritiva\n• Vasos sanguíneos absorvem nutrientes para o embrião\n• Nos mamíferos placentários é reduzido (nutrição via placenta)\n\nJuntos, esses anexos formam um sistema de suporte vital completo!`
      },
      {
        title: "COMPARAÇÃO: RÉPTEIS vs MAMÍFEROS",
        sprite: "🔬",
        speech: "Evoluímos juntos!",
        body: `<strong>Os anexos embrionários são homólogos em répteis e mamíferos!</strong>\n\n| Estrutura | Répteis (ovíparos) | Mamíferos placentários |\n|-----------|-------------------|----------------------|\n| Âmnio | Envolve embrião no ovo | "Bolsa d'água" do parto |\n| Alantóide | Armazena ácido úrico | Vasculariza cordão umbilical |\n| Cório | Membrana do ovo | Forma parte da placenta |\n| Saco vitelínico | Reserva alimentar | Vestigial |\n\n<span class="highlight">Conclusão:</span> mamíferos "internalizaram" o ovo — a placenta é uma versão internalizada do ovo amniótico!`
      }
    ],
    questions: [
      {
        q: "Por que os répteis excretam ácido úrico em vez de ureia ou amônia?",
        options: ["Ácido úrico tem mais energia", "Ácido úrico é sólido e pode ser armazenado no ovo fechado", "Ácido úrico é mais barato metabolicamente", "Ureia é tóxica para mamíferos mas não para répteis"],
        correct: 1,
        explanation: "O ácido úrico precipita como sólido, podendo ser acumulado no alantóide sem prejudicar o embrião. Amônia precisa de muita água para diluição, e ureia em alta concentração é tóxica."
      },
      {
        q: "O ÂMNIO tem como função principal:",
        options: ["Nutrir o embrião com vitelo", "Fazer trocas gasosas com o exterior", "Envolver e proteger o embrião em líquido", "Armazenar resíduos metabólicos"],
        correct: 2,
        explanation: "O âmnio é a membrana que circunda o embrião, mantendo-o imerso em líquido amniótico — proteção mecânica e ambiental que simula o ambiente aquático."
      },
      {
        q: "Qual membrana embrionária participa da formação da PLACENTA em mamíferos?",
        options: ["Saco vitelínico", "Alantóide e Cório", "Âmnio", "Somente o alantóide"],
        correct: 1,
        explanation: "O cório (com contribuição do alantóide — formando o alantoicório) é a principal membrana que forma a placenta nos mamíferos placentários."
      },
      {
        q: "A principal conquista evolutiva representada pelo ovo amniótico foi:",
        options: ["Proteção contra predadores", "Independência da água para reprodução", "Maior número de ovos por postura", "Incubação mais rápida"],
        correct: 1,
        explanation: "O ovo amniótico criou um ambiente aquoso interno para o embrião, permitindo a reprodução em ambientes completamente terrestres ou áridos."
      },
      {
        q: "O que é o saco vitelínico?",
        options: ["Membrana que armazena resíduos", "Reserva nutritiva contendo vitelo (gema)", "Órgão de troca gasosa", "Membrana mais externa do ovo"],
        correct: 1,
        explanation: "O saco vitelínico contém o vitelo (gema) que serve como reserva de nutrientes absorvidos pelo embrião através de vasos sanguíneos vitelínicos."
      }
    ]
  }
];

// ── REPTIDEX ENTRIES ──────────────────────────────────
window.REPTILIA.REPTIDEX = [
  { id:"001", name:"IGUANA-VERDE",    emoji:"🦎", zone:1, desc:"Lagarto arborícola da América Central. Herbívoro. Pode atingir 1,8m. Possui olho parietal funcional.", stats:"Tipo: Lagarto | Comprimento: até 1,8m | Dieta: Herbívoro" },
  { id:"002", name:"CASCAVEL",        emoji:"🐍", zone:5, desc:"Serpente solenóglifa do gênero Crotalus. Peçonha hemotóxica e neurotóxica. Guizo na cauda.", stats:"Tipo: Serpente | Peçonha: Mista | Presas: Solenóglifas" },
  { id:"003", name:"TARTARUGA-CABEÇUDA", emoji:"🐢", zone:2, desc:"Caretta caretta. Quelônio marinho com patas em nadadeira. TSD — temperatura influencia o sexo.", stats:"Tipo: Quelônio | Ambiente: Marinho | Reprodução: TSD" },
  { id:"004", name:"JACARÉ-DO-PANTANAL", emoji:"🐊", zone:2, desc:"Caiman yacare. Crocodiliano com 4 câmaras cardíacas. Cuidado parental com os filhotes.", stats:"Tipo: Crocodiliano | Coração: 4 câmaras | Região: Pantanal" },
  { id:"005", name:"TUATARA",         emoji:"🦕", zone:2, desc:"Sphenodon punctatus. Único representante dos Rinocefalos. Terceiro olho parietal funcional. Vive 100+ anos.", stats:"Tipo: Rinocefalos | Local: Nova Zelândia | Relíquia viva" },
  { id:"006", name:"GECO-DE-TOKAY",   emoji:"🦎", zone:1, desc:"Gecko gecko. Adesão por forças de Van der Waals nas lamelas sub-digitais. Vocaliza intensamente.", stats:"Tipo: Lagarto | Família: Gekkonidae | Habilidade: Aderência" },
  { id:"007", name:"ANACONDA",        emoji:"🐍", zone:3, desc:"Eunectes murinus. Maior serpente por massa (>200kg). Constrição. Ovovivípara. Fosseta loreal.", stats:"Tipo: Serpente | Família: Boidae | Reprodução: Ovovivípara" },
  { id:"008", name:"CAMALEÃO",        emoji:"🦎", zone:1, desc:"Chamaeleo sp. Muda de cor por cromatóforos. Olhos independentes. Língua projetil pegajosa.", stats:"Tipo: Lagarto | Família: Chamaeleonidae | Habilidade: Camuflagem" },
  { id:"009", name:"COBRA-CORAL",     emoji:"🐍", zone:5, desc:"Micrurus sp. Proteróglifa com peçonha neurotóxica potente. Faixas coloridas de advertência (aposematismo).", stats:"Tipo: Serpente | Peçonha: Neurotóxica | Presas: Proteróglifa" },
  { id:"010", name:"JABUTI-PIRANGA",  emoji:"🐢", zone:2, desc:"Chelonoidis carbonaria. Quelônio terrestre. Patas colunares. Pode viver mais de 100 anos.", stats:"Tipo: Quelônio | Ambiente: Terrestre | Longevidade: 100+ anos" },
  { id:"011", name:"T-REX",           emoji:"🦖", zone:4, desc:"Tyrannosaurus rex. Saurísquio terópodo. Dinossauro do Cretáceo (68-66 Ma). Ancestral das aves.", stats:"Tipo: Dinossauro | Era: Cretáceo | Clado: Saurísquia" },
  { id:"012", name:"DRAGÃO-DE-KOMODO",emoji:"🦎", zone:2, desc:"Varanus komodoensis. Maior lagarto vivo. Até 3m e 70kg. Saliva com bactérias e peçonha leve.", stats:"Tipo: Lagarto | Família: Varanidae | Comprimento: até 3m" },
];

// ── ACHIEVEMENTS / BADGES ────────────────────────────
window.REPTILIA.BADGES = {
  1: { icon:"🦎", name:"Mestre dos Escamados" },
  2: { icon:"🐢", name:"Guardião dos Quelônios" },
  3: { icon:"🫀", name:"Anatomista" },
  4: { icon:"🦕", name:"Paleontólogo" },
  5: { icon:"☠️", name:"Especialista em Venenos" },
  6: { icon:"🔬", name:"Embriologista" },
};

// ── XP CONFIG ────────────────────────────────────────
window.REPTILIA.XP = {
  correctAnswer:  100,
  lessonRead:      20,
  zoneComplete:   200,
  perfectZone:    500,
  bonus: {
    fast:   50,  // answered in < 10s
    streak: 30,  // streak bonus per answer
  }
};

// ── LEVEL THRESHOLDS ─────────────────────────────────
window.REPTILIA.LEVELS = [0,100,300,600,1000,1500,2100,2800,3600,4500,5500];

console.log('[REPTILIA] Data loaded — ' + window.REPTILIA.ZONES.length + ' zones, ' + window.REPTILIA.REPTIDEX.length + ' reptidex entries');