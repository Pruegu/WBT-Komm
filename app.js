const lessons = [
  {
    kicker: 'Einleitung', time: '1 min', title: 'Warum dieses Training?',
    body: `<p>Generative KI kann die Kommunikation beschleunigen, Varianten liefern und Barrieren abbauen. Gleichzeitig bleiben Verantwortung, Faktenprüfung und städtische Identität zentral.</p><div class="callout"><strong>Ziel:</strong> Nach rund 10 Minuten kennst du die wichtigsten Regeln und kannst KI entlang der Kommunikations-Journey angemessen einsetzen.</div><p>Merksatz: <strong>KI unterstützt. Menschen entscheiden, prüfen und verantworten.</strong></p>`
  },
  {
    kicker: 'Lektion 1', time: '2 min', title: 'Prinzipien',
    body: `<div class="principles"><article class="principle"><h3>Menschliche Absenderschaft</h3><p>Publizierte Inhalte werden immer von einer Person oder Dienstabteilung verantwortet.</p></article><article class="principle"><h3>Glaubwürdigkeit</h3><p>Fakten, Bias und Wirkung werden vor Veröffentlichung geprüft.</p></article><article class="principle"><h3>Städtische Identität</h3><p>Tonalität, Sprachvorgaben und Erscheinungsbild der Stadt Zürich bleiben verbindlich.</p></article><article class="principle"><h3>Rechte Dritter</h3><p>Urheber-, Nutzungs- und Persönlichkeitsrechte werden respektiert.</p></article></div>`,
    quiz: { question: 'Welche Aussage passt am besten zum Prinzip der menschlichen Absenderschaft?', options: ['KI darf direkt publizieren, wenn der Prompt gut ist.', 'Eine Person oder Dienstabteilung bleibt für publizierte Inhalte verantwortlich.', 'Die Verantwortung liegt beim Anbieter des KI-Tools.'], answer: 1, explanation: 'Richtig: KI kann unterstützen, aber Verantwortung und Freigabe bleiben menschlich organisiert.' }
  },
  {
    kicker: 'Lektion 2', time: '2 min', title: 'Transparenz',
    body: `<p>Transparenz schafft Vertrauen. Die Bevölkerung soll erkennen können, ob sie mit einer Maschine oder mit einem Menschen interagiert.</p><ul><li><strong>Text:</strong> Keine Deklaration nötig, wenn Inhalte menschlich kontrolliert wurden. Deklaration nötig, wenn Inhalte ohne menschliche Kontrolle generiert werden, z. B. automatische Übersetzungen.</li><li><strong>Bild & Multimedia:</strong> KI-generierte Bilder müssen bei externer Publikation gekennzeichnet werden, z. B. «KI-generierte Illustration».</li><li><strong>Keine Irreführung:</strong> Keine fotorealistischen Personen, Deepfakes oder bekannte Gebäude in irreführenden Kontexten.</li></ul>`,
    quiz: { question: 'Ein KI-generiertes Symbolbild wird extern auf einer Kampagnenseite publiziert. Was ist nötig?', options: ['Keine Kennzeichnung, wenn das Bild gut aussieht.', 'Kennzeichnung als KI-generierte Illustration und Prüfung auf Rechte, CD/CI und Irreführung.', 'Nur der Dateiname muss KI enthalten.'], answer: 1, explanation: 'Genau: Bei Bild und Multimedia gelten strengere Transparenz- und Qualitätsanforderungen.' }
  },
  {
    kicker: 'Lektion 3', time: '2 min', title: 'Freigabe und Qualitätssicherung',
    body: `<p>Der bestehende Freigabeprozess für Kommunikationsmittel bleibt bestehen. KI ergänzt die Prüfpunkte, ersetzt sie aber nicht.</p><div class="callout"><strong>Vor Freigabe bestätigen:</strong><br>1. Fakten und mögliche Verzerrungen geprüft<br>2. Rechte und Quellen geklärt<br>3. Tonalität und Gestaltungsregeln der Stadt Zürich eingehalten<br>4. Geeignetes Tool genutzt; sensible Daten nur gemäss Vorgaben eingegeben</div>`,
    quiz: { question: 'Du hast mit externer KI einen Medienmitteilung-Entwurf erstellt. Was tust du vor der Freigabe?', options: ['Nur Rechtschreibung prüfen, weil KI den Rest erledigt.', 'Fakten, Bias, Rechte, Tonalität, Toolvorgaben und ordentlichen Freigabeprozess prüfen.', 'Sofort publizieren und bei Fehlern nachträglich korrigieren.'], answer: 1, explanation: 'Richtig: Qualitätssicherung ist ein verbindlicher menschlicher Schritt vor der Publikation.' }
  },
  {
    kicker: 'Lektion 4', time: '2 min', title: 'Usecases entlang der Kommunikations-Journey',
    body: `<div class="journey">${[
      ['1. Auftrag & Rahmen klären','Briefing schärfen, Zielgruppen- und Kanalfragen vorbereiten.','Prüffrage: Welche Daten, Rollen und Freigaben sind nötig?'],
      ['2. Recherche','Quellen strukturieren, Interviewfragen vorbereiten, Argumente sammeln.','Prüffrage: Sind Quellen belegbar und aktuell?'],
      ['3. Konzeption & Ideenfindung','Kampagnenansätze, Headlines und Varianten generieren.','Prüffrage: Passt die Idee zu Auftrag, Werten und Zielgruppe?'],
      ['4. Redaktion / Text','Rohfassungen, Kürzungen, einfache Sprache, Übersetzungsentwürfe.','Prüffrage: Wurde der Text fachlich und sprachlich geprüft?'],
      ['5. Audiovisueller Content','Storyboard, Alt-Texte, Bildideen, Visualisierungsvarianten.','Prüffrage: Ist KI-Content gekennzeichnet und nicht irreführend?'],
      ['6. Publikation & Weboptimierung','SEO-Titel, Teaser, Metadaten, barrierearme Struktur.','Prüffrage: Sind Inhalte nutzendenorientiert und CD/CI-konform?'],
      ['7. Interaktion & Moderation','Antwortvorschläge, FAQ, Tonalitätsvarianten für Kommentare.','Prüffrage: Erkennt die Bevölkerung Mensch oder Maschine?'],
      ['8. Monitoring & Wirkungsanalyse','Clustering von Feedback, Hypothesen, Reporting-Entwürfe.','Prüffrage: Werden personenbezogene Daten geschützt?']
    ].map(([h,p,q])=>`<article class="journey-card"><span class="tag">Praxis</span><h3>${h}</h3><p>${p}</p><p><strong>${q}</strong></p></article>`).join('')}</div>`
  },
  {
    kicker: 'Lektion 5', time: '1 min', title: 'Link-Liste',
    body: `<p>Nutze für die verbindliche Anwendung immer die aktuellen städtischen Grundlagen und die Vorgaben deiner Dienstabteilung.</p><ul><li><a href="https://www.stadt-zuerich.ch" target="_blank" rel="noreferrer">Website Stadt Zürich</a></li><li>Leitlinien zur Regierungs- und Verwaltungskommunikation (STRB 83/2017)</li><li>Richtlinie über die Nutzung von generativer künstlicher Intelligenz (STRB 2281/2025)</li><li>CD-Manual, Bildwelt und Sprachvorgaben der Stadt Zürich</li></ul><div class="callout"><strong>Abschluss:</strong> Du hast die zentralen Prinzipien, Transparenzregeln, Freigabeprüfungen und typische Usecases kennengelernt.</div>`
  }
];

