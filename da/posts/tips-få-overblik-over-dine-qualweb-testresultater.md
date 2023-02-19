---
title: "Tips: få overblik over dine QualWeb-testresultater"
date: 2022-02-14T11:13:09.179Z
author: Anne Thyme Nørregaard
summary: "QualWeb er et testværktøj, som du kan bruge til at teste
  tilgængeligheden på din webside. Her får du vores bedste tips til at forstå
  testresultaterne. "
tags:
  - QualWeb
  - Testresultater
  - Monitorering
---
QualWeb er et testværktøj, som du kan bruge til at teste tilgængeligheden på din webside. Det er samtidig det værktøj, der bruges til monitoreringen for webtilgængelighedsloven i Danmark.

Når du bruger QualWeb, er selvfølgelig vigtigt at vide, hvordan du skal læse testresultaterne – og det får du vores tips til her! 😊

Hvis du er i tvivl om, hvordan du tester med QualWeb, så læs først vores artikel ”[Kom nemt i gang med at bruge QualWeb](https://inklusio.dk/posts/s%C3%A5dan-kommer-du-nemt-i-gang-med-at-bruge-qualweb/)”.

## Tips til at få overblik over dine QualWeb-testresultater

### Tip 1: Brug filtre

Listen over resultater kan være en smule uoverskuelig, så du kan med fordel bruge filtrene under overskriften ”Outcome” til at kun få vist ting, der fx er Failed eller en Warning (Warnings skal testes manuelt, se forklaring under ”[Tip 2: Forstå status på dine testresultater](#tip-2%3A-forst%C3%A5-status-p%C3%A5-dine-testresultater)" nedenfor).\
Hvis du vil se alt, QualWeb tester for, skal du sætte kryds i alle felter under "Outcome". 

Derudover er det altid en god ide at filtrere på ”Level”, så der kun vises ”A” og ”AA”. (Dette filter findes desværre kun i [QualWeb online Evaluator](<http://qualweb.di.fc.ul.pt/evaluator/ >), og ikke i [QualWeb Chrome extension](https://chrome.google.com/webstore/detail/qualweb-extension/ljgilomdnehokancdcbkmbndkkiggioc)).

Også når du åbner resultaterne for én bestemt fejltype, er det en god ide at filtrere, så alle dine ”Passed” resultater ikke fylder hele din skærm.

### Tip 2: Forstå status på dine testresultater

* **Passed** = der er et eller flere elementer, som er relevante for denne test, og de består kravene i denne test. Fx er der et billede, som har et tekstalternativ.
* **Failed** = der er et eller flere elementer, som er relevante for denne test, og de lever IKKE op til kravene i testen. Fx er det et billede, som IKKE har et tekstalternativ.
* **Warning** = der er et eller flere elementer, som er relevante for denne test, og det var ikke muligt at teste dem færdig med automatisk test, så et menneske skal se, om de lever op til kravene i testen. Fx er der en tekst, der har en gradient som baggrund, så kontrasten mellem tekst og baggrund kunne ikke testes automatisk.
* **Not applicable** = der var ingen elementer på siden, som var relevante for denne test. Fx var der ikke nogen billeder.

### Tip 3: Kig efter, om der er opgivet succeskriterier ved en fejltype

For at gøre det hele lidt besværligt at forstå, findes der ACT-regler, som man godt kan fejle uden at have fejl på et eneste succeskriterium i WCAG. 

Når du åbner en fejltype i QualWeb, skal du derfor huske at tjekke, om der står nogle succeskriterier opgivet (under overskriften ”Success Criteria”, fx ”1.1.1 Non-Text Content (Level A)”). 

Hvis der IKKE er opgivet nogle WCAG-succeskriterier for en fejltype, så er det ikke nødvendigvis en fejl for noget i WCAG.

I monitoreringerne for webtilgængelighedsloven medtages kun de ACT-regler, som er tilknyttet succeskriterier i WCAG 2.1.
Hvis du vil have testresultater, der stemmer overens med monitoreringen, så skal du altså bare ignorere alle fejltyper i QualWeb, som ikke har WCAG-succeskriterier opgivet.

![Kvinde arbejder ved computer, på skærmen står der "tips og tricks". ](/img/tips-tricks-online-lille.jpg)



### Tip 4: Kig på fejlbeskrivelsen og kodevisningen for at forstå, hvad fejlen er

Ved hvert enkelt element, som er testet for en bestemt fejltype, er der angivet en lille beskrivelse, som fortæller hvorfor netop dette element består eller fejler en test, eller hvorfor det ikke kan testes færdig automatisk. Disse beskrivelser er derfor vigtige for at forstå testresultaterne.

For at finde ud af, hvilket element på websiden, det drejer sig om, viser Qualweb både den HTML-kode, som elementet består af, og nedenunder det en ”Element selector” (i QualWeb Chrome extension hedder disse ”Pointer”), som kan bruges til at udpege netop dette element på siden programmatisk. 

Det nemmeste er dog nok at kigge på html-koden og se, om man kan gætte, hvad det er for et element ud fra fx den tekst, der er i elementet.

### Tip 5: Brug et værktøj til at få vist dine fejl direkte på siden

Ved hjælp af [QualWeb Chrome extension](https://chrome.google.com/webstore/detail/qualweb-extension/ljgilomdnehokancdcbkmbndkkiggioc) kan du faktisk få vist fejlene direkte på siden!

Se også afsnittet ”[Test en enkelt side med Qualweb Chrome Extension](https://inklusio.dk/posts/s%C3%A5dan-kommer-du-nemt-i-gang-med-at-bruge-qualweb#test-en-enkelt-side-med-qualweb-chrome-extension)” i vores blogpost ”[Kom nemt i gang med at bruge QualWeb](https://inklusio.dk/posts/s%C3%A5dan-kommer-du-nemt-i-gang-med-at-bruge-qualweb/)”.

I Qualweb Chrome extension er der i den kasse, som indrammer hvert enkelt testresultat inde under en fejltype, en ”Highlight Element”/”Stop Highlight”-knap.
Hvis du klikker den fra og til, vil du kunne se, at der et sted på den testede side bliver vist en stiplet boks omkring det element, der har problemet (eller som er testet og fundet ok, hvis det er et Passed resultat).

Alternativt kan du bruge et andet værktøj, som fx [Siteimprove browser extension](https://siteimprove.com/da-dk/core-platform/integrations/browser-extensions/), til at highlighte fejl, som du har svært ved at finde ud fra Qualwebs kode-stykker.

Se også afsnittet ”[Kan jeg få de samme resultater med andre testværktøjer?](https://inklusio.dk/posts/s%C3%A5dan-kommer-du-nemt-i-gang-med-at-bruge-qualweb#kan-jeg-f%C3%A5-de-samme-resultater-med-andre-testv%C3%A6rkt%C3%B8jer%3F)” i vores blogpost ”[Kom nemt i gang med at bruge QualWeb](https://inklusio.dk/posts/s%C3%A5dan-kommer-du-nemt-i-gang-med-at-bruge-qualweb/)”.