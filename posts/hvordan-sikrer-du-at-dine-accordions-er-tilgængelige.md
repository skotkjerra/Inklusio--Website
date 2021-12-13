---
title: Sådan sikrer du, at dine accordions er tilgængelige
date: 2021-05-20T09:05:29.686Z
author: Anne Thyme Nørregaard
summary: Accordions er en af de typer af interaktive elementer, hvor vi ofte ser
  mange af de samme tilgængelighedsproblemer igen og igen på forskellige
  websteder. Her kommer en lille guide til, hvad du især skal være opmærksom på
  i accordions for at undgå, at du begår alle de mest almindelige
  tilgængelighedsfejl for denne type elementer.
tags:
  - Vejledninger
  - Test
---
Accordions er en af de typer af interaktive elementer, hvor vi ofte ser mange af de samme tilgængelighedsproblemer igen og igen på forskellige websteder.

Vi vil gerne hjælpe dig med at teste og fikse dine accordions, så du kan få forbedret tilgængeligheden på dit websted.

Her kommer en lille guide til, hvad du især skal være opmærksom på i accordions for at undgå, at du begår alle de mest almindelige tilgængelighedsfejl for denne type elementer.

Guiden bør nok følges af en lille advarsel: Mange af problemerne og løsningerne er af en ret teknisk karakter. Med lidt øvelse kan du selv teste det meste af det, uanset din baggrund. Men når de fundne tilgængelighedsproblemer skal fikses, skal der en webudvikler på banen.

## Hvad er en accordion?

Accordion betyder harmonika, og du kender dem sikkert godt: en sektion med sådan nogle ”blokke” med overskrifter for indholdet på en webside, og med et plus eller en pil i enten den ene eller anden side af blokken, der viser, at du kan få vist indholdet i dette afsnit ved at klikke på overskriften. 
Og når afsnittet er åbent, bliver plusset til et minus eller pilen vender sig om og indikerer, at du ved at trykke på overskriften igen, kan lukke indholdet sammen igen.

