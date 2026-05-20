const APP = {
  name: "Tecnologia ESO · Projectes i reptes",
  version: "v3",
  line: "B",
  cacheName: "tecnologia-eso-projectes-reptes-v3"
};

const CURRICULUM = {
  competencies: {
    CE1: "Identificar i proposar problemes tecnològics amb iniciativa i creativitat, estudiant necessitats de l'entorn i planificant solucions.",
    CE2: "Aplicar tècniques i coneixements interdisciplinaris per construir solucions tecnològiques sostenibles.",
    CE3: "Comunicar, argumentar i difondre idees i solucions tecnològiques amb recursos adequats i treball en equip.",
    CE4: "Desenvolupar solucions sostenibles amb automatització, tecnologies emergents, sistemes programables i robòtics.",
    CE5: "Emprar eines digitals de disseny i fabricació per a una producció més eficient i sostenible.",
    CE6: "Analitzar processos tecnològics i valorar-ne l'impacte social i ambiental amb criteris de sostenibilitat."
  },
  criteria: {
    "1.1": "Idear i planificar solucions tecnològiques emprenedores que generin valor a la comunitat.",
    "1.2": "Aplicar estratègies col·laboratives de gestió de projectes amb procés iteratiu de validació.",
    "1.3": "Gestionar el projecte de manera creativa amb tècniques col·laboratives i mètodes de recerca.",
    "2.1": "Analitzar el disseny d'un producte, la demanda, l'evolució i el final del cicle de vida.",
    "2.2": "Fabricar productes i solucions fent ús del disseny assistit i tècniques manuals, mecàniques i digitals.",
    "2.3": "Argumentar solucions valorant-ne la viabilitat econòmica, funcional, sostenible i eficient.",
    "3.1": "Intercanviar informació i fomentar el treball en equip amb eines digitals, vocabulari tècnic i esquemes.",
    "3.2": "Presentar i difondre propostes amb expressió adequada, gestió del temps i llenguatge inclusiu.",
    "4.1": "Dissenyar, construir, controlar o simular sistemes automàtics programables i robots.",
    "4.2": "Integrar IoT, big data i IA en màquines i sistemes amb sentit crític, ètic i sostenible.",
    "5.1": "Resoldre tasques amb aplicacions i eines digitals amb autonomia.",
    "5.2": "Utilitzar eines de representació 3D i simuladors per construir coneixement tecnològic.",
    "5.3": "Emprar eines de presentació, difusió o publicació per a tasques col·laboratives.",
    "5.4": "Configurar programes o aplicacions per controlar automatismes.",
    "6.1": "Aplicar criteris de sostenibilitat en materials, disseny i fabricació minimitzant l'impacte.",
    "6.2": "Analitzar la contribució de tecnologies sostenibles, arquitectura bioclimàtica, renovables i mobilitat eficient.",
    "6.3": "Valorar projectes tecnològics socials, comunitats obertes, voluntariat i servei comunitari."
  },
  knowledgeBlocks: {
    projectes: "Procés de resolució de problemes i projectes",
    operadors: "Operadors tecnològics",
    robotica: "Pensament computacional, automatització i robòtica",
    sostenibilitat: "Tecnologia sostenible"
  }
};

