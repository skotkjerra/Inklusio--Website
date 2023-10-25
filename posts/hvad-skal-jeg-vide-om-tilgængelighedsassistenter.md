---
title: 'Hvad skal jeg vide om "tilgængelighedsassistenter"? '
date: 2023-10-25T09:09:02.484Z
author: Anne Thyme Nørregaard
summary: 'Hvad er fordelene og ulemperne ved en såkaldt
  "tilgængelighedsassistent"? Hvilke WCAG-krav kan dækkes af en
  tilgængelighedsassistent? Og vil alle brugere, der har brug for
  tilgængelighed, få løst deres problemer af en tilgængelighedsassistent? – det
  korte svar er "Nej" ! Du må gerne tilføje en tilgængelighedsassistent til dit
  websted. Men det må aldrig stå i stedet for at gøre selve dit websted
  tilgængeligt. '
tags:
  - WCAG
  - Tilgængelighedsassistenter
---
Vi starter med den helt korte version: 

**Du må gerne tilføje en tilgængelighedsassistent til dit websted.
Men det må aldrig stå i stedet for at gøre selve dit websted tilgængeligt.**

## Hvad er en tilgængelighedsassistent?

Og så den lidt længere version: Det, jeg har valgt at kalde en ”tilgængelighedsassistent”, er som regel en lille værktøjslinje, som du tilføjer til dit websted, og som giver brugerne af webstedet mulighed for at gøre ting som fx:

* Få læst siden op
* Gøre sidens tekst større
* Ændre farver på websiden, fx tekst- og baggrundsfarve, så der bliver højere kontrast
* Fremhæve links visuelt
* Lave cursoren (musens pegemarkør) stor
* Lægge en ”maske” over siden, der kan hjælpe til at fokusere dit blik, eller lave en linje, der kan guide ved læsning af tekst
* Vise siden som ”ren tekst” uden layout

Det vil være lidt forskelligt fra værktøj til værktøj, hvad de kan gøre, og ovenstående er et sammenkog af funktioner fra forskellige tilgængelighedsassistenter. Normalt har én assistent ikke alle de funktionerne, som er nævnt ovenfor.

## Bliver mit websted tilgængeligt, hvis jeg installerer en tilgængelighedsassistent?

Når vi snakker webtilgængelighed, måler vi det tit ved hjælp af standarden Retningslinjer for Tilgængeligt Webindhold (WCAG) 2.1. 

Webtilgængelighedsloven stiller krav om overholdelse af WCAG på niveau AA (som er kriterier på niveau A + AA).

Derfor kan det være interessant at se, hvordan forskellige mulige funktioner i tilgængelighedsassistenter er relateret til forskellige krav i WCAG.

## Hvilke WCAG-krav kan dækkes af en tilgængelighedsassistent?

#### Funktion: Få læst siden op

Ikke relateret til krav i WCAG.

Antal WCAG-krav, som potentielt kan dækkes via funktionen: 0

#### Funktion: Gøre sidens tekst større

WCAG stiller krav til at man skal kunne:

* forstørre tekst til 200% (1.4.4 Ændring af tekststørrelse)
* forstørre tekst til 400% (1.4.10 Ombrydningsvisning)

Antal WCAG-krav, som potentielt kan dækkes via funktionen: 2

#### Funktion: Ændre farver på websiden, fx tekst- og baggrundsfarve, så der bliver højere kontrast

I bedste fald kan ændring af farver få websiden til at leve op til WCAG-kravene for:

* kontrast mellem tekst og baggrund (1.4.3 Kontrast (minimum))
* kontrast for grafik (1.4.11 Kontrast for ikke-tekstbaseret indhold) 
* mulighed for at skelne links i blokke af tekst (1.4.1 Anvendelse af farve)

Antal WCAG-krav, som potentielt kan dækkes via funktionen: 3

#### Funktion: Fremhæve links visuelt

Kan give mulighed for at skelne links i blokke af tekst (1.4.1 Anvendelse af farve)

Antal WCAG-krav som, potentielt kan dækkes via funktionen: 1

#### Funktion: Lave cursoren (musens pegemarkør) stor

Ikke relateret til krav i WCAG.

Antal WCAG-krav, som potentielt kan dækkes via funktionen: 0

#### Funktion: Lægge en ”maske” over siden, der kan hjælpe brugeren til at fokusere sit blik, eller lave en linje, der kan guide ved læsning af tekst

Ikke relateret til krav i WCAG.

Antal WCAG-krav, som potentielt kan dækkes via funktionen: 0

#### Funktion: Tastaturnavigation

I bedste fald kunne man få hjælp til at leve op til: 

* kontrast for tastaturfokusindikator (1.4.11 Kontrast for ikke-tekstbaseret indhold),
* at alt er tilgængeligt med tastatur (2.1.1 Tastatur) 
* at man ikke sidder fast med tastaturnavigation (2.1.2 Ingen tastaturfælde)
* at tingene kommer i en fornuftig rækkefølge (2.4.3 Fokusrækkefølge) 
* at der er en synlig fokusindikator (2.4.7 Synligt fokus)

Antal WCAG-krav, som potentielt kan dækkes via funktionen: 5

