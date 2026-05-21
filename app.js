const APP = {
  name: "Tecnologia ESO · Projectes i reptes",
  version: "v19",
  line: "B",
  cacheName: "tecnologia-eso-projectes-reptes-v19"
};

const CURRICULUM_SETS = {
  tecnologiaDigitalitzacio: {
    competencies: {
      CE1: "Buscar, analitzar i seleccionar informació de manera crítica i segura per delimitar problemes tecnològics i proposar solucions.",
      CE2: "Planificar, dissenyar i desenvolupar solucions a problemes tecnològics aplicant el procés tecnològic amb autonomia, creativitat i cooperació.",
      CE3: "Aplicar tècniques, operadors, sistemes tecnològics i eines per construir solucions tecnològiques en diferents contextos.",
      CE4: "Descriure, representar i intercanviar idees o solucions tecnològiques o digitals amb vocabulari, simbologia, formats i eines adequades.",
      CE5: "Desenvolupar algorismes i aplicacions informàtiques, incorporant pensament computacional, automatització, control o robòtica.",
      CE6: "Utilitzar dispositius i aplicacions de l’entorn digital d’aprenentatge de manera eficient, segura i ajustada a les necessitats.",
      CE7: "Fer un ús ètic, sostenible i ecosocialment responsable de la tecnologia, valorant-ne l’impacte social i ambiental."
    },
    criteria: {
      "1.1": "Identificar i definir problemes o necessitats cercant i contrastant informació de fonts diverses de manera crítica i segura.",
      "1.2": "Analitzar productes tecnològics d’ús habitual mitjançant l’anàlisi d’objectes i sistemes i, si escau, eines de simulació.",
      "2.1": "Idear i dissenyar solucions tecnològiques originals aplicant el procés tecnològic i documentant la informació en una memòria de projecte.",
      "2.2": "Seleccionar, planificar i organitzar temps, materials, eines i tasques per construir una solució treballant individualment o en grup.",
      "2.3": "Aplicar criteris de sostenibilitat en el disseny de solucions considerant el cicle de vida de l’objecte.",
      "3.1": "Fabricar objectes o models emprant materials, instruments, eines i màquines adequades amb normes de seguretat i salut.",
      "3.2": "Avaluar el resultat d’una construcció contrastant les seves funcions amb els requeriments tècnics del projecte.",
      "4.1": "Documentar el procés de creació d’un producte elaborant documentació tècnica i gràfica amb eines digitals.",
      "4.2": "Representar objectes, diagrames i esquemes tècnics mitjançant eines digitals col·laboratives i normes tècniques.",
      "4.3": "Utilitzar dispositius i recursos digitals per comunicar, difondre i argumentar els aprenentatges.",
      "5.1": "Descriure, interpretar i dissenyar solucions a problemes informàtics amb algorismes i diagrames de flux.",
      "5.2": "Programar aplicacions senzilles per a diferents dispositius amb programari, llenguatges i mòduls adequats.",
      "5.3": "Automatitzar processos, màquines i objectes amb o sense connexió a Internet mitjançant robots i sistemes de control.",
      "6.1": "Fer un ús eficient i segur dels dispositius digitals identificant riscos i mesures de protecció de dades i equips.",
      "6.2": "Crear, elaborar i difondre continguts en plataformes configurant eines digitals i respectant llicències i autoria.",
      "6.3": "Organitzar la informació de manera estructurada aplicant tècniques d’emmagatzematge segur.",
      "7.1": "Identificar la influència de l’activitat tecnològica en la societat i la sostenibilitat al llarg de la història.",
      "7.2": "Fer un ús responsable i ètic de les tecnologies emergents valorant benestar, igualtat i reducció d’impacte ambiental.",
      "7.3": "Valorar l’economia circular com a aportació tecnològica i social per reduir matèries primeres i residus."
    }
  },
  tecnologia4: {
    competencies: {
      CE1: "Identificar i proposar problemes tecnològics amb iniciativa i creativitat, estudiant necessitats de l’entorn i planificant solucions.",
      CE2: "Aplicar tècniques i coneixements interdisciplinaris per construir solucions tecnològiques sostenibles.",
      CE3: "Comunicar, argumentar i difondre idees i solucions tecnològiques amb recursos adequats i treball en equip.",
      CE4: "Desenvolupar solucions sostenibles amb automatització, tecnologies emergents, sistemes programables i robòtics.",
      CE5: "Emprar eines digitals de disseny i fabricació per a una producció més eficient i sostenible.",
      CE6: "Analitzar processos tecnològics i valorar-ne l’impacte social i ambiental amb criteris de sostenibilitat."
    },
    criteria: {
      "1.1": "Idear i planificar solucions tecnològiques emprenedores que generin valor a la comunitat.",
      "1.2": "Aplicar estratègies col·laboratives de gestió de projectes amb procés iteratiu de validació.",
      "1.3": "Gestionar el projecte de manera creativa amb tècniques col·laboratives i mètodes de recerca.",
      "2.1": "Analitzar el disseny d’un producte, la demanda, l’evolució i el final del cicle de vida.",
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
      "6.1": "Aplicar criteris de sostenibilitat en materials, disseny i fabricació minimitzant l’impacte.",
      "6.2": "Analitzar la contribució de tecnologies sostenibles, arquitectura bioclimàtica, renovables i mobilitat eficient.",
      "6.3": "Valorar projectes tecnològics socials, comunitats obertes, voluntariat i servei comunitari."
    }
  }
};

const KNOWLEDGE_BLOCKS = {
  projectes: "Procés de resolució de problemes i de projectes",
  comunicacio: "Comunicació i difusió d’idees",
  operadors: "Operadors i sistemes tecnològics",
  robotica: "Pensament computacional, programació i robòtica",
  digitalitzacio: "Digitalització de l’entorn personal d’aprenentatge",
  sostenibilitat: "Tecnologia sostenible"
};