const COURSES = {
  eso1: {
    title: "1r ESO · Tecnologia i Digitalització",
    status: "pendent",
    note: "Contenidor preparat. S'omplirà quan s'incorpori el currículum de Tecnologia i Digitalització."
  },
  eso2: {
    title: "2n ESO · Tecnologia i Digitalització",
    status: "pendent",
    note: "Contenidor preparat. S'omplirà quan s'incorpori el currículum de Tecnologia i Digitalització."
  },
  eso3: {
    title: "3r ESO · Tecnologia i Digitalització",
    status: "pendent",
    note: "Contenidor preparat. S'omplirà quan s'incorpori el currículum de Tecnologia i Digitalització."
  },
  eso4: {
    title: "4t ESO · Tecnologia",
    status: "actiu",
    note: "Contingut inicial basat en el currículum de Tecnologia.",
    situations: [
      {
        id: "sa1-centre",
        title: "SA1 · Millorem un espai del centre",
        short: "Detectar una necessitat real del centre i proposar una solució tecnològica viable.",
        challenge: "Com podem millorar un espai del centre amb una solució tecnològica útil, sostenible i assumible?",
        product: "Proposta tècnica amb requisits, esbós, materials, fases, justificació i presentació.",
        blocks: ["projectes", "sostenibilitat"],
        competencies: ["CE1", "CE2", "CE3", "CE6"],
        criteria: ["1.1", "1.2", "1.3", "2.1", "2.3", "3.1", "3.2", "6.1"],
        knowledge: [
          "Cerca i estudi de necessitats del centre educatiu.",
          "Tècniques d'ideació i gestió de projectes col·laboratius.",
          "Selecció de materials segons propietats, requisits i sostenibilitat.",
          "Documentació, presentació i difusió de projectes."
        ],
        teacher: "Situació inicial recomanada per introduir el procés tecnològic complet. Es pot fer amb prototip físic senzill, maqueta o proposta digital."
      },
      {
        id: "sa2-automatic",
        title: "SA2 · Sistema automàtic amb sensors",
        short: "Dissenyar o simular un automatisme que respongui a dades de l'entorn.",
        challenge: "Com podem fer que un sistema respongui automàticament a una condició de l'entorn?",
        product: "Esquema del sistema, sensors i actuadors, lògica de control, simulació o muntatge i proves.",
        blocks: ["operadors", "robotica"],
        competencies: ["CE4", "CE5", "CE2", "CE3"],
        criteria: ["4.1", "4.2", "5.1", "5.4", "2.2", "3.1"],
        knowledge: [
          "Components de sistemes de control programat: controladors, sensors i actuadors.",
          "Disseny, construcció i control de robots o sistemes senzills.",
          "Simuladors informàtics per verificar sistemes.",
          "Circuits electrònics bàsics físics o simulats."
        ],
        teacher: "Pot treballar-se amb micro:bit, Arduino, simuladors de circuits o entorns de blocs. No cal limitar-ho a un maquinari concret."
      },
      {
        id: "sa3-aula-eficient",
        title: "SA3 · Aula energèticament eficient",
        short: "Analitzar una aula i proposar millores d'eficiència energètica i confort.",
        challenge: "Com podem reduir el consum energètic d'una aula sense empitjorar-ne el confort?",
        product: "Diagnosi, dades observades, proposta de millores, impacte previst i conclusió argumentada.",
        blocks: ["sostenibilitat", "projectes"],
        competencies: ["CE1", "CE6", "CE3", "CE5"],
        criteria: ["1.1", "1.2", "3.1", "3.2", "5.1", "6.1", "6.2"],
        knowledge: [
          "Eficiència energètica, consum responsable i energies renovables.",
          "Estratègies d'estalvi energètic en edificis.",
          "Arquitectura bioclimàtica i sostenible.",
          "Anàlisi de dades i comunicació de resultats."
        ],
        teacher: "Adequada per connectar Tecnologia amb ciències, matemàtiques i tutoria ecosocial. Pot fer-se amb dades reals o estimades."
      },
      {
        id: "sa4-peca-3d",
        title: "SA4 · Peça 3D útil per al centre",
        short: "Dissenyar una peça senzilla en 3D que resolgui una necessitat concreta.",
        challenge: "Quina peça podríem dissenyar per resoldre una petita necessitat real del centre?",
        product: "Fitxa de disseny, esbós, model 3D o simulació, criteris de material i millores.",
        blocks: ["projectes", "operadors"],
        competencies: ["CE2", "CE5", "CE3", "CE6"],
        criteria: ["2.1", "2.2", "2.3", "5.1", "5.2", "3.2", "6.1"],
        knowledge: [
          "Disseny assistit per ordinador en 2D i 3D.",
          "Fabricació digital, impressió 3D i tall.",
          "Cicle de vida del producte.",
          "Selecció de materials segons propietats i requisits."
        ],
        teacher: "La peça no ha de ser complexa. L'objectiu és justificar decisions i iterar el disseny."
      },
      {
        id: "sa5-mobilitat",
        title: "SA5 · Mobilitat sostenible de l'entorn",
        short: "Analitzar opcions de mobilitat i proposar una millora sostenible i realista.",
        challenge: "Com podem millorar la mobilitat quotidiana del nostre entorn amb criteris de sostenibilitat?",
        product: "Anàlisi comparativa, proposta de millora, impacte social i ambiental, comunicació final.",
        blocks: ["sostenibilitat", "projectes"],
        competencies: ["CE6", "CE3", "CE1", "CE5"],
        criteria: ["6.2", "6.3", "3.1", "3.2", "1.1", "5.3"],
        knowledge: [
          "Mobilitat sostenible dels mitjans de transport públic o privat.",
          "Impacte ecosocial de les decisions tecnològiques.",
          "Comunicació i difusió de propostes.",
          "Projectes de servei a la comunitat."
        ],
        teacher: "Es pot orientar a barri, poble, rutes escolars o mobilitat dins del centre."
      },
      {
        id: "sa6-servei-comunitari",
        title: "SA6 · Prototip de servei comunitari",
        short: "Crear una solució tecnològica amb impacte social positiu.",
        challenge: "Com podem crear un prototip tecnològic que ajudi una comunitat o col·lectiu concret?",
        product: "Projecte complet: necessitat, usuaris, prototip, proves, impacte, comunicació i millores.",
        blocks: ["projectes", "robotica", "sostenibilitat", "operadors"],
        competencies: ["CE1", "CE2", "CE3", "CE4", "CE5", "CE6"],
        criteria: ["1.1", "1.2", "1.3", "2.2", "2.3", "3.1", "3.2", "4.1", "5.1", "6.3"],
        knowledge: [
          "Projectes col·laboratius i cooperatius.",
          "Automatització, sensors, actuadors o simulació si escau.",
          "Comunitats obertes d'aprenentatge i voluntariat tecnològic.",
          "Presentació i difusió del projecte."
        ],
        teacher: "Situació de síntesi per final de seqüència. Pot funcionar com a projecte global de trimestre."
      }
    ]
  }
};