Stadig ikke helt sikker på, hvad en accordion egentlig er? Herunder kan du se et screenshot af en [accordion fra Det Fælles Designsystem](https://designsystem.dk/komponenter/accordions/):

![Skærmbillede af accordion med tre overskrifter med plusser ud for i venstre side samt en "Start"-knap på den første overskrift](/img/screenshot-2021-05-19-at-15.18.01.png)

Accordions bruges ofte på indholdstunge sider til at få indholdet til at fremstå mere overskueligt og let at gå til.

## Hvilke tilgængelighedsproblemer findes typisk i accordions?

Der findes ingen standardfunktionalitet til at lave accordions, og derfor laves de ofte ved hjælp af elementer, som i sig selv ikke er interaktive (ofte `<div>`-elementer, som bare er en slags tom beholder i koden, uden nogen betydning i sig selv, eller tabeller), og som derfor skal have tilføjet en masse tilgængelighedsfeatures for at sikre, at de også virker for brugere, som ikke bruger mus, eller som ikke nødvendigvis kan se den visuelle præsentation af elementerne.
Kombinationen af, at interaktionsmønstret i en accordion faktisk er ret komplekst, og at de som regel bygges af elementer, som ikke i sig selv er interaktive, bevirker, at du skal være ekstra opmærksom på dem.

## Åbne/lukke med tastatur

Først og fremmest er det vigtigt at sikre, at alle interaktive elementer kan nås ved hjælp af tastaturnavigation.
Dette kan du nemt selv teste: 

* Brug tastaturets tabulator-knap (den, der laver indrykninger, lige over caps lock) til at hoppe mellem de interaktive elementer på din webside.
* Tjek, at der i din accordion er en visuel indikation af, hvor du lige nu befinder dig med tastaturnavigationen. Hvis der er ikke er en visuel indikation, er dette en fejl, der skal rettes.
* Tjek, at du kan komme hen på alle elementer i din accordion, som kan trykkes på med mus. 

  * Note: Normalt kan du bevæge dig gennem en accordion kun ved hjælp af tabulatorknappen. Nogle accordions kræver, at du bruger piletaster til at navigere mellem de enkelte elementer, når du først er kommet hen til gruppen af elementer ved hjælp af tabulatorknappen. Dette er også et tilladt navigationsmønster, om end ikke alle brugere kender til det, og nogle derfor nok vil have svært ved at bruge det.
* Tjek, at alle de interaktive elementer kan aktiveres ved hjælp af ”Enter”, når du står på dem (eller ved hjælp af ”mellemrum”, hvis du har brugt piletaster til at navigere mellem emnerne). Tjek at du både kan åbne og lukke alle emnerne i din accordion, og at eventuelle andre interaktioner i din accordion (fx links, knapper til at starte selvbetjeningsløsninger m.m.) også kan tilgås med tastaturnavigation.
* Tjek også, at du ikke tabulerer gennem interaktive elementer i emnerne, når de er lukkede. Tastaturnavigationen skal holde sig inden for det, der er synligt.

## Kommunikerer ”knapperne” at de er interaktive, og hvad de er og gør?

Uanset, hvordan en accordion er lavet, skal den være i stand til at kommunikere til en skærmlæser, hvilke elementer der er interaktive, hvad man kan bruge dem til, og hvad deres status er i et givent øjeblik. For eksempel om de er åbne eller lukkede.

Dette kan godt være lidt udfordrende at teste selv. Du kan enten gøre det ved at inspicere koden, hvis du kender til HTML-kode, eller ved at teste det med en skærmlæser. Noget af det kan også testes ved hjælp af små automatiske testværktøjer, der fås som browserplugins, fx Qualweb eller Siteimprove Accessibility Checker, og dette er generelt et godt sted at starte. 

Teknisk set skal alle de interaktive elementer have:

* en rolle, der fortæller, at her er noget interaktivt, 
* et tilgængeligt navn, der kan læses op af en skærmlæser, og som indeholder som minimum den samme tekst som den, der vises synligt, og 
* en værdi/status, der fortæller fx om elementet er foldet ind eller ud. Dette gøres nemmest ved hjælp af aria-expanded=”true”/”false” i koden, men kan også gøres ved fx at tilføje ”Vis”/”Skjul” i elementets tilgængelige navn.

  * Husk at tjekke, om værdi/status opdateres ved interaktioner, så det afspejler den status, der fremgår visuelt.

## Vis/skjul af indhold opdateres kun visuelt

Det indhold, der er skjult i en accordion, skal være skjult for alle brugere på en gang, uanset om de tilgår indholdet visuelt eller via oplæsningsværktøjer, og om de bruger mus, tastatur eller noget helt andet.
Og når et emne foldes ud, skal indholdet kunne tilgås af alle brugere. 

Det betyder, at du skal være opmærksom på at teste følgende:

* Når du navigerer med tastaturnavigation, må du altså ikke kunne komme til links, der ligger i et emne, som lige nu er foldet sammen.  Herudover skal en skærmlæser ikke kunne læse op af de sammenfoldede emner, før de foldes ud.
* Når et emne foldes ud, skal du tjekke, at indholdet i det KAN tilgås med tastaturnavigation og skærmlæser. Det sker nemlig ofte, at det ikke er den samme funktion, der viser/skjuler indholdet henholdsvis visuelt, for tastaturnavigation og for skærmlæsere, og derfor glemmer man tit at opdatere de ”tilgængelige” funktioner, fordi alting ser ud til at virke fint visuelt og med navigation via mus.

## Vil du vide mere om at undgå tilgængelighedsproblemer?

Dette blogindlæg er planlagt som en del i en serie, hvor vi gennemgår ofte forekommende tilgængelighedsproblemer i forskellige interaktive komponenter.

Du kan allerede nu få et overblik over, hvilke interaktive komponenter, der ofte skaber problemer, og få vores anbefaling til at komme i gang med at håndtere dem på dit eget websted:

* [Her er de interaktive elementer, som skaber tilgængelighedsproblemer på dit websted](https://inklusio.dk/posts/her-er-de-interaktive-elementer-som-skaber-tilg%C3%A6ngelighedsproblemer-p%C3%A5-dit-websted/).