const COURSES = {
  eso1: {
    title: "1r ESO · Tecnologia i Digitalització",
    status: "actiu",
    curriculumKey: "tecnologiaDigitalitzacio",
    note: "Situacions inicials basades en el currículum de Tecnologia i Digitalització.",
    situations: [
      {
        id: "td1-sa1-objecte-quotidia",
        title: "SA1 · Per què aquest objecte està fet així?",
        short: "Anàlisi d’un objecte quotidià per comprendre materials, forma, funció, ús i impacte.",
        challenge: "Com podem analitzar un objecte quotidià per entendre quina necessitat resol i com es podria millorar?",
        product: "Fitxa d’anàlisi d’objecte amb funció, parts, materials, ús segur, impacte ambiental i proposta de millora.",
        blocks: ["projectes", "comunicacio", "sostenibilitat"],
        competencies: ["CE1", "CE4", "CE7"],
        criteria: ["1.1", "1.2", "4.1", "4.3", "7.1"],
        knowledge: ["Anàlisi de productes i sistemes tecnològics d’ús habitual.", "Estratègies de cerca crítica d’informació.", "Vocabulari tècnic bàsic i documentació gràfica.", "Característiques dels materials i impacte ambiental."],
        rubricItems: ["Definició de la necessitat i funció de l’objecte", "Anàlisi de materials, parts i funcionament", "Ús de vocabulari tècnic i documentació", "Valoració de l’impacte i proposta de millora"],
        teacher: "Situació d’entrada per activar mirada tecnològica i criteris d’anàlisi abans de construir."
      },
      {
        id: "td1-sa2-estructura-resistent",
        title: "SA2 · Construïm una estructura resistent",
        short: "Disseny i construcció d’una estructura senzilla amb criteris d’estabilitat, materials i seguretat.",
        challenge: "Com podem construir una estructura lleugera que suporti una càrrega determinada amb el mínim material possible?",
        product: "Model físic o simulat d’una estructura, proves de resistència, registre de resultats i millores.",
        blocks: ["projectes", "operadors", "comunicacio"],
        competencies: ["CE2", "CE3", "CE4"],
        criteria: ["2.1", "2.2", "3.1", "3.2", "4.1"],
        knowledge: ["Aplicació de fases del procés tecnològic.", "Anàlisi i disseny d’estructures per a la construcció de models.", "Manipulació de materials i normes de seguretat.", "Avaluació del resultat respecte dels requeriments tècnics."],
        rubricItems: ["Planificació de l’estructura i requisits", "Construcció segura i ús adequat de materials", "Proves de resistència i revisió del model", "Documentació del procés i justificació de millores"],
        teacher: "Adequada per treballar en equips petits amb proves comparatives i registre de dades senzill."
      },
      {
        id: "td1-sa3-entorn-digital-segur",
        title: "SA3 · Organitzem un entorn digital segur",
        short: "Configuració d’un entorn digital d’aprenentatge amb organització, seguretat i ús responsable.",
        challenge: "Com podem organitzar els nostres arxius, comptes i dispositius per aprendre amb més seguretat i eficàcia?",
        product: "Guia personal d’organització digital amb estructura de carpetes, criteris de seguretat, còpies i bones pràctiques.",
        blocks: ["digitalitzacio", "comunicacio"],
        competencies: ["CE6", "CE4", "CE7"],
        criteria: ["6.1", "6.2", "6.3", "4.3", "7.2"],
        knowledge: ["Ús de dispositius digitals i resolució de problemes tècnics senzills.", "Eines i entorns virtuals d’aprenentatge.", "Emmagatzematge segur, còpies de seguretat i organització de la informació.", "Seguretat a la xarxa i benestar digital."],
        rubricItems: ["Organització de la informació digital", "Identificació de riscos i mesures de seguretat", "Configuració i ús responsable d’eines", "Comunicació de bones pràctiques"],
        teacher: "Situació transversal que pot fer-se a inici de curs per establir rutines digitals."
      },
      {
        id: "td1-sa4-algorisme-quotidia",
        title: "SA4 · Programem una rutina quotidiana",
        short: "Representació d’un procés quotidià amb algorismes, diagrames de flux i programació inicial.",
        challenge: "Com podem convertir una rutina quotidiana en un algorisme que una màquina pugui seguir?",
        product: "Diagrama de flux i programa senzill que resolgui una tasca o decisió quotidiana.",
        blocks: ["robotica", "digitalitzacio", "comunicacio"],
        competencies: ["CE5", "CE4", "CE6"],
        criteria: ["5.1", "5.2", "4.2", "6.2"],
        knowledge: ["Resolució de processos mitjançant algorísmica.", "Representació amb diagrames de flux.", "Implementació d’aplicacions senzilles.", "Depuració iterativa i identificació de l’error com a part de l’aprenentatge."],
        rubricItems: ["Descomposició del procés en passos", "Representació amb diagrama de flux", "Implementació o simulació del programa", "Depuració i explicació de millores"],
        teacher: "Es pot treballar amb pseudocodi, Scratch, MakeCode o entorns similars."
      }
    ]
  },
  eso2: {
    title: "2n ESO · Tecnologia i Digitalització",
    status: "actiu",
    curriculumKey: "tecnologiaDigitalitzacio",
    note: "Situacions inicials basades en el currículum de Tecnologia i Digitalització.",
    situations: [
      {
        id: "td2-sa1-circuit-util",
        title: "SA1 · Dissenyem un circuit útil",
        short: "Disseny, muntatge o simulació d’un circuit elèctric o electrònic senzill per resoldre una necessitat.",
        challenge: "Com podem dissenyar un circuit senzill que resolgui una necessitat concreta del centre o de casa?",
        product: "Circuit físic o simulat amb esquema, components, proves de funcionament i valoració de seguretat.",
        blocks: ["projectes", "operadors", "comunicacio"],
        competencies: ["CE2", "CE3", "CE4"],
        criteria: ["2.1", "2.2", "3.1", "3.2", "4.2"],
        knowledge: ["Muntatge d’esquemes i circuits elèctrics o electrònics físics o simulats.", "Interpretació, disseny i aplicació de circuits en projectes.", "Ús d’eines i normes de seguretat.", "Representació d’esquemes tècnics."],
        rubricItems: ["Disseny del circuit segons la necessitat", "Ús correcte de components i esquema", "Muntatge o simulació segura", "Prova, diagnosi i millora del funcionament"],
        teacher: "Situació adequada per treballar amb simuladors abans del muntatge físic."
      },
      {
        id: "td2-sa2-mecanisme-moviment",
        title: "SA2 · Fem moure un mecanisme",
        short: "Anàlisi i construcció d’un sistema mecànic bàsic que transformi o transmeti moviment.",
        challenge: "Com podem crear un mecanisme que transformi un moviment per aconseguir una funció concreta?",
        product: "Maqueta o simulació d’un mecanisme amb explicació de peces, moviment, proves i millores.",
        blocks: ["projectes", "operadors", "sostenibilitat"],
        competencies: ["CE1", "CE2", "CE3", "CE4"],
        criteria: ["1.2", "2.1", "2.2", "3.1", "3.2", "4.1"],
        knowledge: ["Anàlisi i disseny de sistemes mecànics bàsics.", "Muntatges físics o ús de simuladors.", "Manipulació de materials per construir prototips.", "Avaluació del resultat segons requeriments tècnics."],
        rubricItems: ["Comprensió de la funció del mecanisme", "Disseny i planificació del prototip", "Construcció o simulació del moviment", "Avaluació del resultat i proposta de millora"],
        teacher: "Pot connectar-se amb màquines simples, transmissió de moviment i aprofitament de materials reutilitzats."
      },
      {
        id: "td2-sa3-web-projecte",
        title: "SA3 · Difonem un projecte tecnològic",
        short: "Creació de documentació i comunicació digital d’un projecte amb criteris d’autoria, claredat i inclusió.",
        challenge: "Com podem explicar i difondre un projecte tecnològic perquè altres persones l’entenguin i el puguin millorar?",
        product: "Pàgina, presentació o document multimèdia amb memòria breu, imatges, esquemes i llicències adequades.",
        blocks: ["comunicacio", "digitalitzacio", "projectes"],
        competencies: ["CE4", "CE6", "CE2"],
        criteria: ["4.1", "4.3", "6.2", "6.3", "2.1"],
        knowledge: ["Elaboració, publicació i difusió de documentació tècnica.", "Ús de recursos digitals per comunicar i argumentar aprenentatges.", "Organització segura de la informació.", "Propietat intel·lectual, autoria i llicències."],
        rubricItems: ["Organització de la informació del projecte", "Ús de recursos digitals i multimèdia", "Respecte d’autoria, llicències i seguretat", "Claredat de la comunicació tècnica"],
        teacher: "Es pot aplicar a qualsevol projecte del curs com a activitat d’estructuració i difusió."
      },
      {
        id: "td2-sa4-eco-redisseny",
        title: "SA4 · Redissenyem per reduir residus",
        short: "Redisseny d’un producte o embalatge aplicant criteris d’ecodisseny i economia circular.",
        challenge: "Com podem redissenyar un producte o embalatge perquè generi menys residus i sigui més fàcil de reutilitzar o reparar?",
        product: "Proposta de redisseny amb comparació abans/després, materials, cicle de vida i justificació sostenible.",
        blocks: ["sostenibilitat", "projectes", "comunicacio"],
        competencies: ["CE1", "CE2", "CE4", "CE7"],
        criteria: ["1.1", "1.2", "2.1", "2.3", "4.1", "7.3"],
        knowledge: ["Característiques dels materials i impacte ambiental.", "Ecodisseny, economia circular i reducció de residus.", "Creativitat, innovació i impacte social i ambiental.", "Valoració crítica del desenvolupament sostenible."],
        rubricItems: ["Anàlisi del producte i dels residus", "Aplicació de criteris d’ecodisseny", "Justificació del cicle de vida i materials", "Comunicació de la proposta i impacte esperat"],
        teacher: "Situació molt útil per connectar tecnologia, consum responsable i hàbits del centre."
      }
    ]
  },
  eso3: {
    title: "3r ESO · Tecnologia i Digitalització",
    status: "actiu",
    curriculumKey: "tecnologiaDigitalitzacio",
    note: "Situacions inicials basades en el currículum de Tecnologia i Digitalització.",
    situations: [
      {
        id: "td3-sa1-robot-sensor",
        title: "SA1 · Robot o sistema amb sensors",
        short: "Disseny i programació d’un sistema que recull dades amb sensors i actua mitjançant actuadors.",
        challenge: "Com podem automatitzar una resposta a partir de dades recollides per un sensor?",
        product: "Sistema físic o simulat amb sensor, actuador, algorisme, proves, depuració i explicació del funcionament.",
        blocks: ["robotica", "operadors", "comunicacio"],
        competencies: ["CE5", "CE3", "CE4", "CE6"],
        criteria: ["5.1", "5.2", "5.3", "3.2", "4.1", "6.1"],
        knowledge: ["Disseny i implementació de sistemes de control programat.", "Muntatge físic o ús de simuladors i programació de dispositius.", "Internet de les coses.", "Depuració iterativa d’un programa."],
        rubricItems: ["Definició de l’automatització i variables", "Disseny de l’algorisme i diagrama", "Programació, sensors i actuadors", "Proves, depuració i explicació tècnica"],
        teacher: "Situació per integrar programació, electrònica, dades i comunicació del procés."
      },
      {
        id: "td3-sa2-app-necessitat",
        title: "SA2 · Creem una app per una necessitat propera",
        short: "Disseny d’una aplicació senzilla per donar resposta a una necessitat concreta d’un usuari o col·lectiu.",
        challenge: "Com podem crear una aplicació senzilla que ajudi a resoldre una necessitat real d’un grup d’usuaris?",
        product: "Prototip d’app o simulació amb pantalles, flux d’ús, algorisme, proves amb usuaris i millores.",
        blocks: ["robotica", "digitalitzacio", "comunicacio", "projectes"],
        competencies: ["CE1", "CE2", "CE4", "CE5", "CE6"],
        criteria: ["1.1", "2.1", "2.2", "4.1", "4.3", "5.1", "5.2", "6.2"],
        knowledge: ["Implementació d’aplicacions informàtiques senzilles.", "Algorismes, diagrames de flux i elements de programació.", "Eines digitals de creació de continguts.", "Documentació tècnica i difusió."],
        rubricItems: ["Anàlisi d’usuaris i necessitat", "Disseny del flux i pantalles", "Implementació funcional del prototip", "Proves, comunicació i millora"],
        teacher: "Es pot fer amb entorns de blocs, prototipat de pantalles o eines no-code."
      },
      {
        id: "td3-sa3-dades-segures",
        title: "SA3 · Dades segures i benestar digital",
        short: "Anàlisi de riscos digitals i disseny d’un pla de protecció de dades, dispositius i benestar.",
        challenge: "Com podem reduir riscos digitals i millorar el benestar quan fem servir dispositius i serveis en línia?",
        product: "Pla de seguretat i benestar digital amb diagnosi, mesures preventives, organització de dades i campanya de difusió.",
        blocks: ["digitalitzacio", "comunicacio", "sostenibilitat"],
        competencies: ["CE6", "CE4", "CE7"],
        criteria: ["6.1", "6.2", "6.3", "4.3", "7.2"],
        knowledge: ["Seguretat a la xarxa: riscos, amenaces i atacs.", "Protecció de dades i informació.", "Accions preventives per al benestar digital.", "Sistemes de comunicació digital d’ús comú."],
        rubricItems: ["Identificació de riscos digitals", "Proposta de mesures de protecció", "Organització i emmagatzematge segur", "Campanya de difusió clara i responsable"],
        teacher: "Situació especialment adequada per treballar hàbits digitals, privacitat i convivència."
      },
      {
        id: "td3-sa4-energia-sostenible",
        title: "SA4 · Energia i decisions sostenibles",
        short: "Anàlisi d’un consum energètic proper i proposta de millores amb criteris de sostenibilitat.",
        challenge: "Com podem reduir el consum energètic d’un espai o procés proper mantenint-ne la funcionalitat?",
        product: "Diagnosi energètica, proposta de millora, estimació d’impacte i comunicació argumentada.",
        blocks: ["sostenibilitat", "projectes", "comunicacio"],
        competencies: ["CE1", "CE2", "CE4", "CE7"],
        criteria: ["1.1", "2.1", "2.3", "4.1", "4.3", "7.1", "7.2"],
        knowledge: ["Energia com a factor clau del desenvolupament sostenible.", "Eficiència energètica, consum responsable i energies renovables.", "Aplicació de tecnologia sostenible.", "Valoració crítica de l’impacte tecnològic."],
        rubricItems: ["Diagnosi del consum o problema energètic", "Proposta de millora viable i sostenible", "Justificació de l’impacte i dels criteris tècnics", "Comunicació i argumentació de la decisió"],
        teacher: "Pot treballar-se amb dades reals del centre, simulades o estimades segons disponibilitat."
      }
    ]
  },
  eso4: {
    title: "4t ESO · Tecnologia",
    status: "actiu",
    curriculumKey: "tecnologia4",
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
        knowledge: ["Cerca i estudi de necessitats del centre educatiu.", "Tècniques d’ideació i gestió de projectes col·laboratius.", "Selecció de materials segons propietats, requisits i sostenibilitat.", "Documentació, presentació i difusió de projectes."],
        rubricItems: ["Anàlisi de la necessitat i definició del repte", "Ideació, planificació i gestió del projecte", "Proposta tècnica, materials i viabilitat", "Comunicació, justificació i millora"],
        teacher: "Situació inicial recomanada per introduir el procés tecnològic complet."
      },
      {
        id: "sa2-automatic",
        title: "SA2 · Sistema automàtic amb sensors",
        short: "Dissenyar o simular un automatisme que respongui a dades de l’entorn.",
        challenge: "Com podem fer que un sistema respongui automàticament a una condició de l’entorn?",
        product: "Esquema del sistema, sensors i actuadors, lògica de control, simulació o muntatge i proves.",
        blocks: ["operadors", "robotica"],
        competencies: ["CE4", "CE5", "CE2", "CE3"],
        criteria: ["4.1", "4.2", "5.1", "5.4", "2.2", "3.1"],
        knowledge: ["Components de sistemes de control programat: controladors, sensors i actuadors.", "Disseny, construcció i control de robots o sistemes senzills.", "Simuladors informàtics per verificar sistemes.", "Circuits electrònics bàsics físics o simulats."],
        rubricItems: ["Disseny del sistema de control", "Integració de sensors, actuadors o simulació", "Programació, proves i depuració", "Documentació i justificació del funcionament"],
        teacher: "Pot treballar-se amb micro:bit, Arduino, simuladors de circuits o entorns de blocs."
      },
      {
        id: "sa3-aula-eficient",
        title: "SA3 · Aula energèticament eficient",
        short: "Analitzar una aula i proposar millores d’eficiència energètica i confort.",
        challenge: "Com podem reduir el consum energètic d’una aula sense empitjorar-ne el confort?",
        product: "Diagnosi, dades observades, proposta de millores, impacte previst i conclusió argumentada.",
        blocks: ["sostenibilitat", "projectes"],
        competencies: ["CE1", "CE6", "CE3", "CE5"],
        criteria: ["1.1", "1.2", "3.1", "3.2", "5.1", "6.1", "6.2"],
        knowledge: ["Eficiència energètica, consum responsable i energies renovables.", "Estratègies d’estalvi energètic en edificis.", "Arquitectura bioclimàtica i sostenible.", "Anàlisi de dades i comunicació de resultats."],
        rubricItems: ["Diagnosi energètica i recollida de dades", "Proposta de millora sostenible", "Justificació tècnica i impacte previst", "Comunicació de conclusions i millores futures"],
        teacher: "Adequada per connectar Tecnologia amb ciències, matemàtiques i tutoria ecosocial."
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
        knowledge: ["Disseny assistit per ordinador en 2D i 3D.", "Fabricació digital, impressió 3D i tall.", "Cicle de vida del producte.", "Selecció de materials segons propietats i requisits."],
        rubricItems: ["Definició de la necessitat i requisits de la peça", "Disseny 3D o representació tècnica", "Criteris de fabricació i materials", "Avaluació, millora i comunicació del disseny"],
        teacher: "La peça no ha de ser complexa. L’objectiu és justificar decisions i iterar el disseny."
      },
      {
        id: "sa5-mobilitat",
        title: "SA5 · Mobilitat sostenible de l’entorn",
        short: "Analitzar opcions de mobilitat i proposar una millora sostenible i realista.",
        challenge: "Com podem millorar la mobilitat quotidiana del nostre entorn amb criteris de sostenibilitat?",
        product: "Anàlisi comparativa, proposta de millora, impacte social i ambiental, comunicació final.",
        blocks: ["sostenibilitat", "projectes"],
        competencies: ["CE6", "CE3", "CE1", "CE5"],
        criteria: ["6.2", "6.3", "3.1", "3.2", "1.1", "5.3"],
        knowledge: ["Mobilitat sostenible dels mitjans de transport públic o privat.", "Impacte ecosocial de les decisions tecnològiques.", "Comunicació i difusió de propostes.", "Projectes de servei a la comunitat."],
        rubricItems: ["Anàlisi de la mobilitat i del context", "Comparació d’alternatives sostenibles", "Proposta de millora i impacte social", "Difusió i argumentació de la proposta"],
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
        knowledge: ["Projectes col·laboratius i cooperatius.", "Automatització, sensors, actuadors o simulació si escau.", "Comunitats obertes d’aprenentatge i voluntariat tecnològic.", "Presentació i difusió del projecte."],
        rubricItems: ["Anàlisi de la necessitat comunitària", "Disseny i desenvolupament del prototip", "Impacte social, sostenibilitat i viabilitat", "Comunicació, proves i proposta de continuïtat"],
        teacher: "Situació de síntesi per final de seqüència. Pot funcionar com a projecte global de trimestre."
      }
    ]
  }
};

const SITUATION_RUBRICS = {};

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

const STORAGE_KEY_FONT = "tecnologia-eso-projectes-reptes-font-v19";
const DEFAULT_FONT = "Times New Roman, Times, serif";
const ALLOWED_FONTS = [
  DEFAULT_FONT,
  "Arial, Helvetica, sans-serif",
  "Georgia, serif",
  "Verdana, Geneva, sans-serif",
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
];

function readSavedFont() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_FONT);
    return ALLOWED_FONTS.includes(saved) ? saved : DEFAULT_FONT;
  } catch (err) {
    return DEFAULT_FONT;
  }
}

function applySelectedFont() {
  const font = ALLOWED_FONTS.includes(state.fontFamily) ? state.fontFamily : DEFAULT_FONT;
  document.documentElement.style.setProperty("--app-font", font);
  const select = document.getElementById("fontSelect");
  if (select) select.value = font;
}

function saveSelectedFont(font) {
  state.fontFamily = ALLOWED_FONTS.includes(font) ? font : DEFAULT_FONT;
  try {
    localStorage.setItem(STORAGE_KEY_FONT, state.fontFamily);
  } catch (err) {
    // Si el navegador no permet localStorage, s'aplica igualment durant la sessió.
  }
  applySelectedFont();
}

function getPrintFontCss() {
  return ALLOWED_FONTS.includes(state.fontFamily) ? state.fontFamily : DEFAULT_FONT;
}


function readSavedViewMode() {
  try {
    return localStorage.getItem("tecnologia-eso-view-mode-v19") || "student";
  } catch (err) {
    return "student";
  }
}

function saveViewMode(mode) {
  try {
    localStorage.setItem("tecnologia-eso-view-mode-v19", mode);
  } catch (err) {}
}

const state = {
  course: "eso4",
  situationId: "sa1-centre",
  view: "situacions",
  teacherMode: readSavedViewMode() === "teacher",
  includeRubricInReport: true,
  responses: {},
  decision: {},
  sustainability: {},
  fontFamily: readSavedFont()
};

const tabs = [
  ["situacions", "Situacions"],
  ["taller", "Taller"],
  ["eines", "Eines"],
  ["curricular", "Fitxa curricular"],
  ["rubrica", "Rúbrica"],
  ["informe", "Informe"],
  ["crea", "Crea SA"]
];

