---
title: Kom nemt i gang med at bruge QualWeb
date: 2022-02-14T08:30:41.293Z
author: Anne Thyme Nørregaard
summary: >-
  Qualweb er et testværktøj til test af tilgængelighed (accessibility) på
  websider. 

  Det er også det værktøj, der bruges til monitoreringen for webtilgængelighedsloven i Danmark, så det kan være godt at kende til det.
tags:
  - QualWeb
  - Testværktøj
  - Monitorering
---
Qualweb er et testværktøj til test af tilgængelighed på websider. 

Det er også det værktøj, der bruges til monitoreringen for webtilgængelighedsloven i Danmark, så det kan være godt at kende til det.

## QualWeb i monitoreringen for webtilgængelighedsloven

Digitaliseringsstyrelsen er ansvarlig myndighed for monitoreringen for webtilgængelighedsloven og udvælger, hvilke websteder der skal monitoreres. Den praktiske del med at teste webstederne ved hjælp af QualWeb udføres af et konsortium bestående af bl.a. Inklusio og [Inqlude IT](https://inqludeit.dk). 

Når vi monitorerer websteder, crawler vi først webstedet for at få en liste over alle sider på webstedet. 

Derefter tester vi alle siderne med QualWeb og gemmer data om hvilke fejl, der bliver fundet. 

Til sidst laver vi en masse udregninger på de gemte data, så vi kan vise en masse oversigter, bl.a. en samlet tilgængelighedsscore, oversigter over sider med flest fejl på m.m.

Hvis man er den heldige modtager af en monitoreringsrapport, vil rapporten indeholde et unikt link til at gå ind på webtilsyn.dk, hvor man kan se sine egne testresultater.



![QualWeb testværktøj, viser QualWebs logo og nogle filtreringsmuligheder](/img/qualweb-testværktøj-logo-filtre.png)

## Hvad kan du selv gøre med QualWeb?

QualWeb er et open source testværktøj, så i princippet kan du gøre præcis det samme, som vi gør i monitoreringen. (Dog uden adgang til at få vist resultaterne på webtilsyn.dk, da dette er et websted udviklet specielt til den danske monitoreringsindsats.)

I praksis kræver det dog lidt økonomi og mandskab at få QualWeb til at teste et helt websted, da man skal være softwareudvikler for at omsætte den bunke kode-filer, som udgør QualWeb, til et fungerende testværktøj, og der skal noget infrastruktur i form af servere og databaser til for, at det kan køre. 

I korte træk er der en god grund til, at du måske betaler Siteimprove eller et lignende firma for en tilsvarende service. 

Til gengæld er det super nemt at teste en enkelt webside ad gangen ved hjælp af QualWeb. 

## Test en enkelt side med QualWeb online Evaluator

Fordele: 

* Du kan gøre det fra en hvilken som helst browser. 
* Du skal ikke installere noget.

### Trin 1: Gå ind på QualWeb Evaluator

Gå ind på [Qualweb online Evaluator](http://qualweb.di.fc.ul.pt/evaluator/)

### Trin 2: Indtast URL

Indtast din URL – altså adressen på den webside, du gerne vil have testet. 
Husk https:// (eller http://) foran, fx https://www.inklusio.dk.

### Trin 3: Foretag indstillinger

Under Settings lige nedenunder indtastningsfeltet til URL kan du sætte kryds ud for ”ACT Rules” og/eller ”WCAG Techniques”. 
Sørg for, at der KUN er sat kryds i ”ACT Rules” her. 

#### Hvorfor skal jeg fjerne krydset i ”WCAG Techniques?”

Hvis du vil have testresultater, der stemmer overens med dem, du vil få i en monitorering fra Digitaliseringsstyrelsen, så skal du kun sætte kryds i ”ACT Rules”.

”WCAG Techniques” medtages ikke i monitoreringen, da websiden kan leve op til det samme succeskriterium på en anden måde, og der derfor kan opstå en del falske positiver: noget, som registreres som et tilgængelighedsproblem, men som måske ikke er det i virkeligheden.

Vi anbefaler derfor at nøjes med at fokusere på ”ACT Rules” i automatisk test.

### Trin 4:  Få dine testresultater

Tryk på Check-knappen, og kig på dine resultater. 

## Test en enkelt side med QualWeb Chrome Extension

Fordele: 

* Du kan få vist dine fejl direkte på din side!

### Trin 1: Hent QualWeb Chrome Extension

[Download Qualweb Extension](https://chrome.google.com/webstore/detail/qualweb-extension/ljgilomdnehokancdcbkmbndkkiggioc) fra Chrome Web Store.

### Trin 2: Åbn den side, du vil teste

Åbn den side, du vil teste, i Chrome.

### Trin 3: Åbn Qualweb extension

Højreklik et sted på siden og vælg ”Inspicer”/”Inspect”.
I det panel, som åbner ude til højre, er der øverst oppe nogle faneblade. Tryk på ”>>”-knappen ved siden af fanebladene og vælg QualWeb. 

### Trin 4: Foretag indstillinger

Under ”Select the modules to evaluate:” kan du sætte kryds ud for ”ACT Rules” og/eller ”WCAG Techniques”. 

Sørg for at der KUN er sat kryds i ”ACT Rules” her. 

Se evt. ”[Hvorfor skal jeg fjerne krydset i ”WCAG Techniques?”](#hvorfor-skal-jeg-fjerne-krydset-i-%E2%80%9Dwcag-techniques%3F%E2%80%9D) ovenfor.

### Trin 5: Få dine testresultater

Tryk på ”Evaluate”-knappen, og kig på dine resultater.

Se evt. blogindlægget ”[Tips: få overblik over dine QualWeb testresultater](https://inklusio.dk/posts/tips-f%C3%A5-overblik-over-dine-qualweb-testresultater/)”. Der er små forskelle på bl.a. filtreringsmulighederne mellem QualWeb online Evaluator og QualWeb Chrome extension, men principperne er de samme.

### Trin 6: Få highlightet dine fejl direkte på siden!

I den kasse, som indrammer hvert enkelt testresultat inde under en fejltype, findes der en ”Highlight Element”/”Stop Highlight”-knap.

Hvis du klikker den fra og til, vil du kunne se, at der et sted på den testede side bliver vist en stiplet boks omkring det element, der har problemet (eller som er testet og fundet ok, hvis det er et Passed resultat, dvs. et bestået resultat.

Dette er super smart i forhold til at kunne lokalisere de fejlbehæftede elementer og få lagt en plan for at få dem rettet.

## Kan jeg få de samme resultater med andre testværktøjer?

QualWeb er baseret på standardiserede testregler for test af webtilgængelighed, de såkaldte Accessibility Conformance Testing (ACT) regler. 

Alle testværktøjer, der bruger ACT-regler, burde i princippet give de samme testresultater. I praksis kan der dog være små forskelle i implementeringerne, og nogle værktøjer kan have bugs, som ikke findes i de andre værktøjer.

Ud over QualWeb, kender du måske også testværktøjerne fra Siteimprove og Deque (axe), som også bruger ACT-regler. Begge firmaer stiller også gratis testværktøjer til rådighed.

[Siteimprove browser extension](https://siteimprove.com/da-dk/core-platform/integrations/browser-extensions/) kan fås til flere browsere og kan visuelt vise direkte på din webside, hvor den har fundet et problem. Hvis du har svært ved at fortolke dine QualWeb-resultater, kan Siteimproves browser extension måske hjælpe dig med at fastslå, hvilket element på din side, der har problemer. 

[axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) fra Deque er lidt mere rettet mod udviklere, og du skal ind i browserens kodeinspektions-panel for at bruge det, men det kan stort set det samme som QualWeb og Siteimproves browser extensions. \
Axe bruges også i flere andre testværktøjer, herunder Google Lighthouse. 

Der findes også andre testværktøjer, der bruger ACT-regler, men de er ikke lige så udbredte i Danmark. 

Du kan altid finde en opdateret liste over testværktøjer og -metoder, der bruger ACT-regler, på https://act-rules.github.io/pages/implementations/overview/.

Hvis du bruger et testværktøj, som ikke står på denne liste, eller som ikke reklamerer med, at de bruger en testmotor, som du kan finde på listen, så kan du godt regne med, at værktøjet ikke bruger ACT-regler. 

Sådanne værktøjer laver ikke nødvendigvis resultater, som er sammenlignelige QualWeb resultater og dermed med monitoreringen for webtilgængelighed.

Vi håber, at du kommer godt i gang med at bruge QualWeb :)

Læs også vores blogindlæg ”[Tips: få overblik over dine QualWeb testresultater](https://inklusio.dk/posts/tips-f%C3%A5-overblik-over-dine-qualweb-testresultater/)”.