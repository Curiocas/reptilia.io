'use strict';

window.REPTILIA = window.REPTILIA || {};

(() => {
  const R = window.REPTILIA;

  R.ASSET_ICONS = {
    1: 'assets/img/lagarto1.png',
    2: 'assets/img/tartaruga1.png',
    3: 'assets/img/cientista1.png',
    4: 'assets/img/fossil1.png',
    5: 'assets/img/cobra1.png',
    6: 'assets/img/ovo1.png',
    7: 'assets/img/guarda1.png',
    8: 'assets/img/crocodilo1.png',
    9: 'assets/img/guia1.png',
    10: 'assets/img/vulcao1.png',
    11: 'assets/img/placa1.png',
    12: 'assets/img/bau1.png'
  };

  const positions = {
    1: [145, 125],
    2: [420, 90],
    3: [150, 340],
    4: [330, 420],
    5: [548, 355],
    6: [655, 430],
    7: [635, 145],
    8: [250, 236],
    9: [78, 225],
    10: [710, 82],
    11: [480, 245],
    12: [710, 465]
  };

  R.ZONES.forEach(zone => {
    if (positions[zone.id]) {
      zone.mapX = positions[zone.id][0];
      zone.mapY = positions[zone.id][1];
    }
    zone.icon = R.ASSET_ICONS[zone.id] || R.ASSET_ICONS[1];
  });

  function pushUnique(list, entries, key = 'q') {
    entries.forEach(entry => {
      if (!list.some(item => item[key] === entry[key])) list.push(entry);
    });
  }

  function zone(id) {
    return R.ZONES.find(item => item.id === id);
  }

  function ensureZone(data) {
    const existing = zone(data.id);
    if (existing) {
      Object.assign(existing, data, {
        lessons: existing.lessons?.length ? existing.lessons : data.lessons,
        questions: existing.questions?.length ? existing.questions : data.questions
      });
      return existing;
    }
    R.ZONES.push(data);
    return data;
  }

  const extraQuestions = {
    1: [
      { q: 'Por que a pele queratinizada foi importante para os repteis?', options: ['Aumentou a perda de agua', 'Permitiu maior protecao e menor desidratacao', 'Substituiu os pulmoes', 'Impediu a troca de pele'], correct: 1, explanation: 'A queratina forma uma barreira resistente que reduz a perda de agua e protege contra atrito.' },
      { q: 'Repteis dependem do sol porque:', options: ['Sao sempre aquaticos', 'Regulam parte da temperatura pelo ambiente', 'Nao possuem sistema nervoso', 'Nao respiram por pulmoes'], correct: 1, explanation: 'Como ectotermicos, muitos repteis alternam sol e sombra para manter atividade corporal.' },
      { q: 'A principal diferenca da pele de anfibios para repteis e:', options: ['A pele dos repteis e seca e com escamas', 'A pele dos repteis e sempre molhada', 'Anfibios possuem casco', 'Repteis respiram pela pele'], correct: 0, explanation: 'A pele seca e queratinizada ajuda os repteis a viverem melhor em ambientes terrestres.' },
      { q: 'O termo amniota se relaciona com:', options: ['Presenca de pelos', 'Ovo ou embriao com membrana amniotica', 'Respiracao por branquias', 'Ausencia de coluna vertebral'], correct: 1, explanation: 'Amniotas possuem anexos embrionarios que protegem o embriao no desenvolvimento.' }
    ],
    2: [
      { q: 'Qual destes e um quelonio?', options: ['Jabuti', 'Jararaca', 'Iguana', 'Jacare'], correct: 0, explanation: 'Jabuti, tartaruga e cagado pertencem ao grupo dos quelonios/testudinos.' },
      { q: 'Serpentes pertencem principalmente ao grupo:', options: ['Squamata', 'Testudines', 'Crocodylia', 'Aves modernas'], correct: 0, explanation: 'Serpentes e lagartos fazem parte de Squamata, grupo marcado por escamas e ecdise.' },
      { q: 'Crocodilianos se destacam por:', options: ['Nao terem pulmoes', 'Cuidado parental e coracao com quatro camaras', 'Pele lisa e umida', 'Ausencia de dentes'], correct: 1, explanation: 'Crocodilianos possuem comportamento parental complexo e coracao tetracameral.' },
      { q: 'A carapaca das tartarugas e formada por:', options: ['Pelos compactados', 'Ossos e placas integradas ao esqueleto', 'Cartilagem mole', 'Apenas queratina solta'], correct: 1, explanation: 'A carapaca tem ossos, costelas e vertebras modificadas, cobertas por placas.' }
    ],
    3: [
      { q: 'A cloaca dos repteis recebe:', options: ['Somente alimento', 'Fezes, urina e produtos reprodutivos', 'Apenas oxigenio', 'Somente sangue arterial'], correct: 1, explanation: 'A cloaca e uma camara comum associada aos sistemas digestorio, excretor e reprodutor.' },
      { q: 'O orgao de Jacobson auxilia principalmente na:', options: ['Audicao musical', 'Quimiorrecepcao', 'Fotossintese', 'Producao de calor'], correct: 1, explanation: 'Ele interpreta particulas captadas pela lingua, ajudando na percepcao de odores.' },
      { q: 'Muitas serpentes engolem presas grandes porque:', options: ['Possuem mandibulas com ligamentos muito flexiveis', 'Nao possuem esofago', 'Trituran tudo com molares', 'Respiram pela pele'], correct: 0, explanation: 'As articulacoes cranianas das serpentes permitem grande abertura da boca.' },
      { q: 'O acido urico e vantajoso porque:', options: ['Economiza agua na excrecao', 'E sempre liquido', 'Substitui o sangue', 'Aquece o corpo'], correct: 0, explanation: 'O acido urico pode ser eliminado com pouca agua, importante para ovos e ambientes secos.' }
    ],
    4: [
      { q: 'As aves sao consideradas proximas dos dinossauros porque:', options: ['Descendem de linhagens de teropodes', 'Surgiram dos peixes atuais', 'Nao possuem esqueleto', 'Sao anfibios modificados'], correct: 0, explanation: 'Evidencias fosseis mostram aves derivadas de dinossauros teropodes.' },
      { q: 'Um fossil de transicao apresenta:', options: ['Caracteristicas de dois grupos relacionados', 'Somente partes vegetais', 'Apenas pegadas recentes', 'Nenhuma informacao evolutiva'], correct: 0, explanation: 'Fosseis de transicao ajudam a reconstruir mudancas graduais entre linhagens.' },
      { q: 'Extincao em massa significa:', options: ['Morte de um individuo', 'Perda rapida de muitas linhagens em escala global', 'Troca de pele', 'Mudanca de cor'], correct: 1, explanation: 'Extincoes em massa alteram profundamente a biodiversidade do planeta.' },
      { q: 'Diapsidos possuem no cranio:', options: ['Duas fenestras temporais', 'Nenhuma abertura', 'Chifres obrigatorios', 'Carapaca craniana'], correct: 0, explanation: 'A condicao diapsida envolve duas aberturas temporais no cranio.' }
    ],
    5: [
      { q: 'Peconha e diferente de veneno porque:', options: ['E inoculada ativamente por estrutura especializada', 'Nao causa dano', 'So existe em plantas', 'Sempre e ingerida'], correct: 0, explanation: 'Animais peconhentos injetam toxinas por presas, ferrao ou estrutura semelhante.' },
      { q: 'Em acidente ofidico, a atitude correta e:', options: ['Procurar atendimento medico rapidamente', 'Cortar o local', 'Sugar o veneno', 'Fazer torniquete forte'], correct: 0, explanation: 'O tratamento adequado exige atendimento medico e, quando indicado, soro especifico.' },
      { q: 'A fosseta loreal detecta:', options: ['Calor/infravermelho', 'Som musical', 'Gosto doce', 'Campo magnetico sempre'], correct: 0, explanation: 'Em algumas serpentes, ela ajuda a localizar presas pelo calor corporal.' },
      { q: 'Presas solenoglifas sao:', options: ['Moveis e eficientes na inoculacao', 'Ausentes em todas as serpentes', 'Placas do casco', 'Dentes de tartaruga'], correct: 0, explanation: 'Viperideos como jararacas e cascaveis possuem presas solenoglifas.' }
    ],
    6: [
      { q: 'O amnio protege o embriao porque:', options: ['Mantem um ambiente liquido ao redor dele', 'Forma pelos', 'Cria escamas adultas', 'Substitui o alimento'], correct: 0, explanation: 'O liquido amniotico protege contra choques e desidratacao.' },
      { q: 'O alantoide participa de:', options: ['Armazenamento de residuos e trocas gasosas', 'Formacao de dentes', 'Producao de pelos', 'Visao em cores'], correct: 0, explanation: 'O alantoide armazena residuos e auxilia nas trocas gasosas no ovo.' },
      { q: 'O saco vitelinico tem como funcao:', options: ['Reserva nutritiva', 'Controle de postura', 'Ataque a presas', 'Camuflagem'], correct: 0, explanation: 'Ele contem vitelo, fonte de nutrientes para o embriao.' },
      { q: 'O ovo amniotico favoreceu:', options: ['Reproducao longe da agua externa', 'Retorno obrigatorio ao mar', 'Fim da respiracao pulmonar', 'Ausencia de casca'], correct: 0, explanation: 'Com anexos e casca, os amniotas puderam ocupar melhor ambientes terrestres.' }
    ]
  };

  Object.entries(extraQuestions).forEach(([id, questions]) => {
    const target = zone(Number(id));
    if (target) pushUnique(target.questions, questions);
  });

  ensureZone({
    id: 7,
    name: 'Zona 7: Ecologia e Conservacao',
    shortName: 'Conservacao',
    color: '#66bb6a',
    mapX: positions[7][0],
    mapY: positions[7][1],
    guardianName: 'GUARDA DO PARQUE',
    icon: R.ASSET_ICONS[7],
    lessons: [
      { title: 'REPTEIS NO ECOSSISTEMA', speech: 'Cada especie tem seu papel.', body: 'Repteis controlam populacoes de insetos, roedores e outros animais. Tambem servem de alimento para aves, mamiferos e outros predadores. Quando somem de um ambiente, cadeias alimentares inteiras podem ficar desequilibradas.' },
      { title: 'AMEACAS PRINCIPAIS', speech: 'Habitat importa.', body: 'Desmatamento, queimadas, atropelamentos, trafico de animais e poluicao reduzem populacoes de repteis. Muitas especies precisam de micro-habitats especificos para termorregulacao e reproducao.' },
      { title: 'CONSERVAR NA PRATICA', speech: 'Observar sem tocar.', body: 'Nao capturar animais silvestres, preservar matas ciliares, respeitar areas protegidas e chamar equipes especializadas em caso de serpentes sao atitudes importantes.' },
      { title: 'CLIMA E TEMPERATURA', speech: 'O ninho sente o clima.', body: 'Em muitas tartarugas, a temperatura de incubacao influencia o sexo dos filhotes. Mudancas climaticas podem desequilibrar populacoes.' }
    ],
    questions: [
      { q: 'Uma ameaca comum aos repteis e:', options: ['Preservacao de habitat', 'Desmatamento e atropelamento', 'Educacao ambiental', 'Criacao de parques'], correct: 1, explanation: 'Perda de habitat e estradas afetam diretamente muitas populacoes.' },
      { q: 'Repteis ajudam ecossistemas porque:', options: ['Controlam presas e participam de cadeias alimentares', 'Nao interagem com outros seres', 'Sao todos produtores', 'Nao precisam de habitat'], correct: 0, explanation: 'Eles atuam como predadores, presas e indicadores ambientais.' },
      { q: 'Ao encontrar uma serpente, o recomendado e:', options: ['Manter distancia e chamar ajuda especializada', 'Tentar pegar', 'Matar imediatamente', 'Levar para casa'], correct: 0, explanation: 'Distancia e acionamento de profissionais reduzem riscos para pessoas e animais.' },
      { q: 'A temperatura de ninhos pode afetar:', options: ['A proporcao sexual em algumas especies', 'A presenca de coluna vertebral', 'O numero de pulmoes adultos', 'A existencia de escamas'], correct: 0, explanation: 'TSD ocorre em tartarugas e outros repteis.' },
      { q: 'Conservacao eficiente depende de:', options: ['Habitat preservado e educacao ambiental', 'Captura de filhotes', 'Soltar especies exoticas', 'Remover todo predador'], correct: 0, explanation: 'Preservar habitat e informar a comunidade e essencial.' },
      { q: 'Repteis atropelados em estradas indicam:', options: ['Conflito entre rotas humanas e fauna', 'Ausencia de fauna', 'Excesso de oceanos', 'Fim da cadeia alimentar'], correct: 0, explanation: 'Estradas fragmentam habitats e cortam rotas de deslocamento.' }
    ]
  });

  ensureZone({
    id: 11,
    name: 'Zona 11: Fisiologia Reptiliana',
    shortName: 'Fisiologia',
    color: '#26a69a',
    mapX: positions[11][0],
    mapY: positions[11][1],
    guardianName: 'PLACA DO LABORATORIO',
    icon: R.ASSET_ICONS[11],
    lessons: [
      { title: 'METABOLISMO', speech: 'Energia bem economizada.', body: 'Repteis ectotermicos gastam menos energia para manter o corpo ativo. Por isso, muitos conseguem sobreviver com intervalos maiores entre refeicoes.' },
      { title: 'CIRCULACAO', speech: 'Mistura parcial.', body: 'A maioria dos repteis possui coracao com tres camaras, com separacao parcial do sangue. Crocodilianos possuem quatro camaras.' },
      { title: 'RESPIRACAO', speech: 'Pulmoes sempre.', body: 'Diferente de anfibios, repteis dependem de pulmoes para respiracao. A pele seca nao e usada para trocas gasosas importantes.' },
      { title: 'OSMORREGULACAO', speech: 'Poupar agua e sobreviver.', body: 'A excrecao de acido urico ajuda a reduzir perda de agua, uma vantagem em ambientes secos e tambem dentro do ovo.' }
    ],
    questions: [
      { q: 'Ectotermia pode reduzir:', options: ['Gasto energetico com aquecimento corporal', 'A necessidade de pulmoes', 'A presenca de coluna vertebral', 'A fecundacao interna'], correct: 0, explanation: 'O ambiente ajuda na regulacao termica, economizando energia.' },
      { q: 'A maioria dos repteis tem coracao com:', options: ['Tres camaras', 'Uma camara', 'Seis camaras', 'Nenhuma camara'], correct: 0, explanation: 'Dois atrios e um ventriculo parcialmente separado sao comuns.' },
      { q: 'Crocodilianos possuem:', options: ['Quatro camaras cardiacas', 'Respiracao cutanea principal', 'Ausencia de dentes', 'Pele lisa e umida'], correct: 0, explanation: 'Eles sao excecao importante entre repteis atuais.' },
      { q: 'A respiracao dos repteis adultos ocorre por:', options: ['Pulmoes', 'Branquias externas', 'Pele umida', 'Fotossintese'], correct: 0, explanation: 'Repteis respiram por pulmoes.' },
      { q: 'Acido urico ajuda porque:', options: ['Perde pouca agua', 'E uma toxina inoculada', 'Forma a carapaca', 'Substitui o oxigenio'], correct: 0, explanation: 'Ele pode ser eliminado com pouca agua.' },
      { q: 'Tomar sol em repteis se relaciona a:', options: ['Termorregulacao', 'Respiracao branquial', 'Producao de leite', 'Formacao de penas'], correct: 0, explanation: 'Banho de sol ajuda a elevar temperatura corporal.' }
    ]
  });

  ensureZone({
    id: 12,
    name: 'Zona 12: Liga dos Herpetologos',
    shortName: 'Liga Final',
    color: '#fdd835',
    mapX: positions[12][0],
    mapY: positions[12][1],
    guardianName: 'BAU DA LIGA',
    icon: R.ASSET_ICONS[12],
    lessons: [
      { title: 'SINTETIZAR', speech: 'Agora e campeonato.', body: 'A liga final mistura anatomia, evolucao, ecologia, seguranca e conservacao. O objetivo e mostrar que biologia e conexao.' },
      { title: 'PENSAR COMO CIENTISTA', speech: 'Pergunte, observe, compare.', body: 'Cientistas observam evidencias, testam explicacoes e corrigem ideias quando surgem dados melhores.' },
      { title: 'RESPEITO A VIDA SILVESTRE', speech: 'Conhecimento reduz medo.', body: 'Aprender sobre repteis ajuda a evitar acidentes e tambem evita perseguicao desnecessaria.' },
      { title: 'DESAFIO DA TURMA', speech: 'A sala inteira participa.', body: 'O ranking por turma valoriza acertos e constancia. Cada tentativa ajuda a revisar conteudo.' }
    ],
    questions: [
      { q: 'Um bom resumo dos repteis inclui:', options: ['Vertebrados amniotas com pele queratinizada', 'Invertebrados com penas', 'Mamiferos com branquias', 'Fungos aquaticos'], correct: 0, explanation: 'Repteis sao vertebrados amniotas com pele seca e queratinizada.' },
      { q: 'A conservacao de repteis depende principalmente de:', options: ['Habitat, educacao e seguranca', 'Captura para colecao', 'Destruir ninhos', 'Soltar especies exoticas'], correct: 0, explanation: 'Preservar ambientes e informar pessoas e essencial.' },
      { q: 'Em uma cadeia alimentar, serpentes podem:', options: ['Controlar roedores e servir de presa', 'Nao interagir com nada', 'Ser produtoras', 'Fazer fotossintese'], correct: 0, explanation: 'Elas participam de varias relacoes ecologicas.' },
      { q: 'Ovo amniotico foi importante porque:', options: ['Protegeu o embriao em ambiente terrestre', 'Eliminou a necessidade de embriao', 'Criou pelos', 'Impediu respiracao pulmonar'], correct: 0, explanation: 'Anexos embrionarios criaram protecao e suporte ao desenvolvimento.' },
      { q: 'A melhor atitude diante de animal silvestre e:', options: ['Observar sem tocar e chamar ajuda se houver risco', 'Capturar', 'Alimentar sempre', 'Levar para casa'], correct: 0, explanation: 'Seguranca e conservacao devem caminhar juntas.' },
      { q: 'Ranking educativo deve valorizar:', options: ['Acertos, progresso e tentativa', 'Somente velocidade', 'Sorte', 'Punicao por erro'], correct: 0, explanation: 'Gamificacao funciona melhor quando incentiva aprendizado e revisao.' }
    ]
  });

  ensureZone({
    id: 8,
    name: 'Zona 8: Repteis do Brasil',
    shortName: 'Brasil',
    color: '#29b6f6',
    mapX: positions[8][0],
    mapY: positions[8][1],
    guardianName: 'JACARE DO PANTANAL',
    icon: R.ASSET_ICONS[8],
    lessons: [
      { title: 'DIVERSIDADE BRASILEIRA', speech: 'O Brasil e gigante.', body: 'O Brasil possui grande diversidade de serpentes, lagartos, jacares, tartarugas, cagados e jabutis. Pantanal, Cerrado, Amazonia, Caatinga e Mata Atlantica abrigam especies diferentes.' },
      { title: 'JACARES', speech: 'Cuidado parental.', body: 'Jacares fazem ninhos, vocalizam e podem proteger filhotes. Sao crocodilianos com papel importante em areas alagadas.' },
      { title: 'QUELONIOS AMAZONICOS', speech: 'Rios tambem sao berco.', body: 'Tartarugas e tracajas dependem de praias fluviais para postura. A coleta ilegal de ovos ameaça populacoes.' },
      { title: 'SERPENTES BRASILEIRAS', speech: 'Conhecer salva vidas.', body: 'Jararacas, cascaveis, corais verdadeiras e surucucus sao exemplos de serpentes peconhentas brasileiras. Identificacao segura deve ser feita por especialistas.' }
    ],
    questions: [
      { q: 'O Pantanal e importante para:', options: ['Jacares e outras especies aquaticas', 'Somente animais marinhos', 'Apenas dinossauros', 'Nenhum reptil'], correct: 0, explanation: 'Areas alagadas sao habitat de jacares e muitas outras especies.' },
      { q: 'Coleta ilegal de ovos prejudica:', options: ['Quelonios', 'Rochas', 'Nuvens', 'Fungos apenas'], correct: 0, explanation: 'Tartarugas e tracajas dependem dos ovos para renovacao populacional.' },
      { q: 'Jararacas pertencem principalmente ao genero:', options: ['Bothrops', 'Caiman', 'Chelonoidis', 'Iguana'], correct: 0, explanation: 'Bothrops inclui jararacas e especies relacionadas.' },
      { q: 'Jacares sao:', options: ['Crocodilianos', 'Quelonios', 'Anfibios', 'Mamiferos'], correct: 0, explanation: 'Jacares pertencem ao grupo Crocodylia.' },
      { q: 'Na Amazonia, praias de rios podem servir para:', options: ['Postura de ovos de quelonios', 'Formacao de pelos', 'Respiracao branquial adulta', 'Fabricacao de peconha'], correct: 0, explanation: 'Quelonios usam bancos de areia para ninhos.' },
      { q: 'Identificar serpente peconhenta com seguranca deve ser feito por:', options: ['Especialistas treinados', 'Qualquer pessoa tocando nela', 'Animais domesticos', 'Adivinhacao por cor apenas'], correct: 0, explanation: 'Padroes de cor podem enganar; seguranca vem primeiro.' }
    ]
  });

  ensureZone({
    id: 9,
    name: 'Zona 9: Sentidos e Comportamento',
    shortName: 'Sentidos',
    color: '#ab47bc',
    mapX: positions[9][0],
    mapY: positions[9][1],
    guardianName: 'GUIA DE CAMPO',
    icon: R.ASSET_ICONS[9],
    lessons: [
      { title: 'LINGUA BIFIDA', speech: 'Cheiro em stereo.', body: 'Serpentes e alguns lagartos usam a lingua para captar particulas quimicas. O orgao de Jacobson interpreta essas pistas.' },
      { title: 'CAMUFLAGEM', speech: 'Sumir tambem e defesa.', body: 'Cores e padroes ajudam repteis a se esconder, regular temperatura ou comunicar perigo.' },
      { title: 'COMPORTAMENTO DE DEFESA', speech: 'Nem todo bote e ataque.', body: 'Bufar, inflar o corpo, fugir, morder ou fingir morte sao respostas defensivas.' },
      { title: 'COMUNICACAO', speech: 'Corpo fala.', body: 'Movimentos de cabeca, exibicao de papadas, cores e posturas comunicam territorio, corte e ameaca.' }
    ],
    questions: [
      { q: 'A lingua bifida ajuda principalmente a:', options: ['Captar pistas quimicas', 'Produzir leite', 'Fazer fotossintese', 'Criar penas'], correct: 0, explanation: 'Ela leva particulas ao orgao de Jacobson.' },
      { q: 'Camuflagem pode servir para:', options: ['Defesa e aproximacao de presas', 'Trocar pulmoes', 'Eliminar coluna vertebral', 'Impedir reproducao'], correct: 0, explanation: 'Esconder-se ajuda tanto predadores quanto presas.' },
      { q: 'Inflar o corpo em algumas especies e:', options: ['Comportamento defensivo', 'Digestao final', 'Nascimento do ovo', 'Producao de casco'], correct: 0, explanation: 'Parecer maior pode afastar predadores.' },
      { q: 'Exibicao de papada em lagartos pode comunicar:', options: ['Territorio ou corte', 'Ausencia de sistema nervoso', 'Fim da respiracao', 'Perda da cauda sempre'], correct: 0, explanation: 'Sinais visuais sao comuns no comportamento de lagartos.' },
      { q: 'Fossetas sensiveis ao calor ajudam a:', options: ['Detectar presas endotermicas', 'Ouvir musica', 'Produzir escamas', 'Construir carapaca'], correct: 0, explanation: 'Algumas serpentes detectam infravermelho.' },
      { q: 'Fingir morte e exemplo de:', options: ['Tanatose defensiva', 'Ecdise', 'Fecundacao externa', 'Amnio'], correct: 0, explanation: 'Tanatose e uma estrategia de defesa.' }
    ]
  });

  ensureZone({
    id: 10,
    name: 'Zona 10: Desafio do Vulcao',
    shortName: 'Desafio Final',
    color: '#ff7043',
    mapX: positions[10][0],
    mapY: positions[10][1],
    guardianName: 'VULCAO MESOZOICO',
    icon: R.ASSET_ICONS[10],
    lessons: [
      { title: 'REVISAO GERAL', speech: 'Tudo se conecta.', body: 'A conquista terrestre dos repteis envolve pele queratinizada, pulmoes, fecundacao interna e ovo amniotico.' },
      { title: 'EVOLUCAO E ECOLOGIA', speech: 'Passado e presente.', body: 'Fosseis ajudam a entender origem e diversidade. Ecologia mostra por que conservar especies atuais e importante.' },
      { title: 'SEGURANCA', speech: 'Conhecer evita medo.', body: 'Reconhecer riscos sem perseguir animais e essencial. Em acidentes, atendimento medico e a conduta correta.' },
      { title: 'DESAFIO FINAL', speech: 'Hora da sintese.', body: 'Use o que aprendeu nas zonas anteriores para responder ao desafio final.' }
    ],
    questions: [
      { q: 'O conjunto que melhor resume adaptacoes terrestres dos repteis e:', options: ['Pele queratinizada, pulmoes e ovo amniotico', 'Branquias e pele fina', 'Pelos e glandulas mamarias', 'Penas e leite'], correct: 0, explanation: 'Essas caracteristicas favoreceram vida e reproducao em terra.' },
      { q: 'Ovo amniotico, fecundacao interna e casca favorecem:', options: ['Independencia da agua para reproducao', 'Vida obrigatoria em rios', 'Respiracao por branquias', 'Ausencia de embriao'], correct: 0, explanation: 'O embriao fica protegido e hidratado internamente.' },
      { q: 'O grupo com coracao de quatro camaras entre repteis atuais e:', options: ['Crocodilianos', 'Lagartos pequenos', 'Todas as serpentes', 'Todos os quelonios'], correct: 0, explanation: 'Crocodilianos possuem coracao tetracameral.' },
      { q: 'Em conservacao, matar serpentes indiscriminadamente:', options: ['Desequilibra ecossistemas e aumenta conflitos', 'Resolve todos os problemas', 'Nao tem impacto', 'Melhora cadeias alimentares sempre'], correct: 0, explanation: 'Serpentes controlam presas e fazem parte do equilibrio local.' },
      { q: 'A ecdise e:', options: ['Troca de pele', 'Formacao da placenta', 'Controle parental', 'Postura de ovos somente'], correct: 0, explanation: 'Muitos repteis trocam periodicamente a camada externa da pele.' },
      { q: 'O melhor comportamento ao estudar repteis e:', options: ['Observar com respeito e seguranca', 'Capturar animais silvestres', 'Tocar em serpentes', 'Destruir ninhos'], correct: 0, explanation: 'Aprender e conservar caminham juntos.' }
    ]
  });

  [
    { id: '013', name: 'SUCURI-VERDE', zone: 8, desc: 'Grande serpente sem peconha que vive associada a ambientes aquaticos.', stats: 'Tipo: Serpente | Ambiente: alagado | Defesa: constricao' },
    { id: '014', name: 'JACARE-ACU', zone: 8, desc: 'Crocodiliano amazonico de grande porte, importante em cadeias alimentares aquaticas.', stats: 'Tipo: Crocodiliano | Habitat: rios | Comportamento: predador' },
    { id: '015', name: 'OVO AMNIOTICO', zone: 6, desc: 'Estrutura evolutiva que protege o embriao e favorece reproducao terrestre.', stats: 'Anexos: amnio, corio, alantoide, saco vitelinico' },
    { id: '016', name: 'FOSSIL DIAPSIDO', zone: 4, desc: 'Registro que ajuda a reconstruir parentescos entre linhagens de repteis.', stats: 'Area: paleontologia | Evidencia: cranio e ossos' },
    { id: '017', name: 'GUARDA DO PARQUE', zone: 7, desc: 'NPC que ensina conservacao e convivencia segura com animais silvestres.', stats: 'Funcao: educacao ambiental | Zona: conservacao' },
    { id: '018', name: 'GUIA DE CAMPO', zone: 9, desc: 'NPC especializado em comportamento, camuflagem e sentidos dos repteis.', stats: 'Funcao: observacao | Zona: sentidos' }
  ].forEach(entry => {
    if (!R.REPTIDEX.some(item => item.id === entry.id)) R.REPTIDEX.push(entry);
  });

  R.BADGES = {
    ...R.BADGES,
    7: { icon: 'assets/img/guarda1.png', name: 'Guardiao da Conservacao' },
    8: { icon: 'assets/img/crocodilo1.png', name: 'Naturalista do Brasil' },
    9: { icon: 'assets/img/guia1.png', name: 'Observador de Campo' },
    10: { icon: 'assets/img/vulcao1.png', name: 'Campeao do Vulcao' },
    11: { icon: 'assets/img/placa1.png', name: 'Fisiologista' },
    12: { icon: 'assets/img/bau1.png', name: 'Campeao da Liga' }
  };

  [
    { id: '019', name: 'ARVORE DE TERMORREGULACAO', zone: 7, desc: 'Sombra e sol criam micro-habitats usados por repteis para controlar temperatura.', stats: 'Cenario: floresta | Funcao: micro-habitat' },
    { id: '020', name: 'PLACA DO LABORATORIO', zone: 11, desc: 'Ponto de estudo sobre metabolismo, circulacao e osmorregulacao.', stats: 'Tema: fisiologia | Modo: laboratorio' },
    { id: '021', name: 'BAU DA LIGA', zone: 12, desc: 'Recompensa final para quem domina as zonas do mapa.', stats: 'Tipo: conquista | Conteudo: revisao geral' }
  ].forEach(entry => {
    if (!R.REPTIDEX.some(item => item.id === entry.id)) R.REPTIDEX.push(entry);
  });
})();
