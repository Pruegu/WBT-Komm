const links = {
  gov: 'https://www.stadt-zuerich.ch/de/politik-und-verwaltung/politik-und-recht/stadtratsbeschluesse/2025/08/stzh-strb-2025-2281.html',
  cd: 'https://www.stadt-zuerich.ch/content/cd/de/index.html',
  sprache: 'https://www.stadt-zuerich.ch/sprache',
  share: 'https://szhglobal.sharepoint.com/:f:/r/sites/MSGR-00004091-KIundKommunikation/Shared%20Documents/KI%20und%20Kommunikation?csf=1&web=1&e=rJNzLT',
  zueria: 'https://zueria.onszh.ch/',
};

const modules = ['Start', 'Governance', 'Prinzipien', 'Prompt-Lab', 'Toolbox', 'Use-Cases', 'Drehbuch'];

const principles = [
  {
    title: 'Ziel vor Tool',
    rule: 'Formuliere zuerst Kommunikationsziel, Zielgruppe, Kanal und gewünschte Wirkung.',
    example: 'Beispiel: «Erstelle drei Varianten für einen kurzen Webteaser für Eltern von Schulkindern. Ziel: über neue Betreuungszeiten informieren, Ton: klar, serviceorientiert, Stadt Zürich.»',
  },
  {
    title: 'Kontext statt Rätsel',
    rule: 'Gib der KI Rollen, Rahmenbedingungen, Sprachvorgaben und Ausschlüsse mit.',
    example: 'Beispiel: «Nutze eine inklusive, verständliche Sprache. Keine Superlative, keine ungeprüften Versprechen, keine politischen Wertungen.»',
  },
  {
    title: 'Fakten bleiben menschlich',
    rule: 'KI-Ausgaben sind Entwürfe. Namen, Zahlen, Rechtsgrundlagen, Links und Zitate werden geprüft.',
    example: 'Beispiel: «Markiere alle Aussagen, die eine Quelle brauchen, und schlage vor, welche Fachstelle sie prüfen soll.»',
  },
  {
    title: 'Daten schützen',
    rule: 'Verwende nur freigegebene Daten und wähle das Tool passend zur Datenklassifikation.',
    example: 'Beispiel: «Anonymisiere Rückmeldungen aus der Bevölkerung, bevor sie als Muster in ein KI-Tool eingegeben werden.»',
  },
  {
    title: 'Transparenz schafft Vertrauen',
    rule: 'Lege KI-Einsatz offen, wenn er die Erwartung des Publikums, die Einordnung oder die Glaubwürdigkeit beeinflusst.',
    example: 'Beispiel: «Visualisierung mit KI-Unterstützung erstellt; fachliche Inhalte durch Kommunikation und Fachstelle geprüft.»',
  },
  {
    title: 'Qualität inklusiv prüfen',
    rule: 'Prüfe Bias, Barrierefreiheit, Verständlichkeit, Tonalität und Anschluss an die städtische Sprache.',
    example: 'Beispiel: «Überarbeite den Text in einfacher Sprache und erstelle zusätzlich Alt-Text für die Grafik.»',
  },
];