function currentCourse() {
  return COURSES[state.course];
}

function currentSituations() {
  const base = currentCourse().situations || [];
  const custom = customSituations[state.course] || [];
  return [...base, ...custom];
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

const STORAGE_KEY_SITUATIONS = "tecnologia-eso-projectes-reptes-custom-situations-v19";
const STORAGE_KEY_RUBRICS = "tecnologia-eso-projectes-reptes-custom-rubrics-v19";
const LEGACY_STORAGE_KEYS = {
  situations: ["tecnologia-eso-projectes-reptes-custom-situations-v16", "tecnologia-eso-projectes-reptes-custom-situations-v15", "tecnologia-eso-projectes-reptes-custom-situations-v12"],
  rubrics: ["tecnologia-eso-projectes-reptes-custom-rubrics-v16", "tecnologia-eso-projectes-reptes-custom-rubrics-v15", "tecnologia-eso-projectes-reptes-custom-rubrics-v12"]
};

function loadJsonFromStorage(key, fallback, legacyKeys = []) {
  try {
    const current = localStorage.getItem(key);
    if (current) return JSON.parse(current) || fallback;
    for (const legacyKey of legacyKeys) {
      const legacy = localStorage.getItem(legacyKey);
      if (legacy) {
        const parsed = JSON.parse(legacy) || fallback;
        localStorage.setItem(key, JSON.stringify(parsed));
        return parsed;
      }
    }
    return fallback;
  } catch (err) {
    return fallback;
  }
}

let customSituations = loadJsonFromStorage(STORAGE_KEY_SITUATIONS, {}, LEGACY_STORAGE_KEYS.situations);
let customRubrics = loadJsonFromStorage(STORAGE_KEY_RUBRICS, {}, LEGACY_STORAGE_KEYS.rubrics);

function saveCustomData() {
  localStorage.setItem(STORAGE_KEY_SITUATIONS, JSON.stringify(customSituations));
  localStorage.setItem(STORAGE_KEY_RUBRICS, JSON.stringify(customRubrics));
}

function getCurriculumSetForSituation(s) {
  const course = currentCourse();
  const key = (s && s.curriculumKey) || course.curriculumKey || "tecnologiaDigitalitzacio";
  return CURRICULUM_SETS[key] || CURRICULUM_SETS.tecnologiaDigitalitzacio;
}

function getRubricRows(s) {
  if (!s) return [];
  if (SITUATION_RUBRICS[s.id]) return SITUATION_RUBRICS[s.id];
  if (customRubrics[s.id]) return customRubrics[s.id].map(row => normalizeRubricRow(row, (s.criteria || []).join(", ")));
  const items = s.rubricItems && s.rubricItems.length ? s.rubricItems : [
    "Comprensió del repte i del context",
    "Disseny i desenvolupament de la proposta",
    "Aplicació de sabers i criteris tècnics",
    "Comunicació, justificació i millora"
  ];
  return items.map(item => createGenericRubric(item, (s.criteria || []).join(", ")));
}

function getCompetencyText(code) {
  const set = getCurriculumSetForSituation(currentSituation());
  return set.competencies[code] || "Competència concretada pel docent per a aquesta situació.";
}

function getCriteriaText(code) {
  const set = getCurriculumSetForSituation(currentSituation());
  return set.criteria[code] || "Criteri concretat pel docent per a aquesta situació.";
}

function getKnowledgeBlockText(code) {
  return KNOWLEDGE_BLOCKS[code] || code;
}

function splitList(value) {
  return String(value || "")
    .split(/[\n,]/)
    .map(item => item.trim())
    .filter(Boolean);
}

function makeSlug(value) {
  return String(value || "sa")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "sa";
}

function showCreatorFeedback(message) {
  const box = document.getElementById("creatorFeedback");
  if (!box) return;
  box.textContent = message;
  box.classList.remove("hidden");
}

function init() {
  applySelectedFont();
  const hashView = window.location.hash.replace("#", "");
  if (tabs.some(([id]) => id === hashView)) state.view = hashView;
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
  }).join("");
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
  select.innerHTML = situations.map(s => `<option value="${s.id}">${safeHtml(s.title)}</option>`).join("");
  if (!situations.some(s => s.id === state.situationId)) state.situationId = situations[0].id;
  select.value = state.situationId;
}

function renderTabs() {
  const el = document.getElementById("tabs");
  const teacherTabs = tabs;
  const studentTabs = tabs.filter(([id]) => ["situacions", "taller", "eines", "rubrica", "informe"].includes(id));
  const visibleTabs = state.teacherMode ? teacherTabs : studentTabs;

  if (!state.teacherMode && !visibleTabs.some(([id]) => id === state.view)) {
    state.view = "situacions";
  }

  el.innerHTML = visibleTabs.map(([id, label]) => {
    const extraClass = ["curricular", "creador"].includes(id) ? "teacher-only" : "";
    return `<button class="${state.view === id ? "active" : ""} ${extraClass}" data-tab="${id}" type="button">${label}</button>`;
  }).join("");
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
  renderCreator();
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
      <div class="tagrow">${s.competencies.map(c => `<span class="tag">${c}</span>`).join("")}</div>
    </div>
  `).join("");

  const s = currentSituation();
  title.textContent = s.title;
  desc.innerHTML = `<strong>Repte:</strong> ${safeHtml(s.challenge)}<br><br><strong>Producte final:</strong> ${safeHtml(s.product)}`;
  tags.innerHTML = [
    ...s.blocks.map(b => `<span class="tag">${safeHtml(getKnowledgeBlockText(b))}</span>`),
    ...s.competencies.map(c => `<span class="tag warn">${c}</span>`)
  ].join("");
  teacherBox.innerHTML = `
    <strong>Orientació docent:</strong> ${safeHtml(s.teacher)}
    <div class="teacher-extra-grid">
      <div class="teacher-extra-card">
        <h4>Competències específiques</h4>
        <p>${s.competencies.map(c => `<strong>${c}</strong> · ${safeHtml(getCompetencyText(c))}`).join("<br>")}</p>
      </div>
      <div class="teacher-extra-card">
        <h4>Criteris d’avaluació</h4>
        <p>${s.criteria.map(c => `<strong>${c}</strong> · ${safeHtml(getCriteriaText(c))}`).join("<br>")}</p>
      </div>
      <div class="teacher-extra-card">
        <h4>Sabers</h4>
        <p>${s.knowledge.map(k => `• ${safeHtml(k)}`).join("<br>")}</p>
      </div>
      <div class="teacher-extra-card">
        <h4>Evidències</h4>
        <p>${Array.isArray(s.evidence) && s.evidence.length ? s.evidence.map(e => `• ${safeHtml(e)}`).join("<br>") : "Evidències integrades en el producte final i la rúbrica."}</p>
      </div>
    </div>
  `;
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
  `).join("");
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
      <input data-decision-name="${opt}" value="${safeHtml((state.decision[opt] && state.decision[opt].name) || "")}" placeholder="Nom o descripció breu de la solució" />
      <div class="two-cols" style="margin-top:10px;">
        ${criteria.map(c => `
          <div>
            <label class="tiny">${c} · 1-4</label>
            <input type="number" min="1" max="4" data-decision-score="${opt}|${c}" value="${safeHtml((state.decision[opt] && state.decision[opt].scores && state.decision[opt].scores[c]) || "")}" />
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
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
  `).join("");
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
      ${s.competencies.map(c => `<div><strong>${c}</strong> · ${safeHtml(getCompetencyText(c))}</div>`).join("")}
    </div>
    <h3 style="margin-top:14px;">Criteris d'avaluació</h3>
    <div class="curriculum-list">
      ${s.criteria.map(c => `<div><strong>${c}</strong> · ${safeHtml(getCriteriaText(c))}</div>`).join("")}
    </div>
  `;

  knowledge.innerHTML = `
    <h3>Blocs</h3>
    <div class="tagrow">${s.blocks.map(b => `<span class="tag">${safeHtml(getKnowledgeBlockText(b))}</span>`).join("")}</div>
    <h3 style="margin-top:14px;">Sabers seleccionats</h3>
    <div class="curriculum-list">
      ${s.knowledge.map(k => `<div>${safeHtml(k)}</div>`).join("")}
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

  const rows = getRubricRows(s);
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
        `).join("")}
      </tbody>
    </table>
  `;

  const check = document.getElementById("includeRubricCheck");
  if (check) check.checked = state.includeRubricInReport;
}

function buildRubricMarkdown(s) {
  const rows = getRubricRows(s);
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
  if (!s) {
    target.innerHTML = "";
    return;
  }
  const rows = getRubricRows(s);
  target.innerHTML = `
    <h3>Rúbrica de la situació d'aprenentatge</h3>
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
        `).join("")}
      </tbody>
    </table>
  `;
}


function getCoursePlainTitle() {
  const title = currentCourse().title || "";
  return title.split(" · ")[0] || title;
}

function getSubjectPlainTitle() {
  const title = currentCourse().title || "";
  return title.includes(" · ") ? title.split(" · ").slice(1).join(" · ") : "Tecnologia";
}

function getTransversalCompetencies(s) {
  if (s && Array.isArray(s.transversal) && s.transversal.length) return s.transversal;
  return [
    "Competència digital: ús d’eines digitals de cerca, disseny, simulació, documentació o comunicació.",
    "Competència personal, social i d’aprendre a aprendre: planificació, revisió del procés, perseverança i millora a partir de proves.",
    "Competència ciutadana: anàlisi de necessitats reals de l’entorn i valoració de l’impacte social i ambiental.",
    "Competència emprenedora: ideació, presa de decisions, gestió de recursos i proposta de solucions viables."
  ];
}

function getLearningObjectives(s) {
  if (s && Array.isArray(s.objectives) && s.objectives.length) return s.objectives;
  return [
    `Analitzar una necessitat o repte tecnològic proper per definir requisits d’una solució viable i contextualitzada.`,
    `Dissenyar, construir o simular una proposta tecnològica aplicant sabers de la matèria amb criteris de funcionalitat, sostenibilitat i seguretat.`,
    `Justificar i comunicar el procés i el resultat del projecte amb vocabulari tècnic, evidències i propostes de millora.`
  ];
}

function getSituationAssessmentCriteria(s) {
  const rows = getRubricRows(s);
  return rows.map(row => `${row.item}: evidenciar ${row.item.toLowerCase()} en el desenvolupament de la situació, segons els criteris ${row.criteria}.`);
}

function getDevelopmentSummary(s) {
  if (s && Array.isArray(s.development) && s.development.length) return s.development;
  if (s && typeof s.development === "string" && s.development.trim()) return s.development.split("\n").map(v => v.trim()).filter(Boolean);
  return [
    "Plantejament del repte i activació de coneixements previs a partir d’una necessitat contextualitzada.",
    "Ideació i planificació de possibles solucions, amb definició de requisits i criteris de decisió.",
    "Disseny, construcció o simulació de la proposta, incorporant materials, eines, components o recursos digitals adequats.",
    "Prova, revisió i millora de la solució a partir d’evidències del funcionament i de l’impacte previst.",
    "Comunicació final del procés, de les decisions preses i de les conclusions tècniques."
  ];
}

function getLearningActivities(s) {
  if (s && s.activities && typeof s.activities === "object") {
    return [
      { title: "Activitats inicials", text: s.activities.initial || "Activitats inicials pendents de concretar." },
      { title: "Activitats de desenvolupament", text: s.activities.development || "Activitats de desenvolupament pendents de concretar." },
      { title: "Activitats d’estructuració", text: s.activities.structuring || "Activitats d’estructuració pendents de concretar." },
      { title: "Activitats d’aplicació", text: s.activities.application || "Activitats d’aplicació pendents de concretar." }
    ];
  }
  return [
    { title: "Activitats inicials", text: "Observació del context, detecció de necessitats, conversa inicial sobre què se sap i formulació del repte." },
    { title: "Activitats de desenvolupament", text: "Cerca d’informació, anàlisi de requisits, ideació, selecció de materials o eines i disseny de la solució." },
    { title: "Activitats d’estructuració", text: "Organització del procés, justificació de decisions, revisió dels criteris d’avaluació i preparació d’evidències." },
    { title: "Activitats d’aplicació", text: "Construcció o simulació, proves, millores, valoració de l’impacte i comunicació del producte final." }
  ];
}

function getVectors(s) {
  if (s && Array.isArray(s.vectors) && s.vectors.length) return s.vectors;
  return [
    "Aprenentatges competencials: el repte demana aplicar sabers en una situació propera i funcional.",
    "Perspectiva de gènere: s’utilitza llenguatge inclusiu i es promou la participació equilibrada en rols tècnics i comunicatius.",
    "Universalitat del currículum: es preveuen diferents formes de participació, representació i expressió del procés.",
    "Qualitat de l’educació de les llengües: l’alumnat argumenta, documenta i comunica decisions tècniques de manera clara.",
    "Ciutadania democràtica i consciència global: es valora l’impacte social i ambiental de les decisions tecnològiques.",
    "Benestar emocional: es fomenta el treball cooperatiu, la revisió constructiva i la millora progressiva."
  ];
}

function getEvidenceList(s) {
  if (s && Array.isArray(s.evidence) && s.evidence.length) return s.evidence;
  return [
    "Producte o prototip final.",
    "Documentació del procés de treball.",
    "Evidències de proves, revisió i millores.",
    "Rúbrica de la situació d’aprenentatge."
  ];
}

function getMaterialsList(s) {
  if (s && Array.isArray(s.materials) && s.materials.length) return s.materials;
  return [];
}

function buildReportPlainText(s) {
  if (!s) return "Informe pendent: aquest curs encara no té situacions carregades.";

  const stepText = PROJECT_STEPS.map(step => {
    const value = state.responses[step.key] || "[pendent de completar]";
    return `${step.title}\n${value}`;
  }).join("\n\n");

  const activities = getLearningActivities(s).map(item => `${item.title}: ${item.text}`).join("\n");

  return `PROGRAMACIÓ DE LA SITUACIÓ D’APRENENTATGE

Títol
${s.title}

Curs
${getCoursePlainTitle()}

