---
title: Hvad er nyt i WCAG 2.2?
date: 2023-10-05T12:43:53.992Z
author: Anne Thyme Nørregaard
summary: WCAG 2.2 er den 5. oktober 2023 blevet officielle retningslinjer fra
  World Wide Web Consortium (W3C). Vi introducerer dig her til alt, hvad du skal
  vide om de nye krav.
tags:
  - WCAG 2.2
---
WCAG 2.2 er den 5. oktober 2023 blevet officielle retningslinjer fra World Wide Web Consortium (W3C). 

De nye retningslinjer er længe ventet, idet det første offentlige udkast til retningslinjerne blev udgivet i februar 2020.

Vi introducerer dig her til alt, hvad du skal vide om de nye krav.

Selve de nye retningslinjer finder du på <https://www.w3.org/TR/WCAG22>. 

## WCAG 2.2 og webtilgængelighedsloven

Webtilgængelighedsloven, som gælder offentlige myndigheder og offentligretlige organer, henviser ikke direkte til WCAG, men til standarden EN 301 549.


EN 301 549 er IKKE opdateret til at inkludere de nye krav fra WCAG 2.2. Denne opdatering ligger et stykke ude i fremtiden, sandsynligvis ikke før i 2025.


WCAG 2.2 er derfor endnu ikke et krav ifølge webtilgængelighedsloven, men kommer til at blive det senere.

## WCAG 2.2 og lov om tilgængelighedskrav for produkter og tjenester

Fra 2025 kommer der til at være lovkrav til, at også private virksomheder skal stille tilgængelige digitale løsninger til rådighed, bl.a. når det gælder webshops (e-commerce), banker, forsikringsselskaber og passagertransport.


Standarden EN 301 549 kommer også til at gælde for lovgivningen inden for det private område, så WCAG 2.2 bliver også på et tidspunkt den gældende standard inden for dette område.

## Hvad skal jeg bruge WCAG 2.2 til nu?

Uanset om du er underlagt krav om at leve op til WCAG 2.2 eller ej, synes vi at du skulle tage et kig på de nye succeskriterier.

Mange af kravene er ting, som giver rigtigt god mening. 
Meget af det er noget, som vi alligevel ofte kommenterer på, når vi tester for webtilgængelighed, selvom det teknisk set ikke er fejl for nogle af de eksisterende WCAG 2.1 succeskriterier, og en del af det forbedrer også den generelle brugervenlighed i din løsning og kommer derved mange brugere til gavn, uanset om de har en funktionsnedsættelser eller ej.

Hvis du er dækket enten af webtilgængelighedsloven eller lov om tilgængelighedskrav for produkter og tjenester, så er det værd at tænke på, om de digitale løsninger, som du planlægger, specificerer eller udvikler i dag også kommer til at leve, når WCAG 2.2 bliver den gældende standard inden for dit område. Hvis ja, så kan du lige så godt få tænkt de nye succeskriterier ind allerede nu. 

## Oversigt over nye krav

I WCAG 2.2 er der 6 nye succeskriterier på niveau A + AA, som er de niveauer, langt de fleste går efter at leve op til:

* 2.4.11 Focus Not Obscured (Minimum) (AA)
* 2.5.7 Dragging Movements (AA)
* 2.5.8 Target Size (Minimum) (AA)
* 3.2.6 Consistent Help (A)
* 3.3.7 Redundant Entry (A)
* 3.3.8 Accessible Authentication (Minimum) (AA)

Derudover er der også 3 nye succeskriterier på niveau AAA: 

* 2.4.12 Focus Not Obscured (Enhanced) (AAA)
* 2.4.13 Focus Appearance (AAA)
* 3.3.9 Accessible Authentication (Enhanced) (AAA)

Krav der udgår i WCAG 2.2 – og i praksis også i WCAG 2.1!

* Derudover er der et enkelt succeskriterium, som i praksis udgår af WCAG: 
  4.1.1 Parsing (Obsolete and removed)

Bemærk, at WCAG 2.1 er blevet opdateret med en note om, at 4.1.1 Parsing skal betragtes som altid bestået for indhold implementeret med HTML eller XML, hvilket vil sige stort set alt webindhold.
Dette skyldes, at moderne browsere reparerer det, som tidligere skabte problemer for brugerne.

## 2.4.1 Focus not obscured (Minimum)

Niveau: AA

Bud på dansk oversættelse: ”Fokus skjules ikke” 

Når et interaktivt element får tastaturfokus, må elementet ikke være fuldstændigt skjult af andet indhold.
Dette er fx relevant at tjekke, hvor der er sticky header eller footer eller et cookie-banner, som dækker noget af siden, men hvor siden scroller ”inde bagved” dette indhold.

## 2.5.7 Dragging Movements

Niveau: AA

Bud på dansk oversættelse: ”Trækkebevægelser”

Alt funktionalitet som kræver, at man laver en trækkebevægelse, kan også bruges med et enkelt berøringspunkt og uden at trække.

Undtagelser er, hvis trækkebevægelsen er ”essentiel”, dvs. ikke kan undværes uden at ændre betydningen af funktionen, eller funktionaliteten styres af browseren og ikke er ændret af ejeren af løsningen.