const quiz = [
  {
    q: 'Ein guter Kommunikations-Prompt enthält ...',
    a: ['Zielgruppe, Kanal, Wirkung, Tonalität, Grenzen und Prüfkriterien.', 'möglichst wenig Kontext, damit die KI frei ist.', 'vertrauliche Rohdaten, damit nichts fehlt.'],
    c: 0,
    feedback: 'Genau: Je klarer Aufgabe und Qualitätskriterien, desto besser und prüfbarer wird der Entwurf.',
  },
  {
    q: 'Die KI liefert ein starkes Zitat einer Stadträtin. Was ist der nächste Schritt?',
    a: ['Publizieren, wenn es gut klingt.', 'Als Entwurf behandeln, Quelle/Freigabe prüfen oder als paraphrasierte Aussage kennzeichnen.', 'Nur die Anführungszeichen entfernen.'],
    c: 1,
    feedback: 'Richtig: Zitate, Namen und Positionen brauchen immer eine verlässliche Quelle und Freigabe.',
  },
  {
    q: 'Wann ist ein Transparenzhinweis besonders angezeigt?',
    a: ['Wenn KI-Einsatz Erwartung, Vertrauen oder Einordnung des Publikums beeinflusst.', 'Nie, KI ist nur ein Schreibprogramm.', 'Nur bei rein internen Notizen ohne Aussenwirkung.'],
    c: 0,
    feedback: 'Richtig: Transparenz ist besonders wichtig bei synthetischen Medien, Dialogsystemen und erklärungsbedürftigen Inhalten.',
  },
  {
    q: 'Welche Toolwahl ist für städtische Kommunikationsarbeit grundsätzlich sauberer?',
    a: ['Private Accounts in frei verfügbaren KI-Tools.', 'Das freigegebene städtische Standardtool und die Komm-Toolbox gemäss Vorgaben.', 'Das Tool mit dem schönsten Interface.'],
    c: 1,
    feedback: 'Korrekt: Toolwahl folgt Datenklassifikation, Freigaben und Zweck.',
  },
];

const governanceCards = [
  {
    title: 'Anwendungsprinzipien',
    example: 'Ein Medienmitteilungsentwurf darf von KI strukturiert werden. Die finale Aussage, Priorisierung und Freigabe bleiben bei den verantwortlichen Personen.',
  },
  {
    title: 'Transparenzregelung',
    example: 'Ein KI-generiertes Kampagnenbild erhält einen Hinweis wie «Visualisierung mit KI-Unterstützung erstellt» und wird intern dokumentiert.',
  },
  {
    title: 'Deep Fakes',
    example: 'Keine künstliche Stimme einer realen Person für ein Erklärvideo. Besser: neutrale Sprecherstimme, klare Kennzeichnung und Rechteprüfung.',
  },
];

const toolbox = [
  {
    title: 'Komm-spezifische KI-Werkzeuge',
    text: 'Vorlagen, Prompts, Good-Practice-Beispiele und geprüfte Workflows der Kommunikation.',
    example: 'Beispiel: Promptvorlage für Medienmitteilung, Social-Post, Q&A und einfache Sprache.',
    href: links.share,
    label: 'SharePoint öffnen',
  },
  {
    title: 'ZüriA',
    text: 'Städtisches Standardtool für Arbeit mit unterschiedlichen Datenklassifikationen gemäss Vorgaben.',
    example: 'Beispiel: Zusammenfassung eines internen Briefings mit anschliessender menschlicher Prüfung.',
    href: links.zueria,
    label: 'ZüriA öffnen',
  },
];

const useCases = [
  ['Auftrag & Rahmen klären', 'Briefing-Coach fragt fehlende Angaben ab: Ziel, Zielgruppe, Nutzen, Risiken, Freigaben, Kanäle.', 'Output: präzisiertes Kurzbriefing mit offenen Fragen an Auftraggeber:in.'],
  ['Recherche', 'Quellenlandkarte sammelt Begriffe, Stakeholder, mögliche Gegenargumente und Prüfpunkte.', 'Output: Rechercheplan, keine ungeprüfte Faktensammlung.'],
  ['Konzeption & Ideenfindung', 'Ideen-Sprint erstellt drei Kampagnenrouten mit Botschaft, Nutzenversprechen und Risiken.', 'Output: Varianten als Workshop-Material, nicht als fertiger Entscheid.'],
  ['Redaktion / Text', 'Textwerkstatt formuliert Webtext, Medienmitteilung, Newsletter und Social-Teaser im passenden Ton.', 'Output: Entwurf plus Checkliste für Fakten, Sprache und Freigabe.'],
  ['Audiovisueller Content', 'Storyboard-Assistent entwickelt Szenen, Bildbriefings, Alt-Texte und Untertitel.', 'Output: Produktionsbriefing ohne täuschende Deep-Fake-Elemente.'],
  ['Publikation & Weboptimierung', 'Web-Check schlägt Titel, Lead, Zwischenüberschriften, Metadaten und FAQ vor.', 'Output: optimierte Struktur für Auffindbarkeit und Verständlichkeit.'],
  ['Interaktion & Moderation', 'Dialogbaukasten erstellt Antwortbausteine für wiederkehrende Fragen und Eskalationskriterien.', 'Output: geprüfte Moderationshilfe mit Grenzen und Verantwortlichkeiten.'],
  ['Monitoring & Wirkungsanalyse', 'Auswertungsschema clustert Rückmeldungen, Fragen, Tonalität und Learnings.', 'Output: Lernbericht für nächste Kommunikationsmassnahme.'],
];