Matèria
${getSubjectPlainTitle()}

Descripció, context i repte
${s.short}
${s.challenge}

Producte final
${s.product}

Materials i recursos
${getMaterialsList(s).length ? getMaterialsList(s).map(item => "- " + item).join("\n") : "- Materials i recursos concretats pel docent segons el context."}

Competències específiques
${s.competencies.map(c => `${c}: ${getCompetencyText(c)}`).join("\n")}

Tractament de les competències transversals
${getTransversalCompetencies(s).map(item => "- " + item).join("\n")}

Objectius d’aprenentatge
${getLearningObjectives(s).map(item => "- " + item).join("\n")}

Criteris d’avaluació de la situació d’aprenentatge
${getSituationAssessmentCriteria(s).map(item => "- " + item).join("\n")}

Criteris curriculars vinculats
${s.criteria.map(c => `${c}: ${getCriteriaText(c)}`).join("\n")}

Sabers
${s.knowledge.map(k => "- " + k).join("\n")}

Desenvolupament de la situació d’aprenentatge
${getDevelopmentSummary(s).map(item => "- " + item).join("\n")}

Activitats d’aprenentatge i d’avaluació
${activities}

Breu descripció de com s’aborden els vectors
${getVectors(s).map(item => "- " + item).join("\n")}

Evidències d’avaluació
${getEvidenceList(s).map(item => "- " + item).join("\n")}

Evidències del procés de l’alumnat
${stepText}

Matriu de decisió
${summarizeDecision()}

Anàlisi de sostenibilitat
${summarizeSustainability()}

