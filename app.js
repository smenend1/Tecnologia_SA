const APP = {
  name: "Tecnologia ESO · Projectes i reptes",
  version: "v2",
  line: "B",
  cacheName: "tecnologia-eso-projectes-reptes-v2"
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

const RUBRIC = {
  NA: {
    name: "No assoliment",
    text: "Identifica el repte de manera parcial o poc clara. La proposta és incompleta, amb poca justificació tècnica, digital o sostenible, i necessita molta guia per avançar."
  },
  AS: {
    name: "Assoliment satisfactori",
    text: "Identifica el problema i proposa una solució funcional bàsica. Descriu parts del procés i aporta alguna justificació tècnica, digital o sostenible."
  },
  AN: {
    name: "Assoliment notable",
    text: "Desenvolupa una proposta coherent, prova o simula la solució, justifica decisions amb criteris tècnics i sostenibles, i planteja millores realistes."
  },
  AE: {
    name: "Assoliment excel·lent",
    text: "Integra criteris tècnics, digitals, socials i ambientals amb autonomia. Argumenta amb solidesa, comunica amb precisió i transfereix l'aprenentatge a noves situacions."
  }
};

const state = {
  course: "eso4",
  situationId: "sa1-centre",
  view: "situacions",
  level: "AN",
  teacherMode: false,
  includeRubricInReport: false,
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
    ...s.blocks.map(b => `<span class="tag">${safeHtml(CURRICULUM.knowledgeBlocks[b])}</span>`),
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
      <input data-decision-name="${opt}" value="${safeHtml(state.decision[opt]?.name || "")}" placeholder="Nom o descripció breu de la solució" />
      <div class="two-cols" style="margin-top:10px;">
        ${criteria.map(c => `
          <div>
            <label class="tiny">${c} · 1-4</label>
            <input type="number" min="1" max="4" data-decision-score="${opt}|${c}" value="${safeHtml(state.decision[opt]?.scores?.[c] || "")}" />
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
      ${s.competencies.map(c => `<div><strong>${c}</strong> · ${safeHtml(CURRICULUM.competencies[c])}</div>`).join("")}
    </div>
    <h3 style="margin-top:14px;">Criteris d'avaluació</h3>
    <div class="curriculum-list">
      ${s.criteria.map(c => `<div><strong>${c}</strong> · ${safeHtml(CURRICULUM.criteria[c])}</div>`).join("")}
    </div>
  `;

  knowledge.innerHTML = `
    <h3>Blocs</h3>
    <div class="tagrow">${s.blocks.map(b => `<span class="tag">${safeHtml(CURRICULUM.knowledgeBlocks[b])}</span>`).join("")}</div>
    <h3 style="margin-top:14px;">Sabers seleccionats</h3>
    <div class="curriculum-list">
      ${s.knowledge.map(k => `<div>${safeHtml(k)}</div>`).join("")}
    </div>
  `;
}

function renderRubric() {
  const el = document.getElementById("rubricCard");
  el.innerHTML = Object.entries(RUBRIC).map(([level, item]) => `
    <div class="level ${state.level === level ? "selected" : ""}">
      <strong>${level} · ${safeHtml(item.name)}</strong>
      <p class="small">${safeHtml(item.text)}</p>
    </div>
  `).join("");

  const check = document.getElementById("includeRubricCheck");
  if (check) check.checked = state.includeRubricInReport;
}

function renderReport() {
  const s = currentSituation();
  const report = document.getElementById("report");
  if (!s) {
    report.textContent = "Informe pendent: aquest curs encara no té situacions carregades.";
    return;
  }

  const stepText = PROJECT_STEPS.map(step => {
    const value = state.responses[step.key] || "[pendent de completar]";
    return `${step.title}\n${value}`;
  }).join("\n\n");

  const rubricText = state.includeRubricInReport
    ? `\n\nRúbrica completa\n${Object.entries(RUBRIC).map(([level, item]) => `${level} · ${item.name}: ${item.text}`).join("\n")}`
    : "";

  report.textContent = `${APP.name} · ${APP.version}
Línia: ${APP.line} · Projecte independent de Matemàtiques ESO

Curs: ${currentCourse().title}
Situació: ${s.title}
Nivell d'assoliment seleccionat: ${state.level} · ${RUBRIC[state.level].name}

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

Rúbrica orientativa
${state.level} · ${RUBRIC[state.level].name}: ${RUBRIC[state.level].text}${rubricText}

Conclusió final
La proposta s'ha de valorar segons la seva utilitat, viabilitat tècnica, sostenibilitat, qualitat de la justificació i capacitat de comunicar les decisions preses.`;
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