const promptParts = {
  ziel: 'Informiere Quartierbewohner:innen über eine temporäre Baustelle und reduziere Unsicherheit.',
  kanal: 'Webseite stadt-zuerich.ch und kurzer Newsletter-Teaser.',
  ton: 'klar, serviceorientiert, sachlich, in städtischer Sprache.',
  grenzen: 'Keine ungeprüften Termine, keine Beschönigung, Datenschutz beachten.',
};

let step = 0;
let answers = {};
let flipped = {};
let selectedUseCase = 0;
let promptSelection = { ziel: true, kanal: true, ton: true, grenzen: true };

const root = document.getElementById('root');

function render() {
  const progress = Math.round(((step + 1) / modules.length) * 100);
  root.innerHTML = `
    <header class="site-header">
      <div class="brand">
        <div class="logo" aria-label="Stadt Zürich">Stadt<br>Zürich</div>
        <div>
          <b>Web Based Training</b>
          <span>KI in der Kommunikation · interaktiv · ca. 10 Minuten</span>
        </div>
      </div>
      <nav aria-label="WBT Module">
        ${modules.map((name, index) => `<button class="nav-item ${step === index ? 'active' : ''}" data-step="${index}">${name}</button>`).join('')}
      </nav>
    </header>
    <main>
      <div class="progress" aria-label="Fortschritt"><i style="width:${progress}%"></i></div>
      ${content()}
      <footer class="pager">
        <button class="secondary" ${step === 0 ? 'disabled' : ''} data-prev>Zurück</button>
        <span>Modul ${step + 1} von ${modules.length}</span>
        <button data-next>${step === modules.length - 1 ? 'Abschliessen' : 'Weiter'} ›</button>
      </footer>
    </main>`;

  root.querySelectorAll('[data-step]').forEach((button) => button.addEventListener('click', () => { step = Number(button.dataset.step); render(); }));
  root.querySelector('[data-prev]').addEventListener('click', () => { step = Math.max(0, step - 1); render(); });
  root.querySelector('[data-next]').addEventListener('click', () => { step = Math.min(modules.length - 1, step + 1); render(); });
  root.querySelectorAll('[data-q]').forEach((input) => input.addEventListener('change', (event) => { answers[event.target.dataset.q] = Number(event.target.value); render(); }));
  root.querySelectorAll('[data-flip]').forEach((button) => button.addEventListener('click', () => { flipped[button.dataset.flip] = !flipped[button.dataset.flip]; render(); }));
  root.querySelectorAll('[data-usecase]').forEach((button) => button.addEventListener('click', () => { selectedUseCase = Number(button.dataset.usecase); render(); }));
  root.querySelectorAll('[data-prompt]').forEach((input) => input.addEventListener('change', (event) => { promptSelection[event.target.dataset.prompt] = event.target.checked; render(); }));
}

function content() {
  if (step === 0) return startScreen();
  if (step === 1) return governanceScreen();
  if (step === 2) return principlesScreen();
  if (step === 3) return promptLabScreen();
  if (step === 4) return toolboxScreen();
  if (step === 5) return useCaseScreen();
  return storyboardScreen();
}