Eksempler kunne være, at en liste, hvor man kan ændre rækkefølgen af elementer ved at trække dem op og ned, også stiller en menu til rådighed, hvis man klikker på et element, hvor man kan vælge at flytte elementet op eller ned, eller en videoafspiller, hvor man kan spole i videoen ved at trække i en ”slider” på videoens tidslinje, men også kan klikke på tidslinjen for at spole til det ønskede sted. 

Bemærk, at dette krav ikke handler om tastaturnavigation. Det skal altså være muligt at bruge funktionen ved hjælp af en mus eller touch, selvom man ikke kan udføre en trækkebevægelse.

## 2.5.8 Target Size (Minimum)

Niveau: AA

Bud på dansk oversættelse: ”Målstørrelse” eller ”Størrelse for trykkeområde”

Størrelsen for målområdet for pegeinput (dvs. mus og touch input) er mindst 24 gange 24 pixels, eller, hvis det er et lille mål på under 24 gange 24 pixels, så har det et område på 24 pixels omkring sig i alle retninger, som ikke overlapper med andre målområder eller områder til afstand for små mål. 

Kravet gælder ikke for målområder, som er inde i sætninger, eller hvis samme funktion kan opnås et andet sted på samme side, som lever op til dette kriterium.
Kravet gælder heller ikke, hvis størrelsen på målområdet styres af browseren, er essentiel (dvs. ikke kan ændres uden at funktionen også ændres) eller der er lovkrav for det, som vises.

En passende størrelse for områder, man kan trykke på ved interaktive komponenter, er især vigtigt for personer der ikke har så god finmotorik, fx pga. rystende hænder eller gigt. Det vil dog også komme brugere til gavn, som bruger en touchskærm, hvor fingrene ofte vil synes for store i forhold til at ramme små interaktive områder, især hvis man betjener sin mobil med én hånd.
\
For mange der arbejder med websteder synes brugen af en mus ganske intuitiv, men for mange især i den ældre generation, som har lært at bruge IT sent i livet og måske ikke bruger en computer regelmæssigt, kan det også være en udfordring at ramme små mål med en mus.

## 3.2.6 Consistent Help

Niveau: A

Bud på dansk oversættelse: ”Konsekvent hjælp”

Dette krav gælder for hjemmesider, som indeholder hjælpemekanismer såsom:

* kontaktinformationer til mennesker, fx telefonnummer eller e-mail-adresse
* en mekanisme til at kontakte mennesker, fx en chat eller en kontaktformular
* selvhjælpsmuligheder, fx en FAQ, Help Center eller hjælpetekst, der foldes ud via ”?”-tooltips
* en fuldautomatisk kontaktmekanisme, fx chatbot 

Hvis nogle af disse hjælpemekanismer findes på flere sider inden for en samling af websider, skal funktioner findes i den samme relative rækkefølge i forhold til andet indhold på siden, medmindre brugeren selv laver en ændring.

Det kan fx betyde, at en chatfunktion altid skal findes på samme sted på siden, at linket til en kontaktside altid skal kunne findes på samme sted i footeren, eller at hjælpetekster i en formular altid skal kunne findes på samme sted i forhold til indtastningsfelterne, fx bag et ”?”-ikon.

## 3.3.7 Redundant Entry

Niveau: A

Bud på dansk oversættelse: ”Overflødig indtastning”

Information som tidligere er indtastet i en formular, som skal bruges igen i den samme proces, er enten auto-udfyldt eller der gives mulighed for at brugeren kan vælge den.

Kravet gælder ikke, hvis det er essentielt at udfylde informationen igen, fx for at bekræfte en e-mailadresse, hvis informationen er vigtig af sikkerhedshensyn, eller den tidligere indtastede information ikke længere er gyldig. 

Et velkendt eksempel på dette er i webshops, hvor man med en tjekboks kan vælge, at leveringsadressen skal være den samme som faktureringsadressen, eller vælge at indtaste en ny leveringsadresse.

Dette er vigtigt for især brugere med kognitive funktionsnedsættelser, som kan have problemer med at udfylde formularer korrekt, samt personer med motoriske funktionsnedsættelser, for hvem det kan være fysisk anstrengende og tidskrævende at indtaste tekst.

## 3.3.8 Accessible Authentication (Minimum)

Niveau: AA

Bud på dansk oversættelse: ”Tilgængelig autentificering”

En kognitiv funktionstest (såsom at huske et password eller løse et puslespil) er ikke krævet på noget trin i en autentifikationsproces, medmindre dette trin stiller mindst en af følgende muligheder til rådighed: 

* Alternativ: Der er en alternativ autentifikationsmetode, som ikke er afhængig af en kognitiv funktionstest.
* Mekanisme: Der er en mekanisme til rådighed, som kan hjælpe brugeren med at gennemføre den kognitive funktionstest.
* Objektgenkendelse: Den kognitive funktionstest består i at genkende objekter.
* Personligt indhold: Den kognitive funktionstest er at identificere ikke-tekstligt indhold, som brugeren har givet til webstedet.

Et eksempel på indhold, som ville dumpe dette succeskriterium, er en kontaktformular, hvor man skal indtaste svaret på et tilfældigt genereret regnestykke for at kunne indsende formularen, og hvor der ikke stilles alternative muligheder til rådighed.