Rúbrica de la situació d’aprenentatge
${buildRubricMarkdown(s)}`;
}

function paragraphText(value) {
  const text = value || "[pendent de completar]";
  return safeHtml(text).replace(/\n/g, "<br>");
}

function renderReportList(items) {
  return `<ul>${items.map(item => `<li>${safeHtml(item)}</li>`).join("")}</ul>`;
}

function renderReport() {
  const s = currentSituation();
  const report = document.getElementById("report");
  if (!s) {
    report.innerHTML = `<p class="placeholder">Informe pendent: aquest curs encara no té situacions carregades.</p>`;
    renderReportRubricTable(null);
    return;
  }

  const stepCards = PROJECT_STEPS.map((step, index) => `
    <article class="report-step">
      <div class="report-step-number">${index + 1}</div>
      <div>
        <h4>${safeHtml(step.title)}</h4>
        <p>${paragraphText(state.responses[step.key])}</p>
      </div>
    </article>
  `).join("");

  const activities = getLearningActivities(s).map(item => `
    <article class="report-section">
      <h3>${safeHtml(item.title)}</h3>
      <p>${safeHtml(item.text)}</p>
    </article>
  `).join("");

  report.innerHTML = `
    <section class="report-cover">
      <div>
        <p class="eyebrow">Programació de la situació d’aprenentatge</p>
        <h2>${safeHtml(s.title)}</h2>
        <p>${safeHtml(s.challenge)}</p>
      </div>
    </section>

    <section class="report-meta-grid two-items">
      <div><strong>Curs</strong><span>${safeHtml(getCoursePlainTitle())}</span></div>
      <div><strong>Matèria</strong><span>${safeHtml(getSubjectPlainTitle())}</span></div>
    </section>

    <section class="report-section highlight">
      <h3>Descripció, context i repte</h3>
      <p>${safeHtml(s.short)} ${safeHtml(s.challenge)}</p>
    </section>

    <section class="report-section highlight">
      <h3>Producte final</h3>
      <p>${safeHtml(s.product)}</p>
    </section>

    <section class="report-grid-2">
      <article class="report-section">
        <h3>Materials i recursos</h3>
        ${renderReportList(getMaterialsList(s).length ? getMaterialsList(s) : ["Materials i recursos concretats pel docent segons el context."])}
      </article>
      <article class="report-section">
        <h3>Evidències d’avaluació</h3>
        ${renderReportList(getEvidenceList(s))}
      </article>
    </section>

    <section class="report-grid-2">
      <article class="report-section">
        <h3>Competències específiques</h3>
        ${renderReportList(s.competencies.map(c => `${c}: ${getCompetencyText(c)}`))}
      </article>
      <article class="report-section">
        <h3>Tractament de les competències transversals</h3>
        ${renderReportList(getTransversalCompetencies(s))}
      </article>
    </section>

    <section class="report-grid-2">
      <article class="report-section">
        <h3>Objectius d’aprenentatge</h3>
        ${renderReportList(getLearningObjectives(s))}
      </article>
      <article class="report-section">
        <h3>Criteris d’avaluació de la situació</h3>
        ${renderReportList(getSituationAssessmentCriteria(s))}
      </article>
    </section>

    <section class="report-grid-2">
      <article class="report-section">
        <h3>Criteris curriculars vinculats</h3>
        <div class="report-tags amber">${s.criteria.map(c => `<span>${safeHtml(c)}</span>`).join("")}</div>
      </article>
      <article class="report-section">
        <h3>Sabers</h3>
        ${renderReportList(s.knowledge)}
      </article>
    </section>

    <section class="report-section">
      <h3>Desenvolupament de la situació d’aprenentatge</h3>
      ${renderReportList(getDevelopmentSummary(s))}
    </section>

    <section class="report-grid-2">
      ${activities}
    </section>

    <section class="report-section">
      <h3>Breu descripció de com s’aborden els vectors</h3>
      ${renderReportList(getVectors(s))}
    </section>

    <section class="report-section">
      <h3>Evidències del procés de l’alumnat</h3>
      <div class="report-steps">${stepCards}</div>
    </section>

    <section class="report-grid-2">
      <article class="report-section">
        <h3>Matriu de decisió</h3>
        <p>${paragraphText(summarizeDecision())}</p>
      </article>
      <article class="report-section">
        <h3>Anàlisi de sostenibilitat</h3>
        <p>${paragraphText(summarizeSustainability())}</p>
      </article>
    </section>
  `;

  renderReportRubricTable(s);
}

function renderCreator() {
  const currentCourseInput = document.getElementById("newTitle");
  if (!currentCourseInput) return;
}

function createGenericRubric(item, criteriaText) {
  return {
    item,
    criteria: criteriaText || "Criteris seleccionats de la situació",
    levels: {
      NA: `L’alumne/a mostra evidències molt parcials de ${item.toLowerCase()} i necessita molta guia per avançar.`,
      AS: `L’alumne/a resol de manera bàsica ${item.toLowerCase()} amb alguna justificació o evidència suficient.`,
      AN: `L’alumne/a desenvolupa correctament ${item.toLowerCase()} amb coherència, justificació i revisió del procés.`,
      AE: `L’alumne/a integra ${item.toLowerCase()} amb autonomia, criteri tècnic, transferència i argumentació aprofundida.`
    }
  };
}



function normalizeRubricRow(row, criteriaText) {
  if (!row) return createGenericRubric("Ítem d’avaluació", criteriaText);
  const item = row.item || row.criteri || row.criteriaName || "Ítem d’avaluació";
  if (row.levels) {
    return {
      item,
      criteria: row.criteria || criteriaText || "Criteris seleccionats de la situació",
      levels: {
        NA: row.levels.NA || row.NA || "Pendent de concretar.",
        AS: row.levels.AS || row.AS || "Pendent de concretar.",
        AN: row.levels.AN || row.AN || "Pendent de concretar.",
        AE: row.levels.AE || row.AE || "Pendent de concretar."
      }
    };
  }
  return {
    item,
    criteria: row.criteria || criteriaText || "Criteris seleccionats de la situació",
    levels: {
      NA: row.NA || "Pendent de concretar.",
      AS: row.AS || "Pendent de concretar.",
      AN: row.AN || "Pendent de concretar.",
      AE: row.AE || "Pendent de concretar."
    }
  };
}

function normalizeCourseKey(value) {
  const v = String(value || state.course || "eso4").toLowerCase().trim();
  if (v.includes("1") || v === "eso1") return "eso1";
  if (v.includes("2") || v === "eso2") return "eso2";
  if (v.includes("3") || v === "eso3") return "eso3";
  if (v.includes("4") || v === "eso4") return "eso4";
  return state.course || "eso4";
}

function normalizeImportedSituation(raw, index = 0) {
  raw = raw || {};
  const clean = value => {
    if (Array.isArray(value)) return value.filter(Boolean).join(" · ").trim();
    if (value && typeof value === "object") return Object.values(value).filter(Boolean).join(" · ").trim();
    return String(value || "").trim();
  };

  const courseKey = normalizeCourseKey(raw.course || raw.curs || state.course);
  const rawTitle = clean(raw.title || raw.titol || raw["títol"] || raw.name || raw.nom);
  const title = rawTitle && rawTitle !== "[" && rawTitle !== "]" ? rawTitle : `SA importada ${index + 1}`;

  const criteria = Array.isArray(raw.criteria) ? raw.criteria : splitList(raw.criteria || raw.criteris || raw.ca || "");
  const competencies = Array.isArray(raw.competencies) ? raw.competencies : splitList(raw.competencies || raw.competencies_especifiques || raw["competències"] || raw.ce || "");
  const knowledge = Array.isArray(raw.knowledge) ? raw.knowledge : splitList(raw.knowledge || raw.sabers || "");
  const objectives = Array.isArray(raw.objectives) ? raw.objectives : splitList(raw.objectives || raw.objectius || "");
  const blocks = Array.isArray(raw.blocks) ? raw.blocks : (splitList(raw.blocks || raw.blocs || "").length ? splitList(raw.blocks || raw.blocs || "") : ["projectes"]);

  const idBase = clean(raw.id) || `custom-${Date.now()}-${index}-${makeSlug(title)}`;
  const id = String(idBase).startsWith("custom-") ? String(idBase) : `custom-${idBase}`;

  const activities = raw.activities || raw.activitats || {};
  const rubric = Array.isArray(raw.rubric) ? raw.rubric : (Array.isArray(raw.rubrica) ? raw.rubrica : (Array.isArray(raw["rúbrica"]) ? raw["rúbrica"] : []));

  return {
    id,
    title,
    short: clean(raw.short || raw.description || raw.descripcio || raw["descripció"]) || clean(raw.challenge || raw.repte) || "Situació importada.",
    challenge: clean(raw.challenge || raw.repte || raw.pregunta) || clean(raw.short) || "Repte pendent de revisar.",
    product: clean(raw.product || raw.producte || raw.producteFinal || raw["producte final"]) || "Producte final pendent de revisar.",
    course: courseKey,
    subject: clean(raw.subject || raw.materia || raw["matèria"]) || (courseKey === "eso4" ? "Tecnologia" : "Tecnologia i Digitalització"),
    blocks,
    competencies: competencies.length ? competencies : ["CE1", "CE2", "CE3"],
    criteria,
    knowledge: knowledge.length ? knowledge : ["Sabers concretats pel docent segons el context de la situació."],
    objectives,
    transversal: Array.isArray(raw.transversal) ? raw.transversal : splitList(raw.transversal || ""),
    development: raw.development || raw.desenvolupament || "",
    activities: {
      initial: activities.initial || activities.inicials || activities["activitats inicials"] || "",
      development: activities.development || activities.desenvolupament || activities["activitats de desenvolupament"] || "",
      structuring: activities.structuring || activities.estructuracio || activities["estructuració"] || "",
      application: activities.application || activities.aplicacio || activities["aplicació"] || ""
    },
    vectors: raw.vectors || "",
    evidence: raw.evidence || raw.evidencies || raw["evidències"] || [],
    materials: raw.materials || raw.materials_i_eines || [],
    curriculumKey: raw.curriculumKey || COURSES[courseKey]?.curriculumKey || (courseKey === "eso4" ? "tecnologia4" : "tecnologiaDigitalitzacio"),
    teacher: raw.teacher || "Situació importada. Revisa-la abans d’utilitzar-la a l’aula.",
    custom: true,
    rubric
  };
}

function extractSituationsFromImportData(data) {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.situations)) return data.situations;
  if (data && data.situations && typeof data.situations === "object") return Object.values(data.situations).flat();
  if (data && data.title) return [data];
  return [];
}

function importSituationObjects(data) {
  const rawSituations = extractSituationsFromImportData(data);
  if (!rawSituations.length) throw new Error("El JSON no conté cap situació d’aprenentatge reconeixible.");

  let firstImported = null;

  rawSituations.forEach((raw, index) => {
    const situation = normalizeImportedSituation(raw, index);
    const courseKey = situation.course || state.course || "eso4";

    if (!customSituations[courseKey]) customSituations[courseKey] = [];

    const existingIndex = customSituations[courseKey].findIndex(item => item.id === situation.id);
    if (existingIndex >= 0) customSituations[courseKey][existingIndex] = situation;
    else customSituations[courseKey].push(situation);

    const importedRubric = raw.rubric || raw.rubrica || raw["rúbrica"] || situation.rubric || data.rubrics?.[raw.id] || data.rubrics?.[situation.id];
    if (Array.isArray(importedRubric) && importedRubric.length) {
      customRubrics[situation.id] = importedRubric.map(row => normalizeRubricRow(row, (situation.criteria || []).join(", ")));
    }

    if (!firstImported) firstImported = situation;
  });

  saveCustomData();

  if (firstImported) {
    state.course = firstImported.course || state.course;
    state.situationId = firstImported.id;
  }

  renderCourseSelect();
  renderSituationSelect();
  renderAll();

  return rawSituations.length;
}

function clearCreatorForm() {
  ["newTitle", "newShort", "newChallenge", "newProduct", "newCompetencies", "newCriteria", "newKnowledge", "newObjectives", "newDevelopment", "newInitialActivities", "newDevelopmentActivities", "newStructuringActivities", "newApplicationActivities", "newVectors", "newRubricItems"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}

function saveCreatedSituation() {
  const title = document.getElementById("newTitle").value.trim();
  const short = document.getElementById("newShort").value.trim();
  const challenge = document.getElementById("newChallenge").value.trim();
  const product = document.getElementById("newProduct").value.trim();
  const competencies = splitList(document.getElementById("newCompetencies").value);
  const criteria = splitList(document.getElementById("newCriteria").value);
  const knowledge = String(document.getElementById("newKnowledge").value || "").split("\n").map(v => v.trim()).filter(Boolean);
  const objectives = String(document.getElementById("newObjectives")?.value || "").split("\n").map(v => v.trim()).filter(Boolean);
  const development = String(document.getElementById("newDevelopment")?.value || "").split("\n").map(v => v.trim()).filter(Boolean);
  const vectors = String(document.getElementById("newVectors")?.value || "").split("\n").map(v => v.trim()).filter(Boolean);
  const activities = {
    initial: document.getElementById("newInitialActivities")?.value.trim() || "",
    development: document.getElementById("newDevelopmentActivities")?.value.trim() || "",
    structuring: document.getElementById("newStructuringActivities")?.value.trim() || "",
    application: document.getElementById("newApplicationActivities")?.value.trim() || ""
  };
  let rubricItems = String(document.getElementById("newRubricItems").value || "").split("\n").map(v => v.trim()).filter(Boolean);

  if (!title || !challenge || !product) {
    showCreatorFeedback("Cal completar com a mínim el títol, el repte i el producte final.");
    return;
  }
  if (rubricItems.length < 4) {
    rubricItems = [
      "Comprensió del repte i del context",
      "Disseny i desenvolupament de la proposta",
      "Aplicació de sabers i criteris tècnics",
      "Comunicació, justificació i millora"
    ];
  }

  const id = `custom-${Date.now()}-${makeSlug(title)}`;
  const situation = {
    id,
    title,
    short: short || challenge,
    challenge,
    product,
    blocks: ["projectes"],
    competencies: competencies.length ? competencies : ["CE1", "CE2", "CE3"],
    criteria: criteria.length ? criteria : [],
    knowledge: knowledge.length ? knowledge : ["Sabers concretats pel docent segons el context de la situació."],
    objectives,
    development,
    activities,
    vectors,
    curriculumKey: currentCourse().curriculumKey,
    teacher: "Situació creada des del formulari intern. Es pot revisar i adaptar abans d’utilitzar-la a l’aula.",
    custom: true
  };

  if (!customSituations[state.course]) customSituations[state.course] = [];
  customSituations[state.course].push(situation);
  customRubrics[id] = rubricItems.map(item => createGenericRubric(item, criteria.join(", ")));
  saveCustomData();

  state.situationId = id;
  showCreatorFeedback("SA desada. Ja apareix al selector de situacions del curs actual.");
  clearCreatorForm();
  renderSituationSelect();
  renderAll();
}

function exportCreatedSituations() {
  const data = {
    app: "Tecnologia ESO · Projectes i reptes",
    exportedAt: new Date().toISOString(),
    situations: customSituations,
    rubrics: customRubrics
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "situacions-tecnologia-eso.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importCreatedSituations(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const count = importSituationObjects(data);
      showCreatorFeedback(`${count} SA importada/des. Ja apareixen al selector del curs corresponent.`);
    } catch (err) {
      showCreatorFeedback(err.message || "No s’ha pogut importar el fitxer JSON.");
    }
  };
  reader.readAsText(file);
}


function showDocumentImportFeedback(message) {
  const box = document.getElementById("documentImportFeedback");
  if (!box) return;
  box.textContent = message;
  box.classList.remove("hidden");
}

function setCreatorField(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.value = value;
}

function normalizeImportedText(text) {
  return String(text || "")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseDocxXml(xmlText) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, "application/xml");
  const paragraphs = Array.from(xml.getElementsByTagName("w:p"));
  return paragraphs.map(p => {
    return Array.from(p.getElementsByTagName("w:t")).map(t => t.textContent).join("");
  }).filter(Boolean).join("\n");
}

function decodePdfString(value) {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\n")
    .replace(/\\t/g, " ")
    .replace(/\\\(/g, "(")
    .replace(/\\\)/g, ")")
    .replace(/\\\\/g, "\\");
}

function extractTextFromPdfBuffer(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  const chunks = [];
  const re = /\((?:\\.|[^\\)])*\)/g;
  let match;
  while ((match = re.exec(binary)) !== null) {
    const raw = match[0].slice(1, -1);
    const decoded = decodePdfString(raw);
    if (decoded.replace(/\s/g, "").length > 2) chunks.push(decoded);
  }
  return chunks.join(" ").replace(/\s+/g, " ").trim();
}

async function readDocumentFile(file) {
  const name = (file.name || "").toLowerCase();
  if (name.endsWith(".json")) {
    const text = await file.text();
    try {
      const data = JSON.parse(text);
      if (data.situations) return JSON.stringify(data, null, 2);
      return text;
    } catch (err) {
      return text;
    }
  }
  if (name.endsWith(".txt") || name.endsWith(".md")) return file.text();
  if (name.endsWith(".docx")) {
    if (!window.JSZip) throw new Error("No s’ha carregat el lector DOCX.");
    const zip = await window.JSZip.loadAsync(file);
    const doc = zip.file("word/document.xml");
    if (!doc) throw new Error("El DOCX no conté word/document.xml.");
    return parseDocxXml(await doc.async("text"));
  }
  if (name.endsWith(".pdf")) {
    const text = extractTextFromPdfBuffer(await file.arrayBuffer());
    if (!text) throw new Error("No s’ha pogut extreure text del PDF. Pot ser escanejat o tenir el text codificat.");
    return text;
  }
  return file.text();
}

function extractSection(text, labels, stopLabels) {
  const lines = normalizeImportedText(text).split("\n");
  const norm = v => v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[:：]/g, "").trim();
  const labelSet = labels.map(norm);
  const stopSet = stopLabels.map(norm);
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    const n = norm(lines[i]);
    if (labelSet.some(l => n === l || n.startsWith(l + " "))) {
      start = i;
      const remainder = lines[i].replace(/^.*?[:：]\s*/, "").trim();
      const collected = remainder ? [remainder] : [];
      for (let j = i + 1; j < lines.length; j++) {
        const nj = norm(lines[j]);
        if (stopSet.some(st => nj === st || nj.startsWith(st + " "))) break;
        collected.push(lines[j]);
      }
      return collected.join("\n").trim();
    }
  }
  return "";
}

function detectCourseFromText(text) {
  const t = text.toLowerCase();
  if (/\b1r\s*eso\b|primer\s+d[’']?eso/.test(t)) return "eso1";
  if (/\b2n\s*eso\b|segon\s+d[’']?eso/.test(t)) return "eso2";
  if (/\b3r\s*eso\b|tercer\s+d[’']?eso/.test(t)) return "eso3";
  if (/\b4t\s*eso\b|quart\s+d[’']?eso/.test(t)) return "eso4";
  return state.course;
}

function detectCodes(text, pattern) {
  return Array.from(new Set((text.match(pattern) || []).map(v => v.toUpperCase().replace(/\s+/g, ""))));
}

function fillCreatorFromText(text) {
  const clean = normalizeImportedText(text);
  if (!clean) {
    showDocumentImportFeedback("No hi ha text per convertir.");
    return;
  }

  if (clean.trim().startsWith("{") || clean.trim().startsWith("[")) {
    try {
      const data = JSON.parse(clean);
      const first = Array.isArray(data) ? data[0] : (data.situations ? Object.values(data.situations).flat()[0] : data);
      if (first && first.title) {
        setCreatorField("newTitle", first.title);
        setCreatorField("newShort", first.short || first.description || "");
        setCreatorField("newChallenge", first.challenge || first.reptee || "");
        setCreatorField("newProduct", first.product || first.producte || "");
        setCreatorField("newCompetencies", (first.competencies || []).join(", "));
        setCreatorField("newCriteria", (first.criteria || []).join(", "));
        setCreatorField("newKnowledge", (first.knowledge || first.sabers || []).join("\n"));
        setCreatorField("newObjectives", (first.objectives || []).join("\n"));
        setCreatorField("newDevelopment", Array.isArray(first.development) ? first.development.join("\n") : (first.development || ""));
        if (first.activities) {
          setCreatorField("newInitialActivities", first.activities.initial || "");
          setCreatorField("newDevelopmentActivities", first.activities.development || "");
          setCreatorField("newStructuringActivities", first.activities.structuring || "");
          setCreatorField("newApplicationActivities", first.activities.application || "");
        }
        setCreatorField("newVectors", (first.vectors || []).join("\n"));
        const rubrics = first.rubricItems || (first.rubric || []).map(r => r.item).filter(Boolean);
        setCreatorField("newRubricItems", (rubrics || []).join("\n"));
        showDocumentImportFeedback("JSON convertit a esborrany. Revisa els camps abans de desar.");
        return;
      }
    } catch (err) {
      // continue with text parsing
    }
  }

  const headings = [
    "Títol", "Curs", "Àrea / Matèria", "Matèria", "Descripció", "Descripció, context i repte", "Producte final",
    "Competències específiques", "Criteris d’avaluació", "Sabers", "Objectius d’aprenentatge",
    "Desenvolupament", "Activitats inicials", "Activitats de desenvolupament", "Activitats d’estructuració", "Activitats d’aplicació",
    "Vectors", "Rúbrica", "Ítems de rúbrica"
  ];
  const title = extractSection(clean, ["Títol", "Titol"], headings.filter(h => !/^T[ií]tol$/.test(h))).split("\n")[0] || clean.split("\n").find(Boolean) || "SA importada";
  const description = extractSection(clean, ["Descripció, context i repte", "Descripció", "Descripcio", "Context i repte"], headings);
  const product = extractSection(clean, ["Producte final", "Producte"], headings);
  const objectives = extractSection(clean, ["Objectius d’aprenentatge", "Objectius d'aprenentatge", "Objectius"], headings);
  const sabers = extractSection(clean, ["Sabers"], headings);
  const development = extractSection(clean, ["Desenvolupament", "Desenvolupament de la situació d’aprenentatge"], headings);
  const initial = extractSection(clean, ["Activitats inicials"], headings);
  const devActs = extractSection(clean, ["Activitats de desenvolupament"], headings);
  const struct = extractSection(clean, ["Activitats d’estructuració", "Activitats d'estructuració"], headings);
  const application = extractSection(clean, ["Activitats d’aplicació", "Activitats d'aplicació"], headings);
  const vectors = extractSection(clean, ["Vectors", "Breu descripció de com s’aborden els vectors"], headings);
  const rubricText = extractSection(clean, ["Rúbrica", "Rubrica", "Ítems de rúbrica", "Items de rubrica"], headings);
  const course = detectCourseFromText(clean);
  if (course !== state.course) {
    state.course = course;
    renderCourseSelect();
    renderSituationSelect();
  }
  const competencies = detectCodes(clean, /\bCE\s*[1-7]\b/gi);
  const criteria = detectCodes(clean, /\b[1-7]\.[1-4]\b/g);

  setCreatorField("newTitle", title.replace(/^SA\s*[:\-·]?\s*/i, "SA · "));
  setCreatorField("newShort", description.split("\n").slice(0, 2).join(" "));
  setCreatorField("newChallenge", description || "Repte pendent de concretar a partir del document importat.");
  setCreatorField("newProduct", product || "Producte final pendent de concretar a partir del document importat.");
  setCreatorField("newCompetencies", competencies.join(", "));
  setCreatorField("newCriteria", criteria.join(", "));
  setCreatorField("newKnowledge", sabers);
  setCreatorField("newObjectives", objectives);
  setCreatorField("newDevelopment", development);
  setCreatorField("newInitialActivities", initial);
  setCreatorField("newDevelopmentActivities", devActs);
  setCreatorField("newStructuringActivities", struct);
  setCreatorField("newApplicationActivities", application);
  setCreatorField("newVectors", vectors);
  setCreatorField("newRubricItems", rubricText || "Comprensió del repte i del context\nDisseny i desenvolupament de la proposta\nAplicació de sabers i criteris tècnics\nComunicació, justificació i millora");
  showDocumentImportFeedback("Document convertit a esborrany. Revisa els camps abans de desar. Els codis CE i CA s’han detectat i es completaran amb el text curricular corresponent quan es generi la fitxa i l’informe.");
}

async function importDocumentAsDraft(file) {
  if (!file) return;
  const name = (file.name || "").toLowerCase();

  if (name.endsWith(".json")) {
    try {
      const text = await file.text();
      const count = importSituationObjects(JSON.parse(text));
      showDocumentImportFeedback(`${count} SA importada/des i afegida/des directament al llistat del curs corresponent.`);
    } catch (err) {
      showDocumentImportFeedback(err.message || "No s’ha pogut importar el JSON.");
    }
    return;
  }

  try {
    const text = await readDocumentFile(file);
    const preview = document.getElementById("importPreview");
    if (preview) preview.value = text;
    showDocumentImportFeedback("Text extret. Revisa’l i prem “Converteix text a esborrany”.");
  } catch (err) {
    showDocumentImportFeedback(err.message || "No s’ha pogut llegir el document.");
  }
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
  if (toggle) {
    toggle.textContent = state.teacherMode ? "Vista docent" : "Vista alumne";
    toggle.title = state.teacherMode
      ? "Canvia a vista alumne"
      : "Canvia a vista docent";
  }

  document.body.classList.toggle("teacher-view", state.teacherMode);
  document.body.classList.toggle("student-view", !state.teacherMode);

  document.querySelectorAll(".teacher-box").forEach(box => box.classList.toggle("hidden", !state.teacherMode));

  const tabsEl = document.getElementById("tabs");
  if (tabsEl && !document.getElementById("modeNotice")) {
    const notice = document.createElement("div");
    notice.id = "modeNotice";
    notice.className = "mode-notice";
    tabsEl.insertAdjacentElement("afterend", notice);
  }

  const notice = document.getElementById("modeNotice");
  if (notice) {
    notice.innerHTML = state.teacherMode
      ? `<span class="view-mode-chip">Vista docent</span> <strong>Gestió i programació.</strong> Es mostren la fitxa curricular, sabers, criteris, creació/importació, edició i orientacions docents.`
      : `<span class="view-mode-chip">Vista alumne</span> <strong>Treball i consulta.</strong> Es mostren el repte, el taller, les eines, la rúbrica i l’informe. S’oculten les opcions de creació, edició i gestió curricular.`;
  }

  const editBtn = document.getElementById("editCurrentSABtn");
  if (editBtn) editBtn.classList.toggle("teacher-only", true);

  saveViewMode(state.teacherMode ? "teacher" : "student");
}


function openPrintDocument(title, bodyHtml, kind) {
  const win = window.open("", "_blank", "width=1200,height=900");
  if (!win) {
    alert("No s'ha pogut obrir la finestra d'impressió. Revisa si el navegador bloqueja finestres emergents i torna-ho a provar.");
    return;
  }

  const safeTitle = safeHtml(title || "Situació d'aprenentatge");
  const pageClass = kind === "rubric" ? "print-rubric-document" : "print-report-document";
  const html = `<!doctype html>