const PROJECT_STEPS = [
  { key: "necessitat", title: "Detecto la necessitat", prompt: "Quin problema o necessitat has detectat? A qui afecta? On passa?" },
  { key: "requisits", title: "Defineixo requisits", prompt: "Quines condicions ha de complir la solució perquè sigui útil, segura, viable i sostenible?" },
  { key: "idees", title: "Genero idees", prompt: "Escriu almenys dues possibles solucions i explica breument els seus punts forts i febles." },
  { key: "disseny", title: "Dissenyo la proposta", prompt: "Descriu la solució escollida. Inclou forma, materials, components, funcionament o esquema." },
  { key: "prototip", title: "Construeixo o simulo", prompt: "Com faràs el prototip, la maqueta, el model 3D, el circuit, el programa o la simulació?" },
  { key: "proves", title: "Provo i milloro", prompt: "Quines proves faràs? Què ha funcionat? Què cal millorar?" },
  { key: "impacte", title: "Valoro l'impacte", prompt: "Quin impacte ambiental, social i econòmic pot tenir la proposta? Com el pots reduir o millorar?" },
  { key: "conclusio", title: "Comunico la conclusió", prompt: "Escriu una conclusió tècnica: què proposes, per què és adequada i quines millores futures faries?" }
];

const RUBRIC_LEVELS = {
  NA: "No assoliment",
  AS: "Assoliment satisfactori",
  AN: "Assoliment notable",
  AE: "Assoliment excel·lent"
};

