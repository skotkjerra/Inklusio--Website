---
title: "Digital tilgængelighed 101: Find ud af, hvorfor farver ikke er det
  bedste kommunikationsmiddel på hjemmesider"
date: 2021-11-03T11:27:30.014Z
author: "Katrine Gregersen "
summary: I dag er det ikke unormalt, at farver bliver benyttet som et
  kommunikationsmiddel. I trafikken kender vi stoplys, der anvender farven rød
  til at formidle, at køretøjerne skal stoppe, mens gul signalerer, at de skal
  vente, og grøn viser, at de gerne må køre igen. Måske har du også prøvet at
  komme ind i en bygning, hvor områderne i bygningen er organiseret efter
  farver. Kommunikation ved hjælp af farve bruges også på internettet, hvor
  farven rød typisk bliver brugt til at kommunikere, at man har udfyldt noget
  forkert, eller fungerer som en form for advarsel.
tags:
  - post
---
I dag er det ikke unormalt, at farver bliver benyttet som et kommunikationsmiddel. I trafikken kender vi stoplys, der anvender farven rød til at formidle, at køretøjerne skal stoppe, mens gul signalerer, at de skal vente, og grøn viser, at de gerne må køre igen. Måske har du også prøvet at komme ind i en bygning, hvor områderne i bygningen er organiseret efter farver. Kommunikation ved hjælp af farve bruges også på internettet, hvor farven rød typisk bliver brugt til at kommunikere, at man har udfyldt noget forkert, eller fungerer som en form for advarsel. 

Det er således helt almindeligt, at vi formidler informationer med farver, men det kan godt skabe nogle tilgængelighedsproblemer for en gruppe mennesker med farveblindhed eller nedsat syn, eftersom farverne ikke giver dem de nødvendige informationer. I dette indlæg skal vi stille skarpt på, hvordan man kan bruge farver til at formidle information på digitale løsninger, og hvilke steder man muligvis bør vælge en alternativ formidlingsform, så man sikrer, at indholdet er tilgængeligt for alle. 

![Billede af trafiklys ](/img/skærmbillede-2021-11-03-kl.-13.20.02.png)

