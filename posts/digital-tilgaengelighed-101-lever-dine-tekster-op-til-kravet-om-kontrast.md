---
title: "Digital Tilgængelighed 101: Lever dine tekster op til kravet om kontrast? "
date: 2021-09-09T10:44:54.318Z
author: Katrine Gregersen
summary: "I denne artikel vil vi hjælpe dig med at få styr på, hvilke regler der
  gør sig gældende for kontrastforhold mellem tekst og tekstens baggrund på
  digitale løsninger, så du skaber bedre webtilgængelighed (web
  accessibility).  "
tags:
  - Vejledning
  - WCAG
---
I denne artikel vil vi hjælpe dig med at få styr på, hvilke regler der gør sig gældende for kontrastforhold mellem tekst og tekstens baggrund på digitale løsninger, så du kan skabe bedre tilgængelighed, også kaldt accessibility. 

Hvis du ikke allerede har gættet det, skal kontrastforholdet mellem tekst og tekstens baggrund på din digitale løsning være tilstrækkeligt høj. I WCAG 2.1, som er retningslinjer for tilgængeligt webindhold, går denne regel under titlen: [1.4.3 Kontrast (minimum)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). Når tekster har høj nok kontrast i forhold til baggrunden, bliver de mulige at læse for personer med nedsat syn eller personer med farveblindhed. Dermed er tilstrækkelig kontrast et vigtigt led i at gøre din hjemmeside eller applikation tilgængelig. 

Kravet om kontrast er gældende for al betydningsfuld tekst og billeder af tekst på din digitale løsning – hvad end det er brødtekst, tekst på knapper, tekst ved hover (dvs. tekst, som dukker op, når musen bliver ført hen over et element eller tekst) eller placeholder-tekst (dvs. tekst, som kun optager plads i et tekstfelt, indtil man vælger at udfylde feltet – eksempelvis ordet ”Søg” i et søgefelt) m.m. Dog er tekst, som ikke ændrer betydningen af indholdet på siden (såkaldt dekorativ tekst) og logoer ikke underlagt dette krav. 

## Så her er de 2 hurtige huskeregler, når vi snakker kontrastforhold: 

1. Tekst, som er **under 18 punkt**, skal have et kontrastforhold på **minimum 4,5:1** eller højere
2. Tekst, som er **større end 18 punkt** eller **14 punkt fed**, skal have en kontrast på minimum 3:1 eller højere

Stor tekst har den fordel, at den er lettere at læse end lille tekst, og derfor er minimumskravet til kontrast for stor tekst også lavere. 

**Det er vigtigt at notere sig, at** **punkt ikke er det samme som pixels**. 14 pt og 18 pt svarer derfor til henholdsvis 18,5 px og 24 px.  

Her er et eksempel på et henholdsvis tilstrækkeligt og utilstrækkeligt kontrastforhold mellem baggrund og tekst:

![Til venstre findes et stykke tekst, hvor kontrastforholdene mellem tekst og baggrund er tilstrækkelige, mens teksteksemplet i højre side illustrerer for lave kontrastforhold.](/img/billede1.jpg "Eksempel på kontrastforhold for tekst ")

*Til venstre ser vi et stykke tekst, hvor kontrastforholdene mellem tekst og baggrund er tilstrækkelige, mens eksemplet i højre side illustrerer for lave kontrastforhold.*   

## Et godt råd til dig, der har placeret tekst ovenpå billeder

Når du placerer tekst på billeder, er det godt at tilføje et farve-overlay til billedet, så kontrasten bliver høj nok mellem tekst og baggrund. Derudover må man også gerne benytte skygger eller en kant rundt om bogstaverne i teksten, så længe kontrast mellem skygge eller kant og bogstaver er høj nok.

## Men hvordan tjekker jeg, at min tekst har tilstrækkelige kontrastforhold

Der findes mange værktøjer, som du kan benytte til tjekke, om dine tekster har høj nok kontrast. Her er et par af dem, vi anbefaler:

* [TPGi’s free color contrast checker tool ](https://www.tpgi.com/color-contrast-checker/)
* [ColourSlurp](https://colorslurp.com/)
* [Siteimprove Color contrast checker](https://siteimprove.com/en/accessibility/color-contrast-checker/) 

Læs mere om [WCAG-retningslinje 1.4.3 Kontrast (minimum)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).