const SITUATION_RUBRICS = {
  "sa1-centre": [
    {
      item: "Anàlisi de la necessitat i definició del repte",
      criteria: "CE1 · 1.1, 1.2",
      levels: {
        NA: "Detecta una necessitat de manera confusa o poc vinculada al centre; els requisits són incomplets o no verificables.",
        AS: "Identifica una necessitat real i formula un repte bàsic amb alguns requisits funcionals.",
        AN: "Analitza usuaris, context i requisits amb coherència, i justifica per què el repte genera valor al centre.",
        AE: "Contrasta la necessitat amb evidències, prioritza requisits i reformula el repte amb criteris d'utilitat, inclusió i sostenibilitat."
      }
    },
    {
      item: "Ideació, planificació i gestió del projecte",
      criteria: "CE1 · 1.2, 1.3",
      levels: {
        NA: "Presenta idees desordenades o sense fases clares; la planificació no permet executar el projecte.",
        AS: "Proposa una solució i una planificació simple amb tasques bàsiques i repartiment inicial.",
        AN: "Compara alternatives, organitza fases, reparteix responsabilitats i incorpora revisions del procés.",
        AE: "Aplica estratègies iteratives, documenta decisions i adapta la planificació segons proves, limitacions i retorn de l'equip."
      }
    },
    {
      item: "Proposta tècnica, materials i viabilitat",
      criteria: "CE2 · 2.1, 2.3; CE6 · 6.1",
      levels: {
        NA: "La proposta és poc viable o no explica materials, costos, ús o impacte.",
        AS: "Descriu una proposta funcional i identifica alguns materials o recursos necessaris.",
        AN: "Justifica materials, funcionament, viabilitat i criteris de sostenibilitat amb arguments tècnics suficients.",
        AE: "Optimitza la proposta valorant cicle de vida, reparabilitat, cost, seguretat, ús real i reducció d'impacte."
      }
    },
    {
      item: "Comunicació, documentació i presentació final",
      criteria: "CE3 · 3.1, 3.2",
      levels: {
        NA: "La documentació és incompleta i la presentació no explica clarament la solució.",
        AS: "Presenta la proposta amb vocabulari comprensible i documentació bàsica del procés.",
        AN: "Comunica amb vocabulari tècnic, esquemes o evidències, i adapta el discurs al temps i al públic.",
        AE: "Difon la solució de manera clara, inclusiva i convincent, integrant recursos visuals, justificació i resposta a preguntes."
      }
    }
  ],
  "sa2-automatic": [
    {
      item: "Disseny del sistema de control",
      criteria: "CE4 · 4.1; CE5 · 5.4",
      levels: {
        NA: "No diferencia correctament entrada, procés i sortida, o el sistema no respon al repte.",
        AS: "Identifica sensor, actuador i controlador, i descriu una lògica de funcionament simple.",
        AN: "Dissenya un sistema coherent amb condicions, seqüència de control i resposta verificable.",
        AE: "Optimitza el sistema amb condicions alternatives, seguretat, eficiència i possibles ampliacions."
      }
    },
    {
      item: "Simulació, muntatge o programació",
      criteria: "CE4 · 4.1; CE5 · 5.1, 5.4",
      levels: {
        NA: "El muntatge, simulació o programa és incomplet o no permet comprovar el funcionament.",
        AS: "Construeix o simula una versió bàsica que executa parcialment la funció prevista.",
        AN: "Implementa i comprova el sistema amb proves, correccions i ús adequat d'eines digitals.",
        AE: "Depura el sistema de manera autònoma, documenta errors i millores, i justifica les decisions de programació o muntatge."
      }
    },
    {
      item: "Integració de components i operadors tecnològics",
      criteria: "CE2 · 2.2; CE4 · 4.1",
      levels: {
        NA: "Els components no estan ben identificats o la relació entre ells és incorrecta.",
        AS: "Reconeix components principals i n'explica una funció bàsica dins el sistema.",
        AN: "Relaciona components mecànics, electrònics o digitals i explica com permeten l'automatització.",
        AE: "Analitza limitacions, compatibilitats i alternatives de components amb criteris tècnics i sostenibles."
      }
    },
    {
      item: "Ús crític de tecnologies emergents",
      criteria: "CE4 · 4.2; CE3 · 3.1",
      levels: {
        NA: "Esmenta IoT, dades o IA sense relació clara amb el sistema ni valoració crítica.",
        AS: "Relaciona alguna tecnologia emergent amb una possible millora del sistema.",
        AN: "Explica avantatges, riscos i usos ètics de dades, IoT o IA en el sistema proposat.",
        AE: "Argumenta amb sentit crític com integrar tecnologies emergents preservant privacitat, seguretat, eficiència i sostenibilitat."
      }
    }
  ],
  "sa3-aula-eficient": [
    {
      item: "Diagnosi energètica de l'aula",
      criteria: "CE1 · 1.1; CE6 · 6.1",
      levels: {
        NA: "La diagnosi és superficial o no identifica factors de consum i confort.",
        AS: "Identifica alguns consums o hàbits millorables amb observacions bàsiques.",
        AN: "Analitza factors d'il·luminació, climatització, ús d'equips o hàbits, i els relaciona amb possibles millores.",
        AE: "Fonamenta la diagnosi amb dades, comparacions o evidències, i prioritza actuacions segons impacte i viabilitat."
      }
    },
    {
      item: "Proposta d'estalvi i eficiència",
      criteria: "CE6 · 6.1, 6.2",
      levels: {
        NA: "La proposta és genèrica, poc realista o sense relació amb la diagnosi.",
        AS: "Proposa mesures senzilles d'estalvi energètic aplicables a l'aula.",
        AN: "Justifica mesures d'eficiència, consum responsable o arquitectura bioclimàtica amb coherència.",
        AE: "Integra mesures tècniques i d'hàbits, estima l'impacte i considera confort, manteniment, cost i sostenibilitat."
      }
    },
    {
      item: "Ús de dades, eines digitals i representació",
      criteria: "CE5 · 5.1; CE3 · 3.1",
      levels: {
        NA: "No organitza dades o les presenta sense relació amb la proposta.",
        AS: "Recull o utilitza algunes dades i les presenta de manera entenedora.",
        AN: "Organitza dades, les interpreta i les usa per justificar decisions o comparar alternatives.",
        AE: "Representa dades de manera clara, detecta patrons i explica limitacions o incerteses de les estimacions."
      }
    },
    {
      item: "Argumentació ecosocial i comunicació",
      criteria: "CE3 · 3.2; CE6 · 6.2",
      levels: {
        NA: "La conclusió és poc clara o no valora l'impacte ambiental i social.",
        AS: "Explica la proposta i indica algun benefici ambiental o de confort.",
        AN: "Argumenta beneficis, limitacions i millores amb llenguatge tècnic i inclusiu.",
        AE: "Comunica una proposta convincent, transferible i ecosocialment responsable, amb justificació completa i accions concretes."
      }
    }
  ],
  "sa4-peca-3d": [
    {
      item: "Definició de la funció i requisits de la peça",
      criteria: "CE2 · 2.1; CE1 · 1.1",
      levels: {
        NA: "La peça no respon clarament a una necessitat o no defineix requisits d'ús.",
        AS: "Defineix una funció bàsica i alguns requisits de mida, ús o resistència.",
        AN: "Relaciona necessitat, funció, usuaris i requisits tècnics de manera coherent.",
        AE: "Prioritza requisits, anticipa problemes d'ús i ajusta el disseny per millorar funcionalitat, seguretat i accessibilitat."
      }
    },
    {
      item: "Disseny 2D/3D i representació tècnica",
      criteria: "CE5 · 5.2; CE2 · 2.2",
      levels: {
        NA: "El model o esbós és incomplet, poc comprensible o no fabricable.",
        AS: "Crea un esbós o model 3D simple que representa la idea principal.",
        AN: "Elabora un model coherent amb dimensions, formes i criteris de fabricació.",
        AE: "Optimitza el model amb precisió, iteracions, justificació geomètrica i adequació al procés de fabricació."
      }
    },
    {
      item: "Materials, fabricació i cicle de vida",
      criteria: "CE2 · 2.2, 2.3; CE6 · 6.1",
      levels: {
        NA: "No justifica materials ni considera sostenibilitat o final de vida.",
        AS: "Tria un material o tècnica de fabricació i n'explica algun motiu.",
        AN: "Justifica material, tècnica, durabilitat, residus i viabilitat de fabricació.",
        AE: "Avalua cicle de vida, reparabilitat, reutilització i alternatives de menor impacte sense perdre funcionalitat."
      }
    },
    {
      item: "Proves, millora i documentació del disseny",
      criteria: "CE3 · 3.2; CE2 · 2.3",
      levels: {
        NA: "No comprova si la peça funciona o no documenta millores.",
        AS: "Fa una comprovació bàsica i proposa alguna millora.",
        AN: "Avalua el disseny amb criteris d'ús i explica millores justificades.",
        AE: "Documenta iteracions, evidències de prova i millores futures amb comunicació tècnica clara i precisa."
      }
    }
  ],
  "sa5-mobilitat": [
    {
      item: "Anàlisi del problema de mobilitat",
      criteria: "CE6 · 6.2; CE1 · 1.1",
      levels: {
        NA: "Descriu el problema de manera general sense dades, usuaris ni context clar.",
        AS: "Identifica un problema de mobilitat i alguns usuaris afectats.",
        AN: "Analitza causes, conseqüències i context de mobilitat amb criteris socials i ambientals.",
        AE: "Contrasta informació, considera diversitat d'usuaris i formula un repte de mobilitat concret, inclusiu i sostenible."
      }
    },
    {
      item: "Comparació d'alternatives sostenibles",
      criteria: "CE6 · 6.2; CE5 · 5.1",
      levels: {
        NA: "No compara alternatives o ho fa sense criteris clars.",
        AS: "Compara algunes opcions de mobilitat amb criteris senzills.",
        AN: "Valora alternatives segons emissions, cost, temps, seguretat, accessibilitat i impacte social.",
        AE: "Integra dades, criteris ponderats i limitacions reals per justificar l'alternativa més adequada."
      }
    },
    {
      item: "Proposta de millora i servei a la comunitat",
      criteria: "CE6 · 6.3; CE1 · 1.2",
      levels: {
        NA: "La proposta és poc aplicable o no mostra benefici comunitari.",
        AS: "Planteja una millora senzilla amb algun benefici per a l'entorn.",
        AN: "Dissenya una proposta realista que connecta sostenibilitat, seguretat i servei a la comunitat.",
        AE: "Formula una actuació transferible, coordinable amb agents de l'entorn i avaluable amb indicadors de millora."
      }
    },
    {
      item: "Comunicació i argumentació pública",
      criteria: "CE3 · 3.1, 3.2; CE5 · 5.3",
      levels: {
        NA: "La comunicació és poc clara o sense justificació suficient.",
        AS: "Presenta la proposta amb arguments bàsics i recursos senzills.",
        AN: "Comunica dades, comparacions i proposta amb estructura clara i llenguatge inclusiu.",
        AE: "Elabora una comunicació persuasiva, visual i rigorosa, anticipant objeccions i adaptant-se al públic destinatari."
      }
    }
  ],
  "sa6-servei-comunitari": [
    {
      item: "Identificació d'usuaris i necessitat social",
      criteria: "CE1 · 1.1; CE6 · 6.3",
      levels: {
        NA: "La necessitat social és poc concreta o no identifica usuaris reals.",
        AS: "Identifica un col·lectiu o necessitat i proposa una orientació general del projecte.",
        AN: "Analitza usuaris, context, requisits i valor comunitari amb coherència.",
        AE: "Contrasta la necessitat, incorpora criteris d'inclusió i defineix indicadors per valorar l'impacte social."
      }
    },
    {
      item: "Desenvolupament del prototip tecnològic",
      criteria: "CE2 · 2.2, 2.3; CE4 · 4.1",
      levels: {
        NA: "El prototip és incomplet o no respon funcionalment al repte.",
        AS: "Construeix o descriu un prototip bàsic amb funcionament parcial.",
        AN: "Desenvolupa, prova i millora un prototip coherent amb materials, components o simulació adequats.",
        AE: "Integra solucions tècniques avançades o ben optimitzades, documenta iteracions i justifica la viabilitat del prototip."
      }
    },
    {
      item: "Treball col·laboratiu, gestió i documentació",
      criteria: "CE1 · 1.2, 1.3; CE3 · 3.1",
      levels: {
        NA: "Hi ha poca organització de l'equip i documentació insuficient del procés.",
        AS: "Reparteix tasques bàsiques i documenta algunes fases del projecte.",
        AN: "Gestiona fases, rols, decisions i revisions de manera col·laborativa i documentada.",
        AE: "Aplica gestió iterativa, resol conflictes o imprevistos i manté una documentació completa, útil i compartible."
      }
    },
    {
      item: "Impacte, sostenibilitat i difusió del projecte",
      criteria: "CE3 · 3.2; CE6 · 6.1, 6.3",
      levels: {
        NA: "No valora prou l'impacte o la comunicació final és incompleta.",
        AS: "Explica alguns beneficis socials o ambientals i presenta el projecte de manera bàsica.",
        AN: "Argumenta impacte, sostenibilitat, limitacions i millores amb comunicació tècnica clara.",
        AE: "Difon el projecte amb qualitat, evidències i criteris ecosocials, i proposa continuïtat o escalabilitat comunitària."
      }
    }
  ]
};