let current = Number(localStorage.getItem('wbtCurrent') || 0);
let completed = new Set(JSON.parse(localStorage.getItem('wbtDone') || '[]'));
const $ = id => document.getElementById(id);
function save(){localStorage.setItem('wbtCurrent', current);localStorage.setItem('wbtDone', JSON.stringify([...completed]));}
function renderNav(){ $('navList').innerHTML = lessons.map((l,i)=>`<li class="${i===current?'active':''} ${completed.has(i)?'done':''}">${l.kicker}: ${l.title}</li>`).join(''); const pct=Math.round(completed.size/lessons.length*100); $('progressBar').style.width=pct+'%'; $('progressText').textContent=pct+'% abgeschlossen'; }
function render(){ const l=lessons[current]; $('lessonKicker').textContent=l.kicker; $('lessonTime').textContent=l.time; $('lessonTitle').textContent=l.title; $('lessonBody').innerHTML=l.body; $('feedback').textContent=''; $('feedback').className='feedback'; $('prevBtn').disabled=current===0; $('nextBtn').textContent=current===lessons.length-1?'Abschliessen':'Weiter'; $('quizForm').hidden=!l.quiz; $('checkBtn').hidden=!l.quiz; if(l.quiz){ $('quizForm').innerHTML=`<fieldset><legend>${l.quiz.question}</legend>${l.quiz.options.map((o,i)=>`<label><input type="radio" name="answer" value="${i}"> ${o}</label>`).join('')}</fieldset>`;} renderNav(); save(); }
$('checkBtn').addEventListener('click',()=>{ const l=lessons[current]; const choice=document.querySelector('input[name="answer"]:checked'); if(!choice){$('feedback').textContent='Bitte wähle eine Antwort aus.';$('feedback').className='feedback no';return;} if(Number(choice.value)===l.quiz.answer){completed.add(current);$('feedback').textContent=l.quiz.explanation;$('feedback').className='feedback ok';renderNav();save();} else {$('feedback').textContent='Noch nicht ganz. Lies die Lektion nochmals und prüfe die Verantwortung, Transparenz oder Freigabe.';$('feedback').className='feedback no';}});
$('nextBtn').addEventListener('click',()=>{completed.add(current); if(current<lessons.length-1){current++; render(); window.scrollTo({top:0,behavior:'smooth'});} else {renderNav(); $('feedback').textContent='Training abgeschlossen. Danke fürs Lernen!'; $('feedback').className='feedback ok'; save();}});
$('prevBtn').addEventListener('click',()=>{if(current>0){current--; render();}});
$('resetBtn').addEventListener('click',()=>{completed.clear(); current=0; localStorage.removeItem('wbtCurrent'); localStorage.removeItem('wbtDone'); render();});
render();