#### Funktion: Vise siden som ”ren tekst” uden layout

Hvis teksten samtidig kan forstørres til 400%, kan det hjælpe til at leve op til kravene om, at der ikke må skulle scrolles i to retninger for at man kan læse tekst ved zoom (1.4.10 Ombrydningsvisning).

Antal WCAG-krav, som potentielt kan dækkes via funktionen: 1

### Hvor mange WCAG-krav kan så dækkes af en tilgængelighedsassistent?

Med ovenstående funktioner kan man altså i bedste fald leve op til 9 forskellige succeskriterier i WCAG 2.1 (hvoraf 3 succeskriterier potentielt kan håndteres af forskellige funktioner).

I WCAG 2.1 er der på niveau AA 50 succeskriterier.

Det vil sige, at der er 41 WCAG 2.1 succeskriterier, som slet ikke berøres af de funktioner, som listes ovenfor.

**Det vil sige at der er 82% af standarden, som på ingen måde håndteres af disse funktioner i en tilgængelighedsassistent. Og du skal derfor finde en anden måde at sikre, at disse krav også bliver opfyldt.** 

Som nævnt længere oppe, er det desuden ikke alle tilgængelighedsassistenter, der har alle de nævnte funktioner, og dækningen af WCAG-krav for en enkelt tilgængelighedsassistent vil derfor normalt være lavere end de 18%, som i bedste fald kunne dækkes. 

Hvor godt dækkes de enkelte WCAG-krav af en tilgængelighedsassistent?
Det kan også være et problem, at en tilgængelighedsassistent faktisk ikke sikrer overholdelse af de krav, som en funktion kunne være relateret til. 

Fx er der nogle tilgængelighedsassistenter, der godt nok kan forstørre teksten, men ikke helt op til 200% eller 400%, som WCAG stiller krav om. 
Du kan selv teste dette ved at zoome ind i browseren til de krævede niveauer, og så sammenligne tekststørrelsen med den, som tilgængelighedsassistenten kan præstere.

Det er også set, at når tilgængelighedsassistenten forstørrer tekst, så går indholdet på siden ”i stykker”, og tekst fx stikker ud af deres bokse, hvorved noget af teksten helt forsvinder eller bliver ulæselig, fordi det kommer ud på en baggrund, hvor man ikke kan skelne teksten længere.

Derfor skal man ikke regne med, at blot fordi en funktion findes i en tilgængelighedsassistent, så kan man sætte kryds i "overholder” ved et tilsvarende succeskriterium i WCAG.

Det vil være nødvendigt at teste, at funktionen faktisk virker på ens websted.

Derudover kan der være andre måder, dit websted bryder et WCAG-krav på, end den måde, som kan fikses via en tilgængelighedsassistent. Fx kan du stadig have dårlig kontrast på dine grafer, selvom kontrasten på din fokusindikator ved tastaturnavigation er blevet fikset af en tilgængelighedsassistent.

## Er en tilgængelighedsassistent teknisk set en tilladt måde at leve op til tilgængelighedskravene?