const state = {
  course: "eso4",
  situationId: "sa1-centre",
  view: "situacions",
  level: "AN",
  teacherMode: false,
  includeRubricInReport: true,
  responses: {},
  decision: {},
  sustainability: {}
};

const tabs = [
  ["situacions", "Situacions"],
  ["taller", "Taller"],
  ["eines", "Eines"],
  ["curricular", "Fitxa curricular"],
  ["rubrica", "Rúbrica"],
  ["informe", "Informe"]
];

function currentCourse() {
  return COURSES[state.course];
}

function currentSituations() {
  return currentCourse().situations || [];
}

function currentSituation() {
  return currentSituations().find(s => s.id === state.situationId) || currentSituations()[0];
}

function safeHtml(text) {
  return String(text).replace(/[&<>"]/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  }[char]));
}

function init() {
  renderCourseSelect();
  renderSituationSelect();
  renderTabs();
  renderAll();
  attachGlobalEvents();
  registerServiceWorker();
}

function renderCourseSelect() {
  const select = document.getElementById("courseSelect");
  select.innerHTML = Object.entries(COURSES).map(([id, course]) => {
    const suffix = course.status === "pendent" ? " · pendent" : "";
    return `<option value="${id}">${safeHtml(course.title + suffix)}</option>`;
  }).join("\\n");
  select.value = state.course;
}

function renderSituationSelect() {
  const select = document.getElementById("situationSelect");
  const situations = currentSituations();
  if (!situations.length) {
    select.innerHTML = `<option value="pending">Pendents d'afegir</option>`;
    select.disabled = true;
    return;
  }
  select.disabled = false;
  select.innerHTML = situations.map(s => `<option value="${s.id}">${safeHtml(s.title)}</option>`).join("\\n");
  if (!situations.some(s => s.id === state.situationId)) state.situationId = situations[0].id;
  select.value = state.situationId;
}

function renderTabs() {
  const el = document.getElementById("tabs");
  el.innerHTML = tabs.map(([id, label]) => `<button class="${state.view === id ? "active" : ""}" data-tab="${id}" type="button">${label}</button>`).join("\\n");
}

function renderAll() {
  renderTabs();
  renderViews();
  renderSituations();
  renderTaller();
  renderTools();
  renderCurriculum();
  renderRubric();
  renderReport();
  renderTeacherMode();
}

function renderViews() {
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  const view = document.getElementById(`view-${state.view}`);
  if (view) view.classList.remove("hidden");
}

function renderSituations() {
  const list = document.getElementById("situationList");
  const title = document.getElementById("situationTitle");
  const desc = document.getElementById("situationDescription");
  const tags = document.getElementById("situationTags");
  const teacherBox = document.getElementById("teacherSituationBox");
  const course = currentCourse();
  const situations = currentSituations();

  if (!situations.length) {
    list.innerHTML = `<div class="situation-item"><strong>${safeHtml(course.title)}</strong><p class="small muted">${safeHtml(course.note)}</p></div>`;
    title.textContent = course.title;
    desc.textContent = "Aquest curs encara no té situacions carregades. La seva estructura queda preparada per quan s'incorpori el PDF curricular corresponent.";
    tags.innerHTML = `<span class="tag warn">pendent de currículum</span>`;
    teacherBox.innerHTML = "Quan es carregui el PDF de Tecnologia i Digitalització, aquest contenidor podrà rebre situacions, competències, criteris i sabers propis del curs.";
    return;
  }

  list.innerHTML = situations.map(s => `
    <div class="situation-item ${s.id === state.situationId ? "active" : ""}" data-situation="${s.id}">
      <strong>${safeHtml(s.title)}</strong>
      <p class="small muted">${safeHtml(s.short)}</p>
      <div class="tagrow">${s.competencies.map(c => `<span class="tag">${c}</span>`).join("\\n")}</div>
    </div>
  `).join("\\n");

  const s = currentSituation();
  title.textContent = s.title;
  desc.innerHTML = `<strong>Repte:</strong> ${safeHtml(s.challenge)}<br><br><strong>Producte final:</strong> ${safeHtml(s.product)}`;
  tags.innerHTML = [
    ...s.blocks.map(b => `<span class="tag">${safeHtml(CURRICULUM.knowledgeBlocks[b])}</span>`),
    ...s.competencies.map(c => `<span class="tag warn">${c}</span>`)
  ].join("\\n");
  teacherBox.innerHTML = `<strong>Orientació docent:</strong> ${safeHtml(s.teacher)}`;
}

function renderTaller() {
  const el = document.getElementById("projectSteps");
  el.innerHTML = PROJECT_STEPS.map((step, index) => `
    <div class="step">
      <div class="step-title">
        <h3><span class="num">${index + 1}</span>${safeHtml(step.title)}</h3>
      </div>
      <label for="step-${step.key}" class="small">${safeHtml(step.prompt)}</label>
      <textarea id="step-${step.key}" data-response="${step.key}" placeholder="Escriu aquí la teva resposta...">${safeHtml(state.responses[step.key] || "")}</textarea>
    </div>
  `).join("\\n");
}

function renderTools() {
  renderDecisionTool();
  renderSustainabilityTool();
}

function renderDecisionTool() {
  const criteria = ["Utilitat", "Cost", "Sostenibilitat", "Dificultat", "Impacte social"];
  const options = ["Solució A", "Solució B", "Solució C"];
  const el = document.getElementById("decisionTool");
  el.innerHTML = options.map(opt => `
    <div class="step">
      <label>${opt}</label>
      <input data-decision-name="${opt}" value="${safeHtml(state.decision[opt]?.name || "")}" placeholder="Nom o descripció breu de la solució" />
      <div class="two-cols" style="margin-top:10px;">
        ${criteria.map(c => `
          <div>
            <label class="tiny">${c} · 1-4</label>
            <input type="number" min="1" max="4" data-decision-score="${opt}|${c}" value="${safeHtml(state.decision[opt]?.scores?.[c] || "")}" />
          </div>
        `).join("\\n")}
      </div>
    </div>
  `).join("\\n");
}

function renderSustainabilityTool() {
  const items = [
    ["materials", "Materials: són durables, reutilitzables o reciclables?"],
    ["energia", "Energia: consumeix poc o pot funcionar amb energia renovable?"],
    ["residus", "Residus: genera pocs residus o facilita la reparació?"],
    ["social", "Impacte social: és útil, accessible i segur per a les persones?"],
    ["millora", "Millora concreta: què canviaries per fer-la més sostenible?"]
  ];
  const el = document.getElementById("sustainabilityTool");
  el.innerHTML = items.map(([key, label]) => `
    <div class="step">
      <label for="sus-${key}">${safeHtml(label)}</label>
      <textarea id="sus-${key}" data-sustainability="${key}" placeholder="Resposta...">${safeHtml(state.sustainability[key] || "")}</textarea>
    </div>
  `).join("\\n");
}

function renderCurriculum() {
  const s = currentSituation();
  const card = document.getElementById("curriculumCard");
  const knowledge = document.getElementById("knowledgeCard");

  if (!s) {
    card.innerHTML = `<p class="muted">Fitxa pendent fins que s'afegeixi el currículum del curs seleccionat.</p>`;
    knowledge.innerHTML = `<p class="muted">Sabers pendents.</p>`;
    return;
  }

  card.innerHTML = `
    <h3>${safeHtml(s.title)}</h3>
    <p><strong>Curs:</strong> ${safeHtml(currentCourse().title)}</p>
    <p><strong>Repte:</strong> ${safeHtml(s.challenge)}</p>
    <p><strong>Producte final:</strong> ${safeHtml(s.product)}</p>
    <h3>Competències específiques</h3>
    <div class="curriculum-list">
      ${s.competencies.map(c => `<div><strong>${c}</strong> · ${safeHtml(CURRICULUM.competencies[c])}</div>`).join("\\n")}
    </div>
    <h3 style="margin-top:14px;">Criteris d'avaluació</h3>
    <div class="curriculum-list">
      ${s.criteria.map(c => `<div><strong>${c}</strong> · ${safeHtml(CURRICULUM.criteria[c])}</div>`).join("\\n")}
    </div>
  `;

  knowledge.innerHTML = `
    <h3>Blocs</h3>
    <div class="tagrow">${s.blocks.map(b => `<span class="tag">${safeHtml(CURRICULUM.knowledgeBlocks[b])}</span>`).join("\\n")}</div>
    <h3 style="margin-top:14px;">Sabers seleccionats</h3>
    <div class="curriculum-list">
      ${s.knowledge.map(k => `<div>${safeHtml(k)}</div>`).join("\\n")}
    </div>
  `;
}

function renderRubric() {
  const el = document.getElementById("rubricCard");
  const s = currentSituation();
  if (!s) {
    el.innerHTML = `<p class="muted">Rúbrica pendent fins que s'afegeixi el currículum del curs seleccionat.</p>`;
    return;
  }

  const rows = SITUATION_RUBRICS[s.id] || [];
  el.innerHTML = `
    <table class="rubric-table" aria-label="Rúbrica formal de la situació d'aprenentatge">
      <thead>
        <tr>
          <th>Ítem d'avaluació</th>
          <th>Criteris</th>
          <th>NA<br><span>No assoliment</span></th>
          <th>AS<br><span>Assoliment satisfactori</span></th>
          <th>AN<br><span>Assoliment notable</span></th>
          <th>AE<br><span>Assoliment excel·lent</span></th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr>
            <td><strong>${safeHtml(row.item)}</strong></td>
            <td>${safeHtml(row.criteria)}</td>
            <td>${safeHtml(row.levels.NA)}</td>
            <td>${safeHtml(row.levels.AS)}</td>
            <td>${safeHtml(row.levels.AN)}</td>
            <td>${safeHtml(row.levels.AE)}</td>
          </tr>
        `).join("\\n")}
      </tbody>
    </table>
  `;

  const check = document.getElementById("includeRubricCheck");
  if (check) check.checked = state.includeRubricInReport;
}

function buildRubricMarkdown(s) {
  const rows = SITUATION_RUBRICS[s.id] || [];
  if (!rows.length) return "[rúbrica pendent]";
  const header = "| Ítem d'avaluació | Criteris | NA · No assoliment | AS · Assoliment satisfactori | AN · Assoliment notable | AE · Assoliment excel·lent |";
  const sep = "|---|---|---|---|---|---|";
  const body = rows.map(row => `| ${row.item} | ${row.criteria} | ${row.levels.NA} | ${row.levels.AS} | ${row.levels.AN} | ${row.levels.AE} |`).join("\n");
  return `${header}
${sep}
${body}`;
}

function renderReportRubricTable(s) {
  const target = document.getElementById("reportRubricTable");
  if (!target) return;
  if (!state.includeRubricInReport || !s) {
    target.innerHTML = "";
    return;
  }
  const rows = SITUATION_RUBRICS[s.id] || [];
  target.innerHTML = `
    <h3>Rúbrica formal LOMLOE de la situació d'aprenentatge</h3>
    <table class="rubric-table compact" aria-label="Rúbrica adjunta a l'informe">
      <thead>
        <tr>
          <th>Ítem</th>
          <th>Criteris</th>
          <th>NA</th>
          <th>AS</th>
          <th>AN</th>
          <th>AE</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr>
            <td><strong>${safeHtml(row.item)}</strong></td>
            <td>${safeHtml(row.criteria)}</td>
            <td>${safeHtml(row.levels.NA)}</td>
            <td>${safeHtml(row.levels.AS)}</td>
            <td>${safeHtml(row.levels.AN)}</td>
            <td>${safeHtml(row.levels.AE)}</td>
          </tr>
        `).join("\\n")}
      </tbody>
    </table>
  `;
}