<html lang="ca">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${safeTitle}</title>
  <link rel="stylesheet" href="./styles.css?v=19">
  <style>
    html, body { background: #ffffff !important; font-family: ${getPrintFontCss()} !important; }
    body { margin: 0; color: #172016; }
    .report-paper, .report-paper * { font-family: ${getPrintFontCss()} !important; }
    .print-document-shell {
      width: min(1180px, calc(100% - 28px));
      margin: 0 auto;
      padding: 18px 0 28px;
    }
    .print-document-shell .report-host {
      border: 0 !important;
      box-shadow: none !important;
      padding: 0 !important;
      background: transparent !important;
    }
    .print-document-shell .report-paper {
      margin: 0 !important;
    }
    @page { size: A4 portrait; margin: 10mm; }
    @media print {
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      html, body { background: #ffffff !important; }
      .print-document-shell {
        width: 100% !important;
        padding: 0 !important;
      }
      .report-section, .report-cover, .report-meta-grid > div, .rubric-table {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body class="${pageClass}">
  <main class="print-document-shell">
    <article class="card span-12 report-host">
      ${bodyHtml}
    </article>
  </main>
  <script>
    function doPrint() {
      setTimeout(function () {
        window.focus();
        window.print();
      }, 450);
    }
    if (document.readyState === "complete") doPrint();
    else window.addEventListener("load", doPrint);
    window.addEventListener("afterprint", function () {
      setTimeout(function () { window.close(); }, 250);
    });
  <\/script>
</body>
</html>`;

  win.document.open();
  win.document.write(html);
  win.document.close();
}

function printCurrentReport() {
  state.view = "informe";
  renderAll();
  const report = document.getElementById("report");
  const rubric = document.getElementById("reportRubricTable");
  const s = currentSituation();
  const bodyHtml = `
    <div id="report" class="report">${report ? report.innerHTML : ""}</div>
    <div id="reportRubricTable" class="report-rubric-table">${rubric ? rubric.innerHTML : ""}</div>
  `;
  openPrintDocument(s ? s.title : "Situació d'aprenentatge", bodyHtml, "report");
}

function printCurrentRubric() {
  const s = currentSituation();
  renderRubric();
  const rubricCard = document.getElementById("rubricCard");
  const bodyHtml = `
    <div class="report-rubric-table">
      <h3>Rúbrica de la situació d'aprenentatge</h3>
      ${rubricCard ? rubricCard.innerHTML : ""}
    </div>
  `;
  openPrintDocument(s ? `Rúbrica - ${s.title}` : "Rúbrica", bodyHtml, "rubric");
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

  document.getElementById("tabs").addEventListener("click", e => {
    const tabButton = e.target.closest("button");
    const tab = tabButton ? tabButton.dataset.tab : null;
    if (!tab) return;
    state.view = tab;
    history.replaceState(null, "", `#${tab}`);
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
      if (!state.decision[decisionName]) state.decision[decisionName] = { name: "", scores: {} };
      state.decision[decisionName].name = e.target.value;
    }

    const decisionScore = e.target.dataset.decisionScore;
    if (decisionScore) {
      const [opt, criterion] = decisionScore.split("|");
      if (!state.decision[opt]) state.decision[opt] = { name: "", scores: {} };
      state.decision[opt].scores[criterion] = e.target.value;
    }

    renderReport();
  });

  const includeRubricCheck = document.getElementById("includeRubricCheck");
  if (includeRubricCheck) {
    includeRubricCheck.addEventListener("change", e => {
      state.includeRubricInReport = e.target.checked;
      renderReport();
    });
  }

  const fontSelect = document.getElementById("fontSelect");
  if (fontSelect) {
    fontSelect.value = state.fontFamily;
    fontSelect.addEventListener("change", e => {
      saveSelectedFont(e.target.value);
    });
  }

  document.getElementById("teacherToggle").addEventListener("click", () => {
    state.teacherMode = !state.teacherMode;
    if (!state.teacherMode && ["curricular", "creador"].includes(state.view)) {
      state.view = "situacions";
      history.replaceState(null, "", "#situacions");
    }
    renderAll();
  });

  document.getElementById("copyReportBtn").addEventListener("click", async () => {
    renderReport();
    const text = buildReportPlainText(currentSituation());
    try {
      await navigator.clipboard.writeText(text);
      alert("Informe copiat al porta-retalls.");
    } catch (err) {
      alert("No s'ha pogut copiar automàticament. Selecciona el text de l'informe manualment.");
    }
  });

  const saveSituationBtn = document.getElementById("saveSituationBtn");
  if (saveSituationBtn) saveSituationBtn.addEventListener("click", saveCreatedSituation);

  const clearCreatorBtn = document.getElementById("clearCreatorBtn");
  if (clearCreatorBtn) clearCreatorBtn.addEventListener("click", () => {
    clearCreatorForm();
    showCreatorFeedback("Formulari netejat.");
  });

  const exportSituationsBtn = document.getElementById("exportSituationsBtn");
  if (exportSituationsBtn) exportSituationsBtn.addEventListener("click", exportCreatedSituations);

  const importInput = document.getElementById("importSituationsInput");
  if (importInput) importInput.addEventListener("change", e => importCreatedSituations(e.target.files[0]));

  const importDocumentInput = document.getElementById("importDocumentInput");
  if (importDocumentInput) importDocumentInput.addEventListener("change", e => importDocumentAsDraft(e.target.files[0]));

  const convertDocumentBtn = document.getElementById("convertDocumentBtn");
  if (convertDocumentBtn) convertDocumentBtn.addEventListener("click", () => fillCreatorFromText(document.getElementById("importPreview")?.value || ""));

  document.getElementById("printRubricBtn").addEventListener("click", printCurrentRubric);

  document.getElementById("printBtn").addEventListener("click", printCurrentReport);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      console.info("Service Worker pendent d'afegir o no disponible en aquest entorn.");
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}



/* v19 · Normalització i edició de situacions importades */
function v19CleanText(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join(" · ").trim();
  if (value && typeof value === "object") return Object.values(value).filter(Boolean).join(" · ").trim();
  return String(value || "").trim();
}

function v19NormalizeImportedSA(raw) {
  const sa = Object.assign({}, raw || {});
  const title = v19CleanText(sa.title || sa.titol || sa["títol"] || sa.name || sa.nom);
  const challenge = v19CleanText(sa.challenge || sa.repte || sa.descripcio || sa["descripció"] || sa.short);
  const product = v19CleanText(sa.product || sa.producte || sa["producte final"]);
  sa.id = v19CleanText(sa.id) || ("sa-importada-" + Date.now());
  sa.title = title || "SA importada pendent de títol";
  sa.short = v19CleanText(sa.short) || challenge || "Situació d’aprenentatge importada.";
  sa.challenge = challenge || "Repte pendent de concretar.";
  sa.product = product || "Producte final pendent de concretar.";
  sa.course = v19CleanText(sa.course || sa.curs) || "eso4";
  sa.subject = v19CleanText(sa.subject || sa.materia || sa["matèria"]) || (sa.course === "eso4" ? "Tecnologia" : "Tecnologia i Digitalització");
  sa.competencies = Array.isArray(sa.competencies) ? sa.competencies : v19CleanText(sa.competencies || sa.ce).split(/[,; ]+/).filter(Boolean);
  sa.criteria = Array.isArray(sa.criteria) ? sa.criteria : v19CleanText(sa.criteria || sa.ca).split(/[,;]+/).map(s => s.trim()).filter(Boolean);
  sa.blocks = Array.isArray(sa.blocks) ? sa.blocks : v19CleanText(sa.blocks).split(/[,;]+/).map(s => s.trim()).filter(Boolean);
  sa.knowledge = Array.isArray(sa.knowledge) ? sa.knowledge : v19CleanText(sa.knowledge || sa.sabers).split(/\n|;/).map(s => s.trim()).filter(Boolean);
  sa.objectives = Array.isArray(sa.objectives) ? sa.objectives : v19CleanText(sa.objectives || sa.objectius).split(/\n|;/).map(s => s.trim()).filter(Boolean);
  sa.transversal = Array.isArray(sa.transversal) ? sa.transversal : v19CleanText(sa.transversal).split(/\n|;/).map(s => s.trim()).filter(Boolean);
  if (!sa.activities || typeof sa.activities !== "object") {
    sa.activities = {
      initial: "",
      development: "",
      structuring: "",
      application: ""
    };
  }
  if (!Array.isArray(sa.rubric)) sa.rubric = [];
  return sa;
}

function v19GetCustomSAs() {
  try {
    return JSON.parse(localStorage.getItem("customSituations") || localStorage.getItem("customSAs") || "[]");
  } catch (e) {
    return [];
  }
}

function v19SaveCustomSAs(list) {
  localStorage.setItem("customSituations", JSON.stringify(list));
  localStorage.setItem("customSAs", JSON.stringify(list));
}

function v19UpsertCustomSA(sa) {
  const normalized = v19NormalizeImportedSA(sa);
  const list = v19GetCustomSAs();
  const idx = list.findIndex(item => item.id === normalized.id);
  if (idx >= 0) list[idx] = normalized;
  else list.push(normalized);
  v19SaveCustomSAs(list);
  return normalized;
}

function v19OpenEditCurrentSA() {
  const s = (typeof currentSituation === "function") ? currentSituation() : null;
  if (!s) {
    alert("No hi ha cap situació seleccionada per editar.");
    return;
  }
  const title = prompt("Títol de la situació d’aprenentatge:", v19CleanText(s.title));
  if (title === null) return;
  const challenge = prompt("Repte o pregunta guia:", v19CleanText(s.challenge || s.short));
  if (challenge === null) return;
  const product = prompt("Producte final:", v19CleanText(s.product));
  if (product === null) return;

  const updated = Object.assign({}, s, {
    title: v19CleanText(title) || "SA importada pendent de títol",
    challenge: v19CleanText(challenge) || "Repte pendent de concretar.",
    short: v19CleanText(challenge) || s.short || "Situació d’aprenentatge importada.",
    product: v19CleanText(product) || "Producte final pendent de concretar."
  });

  v19UpsertCustomSA(updated);

  if (typeof loadCustomSituations === "function") loadCustomSituations();
  if (typeof renderSituationSelect === "function") renderSituationSelect();
  if (typeof renderAll === "function") renderAll();

  alert("SA actualitzada i desada al llistat.");
}

function v19InstallEditButton() {
  if (document.getElementById("editCurrentSABtn")) return;
  const tabs = document.getElementById("tabs") || document.querySelector(".tabs");
  const target = tabs || document.querySelector("main") || document.body;
  const btn = document.createElement("button");
  btn.id = "editCurrentSABtn";
  btn.classList.add("teacher-only");
  btn.type = "button";
  btn.textContent = "Edita SA";
  btn.addEventListener("click", v19OpenEditCurrentSA);
  target.appendChild(btn);
}
document.addEventListener("DOMContentLoaded", () => setTimeout(v19InstallEditButton, 600));



/* v19 · Correcció visual de títols buits o mal importats */
function v19FixBrokenDisplayedTitles() {
  document.querySelectorAll("h1,h2,h3,option,.situation-item,strong").forEach(el => {
    const txt = (el.textContent || "").trim();
    if (txt === "[" || txt === "[]" || txt === "undefined" || txt === "null") {
      el.textContent = "SA importada pendent de títol";
    }
  });
}
document.addEventListener("DOMContentLoaded", () => setInterval(v19FixBrokenDisplayedTitles, 1000));



/* v19 · Gestió real de SA importades i edició */
function v19CleanTitle(value) {
  const text = String(value || "").trim();
  return (!text || text === "[" || text === "]" || text === "undefined" || text === "null") ? "SA importada pendent de títol" : text;
}

function v19MigrateLooseCustomStores() {
  const keys = ["customSituations", "customSAs"];
  let changed = false;

  keys.forEach(key => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      const list = Array.isArray(parsed) ? parsed : Object.values(parsed).flat();

      list.forEach((item, index) => {
        if (!item || typeof item !== "object") return;
        const situation = normalizeImportedSituation(item, index);
        const courseKey = situation.course || "eso4";
        if (!customSituations[courseKey]) customSituations[courseKey] = [];
        const exists = customSituations[courseKey].some(existing => existing.id === situation.id);
        if (!exists) {
          customSituations[courseKey].push(situation);
          changed = true;
        }
        if (Array.isArray(item.rubric) && item.rubric.length && !customRubrics[situation.id]) {
          customRubrics[situation.id] = item.rubric.map(row => normalizeRubricRow(row, (situation.criteria || []).join(", ")));
          changed = true;
        }
      });
    } catch (err) {
      console.warn("No s'ha pogut migrar", key, err);
    }
  });

  Object.keys(customSituations).forEach(courseKey => {
    customSituations[courseKey] = (customSituations[courseKey] || []).map((s, index) => {
      const normalized = normalizeImportedSituation(s, index);
      normalized.title = v19CleanTitle(normalized.title);
      return normalized;
    });
  });

  if (changed) saveCustomData();
}

function currentSituations() {
  v19MigrateLooseCustomStores();
  const base = (currentCourse() && currentCourse().situations) || [];
  const custom = customSituations[state.course] || [];
  return [...base, ...custom];
}

