var QS = [
  {
    cat:'Grammatik',
    q:'Wählen Sie die richtige Form:\n\n„Er behauptete, er _____ das Dokument nie gesehen _____."',
    ctx:'Indirekte Rede in einem formellen Kontext.',
    opts:['habe / haben','hätte / haben','hat / gehabt','habe / gehabt'],
    ans:3,
    expl:'Indirect speech (indirekte Rede) in formal German uses Konjunktiv I: \'habe ... gehabt\' = Konjunktiv I Perfekt of \'sehen\'. Konjunktiv II \'hätte gehabt\' would imply a hypothetical, not reported speech.'
  },
  {
    cat:'Grammatik',
    q:'Welcher Satz enthält einen Grammatikfehler?',
    ctx:null,
    opts:['Wegen des schlechten Wetters blieben wir zu Hause.','Trotz des Regens gingen wir spazieren.','Während dem Essen sprachen wir über Arbeit.','Aufgrund der Verspätung verpassten wir den Anschluss.'],
    ans:2,
    expl:'\'Während\' always takes the GENITIVE in standard written German: \'während des Essens\'. \'Während dem\' (Dative) is a common spoken error but wrong at B2 level.'
  },
  {
    cat:'Grammatik',
    q:'Welche Form ist korrekt?\n\n"Die Ergebnisse _____ nächste Woche bekannt _____."',
    ctx:'Formeller Bericht.',
    opts:['werden / gegeben werden','sollen / gegeben werden','werden / gegeben','sind / gegeben worden'],
    ans:2,
    expl:'\'Werden bekannt gegeben\' is correct Vorgangspassiv: werden + Partizip II. Option D (Perfekt Passiv) refers to something already completed.'
  },
  {
    cat:'Wortschatz',
    q:'Was bedeutet "etwas in Kauf nehmen"?',
    ctx:null,
    opts:['Etwas günstig kaufen','Einen Nachteil bewusst akzeptieren','Etwas zurückgeben','Einen Kompromiss anbieten'],
    ans:1,
    expl:'\'Etwas in Kauf nehmen\' means to accept something negative as a trade-off. Example: \'Fuer den Job nimmt sie lange Pendelzeiten in Kauf.\' Nothing to do with shopping.'
  },
  {
    cat:'Wortschatz',
    q:'Welches Adjektiv beschreibt jemanden, der sehr wenig redet?',
    ctx:null,
    opts:['gesprächig','aufgeschlossen','wortkarg','redselig'],
    ans:2,
    expl:'\'Wortkarg\' = laconic/tight-lipped. \'Gesprächig\' and \'redselig\' both mean talkative (the opposite). \'Aufgeschlossen\' = open-minded.'
  },
  {
    cat:'Wortschatz',
    q:'Welches Wort passt am besten?\n\n"Ihre _____ für das Fach Biologie war schon als Kind erkennbar."',
    ctx:null,
    opts:['Neugier','Begabung','Begeisterung','Leidenschaft'],
    ans:1,
    expl:'\'Begabung\' (talent/gift) fits best -- it refers to an innate ability recognisable from an early age. The other words describe emotions or curiosity, not natural talent.'
  },
  {
    cat:'Hören',
    q:'Sie hören einen Vortrag:\n\n"Die Zahl der Menschen in Großstädten steigt rasant. Experten warnen: Ohne massive Investitionen in den sozialen Wohnungsbau wird die Wohnungsnot zunehmen. Zudem betonen Stadtplaner, dass Gentrifizierung bestehende Gemeinschaften zerstören kann."\n\nWelche zwei Probleme werden genannt?',
    ctx:'Hören-Simulation: Lesen Sie die Frage zuerst.',
    opts:['Bevölkerungsrückgang und Arbeitslosigkeit','Wohnungsmangel und Gentrifizierung','Umweltverschmutzung und Verkehr','Mangelnde Schulen und Krankenhäuser'],
    ans:1,
    expl:'Two problems are named: (1) Wohnungsnot (housing shortage) and (2) Gentrifizierung destroying communities. A global listening task -- identifying multiple main points.'
  },
  {
    cat:'Hören',
    q:'Podcast-Diskussion über KI:\n\nExpertin A: "KI wird Routinejobs ersetzen, aber neue kreative Jobs entstehen lassen."\nExperte B: "Da bin ich skeptisch. Die neuen Jobs werden viele nicht erreichen -- sie erfordern zu hohe Qualifikationen."\n\nWorüber ist Experte B skeptisch?',
    ctx:'Hören-Simulation: Achten Sie auf die Nuance.',
    opts:['Er glaubt nicht, dass KI Jobs ersetzen wird.','Er bezweifelt, dass neue Jobs für alle zugänglich sein werden.','Er denkt, KI schafft gar keine neuen Berufe.','Er lehnt KI grundsätzlich ab.'],
    ans:1,
    expl:'Experte B does not deny new jobs will emerge -- he questions their accessibility. Identifying the precise object of scepticism is a key B2 Hören skill.'
  },
  {
    cat:'Hören',
    q:'Radiobericht:\n\n"Nach monatelangen Tarifverhandlungen einigten sich beide Seiten: Löhne steigen um 4,5 Prozent -- allerdings erst nach einer Nullrunde von sechs Monaten. Die Gewerkschaft nannte das Ergebnis akzeptabel, wenn auch nicht zufriedenstellend."\n\nWie bewertet die Gewerkschaft das Ergebnis?',
    ctx:'Hören-Simulation.',
    opts:['Vollkommen zufrieden','Ablehnend -- sie werden weiterkämpfen','Bedingt positiv -- akzeptabel, aber nicht ideal','Sie hat keine Meinung geäußert'],
    ans:2,
    expl:'\'Akzeptabel, wenn auch nicht zufriedenstellend\' = acceptable but not satisfying -- a qualified, lukewarm positive. Recognising nuanced attitude language is crucial in B2 Hören.'
  },
  {
    cat:'Leseverstehen',
    q:'Lesen Sie:\n\n"Fernarbeit verbessert die Work-Life-Balance vieler Beschäftigter, birgt aber Risiken: Die Grenzen zwischen Berufs- und Privatleben verschwimmen zunehmend, was langfristig zu Burnout führen kann. Unternehmen sind daher gefordert, klare Richtlinien für die Erreichbarkeit außerhalb der Arbeitszeit einzuführen."\n\nWas fordert der Text von Unternehmen?',
    ctx:null,
    opts:['Ein Verbot von Homeoffice','Mehr Homeoffice für alle','Klare Regeln zum Schutz der Freizeit','Bessere technische Ausstattung'],
    ans:2,
    expl:'The text calls for companies to introduce clear guidelines on availability outside working hours -- protecting employees private time.'
  },
  {
    cat:'Leseverstehen',
    q:'Was bedeutet "die Grenzen verschwimmen" im obigen Text?',
    ctx:'Bezug auf den Homeoffice-Text.',
    opts:['Die Grenzen werden klarer','Die Unterschiede werden undeutlicher','Die Regeln werden strenger','Die Arbeitszeiten werden länger'],
    ans:1,
    expl:'\'Verschwimmen\' = to blur/become indistinct. The boundary between work and private life becomes unclear. A typical B2 vocabulary-in-context question.'
  },
  {
    cat:'Leseverstehen',
    q:'Welche Schlussfolgerung passt?\n\n"Trotz der hohen Kosten entschieden sich 78% der Befragten für das umweltfreundlichere Produkt."',
    ctx:null,
    opts:['Preis ist der wichtigste Kaufentscheidungsfaktor.','Die meisten Befragten stellten Umweltschutz über den Preis.','Das Produkt war günstiger als erwartet.','Die Befragten hatten kein Interesse an Umweltthemen.'],
    ans:1,
    expl:'\'Trotz der hohen Kosten\' (despite high cost) + 78% chose it = majority prioritised eco-friendliness over price. Tests inference from concessive structures.'
  },
  {
    cat:'Redemittel',
    q:'Sie möchten eine Meinung abschwächen und Offenheit zeigen. Welcher Ausdruck passt?',
    ctx:null,
    opts:['Das steht völlig außer Frage.','Man könnte durchaus argumentieren, dass ... obwohl ...','Ich behaupte ohne Zweifel, dass ...','Niemand kann anderer Meinung sein.'],
    ans:1,
    expl:'\'Man könnte durchaus argumentieren, dass ... obwohl ...\' hedges a claim and signals openness to counterarguments -- a mark of B2+ discourse.'
  },
  {
    cat:'Redemittel',
    q:'Welcher Ausdruck leitet eine Schlussfolgerung in einem formellen Text ein?',
    ctx:null,
    opts:['Ach ja, und außerdem ...','Na ja, irgendwie ...','Daraus lässt sich schließen, dass ...','Und dann war da noch ...'],
    ans:2,
    expl:'\'Daraus lässt sich schließen, dass ...\' is a standard formal connector for conclusions -- essential for B2 Schreiben and Sprechen. The others are informal fillers.'
  },
  {
    cat:'Redemittel',
    q:'Sie antworten auf Kritik in einer formellen Diskussion. Was ist am angemessensten?',
    ctx:null,
    opts:['Das stimmt überhaupt nicht!','Ich sehe das anders, nehme Ihren Einwand aber zur Kenntnis.','Keine Ahnung, was Sie meinen.','Da haben Sie leider keine Ahnung.'],
    ans:1,
    expl:'\'Ich sehe das anders, nehme Ihren Einwand aber zur Kenntnis\' disagrees while acknowledging the other\'s point respectfully -- the required register for formal B2 discussions.'
  },

  // --- Batch 2 ---

  {
    cat:'Grammatik',
    q:'Wählen Sie die richtige Form:\n\n"Wenn er rechtzeitig _____, _____ er die Prüfung _____."',
    ctx:'Irrealis der Vergangenheit.',
    opts:['angekommen wäre / hätte / bestanden','angekommen hätte / wäre / bestanden','wäre angekommen / hätte / bestanden','wäre angekommen / würde / bestehen'],
    ans:0,
    expl:'Konjunktiv II Vergangenheit uses wäre/hätte + Partizip II. \'Ankommen\' takes \'sein\' → \'angekommen wäre\' (verb-final in subordinate clause). \'Bestehen\' takes \'haben\' → \'hätte bestanden\'.'
  },
  {
    cat:'Grammatik',
    q:'Welcher Konnektor passt?\n\n"Er ist _____ qualifiziert, _____ bekommt er keine Stelle."',
    ctx:'Zweiteilige Konnektoren.',
    opts:['entweder ... oder','sowohl ... als auch','zwar ... aber','weder ... noch'],
    ans:2,
    expl:'\'Zwar ... aber\' concedes a point then counters it: he IS qualified, BUT he gets no job. \'Entweder...oder\' = either/or; \'sowohl...als auch\' = both/and; \'weder...noch\' = neither/nor.'
  },
  {
    cat:'Grammatik',
    q:'Welcher Satz hat die gleiche Bedeutung wie:\n\n"Das Formular muss ausgefüllt werden."',
    ctx:null,
    opts:['Das Formular darf ausgefüllt werden.','Das Formular ist auszufüllen.','Das Formular wird ausgefüllt.','Das Formular sollte ausgefüllt worden sein.'],
    ans:1,
    expl:'\'Sein + zu + Infinitiv\' is a Passiversatzform expressing obligation, equivalent to \'müssen + Passiv\'. \'Darf\' = permission; \'wird ausgefüllt\' = simple Präsens Passiv (no obligation); option D is semantically different.'
  },

  {
    cat:'Wortschatz',
    q:'Welches Verb bildet eine feste Kollokation mit "Verantwortung"?',
    ctx:null,
    opts:['machen','bringen','übernehmen','stellen'],
    ans:2,
    expl:'The standard collocation is \'Verantwortung übernehmen\' (to take on / assume responsibility). The other combinations are not idiomatic in standard German.'
  },
  {
    cat:'Wortschatz',
    q:'Was bedeutet "jemandem auf den Zahn fühlen"?',
    ctx:null,
    opts:['Jemandem beim Zahnarzt helfen','Jemanden genau befragen oder prüfen','Jemandem körperliche Schmerzen bereiten','Jemandem eine unangenehme Wahrheit sagen'],
    ans:1,
    expl:'\'Jemandem auf den Zahn fühlen\' = to probe or quiz someone carefully, to put someone through their paces. The idiom has nothing to do with dentistry literally.'
  },
  {
    cat:'Wortschatz',
    q:'Welches Wort hat eine NEGATIVE Konnotation im Vergleich zu den anderen?',
    ctx:null,
    opts:['beharrlich','stur','ausdauernd','konsequent'],
    ans:1,
    expl:'\'Stur\' (pig-headed, stubborn) carries a negative tone -- implying inflexibility without reason. \'Beharrlich\', \'ausdauernd\', and \'konsequent\' all describe persistence positively.'
  },

  {
    cat:'Hören',
    q:'Radiointerview mit einer Unternehmerin:\n\n"Wir haben in den ersten Jahren kaum Gewinn gemacht. Aber ich war überzeugt: Das Produkt löst ein echtes Problem. Man muss manchmal bereit sein, kurzfristig zu verzichten, um langfristig etwas aufzubauen."\n\nWas war laut der Unternehmerin entscheidend für ihren Erfolg?',
    ctx:'Hören-Simulation.',
    opts:['Schnelle Gewinne in der Anfangsphase','Die Überzeugung vom Produkt und langfristiges Denken','Staatliche Förderung','Ein großes Team von Anfang an'],
    ans:1,
    expl:'She emphasises conviction in the product and willingness to sacrifice short-term gain for long-term success. Neither funding nor team size are mentioned -- a common distractor trap in B2 Hören.'
  },
  {
    cat:'Hören',
    q:'Vortrag über Klimawandel:\n\n"Viele glauben, individuelle Maßnahmen wie Recycling oder weniger Fleisch essen seien entscheidend. Wissenschaftler betonen jedoch: Ohne systemische Veränderungen auf politischer und wirtschaftlicher Ebene werden individuelle Bemühungen nicht ausreichen."\n\nWelche Position vertreten die Wissenschaftler?',
    ctx:'Hören-Simulation: Achten Sie auf den Kontrast.',
    opts:['Individuelle Maßnahmen sind ausreichend.','Recycling ist die wichtigste Maßnahme.','Strukturelle Veränderungen sind unbedingt notwendig.','Politische Maßnahmen sind wirkungslos.'],
    ans:2,
    expl:'\'Jedoch\' signals the contrasting scientific view: systemic change is required. Option D inverts the meaning -- scientists do not say political measures are useless, only that they are essential.'
  },
  {
    cat:'Hören',
    q:'Gespräch zwischen zwei Kollegen:\n\nA: "Ich finde, wir sollten das Meeting auf Freitag verschieben."\nB: "Da bin ich zwiegespalten. Einerseits verstehe ich deine Gründe, andererseits haben wir dann weniger Vorbereitungszeit."\n\nWie reagiert Kollege B?',
    ctx:'Hören-Simulation: Nuance erkennen.',
    opts:['Er stimmt vollständig zu.','Er lehnt den Vorschlag klar ab.','Er ist unentschieden und nennt einen Nachteil.','Er ist dem Thema gegenüber gleichgültig.'],
    ans:2,
    expl:'\'Zwiegespalten\' = torn/undecided. B acknowledges both sides with \'einerseits ... andererseits\', then identifies a concrete downside. Recognising ambivalent stance markers is a key B2 Hören skill.'
  },

  {
    cat:'Leseverstehen',
    q:'Lesen Sie:\n\n"Studien zeigen, dass Menschen in sozialen Netzwerken dazu neigen, Informationen zu bevorzugen, die ihre bestehenden Ansichten bestätigen. Dieses Phänomen, bekannt als Bestätigungsfehler, kann dazu führen, dass sich gesellschaftliche Gruppen zunehmend voneinander entfernen."\n\nWas beschreibt der Text?',
    ctx:null,
    opts:['Warum soziale Netzwerke Menschen näherbringen','Wie politische Meinungen online entstehen','Einen psychologischen Effekt, der gesellschaftliche Spaltung fördert','Die Vorteile digitaler Informationsquellen'],
    ans:2,
    expl:'The Bestätigungsfehler (confirmation bias) is described as causing groups to drift apart -- a form of societal polarisation. The text is critical of social networks, not positive about them.'
  },
  {
    cat:'Leseverstehen',
    q:'Was bedeutet "dazu neigen" im obigen Text?',
    ctx:'Bezug auf den Social-Media-Text.',
    opts:['Dazu gezwungen sein','Eine Tendenz zu etwas haben','Dazu in der Lage sein','Sich dagegen entscheiden'],
    ans:1,
    expl:'\'Neigen zu\' = to tend to, to have a tendency toward. It describes a behavioural pattern, not compulsion (gezwungen), ability (in der Lage), or conscious decision (entscheiden).'
  },
  {
    cat:'Leseverstehen',
    q:'Welche Schlussfolgerung passt am besten zum folgenden Satz?\n\n"Obwohl das Unternehmen seit Jahren Verluste meldet, hält das Management an der bisherigen Strategie fest."',
    ctx:null,
    opts:['Das Management plant eine grundlegende Strategieänderung.','Das Unternehmen wirtschaftet erfolgreich.','Das Management reagiert nicht auf finanzielle Warnsignale.','Das Unternehmen hat keine wirtschaftlichen Probleme.'],
    ans:2,
    expl:'\'Obwohl ... Verluste ... hält fest\' = despite losses, management persists. \'Festhalten an\' implies ignoring the signals to change. A concessive structure (obwohl) is a key inference trigger at B2.'
  },

  {
    cat:'Redemittel',
    q:'Sie wollen einen Punkt einräumen, aber gleichzeitig einschränken. Welcher Ausdruck passt?',
    ctx:null,
    opts:['"Abgesehen davon, dass ..."','"Zugegeben, ... jedoch ..."','"Infolgedessen ..."','"Dem zufolge ..."'],
    ans:1,
    expl:'\'Zugegeben, ... jedoch ...\' concedes a point then qualifies it -- precisely the structure for \'einräumen und einschränken\'. \'Abgesehen davon\' dismisses rather than concedes. The others are causal/result connectors.'
  },
  {
    cat:'Redemittel',
    q:'Sie schreiben eine formelle Stellungnahme. Wie leiten Sie Ihre Argumentation am besten ein?',
    ctx:null,
    opts:['"Ich finde halt, dass ..."','"Na ja, eigentlich ..."','"Im Folgenden möchte ich darlegen, dass ..."','"Also, ich meine ..."'],
    ans:2,
    expl:'\'Im Folgenden möchte ich darlegen, dass ...\' is the correct formal register for introducing an argument in a written Stellungnahme. The other options are informal fillers that would lower the register score in a B2 exam.'
  },
  {
    cat:'Redemittel',
    q:'Sie möchten sich auf ein zuvor genanntes Argument beziehen. Welcher Ausdruck ist angemessen?',
    ctx:null,
    opts:['"Was den oben genannten Punkt betrifft, ..."','"Und dann noch ..."','"Egal was ..."','"Ich frage mich ..."'],
    ans:0,
    expl:'\'Was ... betrifft\' is a standard formal topic-referencing structure in German, suitable for B2 Schreiben and Sprechen. The others are informal, evasive, or off-register for a formal discussion.'
  }
];