Ifølge WCAG 2.1 kan man leve op til kravene enten ved at ens webside lever op til kravene ELLER ved at der findes en alternativ version af websiden, som overholder kravene (se [5.2.1 Niveau for overholdelse af krav](https://www.w3.org/Translations/WCAG21-da/#cc1)). 

Den alternative version skal i så fald overholde kravene. 

Der må derfor ikke være tilgængelighedsproblemer af den ene eller anden art i selve tilgængelighedsassistenten, hvis man skal kunne argumentere for, at tilgængelighedsassistenten udgør en alternativ version af siden. 

Om en tilgængelighedsassistent kan siges at udgøre en alternativ version vil dog være et fortolkningsspørgsmål, og man kan ikke regne med, at den teknisk set kan godtages som en måde at leve op til WCAG, selv for de succeskriterier, som den måske kunne hjælpe til at overholde. 

## Vil alle brugere, der har brug for tilgængelighed, få løst deres problemer af en tilgængelighedsassistent?

Det korte svar er NEJ. 

Her kommer et par eksempler på brugergrupper, der ikke har gavn af tilgængelighedsassistenter: 

* Brugere, der er afhængige af deres egne hjælpemidler
* Brugere, der ikke er bevidste om, at de har en funktionsnedsættelse
* Brugere, der er usikre it-brugere

### Brugere, der er afhængige af deres egne hjælpemidler

Jens er blind og bruger en skærmlæser til at navigere på et websted. 
Han kan godt finde på at bruge en funktion til at få læst en artikel op, sådan for hyggens skyld.
Men han har også brug for at kunne bruge sin skærmlæser til fx at få læst menuer og knapper op og interagere med dem, og det kan han kun, hvis de er kodet korrekt. 
Hvis billeder tilføjer vigtig information til indholdet på webstedet, har Jens også brug for, at billederne har gode tekstalternativer.

Disse behov håndteres ikke af en tilgængelighedsassistent, og Jens har derfor brug for, at websider er lavet på en måde, så de kan bruges med hans skærmlæser.

Det samme vil gælde for rigtig mange andre brugere, som har deres egne, højt specialiserede hjælpemidler. 

### Brugere, der ikke er bevidste om, at de har en funktionsnedsættelse

Karen på 70 ser ikke længere helt perfekt. Når hun ikke lige kan finde sine briller, har hun virkeligt svært ved at læse teksten på websteder, hvis den ikke har god kontrast mellem tekst og baggrund.
Så kniber hun øjnene sammen og klarer sig igennem, men hun bliver hurtigt træt i øjnene og hovedet, og der går som regel ikke så lang tid, inden hun opgiver at sidde ved sin computer eller tablet.
Det værste er faktisk, hvis hun sidder med sin tablet et sted, hvor der er sol. Så kan det være helt umuligt at skelne teksten. 

Karen kan godt blive irriteret over, at det skal være så svært at læse teksten, men ikke nok til, at hun giver sig til at lede efter løsningsmuligheder.

Der findes mange brugere, som ikke er bevidste om, at de har en funktionsnedsættelse og ikke ser sig selv som ”handicappede”, og som derfor ikke opsøger hjælpefunktioner, hverken gennem deres eget styresystem eller browser, eller gennem funktioner direkte på et websted.
De knapper, som åbner en tilgængelighedsassistent, vil desuden sjældent springe i øjnene som noget med personlig relevans for denne brugergruppe. Fx vil de ikke identificere sig selv med et ikon med en person i kørestol på.

### Brugere, der er usikre it-brugere

Ud over at Karen ikke ser helt perfekt længere, så kan hun også godt synes, at det er svært med alt det der it.
Hun plejer at få hjælp af sin datter eller svigersøn og efterhånden også sit barnebarn, når hun skal lære at bruge nye funktioner på computeren eller på hjemmesider.
Når hun får tingene vist af sin familie, bruger hun en lille notesbog, hvor hun skriver ned trin for trin, hvad det er, hun skal gøre. Hvis hun får sprunget et trin over i sin lille guide, kan hun sagtens strande helt, næste gang hun skal forsøge at gøre det på egen hånd.
Når der laves ændringer i et system, om hun plejer at bruge, kan der godt gå lidt tid, inden hun kommer i gang med det igen, fordi hun lige skal vente på, at nogen har tid til at hjælpe. 

Karen kunne aldrig finde på at trykke på noget, som hun ikke ved hvad er, af frygt for at ødelægge noget eller blive hacket. Hvis der popper et vindue op med noget, hun skal tage stilling til, kan hun godt finde på at forlade computeren og vente på at nogen har tid til at fortælle hende, om hun skal trykke ”OK” eller ”Annuller”. 

Karen ville aldrig udforske funktionerne i en tilgængelighedsassistent på egen hånd.
Og selvom hun havde lært at bruge tilgængelighedsassistenten på ét websted, vil hun ikke nødvendigvis kunne overføre sin viden til en anden tilgængelighedsassistent på et andet websted. 

## Er det ok, at mit websted har et tilgængelighedsproblem, hvis bare det kan fikses med min tilgængelighedsassistent?

Det bedste ville være, at dit websted var tilgængeligt for alle mennesker, med det samme de kommer ind på det, uden at de selv skal bøvle med at ”fikse” tilgængelighedsproblemerne via en tilgængelighedsassistent.

Ikke alle brugergrupper vil have gavn af en tilgængelighedsassistent. 

Det er svært at afgøre, om du teknisk set kan leve op til tilgængelighedskrav ved at have en tilgængelighedsassistent. 

Og uanset hvad, vil der stadig være en stor mængde krav, som skal opfyldes på anden vis, da tilgængelighedsassistenter slet ikke berører disse områder.

Derfor må en tilgængelighedsassistent siges at være en NICE TO HAVE, hvis du vil gøre noget ekstra for nogle brugergrupper, fx ved at tilføje højtlæsning eller andet som en ekstra service. 

Til gengæld er et tilgængeligt websted en NEED TO HAVE. Du kommer altså ikke uden om at arbejde med at skabe et tilgængeligt websted, uanset om du vælger at tilføje en tilgængelighedsassistent eller ej.

## Er tilgængelighedsassistent det samme som “overlays”?

Hvor tilgængelighedsassistenter stiller funktioner til rådighed, som kan hjælpe brugerne med at tilpasse webstedet til deres præferencer, lover overlays at fikse webstedets kode, så webstedet bliver tilgængeligt – helt uden at du selv eller din udvikler skal gøre noget.
\
Lyder det for godt til at være sandt?
\
Det er det nok også.
\
I værste fald bliver webstedet faktisk mindre tilgængeligt eller direkte ubrugeligt for brugere, der er afhængige af hjælpeteknologier.

Du kan læse mere om, hvorfor overlays er en rigtigt dårlig ide her:

* [Overlay Fact Sheet](https://overlayfactsheet.com/)
* [European Disability Forum: "Accessibility overlays don’t guarantee compliance with European legislation"](<* https://www.edf-feph.org/accessibility-overlays-dont-guarantee-compliance-with-european-legislation/>)

Overlays kommer ofte i en pakke, som også har tilgængelighedsassistent-funktioner.