function v19FindSituationEverywhere(id) {
  if (!id) return null;
  for (const courseKey of Object.keys(COURSES)) {
    const base = COURSES[courseKey].situations || [];
    const foundBase = base.find(s => s.id === id);
    if (foundBase) return { situation: foundBase, courseKey, isCustom: false };

    const custom = customSituations[courseKey] || [];
    const foundCustom = custom.find(s => s.id === id);
    if (foundCustom) return { situation: foundCustom, courseKey, isCustom: true };
  }
  return null;
}

function v16OpenEditCurrentSA() {
  v19MigrateLooseCustomStores();

  const found = v19FindSituationEverywhere(state.situationId);
  const s = found ? found.situation : currentSituation();

  if (!s) {
    alert("No hi ha cap situació seleccionada per editar.");
    return;
  }

  const title = prompt("Títol de la situació d’aprenentatge:", v19CleanTitle(s.title));
  if (title === null) return;

  const challenge = prompt("Repte o pregunta guia:", String(s.challenge || s.short || "").trim());
  if (challenge === null) return;

  const product = prompt("Producte final:", String(s.product || "").trim());
  if (product === null) return;

  const courseKey = (found && found.courseKey) || state.course || s.course || "eso4";
  const updated = normalizeImportedSituation(Object.assign({}, s, {
    title: v19CleanTitle(title),
    challenge: String(challenge || "").trim() || "Repte pendent de concretar.",
    short: String(challenge || "").trim() || s.short || "Situació d’aprenentatge importada.",
    product: String(product || "").trim() || "Producte final pendent de concretar.",
    course: courseKey
  }));

  if (!customSituations[courseKey]) customSituations[courseKey] = [];
  const idx = customSituations[courseKey].findIndex(item => item.id === updated.id);

  if (idx >= 0) {
    customSituations[courseKey][idx] = updated;
  } else if (found && found.isCustom) {
    customSituations[courseKey].push(updated);
  } else {
    const copy = Object.assign({}, updated, {
      id: `custom-edit-${Date.now()}-${makeSlug(updated.title)}`,
      custom: true
    });
    customSituations[courseKey].push(copy);
    state.situationId = copy.id;
  }

  saveCustomData();
  state.course = courseKey;
  renderCourseSelect();
  renderSituationSelect();
  renderAll();
  alert("SA actualitzada i desada al llistat.");
}

function v19RefreshAfterLoad() {
  v19MigrateLooseCustomStores();
  renderCourseSelect();
  renderSituationSelect();
  renderAll();
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(v19RefreshAfterLoad, 700);
});