function startScreen() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Lernpfad für Kommunikationsteams</p>
        <h1>KI nutzen – aber bewusst, transparent und städtisch.</h1>
        <p class="lead">Diese App ist als 10-Minuten-WBT aufgebaut: kurze Inputs, konkrete Beispiele, Mini-Entscheide, Prompt-Lab und Lernzielkontrolle.</p>
        <div class="hero-actions">
          <button data-step="2">Direkt zu den Prinzipien</button>
          <button class="secondary" data-step="5">Use-Cases ansehen</button>
        </div>
      </div>
      <aside class="learning-card">
        <h2>Nach 10 Minuten kannst du ...</h2>
        <ul class="check-list">
          <li>KI-Einsatz in der Kommunikation einordnen.</li>
          <li>einen guten Prompt für städtische Kommunikation bauen.</li>
          <li>Transparenz, Datenschutz und Deep-Fake-Risiken erkennen.</li>
          <li>passende Use-Cases entlang der Komm-Journey auswählen.</li>
        </ul>
      </aside>
    </section>
    <section class="stats-strip">
      <div><b>7</b><span>interaktive Module</span></div>
      <div><b>6</b><span>Kommunikationsprinzipien</span></div>
      <div><b>8</b><span>zeitbeständige Use-Cases</span></div>
      <div><b>4</b><span>Lernzielkontrollen</span></div>
    </section>`;
}

function governanceScreen() {
  return `
    <section>
      <p class="eyebrow">Governance</p>
      <h2>Der sichere Rahmen für KI-Kommunikation</h2>
      <p class="lead narrow">Governance wird hier nicht abstrakt vermittelt, sondern als konkrete Entscheidungshilfe für typische Kommunikationssituationen.</p>
      <div class="flip-grid">
        ${governanceCards.map((card, index) => flipCard(`gov-${index}`, card.title, card.example)).join('')}
      </div>
      <div class="scenario-panel">
        <h3>Mini-Szenario: Soll das so publiziert werden?</h3>
        <p>Eine KI erstellt ein realistisches Bild einer Medienkonferenz mit Personen, die nie dort waren.</p>
        <div class="decision good"><b>Gute Entscheidung:</b> Nicht publizieren. Stattdessen eine gekennzeichnete Illustration, ein echtes Foto oder eine neutrale Grafik verwenden.</div>
        <div class="decision"><b>Prüffragen:</b> Ist das Publikum potenziell getäuscht? Sind Rechte und Einwilligungen geklärt? Braucht es einen Transparenzhinweis?</div>
      </div>
      ${linkList()}
    </section>`;
}

function principlesScreen() {
  const score = quiz.reduce((sum, item, index) => sum + (answers[index] === item.c ? 1 : 0), 0);
  return `
    <section>
      <p class="eyebrow">Hauptteil</p>
      <h2>Sechs KI-Kommunikationsprinzipien</h2>
      <div class="principle-grid">
        ${principles.map((principle, index) => `
          <article class="principle-card">
            <span class="number">${index + 1}</span>
            <h3>${principle.title}</h3>
            <p>${principle.rule}</p>
            <div class="example"><b>Gutes Beispiel</b><br>${principle.example}</div>
          </article>`).join('')}
      </div>
      <div class="quiz-wrap">
        <h3>Lernzielkontrolle</h3>
        ${quiz.map((item, index) => quizItem(item, index)).join('')}
        <div class="score ${score >= 3 ? 'passed' : ''}">Ergebnis: ${score}/${quiz.length}. ${score >= 3 ? 'Lernziel erreicht.' : 'Beantworte mindestens 3 Fragen richtig.'}</div>
      </div>
    </section>`;
}

function promptLabScreen() {
  const selected = Object.entries(promptSelection).filter(([, value]) => value).map(([key]) => promptParts[key]);
  const prompt = selected.length ? selected.join(' ') : 'Wähle mindestens einen Baustein aus.';
  return `
    <section>
      <p class="eyebrow">Interaktion</p>
      <h2>Prompt-Lab: aus Bausteinen wird ein guter Auftrag</h2>
      <p class="lead narrow">Aktiviere oder deaktiviere Bausteine und beobachte, wie sich der Prompt verändert. So wird sichtbar, warum Kontext die Qualität verbessert.</p>
      <div class="lab">
        <div class="builder">
          ${Object.entries(promptParts).map(([key, value]) => `
            <label class="toggle">
              <input type="checkbox" data-prompt="${key}" ${promptSelection[key] ? 'checked' : ''}>
              <span>${key.toUpperCase()}</span>
              ${value}
            </label>`).join('')}
        </div>
        <div class="prompt-output">
          <h3>Generierter Beispiel-Prompt</h3>
          <p>${prompt}</p>
          <div class="example"><b>Qualitätscheck:</b> Bitte markiere im Ergebnis alle Fakten, die durch Fachstelle oder Quelle geprüft werden müssen, und liefere eine Version in leicht verständlicher Sprache.</div>
        </div>
      </div>
    </section>`;
}

function toolboxScreen() {
  return `
    <section>
      <p class="eyebrow">Toolbox</p>
      <h2>Das richtige Werkzeug für den richtigen Zweck</h2>
      <div class="tool-grid">
        ${toolbox.map((tool) => `
          <article class="tool-card">
            <h3>${tool.title}</h3>
            <p>${tool.text}</p>
            <div class="example"><b>Gutes Beispiel</b><br>${tool.example}</div>
            <a class="link-button" href="${tool.href}">${tool.label} ↗</a>
          </article>`).join('')}
      </div>
      <div class="scenario-panel accent">
        <h3>Tool-Entscheid in 20 Sekunden</h3>
        <p><b>Öffentliche Daten + Ideenfindung:</b> Komm-Toolbox und freigegebene Promptvorlagen nutzen.</p>
        <p><b>Interne oder klassifizierte Informationen:</b> ZüriA und städtische Vorgaben prüfen, Daten minimieren, Ergebnis dokumentieren.</p>
      </div>
    </section>`;
}

function useCaseScreen() {
  const active = useCases[selectedUseCase];
  return `
    <section>
      <p class="eyebrow">Rahmen-Use-Cases</p>
      <h2>Entlang der Kommunikations-Journey</h2>
      <p class="lead narrow">Die Beispiele sind bewusst zeitbeständig formuliert: nicht als Tool-Hype, sondern als wiederverwendbare Kommunikationsaufgaben.</p>
      <div class="journey-layout">
        <div class="journey-nav">
          ${useCases.map((item, index) => `<button class="journey-step ${selectedUseCase === index ? 'active' : ''}" data-usecase="${index}"><b>${index + 1}</b>${item[0]}</button>`).join('')}
        </div>
        <article class="usecase-detail">
          <span class="number">${selectedUseCase + 1}</span>
          <h3>${active[0]}</h3>
          <p>${active[1]}</p>
          <div class="example"><b>Konkretes Beispiel</b><br>${active[2]}</div>
          <div class="decision good"><b>Transferfrage:</b> Welche Fachperson prüft Qualität, Fakten und Freigabe vor Veröffentlichung?</div>
        </article>
      </div>
    </section>`;
}

function storyboardScreen() {
  return `
    <section>
      <p class="eyebrow">Drehbuch ausfüllen</p>
      <h2>Storyboard-Vorschlag für die finale Produktion</h2>
      <div class="storyboard">
        ${['Lernziel', 'Ausgangslage', 'KI-Interaktion', 'Gutes Beispiel', 'Qualitätscheck', 'Transparenz', 'Freigabe', 'Transfer'].map((title, index) => `
          <article>
            <b>${index + 1}</b>
            <h3>${title}</h3>
            <p>${storyText(title)}</p>
          </article>`).join('')}
      </div>
      <div class="completion">
        <h3>Abschluss</h3>
        <p>Die Nutzenden verlassen das WBT mit einer Prompt-Checkliste, klaren Governance-Prüffragen und einem Set an stabilen Use-Case-Schablonen für die Kommunikationsarbeit.</p>
      </div>
    </section>`;
}

function storyText(title) {
  const texts = {
    Lernziel: '«Ich kann KI in einem Kommunikationsprozess sinnvoll und verantwortungsvoll einsetzen.»',
    Ausgangslage: 'Kurzer Praxisfall, z. B. Baustelleninformation, Kampagnenplanung oder Medienanfrage.',
    'KI-Interaktion': 'Prompt mit Ziel, Kontext, Kanal, Ton, Grenzen und gewünschtem Ausgabeformat.',
    'Gutes Beispiel': 'Vorher/Nachher-Vergleich: schwacher Prompt versus städtisch brauchbarer Prompt.',
    Qualitätscheck: 'Fakten, Bias, Datenschutz, Barrierefreiheit, städtische Sprache und Freigabe prüfen.',
    Transparenz: 'Hinweis formulieren, falls KI-Einsatz für Publikum relevant ist.',
    Freigabe: 'Rollen klären: Kommunikation, Fachstelle, Rechts-/Datenschutzprüfung falls nötig.',
    Transfer: 'Kurze Reflexionsfrage: «Wo in meiner nächsten Aufgabe kann KI sinnvoll assistieren?»',
  };
  return texts[title];
}

function flipCard(id, title, example) {
  const isFlipped = flipped[id];
  return `
    <button class="flip-card ${isFlipped ? 'flipped' : ''}" data-flip="${id}">
      <span>${isFlipped ? 'Gutes Beispiel' : 'Karte umdrehen'}</span>
      <h3>${title}</h3>
      <p>${isFlipped ? example : 'Klicke, um ein konkretes Kommunikationsbeispiel zu sehen.'}</p>
    </button>`;
}

function quizItem(item, index) {
  const selected = answers[index];
  return `
    <fieldset class="quiz">
      <legend>${item.q}</legend>
      ${item.a.map((answer, answerIndex) => `
        <label class="${selected === answerIndex ? (answerIndex === item.c ? 'ok' : 'bad') : ''}">
          <input type="radio" data-q="${index}" name="q${index}" value="${answerIndex}" ${selected === answerIndex ? 'checked' : ''}>
          ${answer}
        </label>`).join('')}
      ${selected !== undefined ? `<p class="feedback">${selected === item.c ? '✓ ' : 'Nochmals prüfen: '}${item.feedback}</p>` : ''}
    </fieldset>`;
}

function linkList() {
  const items = [
    ['KI-Richtlinie / Stadtratsbeschluss', links.gov],
    ['Corporate Design / Erscheinungsbild', links.cd],
    ['Sprache in der Verwaltung', links.sprache],
  ];
  return `<div class="links"><h3>Linkliste</h3>${items.map(([title, href]) => `<a href="${href}">${title} ↗</a>`).join('')}</div>`;
}

render();
const links={gov:'https://www.stadt-zuerich.ch/de/politik-und-verwaltung/politik-und-recht/stadtratsbeschluesse/2025/08/stzh-strb-2025-2281.html',cd:'https://www.stadt-zuerich.ch/content/cd/de/index.html',sprache:'https://www.stadt-zuerich.ch/sprache',share:'https://szhglobal.sharepoint.com/:f:/r/sites/MSGR-00004091-KIundKommunikation/Shared%20Documents/KI%20und%20Kommunikation?csf=1&web=1&e=rJNzLT',zueria:'https://zueria.onszh.ch/'};
const principles=['Zweck und Publikum zuerst: KI unterstützt ein klares Kommunikationsziel, ersetzt aber nicht Auftrag, Haltung und Verantwortung.','Kontext geben: Zielgruppe, Kanal, Tonalität, Sprachvorgaben, gewünschte Wirkung und Ausschlüsse präzise beschreiben.','Quellen und Fakten prüfen: KI-Resultate sind Entwürfe; Zahlen, Rechtsbezüge, Namen und Links werden verifiziert.','Datenschutz beachten: Nur freigegebene Daten und passende Tools je Datenklassifikation verwenden.','Transparent bleiben: KI-Einsatz offenlegen, wenn er für das Publikum relevant ist oder die Regelung es verlangt.','Bias und Barrierefreiheit prüfen: diskriminierende Muster, Verständlichkeit, geschlechtergerechte und leicht verständliche Sprache kontrollieren.'];
const quiz=[{q:'Was gehört in einen guten Kommunikations-Prompt?',a:['Zielgruppe, Kanal, Wirkung, Tonalität und Grenzen','Nur ein möglichst kurzer Befehl','Vertrauliche Rohdaten, damit die KI alles weiss'],c:0},{q:'Ein KI-generiertes Zitat einer Stadträtin klingt passend. Was tun?',a:['Direkt publizieren','Als Entwurf behandeln und Quelle/Freigabe prüfen','Nur die Anführungszeichen entfernen'],c:1},{q:'Wann ist Transparenz besonders wichtig?',a:['Wenn KI-Einsatz Erwartung, Vertrauen oder Entscheidgrundlagen des Publikums beeinflusst','Nie, KI ist nur ein Schreibprogramm','Nur bei internen Mails ohne Aussenwirkung'],c:0},{q:'Welche Toolwahl ist grundsätzlich sicherer für verschiedene Datenklassifikationen?',a:['Irgendein öffentliches Tool','Das städtische Standardtool ZüriA gemäss Vorgaben','Private Accounts von Mitarbeitenden'],c:1}];
const journey=['Auftrag & Rahmen klären: Briefing-Assistent erzeugt Fragen zu Ziel, Stakeholdern, Risiken und Freigaben.','Recherche: Quellenlandkarte fasst verifizierbare Grundlagen zusammen und markiert Prüfpunkte.','Konzeption & Ideenfindung: Varianten für Botschaft, Dramaturgie und Kanal-Mix als Workshop-Input.','Redaktion / Text: Erstentwurf in städtischer Sprache, inklusive Varianten für leicht verständliche Sprache.','Audiovisueller Content: Storyboard-, Alt-Text- und Bildbriefing-Entwürfe statt ungeprüfter Deep-Fake-Produktion.','Publikation & Weboptimierung: Metadaten, Teaser, Struktur und Auffindbarkeit für bestehende Inhalte optimieren.','Interaktion & Moderation: Antwortbausteine für wiederkehrende Fragen mit Eskalationskriterien vorbereiten.','Monitoring & Wirkungsanalyse: Auswertungsschema für Resonanz, Fragen, Sentiment und Learnings erstellen.'];
let step=0,answers={};const root=document.getElementById('root');function icon(n){return `<span class="icon" aria-hidden="true">${n}</span>`}function render(){const progress=Math.round(((step+1)/5)*100);root.innerHTML=`<header><div class="brand"><div class="logo">Stadt<br>Zürich</div><div><b>Web Based Training</b><span>KI in der Kommunikation · ca. 10 Minuten</span></div></div><nav>${['Start','Governance','Prinzipien','Toolbox','Use-Cases'].map((n,i)=>`<button class="${step===i?'active':''}" data-step="${i}">${n}</button>`).join('')}</nav></header><main><div class="bar"><i style="width:${progress}%"></i></div>${content()}<footer><button ${step===0?'disabled':''} data-prev>Zurück</button><button data-next>Weiter ›</button></footer></main>`;root.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{step=+b.dataset.step;render()});root.querySelector('[data-prev]').onclick=()=>{step=Math.max(0,step-1);render()};root.querySelector('[data-next]').onclick=()=>{step=Math.min(4,step+1);render()};root.querySelectorAll('[data-q]').forEach(i=>i.onchange=e=>{answers[e.target.dataset.q]=+e.target.value;render()})}function content(){if(step===0)return `<section class="hero"><p class="eyebrow">Lernpfad für Kommunikationsteams</p><h1>KI wirksam, transparent und städtisch einsetzen.</h1><p>Dieses WBT führt in Governance, Toolwahl und zeitbeständige Rahmen-Use-Cases ein. Schwerpunkt sind Kommunikationsprinzipien mit kurzen Lernzielkontrollen.</p><div class="cards">${card('⚖','Governance','KI-Richtlinie, Transparenz, Deep Fakes und Sprache.')}${card('✓','Prinzipien','Sechs Merksätze für bessere Prompts und sichere Qualität.')}${card('→','Journey','Acht Platzhalter-Use-Cases entlang der Kommunikationsarbeit.')}</div></section>`;if(step===1)return `<section><h2>Governance: der sichere Rahmen</h2><div class="grid">${article('Anwendungsprinzipien','KI ist Assistenz. Menschen bleiben verantwortlich für Auftrag, Qualität, Freigabe und Wirkung.')}${article('Transparenzregelung','Offenlegen, wenn KI-Einsatz wesentlich ist: zum Beispiel bei synthetischen Bildern, automatisierten Dialogen oder erklärungsbedürftigen Inhalten.')}${article('Deep Fakes','Keine täuschenden synthetischen Personen, Stimmen oder Ereignisse. Audiovisuelle KI-Inhalte brauchen klare Kennzeichnung, Rechteprüfung und Freigabe.')}</div>${linkList()}</section>`;if(step===2){let score=quiz.reduce((s,x,i)=>s+(answers[i]===x.c?1:0),0);return `<section><h2>KI-Kommunikationsprinzipien</h2><ol class="principles">${principles.map((p,i)=>`<li><b>${i+1}</b><span>${p}</span></li>`).join('')}</ol><h3>Lernzielkontrolle</h3>${quiz.map((x,i)=>`<fieldset class="quiz"><legend>${x.q}</legend>${x.a.map((a,j)=>`<label class="${answers[i]===j?(j===x.c?'ok':'bad'):''}"><input type="radio" data-q="${i}" name="q${i}" value="${j}" ${answers[i]===j?'checked':''}>${a}</label>`).join('')}</fieldset>`).join('')}<p class="score">${icon('✓')} Ergebnis: ${score}/${quiz.length}. Ziel erreicht ab 3 Punkten.</p></section>`}if(step===3)return `<section><h2>Toolbox</h2>${tool('▣','Komm-spezifische KI-Werkzeuge','Sammlung, Vorlagen und Beispiele werden im SharePoint der Kommunikation gepflegt.',links.share,'SharePoint öffnen')}${tool('◆','Städtisches Standardtool','ZüriA ist als Standardtool für alle Datenklassifikationen vorgesehen. Vor Nutzung gelten die städtischen Vorgaben und Freigaben.',links.zueria,'ZüriA öffnen')}</section>`;return `<section><h2>Rahmen-Use-Cases entlang der Komm-Journey</h2><div class="timeline">${journey.map((j,i)=>`<div><b>${i+1}</b><p>${j}</p></div>`).join('')}</div><h3>Drehbuch-Vorlage</h3><p>Für jeden final ausgewählten Use-Case: Lernziel, Ausgangslage, KI-Interaktion, Qualitätscheck, Transparenzhinweis, Freigabe und Transferfrage ausfüllen.</p></section>`}function card(i,t,x){return `<div class="card">${icon(i)}<h3>${t}</h3><p>${x}</p></div>`}function article(t,x){return `<article><h3>${t}</h3><p>${x}</p></article>`}function tool(i,t,x,u,l){return `<div class="tool">${icon(i)}<div><h3>${t}</h3><p>${x}</p><a href="${u}">${l} ↗</a></div></div>`}function linkList(){return `<div class="links"><h3>Linkliste</h3>${[['KI-Richtlinie / Stadtratsbeschluss',links.gov],['CD-Manual / Erscheinungsbild',links.cd],['Sprache in der Verwaltung',links.sprache]].map(([t,u])=>`<a href="${u}">${t} ↗</a>`).join('')}</div>`}render();
