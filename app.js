const APP = {
  name: "Tecnologia ESO · Projectes i reptes",
  version: "v12",
  line: "B",
  cacheName: "tecnologia-eso-projectes-reptes-v12"
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

const state = {
  course: "eso4",
  situationId: "sa1-centre",
  view: "situacions",
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

const STORAGE_KEY_SITUATIONS = "tecnologia-eso-projectes-reptes-custom-situations-v12";
const STORAGE_KEY_RUBRICS = "tecnologia-eso-projectes-reptes-custom-rubrics-v12";

function loadJsonFromStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (err) {
    return fallback;
  }
}

let customSituations = loadJsonFromStorage(STORAGE_KEY_SITUATIONS, {});
let customRubrics = loadJsonFromStorage(STORAGE_KEY_RUBRICS, {});

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
  if (customRubrics[s.id]) return customRubrics[s.id];
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
  el.innerHTML = tabs.map(([id, label]) => `<button class="${state.view === id ? "active" : ""}" data-tab="${id}" type="button">${label}</button>`).join("");
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
      customSituations = data.situations || customSituations;
      customRubrics = data.rubrics || customRubrics;
      saveCustomData();
      showCreatorFeedback("SAs importades correctament.");
      renderSituationSelect();
      renderAll();
    } catch (err) {
      showCreatorFeedback("No s’ha pogut importar el fitxer JSON.");
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
  try {
    const text = await readDocumentFile(file);
    const preview = document.getElementById("importPreview");
    if (preview) preview.value = normalizeImportedText(text);
    fillCreatorFromText(text);
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
  toggle.textContent = `Mode docent: ${state.teacherMode ? "activat" : "desactivat"}`;
  document.querySelectorAll(".teacher-box").forEach(box => box.classList.toggle("hidden", !state.teacherMode));
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
  <link rel="stylesheet" href="./styles.css?v=11">
  <style>
    html, body { background: #ffffff !important; }
    body { margin: 0; color: #172016; }
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

  document.getElementById("teacherToggle").addEventListener("click", () => {
    state.teacherMode = !state.teacherMode;
    renderTeacherMode();
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