function renderReport() {
  const s = currentSituation();
  const report = document.getElementById("report");
  if (!s) {
    report.textContent = "Informe pendent: aquest curs encara no té situacions carregades.";
    renderReportRubricTable(null);
    return;
  }

  const stepText = PROJECT_STEPS.map(step => {
    const value = state.responses[step.key] || "[pendent de completar]";
    return `${step.title}
${value}`;
  }).join("\n\n");

  const selectedLabel = RUBRIC_LEVELS[state.level];
  const rubricText = state.includeRubricInReport
    ? `

Rúbrica formal LOMLOE de la situació d'aprenentatge
${buildRubricMarkdown(s)}`
    : "";

  report.textContent = `${APP.name} · ${APP.version}
Línia: ${APP.line} · Projecte independent de Matemàtiques ESO

Curs: ${currentCourse().title}
Situació: ${s.title}
Nivell d'assoliment seleccionat: ${state.level} · ${selectedLabel}

Repte
${s.challenge}

Producte final
${s.product}

Competències específiques
${s.competencies.join(", ")}

Criteris d'avaluació
${s.criteria.join(", ")}

Sabers treballats
${s.knowledge.map(k => "- " + k).join("\n")}

Procés tecnològic
${stepText}

Matriu de decisió
${summarizeDecision()}

Anàlisi de sostenibilitat
${summarizeSustainability()}

Conclusió final
La proposta s'ha de valorar segons la seva utilitat, viabilitat tècnica, sostenibilitat, qualitat de la justificació i capacitat de comunicar les decisions preses.${rubricText}`;

  renderReportRubricTable(s);
}