/* v19 · Situacions afegides a partir de propostes docents */
const V18_ADDITIONAL_SITUATIONS = {
  "eso3": [
    {
      "id": "sa3-eso3-estructura-pont-tren",
      "title": "SA · Construïm una estructura resistent?",
      "short": "Disseny i construcció d’una estructura amb tubs de paper capaç de salvar un desnivell i suportar una càrrega.",
      "challenge": "Com podem dissenyar i construir una estructura lleugera, sostenible i prou resistent perquè un tren de maqueta pugui salvar un desnivell?",
      "product": "Pont o estructura construïda amb tubs de paper reciclat, assaig de resistència, explicació dels esforços i presentació del disseny.",
      "course": "eso3",
      "subject": "Tecnologia i Digitalització",
      "competencies": [
        "CE1",
        "CE3",
        "CE4",
        "CE7"
      ],
      "criteria": [
        "1.1",
        "1.2",
        "3.1",
        "3.2",
        "4.1",
        "4.3",
        "7.1"
      ],
      "blocks": [
        "projectes",
        "comunicacio",
        "sostenibilitat"
      ],
      "knowledge": [
        "Cerca crítica d’informació per definir problemes tecnològics.",
        "Anàlisi i disseny d’estructures per a la construcció de models.",
        "Forces i esforços: tracció, compressió, flexió, torsió i cisallament.",
        "Manipulació de materials i construcció de prototips amb normes de seguretat.",
        "Vocabulari tècnic per explicar el comportament d’una estructura.",
        "Impacte ambiental dels materials de construcció."
      ],
      "objectives": [
        "Identificar forces i esforços en estructures.",
        "Analitzar i comparar dissenys estructurals amb proves o simulacions.",
        "Construir una estructura amb materials reciclats aplicant criteris de resistència i seguretat.",
        "Avaluar el resultat amb una prova de càrrega i proposar millores."
      ],
      "transversal": [
        "Competència digital: cerca crítica i simuladors.",
        "CPSAA: treball cooperatiu i autoavaluació.",
        "Competència ciutadana: seguretat i impacte ambiental."
      ],
      "development": "La situació parteix del repte de salvar un desnivell en una maqueta de tren. L’alumnat estudia esforços, fa proves amb models senzills, dissenya una estructura triangulada i la valida amb una prova de càrrega.",
      "activities": {
        "initial": "Debat sobre col·lapses d’estructures i coneixements previs sobre esforços.",
        "development": "Treball sobre elements estructurals, forces, esforços i impacte dels materials.",
        "structuring": "Simulació o proves amb models per comprovar la resistència de formes triangulades.",
        "application": "Disseny, construcció i prova de l’estructura final amb tubs de paper."
      },
      "vectors": "Treball competencial amb construcció real, materials reciclats, seguretat i comunicació tècnica.",
      "evidence": [
        "Esbós i croquis",
        "Estructura construïda",
        "Prova de càrrega",
        "Explicació dels esforços",
        "Presentació o vídeo"
      ],
      "materials": [
        "Paper reciclat",
        "Cola",
        "Regle",
        "Cúter o tisores",
        "Pesos de prova"
      ],
      "rubric": [
        {
          "item": "Anàlisi d’esforços",
          "NA": "No identifica esforços.",
          "AS": "Identifica alguns esforços amb ajuda.",
          "AN": "Relaciona esforços i parts de l’estructura.",
          "AE": "Explica amb precisió com els esforços condicionen el disseny."
        },
        {
          "item": "Disseny estructural",
          "NA": "Disseny poc estable.",
          "AS": "Disseny parcialment adequat.",
          "AN": "Disseny coherent i justificat.",
          "AE": "Disseny eficient, triangulat i optimitzat."
        },
        {
          "item": "Construcció",
          "NA": "Construcció fràgil o insegura.",
          "AS": "Construcció bàsica amb ajuda.",
          "AN": "Estructura funcional i segura.",
          "AE": "Estructura sòlida, precisa i neta."
        },
        {
          "item": "Avaluació",
          "NA": "No comprova el resultat.",
          "AS": "Fa una prova simple.",
          "AN": "Valida i proposa millores.",
          "AE": "Interpreta errors i millora amb criteri tècnic."
        }
      ]
    },
    {
      "id": "sa3-eso3-biciprojecte",
      "title": "SA · BiciProjecte: autogestionem una bicicleta",
      "short": "Desmuntatge, diagnosi, reparació i muntatge d’una bicicleta reutilitzant peces i reflexionant sobre mobilitat sostenible.",
      "challenge": "Com podem recuperar una bicicleta en desús i convertir-la en un mitjà de transport segur, funcional i sostenible?",
      "product": "Bicicleta reparada o posada a punt, pla de treball, memòria tècnica i presentació del projecte.",
      "course": "eso3",
      "subject": "Tecnologia i Digitalització",
      "competencies": [
        "CE1",
        "CE2",
        "CE3",
        "CE4",
        "CE7"
      ],
      "criteria": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "2.3",
        "3.1",
        "3.2",
        "4.1",
        "4.3",
        "7.1",
        "7.3"
      ],
      "blocks": [
        "projectes",
        "comunicacio",
        "sostenibilitat"
      ],
      "knowledge": [
        "Procés tecnològic aplicat a una reparació real.",
        "Sistemes mecànics bàsics: transmissió, engranatges, frens i rodes.",
        "Organització de materials, eines i tasques.",
        "Documentació tècnica del procés.",
        "Economia circular, reutilització i mobilitat sostenible."
      ],
      "objectives": [
        "Analitzar components i mecanismes d’una bicicleta.",
        "Planificar una reparació o posada a punt.",
        "Aplicar procediments de muntatge i comprovació amb seguretat.",
        "Valorar la bicicleta com a mobilitat saludable i sostenible."
      ],
      "transversal": [
        "Competència ciutadana",
        "Competència emprenedora",
        "CPSAA",
        "Competència digital"
      ],
      "development": "L’alumnat diagnostica l’estat d’una bicicleta, identifica components, planifica tasques i executa reparacions o ajustos. El projecte inclou mobilitat sostenible, consum responsable i reutilització.",
      "activities": {
        "initial": "Discussió sobre bicicleta, patinets, mobilitat i sostenibilitat.",
        "development": "Aprenentatge sobre transmissió, frens, rodes i manteniment.",
        "structuring": "Diagnosi, pla de treball, eines, tasques i seguretat.",
        "application": "Desmuntatge, reparació, muntatge, comprovació i presentació."
      },
      "vectors": "Promou salut, mobilitat sostenible, igualtat d’oportunitats, reutilització i autonomia tecnològica.",
      "evidence": [
        "Diagnosi inicial",
        "Pla de treball",
        "Memòria tècnica",
        "Bicicleta reparada",
        "Presentació final"
      ],
      "materials": [
        "Bicicletes en desús",
        "Eines de mecànica",
        "Peces reutilitzades",
        "Equips de protecció"
      ],
      "rubric": [
        {
          "item": "Diagnosi tècnica",
          "NA": "No identifica components.",
          "AS": "Identifica components bàsics.",
          "AN": "Fa una diagnosi coherent.",
          "AE": "Fa una diagnosi precisa i prioritzada."
        },
        {
          "item": "Planificació",
          "NA": "No organitza tasques.",
          "AS": "Organitza algunes tasques.",
          "AN": "Planifica i coopera bé.",
          "AE": "Gestiona el projecte amb autonomia."
        },
        {
          "item": "Reparació",
          "NA": "No és funcional.",
          "AS": "Fa ajustos simples.",
          "AN": "Valida el funcionament.",
          "AE": "Reparació segura, neta i justificada."
        },
        {
          "item": "Sostenibilitat",
          "NA": "No relaciona el projecte amb sostenibilitat.",
          "AS": "Fa referències generals.",
          "AN": "Argumenta reutilització i mobilitat.",
          "AE": "Connecta cicle de vida, residus, salut i desigualtats."
        }
      ]
    },
    {
      "id": "sa3-eso3-kit-travessa-autosuficient",
      "title": "SA · Kit per a una travessa autosuficient",
      "short": "Disseny d’un objecte o kit lleuger, funcional i sostenible per a una travessa a peu.",
      "challenge": "Com podem dissenyar i prototipar un element útil, lleuger i sostenible per a una travessa de diversos dies?",
      "product": "Prototip d’un element del kit de travessa, memòria tècnica, justificació de materials i presentació oral.",
      "course": "eso3",
      "subject": "Tecnologia i Digitalització",
      "competencies": [
        "CE1",
        "CE2",
        "CE3",
        "CE4",
        "CE7"
      ],
      "criteria": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "2.3",
        "3.1",
        "4.1",
        "4.2",
        "7.1",
        "7.2"
      ],
      "blocks": [
        "projectes",
        "comunicacio",
        "sostenibilitat"
      ],
      "knowledge": [
        "Procés tecnològic i design thinking.",
        "Anàlisi i comparació de materials.",
        "Cicle de vida i sostenibilitat.",
        "Croquis, plànols i metrologia bàsica.",
        "Prototipatge manual o digital."
      ],
      "objectives": [
        "Analitzar necessitats d’una travessa.",
        "Comparar materials segons pes, resistència i sostenibilitat.",
        "Dissenyar i prototipar una solució funcional.",
        "Comunicar la proposta amb memòria i presentació."
      ],
      "transversal": [
        "Pensament crític",
        "Treball cooperatiu",
        "Competència digital",
        "Competència emprenedora"
      ],
      "development": "Adaptació a 3r d’ESO d’un repte de disseny per a una travessa autosuficient. L’alumnat defineix necessitats, investiga materials, dissenya i prototipa un element del kit.",
      "activities": {
        "initial": "Pluja d’idees del kit de travessa.",
        "development": "Recerca sobre materials, cicle de vida i fabricació.",
        "structuring": "Elecció del producte, croquis, requisits i pla de construcció.",
        "application": "Construcció o prototipatge i presentació."
      },
      "vectors": "Afavoreix sostenibilitat, consum responsable, cooperació i comunicació tècnica.",
      "evidence": [
        "Requisits",
        "Croquis o model 3D",
        "Prototip",
        "Memòria tècnica",
        "Presentació"
      ],
      "materials": [
        "Materials reutilitzats o lleugers",
        "Eines manuals",
        "Opcional impressora 3D",
        "Aplicacions 2D/3D"
      ],
      "rubric": [
        {
          "item": "Anàlisi de necessitats",
          "NA": "No defineix requisits.",
          "AS": "Defineix requisits bàsics.",
          "AN": "Relaciona necessitats i requisits.",
          "AE": "Formula requisits complets i justificats."
        },
        {
          "item": "Materials",
          "NA": "No justifica materials.",
          "AS": "Tria materials bàsics.",
          "AN": "Compara propietats i sostenibilitat.",
          "AE": "Selecciona amb criteris tècnics i ambientals."
        },
        {
          "item": "Prototip",
          "NA": "Incomplet o no funcional.",
          "AS": "Resol parcialment el repte.",
          "AN": "Funcional i coherent.",
          "AE": "Optimitzat, provat i millorat."
        },
        {
          "item": "Comunicació",
          "NA": "Confusa.",
          "AS": "Poc precisa.",
          "AN": "Ordenada i tècnica.",
          "AE": "Rigorosa, visual i justificada."
        }
      ]
    },
    {
      "id": "sa3-eso3-semafor-acustic",
      "title": "SA · STOP al xivarri: fem un semàfor acústic",
      "short": "Disseny i programació d’un semàfor acústic amb sensor de so i leds.",
      "challenge": "Com podem construir un dispositiu que indiqui visualment quan el nivell de soroll de l’aula és massa alt?",
      "product": "Prototip de semàfor acústic amb sensor de so, leds de colors, programa de control, proves i pòster informatiu.",
      "course": "eso3",
      "subject": "Tecnologia i Digitalització",
      "competencies": [
        "CE1",
        "CE2",
        "CE4",
        "CE5",
        "CE6",
        "CE7"
      ],
      "criteria": [
        "1.1",
        "2.1",
        "2.2",
        "4.1",
        "4.2",
        "4.3",
        "5.1",
        "5.2",
        "5.3",
        "6.2",
        "7.2"
      ],
      "blocks": [
        "projectes",
        "comunicacio",
        "robotica",
        "digitalitzacio"
      ],
      "knowledge": [
        "Algorismes i diagrames de flux.",
        "Sistema de control amb sensors i actuadors.",
        "Sensor de so i leds.",
        "Llindars de soroll i anàlisi de dades.",
        "Pòster informatiu."
      ],
      "objectives": [
        "Dissenyar un sistema de control acústic.",
        "Programar condicions i llindars.",
        "Verificar el prototip en situacions d’aula.",
        "Comunicar els nivells d’alerta."
      ],
      "transversal": [
        "Competència digital",
        "Resolució de problemes",
        "Benestar emocional",
        "Treball cooperatiu"
      ],
      "development": "L’alumnat investiga el problema del soroll, defineix nivells d’alerta, dissenya un circuit amb sensor i leds, programa el comportament del semàfor i el prova.",
      "activities": {
        "initial": "KPSI i debat sobre soroll, salut auditiva i convivència.",
        "development": "Estudi de sensors, leds, placa programable i condicions.",
        "structuring": "Proves, ajustos i documentació.",
        "application": "Demostració i pòster informatiu."
      },
      "vectors": "Connecta tecnologia, salut, convivència, comunicació visual i benestar emocional.",
      "evidence": [
        "Circuit o simulació",
        "Codi o diagrama de flux",
        "Proves",
        "Pòster",
        "Presentació"
      ],
      "materials": [
        "Placa programable",
        "Sensor de so",
        "Leds",
        "Resistències",
        "Cables",
        "Ordinador"
      ],
      "rubric": [
        {
          "item": "Disseny del sistema",
          "NA": "No defineix entrades ni sortides.",
          "AS": "Sistema bàsic.",
          "AN": "Relaciona sensor, leds i llindars.",
          "AE": "Sistema complet i justificat."
        },
        {
          "item": "Programació",
          "NA": "No funciona.",
          "AS": "Funciona parcialment.",
          "AN": "Respon als llindars.",
          "AE": "Robust, clar i millorat."
        },
        {
          "item": "Proves",
          "NA": "No fa proves.",
          "AS": "Proves simples.",
          "AN": "Prova i millora.",
          "AE": "Valida amb dades i ajustos."
        },
        {
          "item": "Comunicació",
          "NA": "No explica el funcionament.",
          "AS": "Pòster simple.",
          "AN": "Explica nivells clarament.",
          "AE": "Comunicació rigorosa i útil."
        }
      ]
    }
  ],
  "eso4": [
    {
      "id": "sa4-eso4-lavabo-contactless",
      "title": "SA · Dissenyem un lavabo contactless",
      "short": "Disseny, simulació i construcció d’accionaments pneumàtics per evitar tocar elements d’un lavabo públic.",
      "challenge": "Com podem dissenyar un sistema pneumàtic que permeti accionar una paperera o un dispensador de sabó sense tocar-los amb les mans?",
      "product": "Circuit pneumàtic simulat i/o muntat, disseny 3D de l’accionament, prototip funcional i demostració.",
      "course": "eso4",
      "subject": "Tecnologia",
      "competencies": [
        "CE4",
        "CE5",
        "CE2",
        "CE3",
        "CE6"
      ],
      "criteria": [
        "4.1",
        "5.1",
        "5.2",
        "5.4",
        "2.2",
        "2.3",
        "3.1",
        "3.2",
        "6.1"
      ],
      "blocks": [
        "operadors",
        "robotica",
        "projectes",
        "sostenibilitat"
      ],
      "knowledge": [
        "Circuits pneumàtics bàsics.",
        "Accionaments amb materials reciclats o fabricació digital.",
        "Simulació pneumàtica i modelatge 3D.",
        "Automatització i accessibilitat.",
        "Consum responsable."
      ],
      "objectives": [
        "Representar i simular circuits pneumàtics.",
        "Muntar i verificar un sistema funcional.",
        "Dissenyar en 3D un accionament.",
        "Fabricar i provar accionaments."
      ],
      "transversal": [
        "Salut, higiene i accessibilitat",
        "Competència digital",
        "Competència emprenedora",
        "Treball cooperatiu"
      ],
      "development": "El projecte parteix del repte de reduir el contacte manual en lavabos públics. L’alumnat analitza circuits, dissenya una solució pneumàtica, la simula, la modela i la construeix.",
      "activities": {
        "initial": "Higiene, accessibilitat i simbologia pneumàtica.",
        "development": "Anàlisi de circuits, simulador, disseny i modelatge 3D.",
        "structuring": "Diari d’aprenentatge i revisió del disseny.",
        "application": "Fabricació, muntatge, prova i demostració."
      },
      "vectors": "Treballa salut, inclusió, accessibilitat, consum responsable i tecnologia aplicada.",
      "evidence": [
        "Circuit pneumàtic",
        "Simulació",
        "Model 3D",
        "Prototip",
        "Demostració"
      ],
      "materials": [
        "Components pneumàtics",
        "Simulador",
        "Tinkercad",
        "Materials reciclats",
        "Opcional impressora 3D"
      ],
      "rubric": [
        {
          "item": "Circuit pneumàtic",
          "NA": "No representa el circuit.",
          "AS": "Circuit bàsic amb errors.",
          "AN": "Circuit funcional.",
          "AE": "Circuit optimitzat i justificat."
        },
        {
          "item": "Prototip",
          "NA": "No funciona.",
          "AS": "Funciona parcialment.",
          "AN": "Acciona el dispositiu.",
          "AE": "Funcional, segur i accessible."
        },
        {
          "item": "Modelatge",
          "NA": "No genera disseny útil.",
          "AS": "Model simple.",
          "AN": "Peça adequada.",
          "AE": "Peça ajustada i sostenible."
        },
        {
          "item": "Impacte",
          "NA": "No justifica.",
          "AS": "Justificació general.",
          "AN": "Relaciona higiene i tecnologia.",
          "AE": "Argumenta criteris tècnics, socials i sostenibles."
        }
      ]
    },
    {
      "id": "sa4-eso4-reg-intelligent-sequera",
      "title": "SA · Sequera extrema: reg intel·ligent per a l’hort escolar",
      "short": "Disseny d’un sistema de reg eficient, monitorat o automatitzat per reduir el consum d’aigua.",
      "challenge": "Com podem fer que el reg de l’hort escolar sigui més sostenible, eficient i monitorat en un context de sequera?",
      "product": "Proposta o prototip de sistema de reg eficient amb sensors, dades, pla d’estalvi d’aigua i informe tècnic.",
      "course": "eso4",
      "subject": "Tecnologia",
      "competencies": [
        "CE1",
        "CE2",
        "CE3",
        "CE4",
        "CE5",
        "CE6"
      ],
      "criteria": [
        "1.1",
        "1.2",
        "2.1",
        "2.3",
        "3.1",
        "3.2",
        "4.1",
        "4.2",
        "5.1",
        "5.4",
        "6.1",
        "6.2",
        "6.3"
      ],
      "blocks": [
        "projectes",
        "robotica",
        "sostenibilitat"
      ],
      "knowledge": [
        "Projectes i recerca de necessitats reals.",
        "Sensors, actuadors i automatització.",
        "IoT i monitoratge de dades.",
        "Eficiència en l’ús de l’aigua.",
        "Servei a la comunitat."
      ],
      "objectives": [
        "Analitzar consum i necessitats de reg.",
        "Dissenyar una solució basada en dades o sensors.",
        "Argumentar l’impacte ambiental i social.",
        "Comunicar la solució amb informe tècnic."
      ],
      "transversal": [
        "Competència ciutadana",
        "Competència digital",
        "Pensament crític",
        "Servei comunitari"
      ],
      "development": "En context de sequera, l’alumnat analitza el reg de l’hort escolar, investiga sistemes eficients i proposa una solució amb sensors o monitoratge.",
      "activities": {
        "initial": "Debat sobre sequera i consum d’aigua.",
        "development": "Recerca sobre reg eficient, sensors i dades.",
        "structuring": "Disseny del sistema i criteris d’estalvi.",
        "application": "Presentació del prototip o proposta."
      },
      "vectors": "Connecta tecnologia i emergència climàtica, servei al centre, sostenibilitat i dades.",
      "evidence": [
        "Diagnosi",
        "Esquema",
        "Proposta o prototip",
        "Informe",
        "Presentació"
      ],
      "materials": [
        "Sensors d’humitat o dades simulades",
        "Placa opcional",
        "Full de càlcul",
        "Ordinador"
      ],
      "rubric": [
        {
          "item": "Diagnosi",
          "NA": "No identifica necessitats.",
          "AS": "Descriu el problema.",
          "AN": "Analitza necessitats i dades.",
          "AE": "Diagnosi completa amb criteris d’estalvi."
        },
        {
          "item": "Solució",
          "NA": "No és viable.",
          "AS": "Solució simple.",
          "AN": "Solució coherent amb control.",
          "AE": "Integra monitoratge i sostenibilitat."
        },
        {
          "item": "Impacte",
          "NA": "No el valora.",
          "AS": "Referències generals.",
          "AN": "Argumenta l’estalvi.",
          "AE": "Estima impacte i millores."
        },
        {
          "item": "Comunicació",
          "NA": "Incompleta.",
          "AS": "Poc precisa.",
          "AN": "Ordenada i tècnica.",
          "AE": "Amb dades, esquemes i criteris."
        }
      ]
    },
    {
      "id": "sa4-eso4-transicio-energetica",
      "title": "SA · La transició energètica a Catalunya: ho aconseguirem?",
      "short": "Anàlisi del model energètic català i proposta cap a un sistema més renovable i eficient.",
      "challenge": "Com pot avançar Catalunya cap a un model energètic més renovable, eficient i sostenible?",
      "product": "Mapa o infografia de fonts i centrals energètiques, informe tècnic i debat o presentació argumentada.",
      "course": "eso4",
      "subject": "Tecnologia",
      "competencies": [
        "CE3",
        "CE5",
        "CE6"
      ],
      "criteria": [
        "3.1",
        "3.2",
        "5.1",
        "5.3",
        "6.1",
        "6.2"
      ],
      "blocks": [
        "sostenibilitat",
        "projectes"
      ],
      "knowledge": [
        "Eficiència energètica i energies renovables.",
        "Tecnologies i desenvolupament sostenible.",
        "Mapes, infografies i presentacions digitals.",
        "Impacte social, econòmic i ambiental dels sistemes energètics."
      ],
      "objectives": [
        "Identificar fonts i sistemes de generació.",
        "Analitzar impactes de renovables i no renovables.",
        "Organitzar informació en mapes i infografies.",
        "Argumentar una proposta de transició energètica."
      ],
      "transversal": [
        "Pensament crític",
        "Competència digital",
        "Ciutadania global"
      ],
      "development": "L’alumnat investiga el model energètic, situa fonts en un mapa, crea infografies i participa en un debat o informe sobre un model més renovable.",
      "activities": {
        "initial": "Vídeo o notícia sobre renovables i qüestionari.",
        "development": "Mapa col·laboratiu i recerca de tecnologies energètiques.",
        "structuring": "Infografies sobre fonts, transformacions i impactes.",
        "application": "Debat o informe tècnic."
      },
      "vectors": "Fomenta consciència global, sostenibilitat, alfabetització energètica i ús crític de dades.",
      "evidence": [
        "Mapa",
        "Infografia",
        "Informe",
        "Debat o presentació"
      ],
      "materials": [
        "Ordinador",
        "Mapes digitals",
        "Full de càlcul",
        "Canva/Genially",
        "Fonts contrastades"
      ],
      "rubric": [
        {
          "item": "Recerca",
          "NA": "Informació insuficient.",
          "AS": "Dades bàsiques.",
          "AN": "Informació pertinent.",
          "AE": "Dades diverses i fonts contrastades."
        },
        {
          "item": "Comprensió energètica",
          "NA": "No diferencia fonts.",
          "AS": "Identifica fonts principals.",
          "AN": "Explica transformacions i impactes.",
          "AE": "Compara sistemes i eficiència."
        },
        {
          "item": "Comunicació visual",
          "NA": "Incompleta.",
          "AS": "Bàsica.",
          "AN": "Clara i ordenada.",
          "AE": "Rigorosa i molt llegible."
        },
        {
          "item": "Argumentació",
          "NA": "No defensa cap posició.",
          "AS": "Opinió poc justificada.",
          "AN": "Argumenta amb criteris tècnics.",
          "AE": "Posició sòlida basada en evidències."
        }
      ]
    }
  ]
};

function v19InstallAdditionalSituations() {
  Object.entries(V18_ADDITIONAL_SITUATIONS).forEach(([courseKey, list]) => {
    if (!COURSES[courseKey]) return;
    if (!Array.isArray(COURSES[courseKey].situations)) COURSES[courseKey].situations = [];
    list.forEach(sa => {
      if (!COURSES[courseKey].situations.some(existing => existing.id === sa.id)) {
        COURSES[courseKey].situations.push(sa);
      }
    });
  });
}
v19InstallAdditionalSituations();
document.addEventListener("DOMContentLoaded", () => {
  try {
    v19InstallAdditionalSituations();
    if (typeof renderCourseSelect === "function") renderCourseSelect();
    if (typeof renderSituationSelect === "function") renderSituationSelect();
    if (typeof renderAll === "function") renderAll();
  } catch (err) { console.warn("No s'han pogut instal·lar les SA v19", err); }
});