Når vi kigger på hjemmesider, har farver ofte en stor betydning på hjemmesiders design. Typisk har virksomheder allerede på forhånd valgt en farvepalet, som matcher deres brand, eller som de finder æstetisk flot. Det er i sig selv ikke et problem inden for tilgængelighed, at man har en nøje udtænkt farvepalet, blot skal man være opmærksom på brugen af valgte farver. Tidligere har vi skrevet om [vigtigheden af tekstkontrast](https://inklusio.dk/posts/digital-tilg%C3%A6ngelighed-101-lever-dine-tekster-op-til-kravet-om-kontrast/), men i dag skal det handle om farver som et kommunikationsmiddel. 

I tilgængelighedens verden er det her område tilknyttet succeskriterium [1.4.1 Anvendelse af farve i WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html), som er retningslinjer for tilgængeligt webindhold. Helt kort beskrevet handler succeskriteriet om, at farve ikke må være den eneste måde, du formidler information på i din digitale løsning. 

## **Eksempler**

### **Formularer**

Du har helt sikkert oplevet at skulle udfylde en formular på en hjemmeside, hvor eksempelvis e-mail og telefonnummer var påkrævede felter at udfylde. I dette tilfælde er det vigtigt for tilgængeligheden, at man ikke kun bruger farve til at kommunikere, hvilke felter der er påkrævede, f.eks. ”De påkrævede felter er markeret med rød”. Her vil personer med farveblindhed eller nedsat syn ofte ikke kunne afkode informationen, da de ikke vil kunne skelne farverne i formularen fra hinanden og dermed ikke kan se, hvilke felter der er påkrævede. Det er derfor vigtigt, at informationer bliver formidlet med andre indikationer end blot farve. I dette tilfælde vil den tilgængelige løsning være at benytte stjerner eller et andet ikon til at markere felter, som det er påkrævet at udfylde, ledsaget af en tilhørende beskrivelse, som kunne lyde ”De påkrævede felter er markeret med *(stjerne)”. 

![Billede af to tilmeldelsesformularer, som er forkert udfyldt. Den øverste kommunikerer via farven rød og den nederste benytter ikoner til at kommunikere. Den nederste den mest tilgængelige metode. ](/img/billede1.png)

### **Datavisualisering**

Grafer er også en faldgrube, når det gælder brug af farve som kommunikationsværktøj. Ofte ser man, at farverne i en graf formidler forskellig information, men den information kan være svær at tyde, hvis man er farveblind. Her vil en mulig løsning være at nummerere linjerne i grafen eller på anden måde kommunikere informationen, så man ikke er afhængig af at kunne se forskellige farver og nuancer. Eksemplet på grafen herunder, benytter blandt andet figurer, i stedet for farve til at formidle information. Grafen til højre er tilgængelig for personer med farveblindhed, da den ikke formidler via farve alene.  

![To grafer, hvor den ene formidler information ved hjælp af farve, og den anden formidler information ved hjælp af figurer ](/img/skærmbillede-2021-11-03-kl.-13.19.30.png)

*Illustration fra Lisa Charlotte Muth ([Link til hendes blog](https://blog.datawrapper.de/colorblindness-part2/))*

Hvis du er nysgerrig og vil vide mere om, hvordan man kan visualisere data, så det er tilgængeligt for folk med farveblindhed,  anbefaler vi Lisa Charlotte Muths uddybende og superspændende artikel [What to consider when visualizing data for colorblind readers](https://blog.datawrapper.de/colorblindness-part2/) og Sarah Fossheims artikel [An intro to designing accessible data visualizations](https://fossheim.io/writing/posts/accessible-dataviz-design/). 

#### **Her er nogle ekstra eksempler på inkluderende visualisering af data:**

* Søjlediagrammer med både brug af farver og mønstre 
* Kort, som beskriver områder og ruter med brug af både farver, stiplede linjer og ikoner 
* Flow chart med brug af pile og stiplede linjer 

### **Links**

Et tredje kendt eksempel er links i tekststykker/tekstblokke. Der er et krav om, at der skal være en visuel indikation af, hvad der er et link i et tekststykke på en hjemmeside. Den ideelle løsning er blot at benytte understregning ved links, men hvis du udelukkende bruger farve til at indikere links (dvs. hverken markerer linket med understregning, fed tekst eller lignende) så er der krav om, at kontrastforholdet mellem farven på linkteksten og omkringliggende tekst er på minimum 3:1. Du kan bruge denne [kontrast-tjekker](https://webaim.org/resources/contrastchecker/) til at sikre kontrastforholdet mellem links og den omkringliggende tekst – dog skal både almindelig tekst og links stadig have en kontrast på 4,5:1 til baggrunden samtidig. Dette kan være virkelig svært at ramme, så WCAG giver eksempler på [links med 3:1 kontrastforhold til den omkringliggende tekst](https://www.w3.org/WAI/WCAG20/Techniques/working-examples/G183/link-contrast.html) med farver på linktekst, som både minimum har 3:1 til sort tekst og samtidig minimum 4,5:1 til en hvid baggrund. Yderligere, anbefales der her, at links får en understregning ved hover eller i fokus. Synes man, at det bliver for kompliceret at opfylde kravet om en kontrast på 3:1, gør det sig gældende, at der skal være en anden form for visuel indikation, som for eksempel en understreg, fed skrift eller noget helt tredje. Et godt råd er generelt at bruge understregning på links i større tekstblokke, så de er lettere at genkende som links. 

Generelt må man godt bruge farve som det eneste visuelle kommunikationsværktøj, hvis der er tilstrækkelig kontrast mellem elementerne, dvs. 3:1, hvilket i sig selv kan være noget af en opgave. Så teknisk set vil det ikke fejle, når blot du opfylder kontrastkravene. Dog, hvis du stiler efter en supertilgængelig digital løsning, er alternative visuelle indikationer (ikoner, mønstre, pile osv.) en fordel, når det gælder tilgængelighed. 

## **Hvilken målgruppe er det vigtigt for?**

Som nævnt, så er det her relevant for personer med farveblindhed. Faktisk er op mod 200.000 danske mænd og 10.000 kvinder født farveblinde. Det vil sige, at denne gruppe mennesker har svært ved at skelne mellem visse farver og nuancer, og dermed har udfordringer med at tilgå den samme information som andre, hvis man har formidlet information udelukkende via farver. Herudover er det også relevant for personer med nedsat syn, hvilket kan være medfødt eller skyldes alderdom.

Derfor er det vigtigt at have disse overvejelser med allerede i designprocessen af den hjemmeside, der er tale om, og tilgængelighedsfejlene kan være dyre at rette senere. Yderligere, så ved man, at op mod 20 % af befolkningen har en form for funktionsnedsættelse, så hvis du ejer en webshop, vil det ikke kun være en gevinst på tilgængeligheden, men også på bundlinjen i din forretning, da du vil nå en langt større gruppe af potentielle købere af dit produkt. 

Det kan være nyttigt at benytte figurer, mønstre, ikoner, tekst og tilstrækkelig kontrast til at sikre alle kan tilgå den samme information. Det behøver ikke munde ud i et rodet design, da der er mange måder, hvorpå man kan lave små visuelle ændringer, som sikrer, at farve ikke bliver det eneste kommunikationsmiddel. I øvrigt har farver også den ulempe, at de kan have forskellige kulturelle betydninger, som kan have betydning for, hvordan et element med en bestemt farve vil blive forstået. Dette rækker dog udover tilgængelighed alene, men er stadig en god overvejelse at tage med i sin designproces. 

## **Sådan løser du problemet**

Du kan tage et kig på din digitale løsning og vurdere, hvor farverne er betydningsfulde i måden, du formidler information. Steder, hvor der kun benyttes farve til at formidle information, bør der tilføjes en alternativ visuel indikation, som er inkluderende for alle. 

### **Her er de mest gængse områder at tjekke på din hjemmeside**

1. **Links** i tekstblokke uden understregning 
2. **Formularer**, som viser fejl med rød farve 
3. **Grafer** og **diagrammer**, som visualiserer data ved brug af farver 
4. **Kort**, som benytter farve til at kommunikere bestemte områder
5. **Knapper**, hvor betydningen kun kommunikeres via farve
6. **Deaktiverede formularelementer***, såsom felter i en formular eller knapper, der er deaktiverede – Her bruges ofte lysegrå til at kommunikere, at man ikke kan interagere med elementet. 

\**Ud over at det anbefales at lave en alternativ visuel indikation, så er det vigtigt at notere sig, at der også krav om, at deaktiverede formularelementer skal angives som ”disabled” i koden. Dermed kan hjælpemidler kommunikere, at de er deaktiverede, og browsere kan vise det via manglende fokus.*  

### **Top tips**

1. Du kan benytte en [Crome Extension til at teste din hjemmeside i sort/hvid](https://chrome.google.com/webstore/detail/grayscale-the-web-save-si/mblmpdpfppogibmoobibfannckeeleag). Dette vil give dig en ide om, hvor på siden, der kan være problemer. 
2. Prioriter ikoner, former og tekst som kommunikationsmiddel frem for farver på din hjemmeside.
3. Hvis du udvikler en ny digital løsning, er et godt råd at gøre dine UI/UX designere opmærksom på farvebrugen tidligt i processen, da det godt kan blive tidskrævende at rette senere. 
4. Lad dig inspirere af [Federico Monaco’s Colorblind Accessibility Manifesto](https://colorblindaccessibilitymanifesto.com/)

### **Sidenote:** Det er ikke fordi du skal fjerne alle farver fra dit websted

Det her er ikke et opråb om, at du skal fjerne al farve på din hjemmeside. Det vigtige er, at du er bevidst om, hvordan du bruger farver til kommunikation af informationer. Når farver bliver brugt rigtigt, kan de nemlig tilføje et fantastisk udtryk til en hjemmeside. 

## **Her kan du lære mere**

Efter at have læst denne artikel, håber vi, at du føler dig bedre klædt på til at designe eller re-designe din hjemmeside, så den bliver inkluderende for alle.

Læs mere om WCAG-succeskriteriet [1.4.1 Anvendelse af farve ](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)(Engelsk)
Læs blogindlægget ”[Sådan sikrer du tekst-kontrast på din digitale løsning](https://inklusio.dk/posts/digital-tilg%C3%A6ngelighed-101-lever-dine-tekster-op-til-kravet-om-kontrast/)”.