function summarizeDecision() {
  const entries = Object.entries(state.decision);
  if (!entries.length) return "[pendent de completar]";
  return entries.map(([opt, data]) => {
    const name = data.name || opt;
    const scores = data.scores || {};
    const total = Object.values(scores).reduce((sum, v) => sum + (Number(v) || 0), 0);
    return `- ${name}: ${total} punts`;
  }).join("\n");
}

function summarizeSustainability() {
  const entries = Object.entries(state.sustainability).filter(([, v]) => v && v.trim());
  if (!entries.length) return "[pendent de completar]";
  return entries.map(([key, value]) => `- ${key}: ${value}`).join("\n");
}

function renderTeacherMode() {
  const toggle = document.getElementById("teacherToggle");
  toggle.textContent = `Mode docent: ${state.teacherMode ? "activat" : "desactivat"}`;
  document.querySelectorAll(".teacher-box").forEach(box => box.classList.toggle("hidden", !state.teacherMode));
}

function attachGlobalEvents() {
  document.getElementById("courseSelect").addEventListener("change", e => {
    state.course = e.target.value;
    renderSituationSelect();
    renderAll();
  });

  document.getElementById("situationSelect").addEventListener("change", e => {
    state.situationId = e.target.value;
    renderAll();
  });

  document.getElementById("levelSelect").addEventListener("change", e => {
    state.level = e.target.value;
    renderRubric();
    renderReport();
  });

  document.getElementById("tabs").addEventListener("click", e => {
    const tab = e.target.closest("button")?.dataset.tab;
    if (!tab) return;
    state.view = tab;
    renderAll();
  });

  document.body.addEventListener("click", e => {
    const item = e.target.closest("[data-situation]");
    if (!item) return;
    state.situationId = item.dataset.situation;
    document.getElementById("situationSelect").value = state.situationId;
    renderAll();
  });

  document.body.addEventListener("input", e => {
    const responseKey = e.target.dataset.response;
    if (responseKey) state.responses[responseKey] = e.target.value;

    const sustainabilityKey = e.target.dataset.sustainability;
    if (sustainabilityKey) state.sustainability[sustainabilityKey] = e.target.value;

    const decisionName = e.target.dataset.decisionName;
    if (decisionName) {
      state.decision[decisionName] ||= { name: "", scores: {} };
      state.decision[decisionName].name = e.target.value;
    }

    const decisionScore = e.target.dataset.decisionScore;
    if (decisionScore) {
      const [opt, criterion] = decisionScore.split("|");
      state.decision[opt] ||= { name: "", scores: {} };
      state.decision[opt].scores[criterion] = e.target.value;
    }

    renderReport();
  });

  document.getElementById("includeRubricCheck").addEventListener("change", e => {
    state.includeRubricInReport = e.target.checked;
    renderReport();
  });

  document.getElementById("teacherToggle").addEventListener("click", () => {
    state.teacherMode = !state.teacherMode;
    renderTeacherMode();
  });

  document.getElementById("copyReportBtn").addEventListener("click", async () => {
    renderReport();
    const text = document.getElementById("report").textContent;
    try {
      await navigator.clipboard.writeText(text);
      alert("Informe copiat al porta-retalls.");
    } catch (err) {
      alert("No s'ha pogut copiar automàticament. Selecciona el text de l'informe manualment.");
    }
  });

  document.getElementById("printRubricBtn").addEventListener("click", () => {
    const previousView = state.view;
    state.view = "rubrica";
    renderAll();
    document.body.classList.add("print-rubric");
    window.print();
    setTimeout(() => {
      document.body.classList.remove("print-rubric");
      state.view = previousView;
      renderAll();
    }, 250);
  });

  document.getElementById("printBtn").addEventListener("click", () => window.print());
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      console.info("Service Worker pendent d'afegir o no disponible en aquest entorn.");
    });
  });
}

init();
