# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Nicha van Emmerik

  #### Je startniveau:
  Blauw/Rood

  #### Je focus:
  Surface of beiden

</details>


## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp
  https://www.nintendo.com/nl-nl/ & https://store.nintendo.nl/nl/pokemon-legends-z-a-nintendo-switch-2-edition-70010000099366

  #### Screenshot(s) van de eerste pagina (small screen): 
  Nintendo home 
  <img src="readme-images/nintendo_home.png" width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  Pokémon Game Detail
  <img src="readme-images/nintendo_detailpage.png" width="375px" alt="omschrijving van de pagina">
 
</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  - De home pagina heeft geen een heading
  - De tab selectie gaat niet verder dan de tweede sectie

  De narrator vertelt je alles wat je selecteert en schrijft. Dit kan erg desoriënterend zijn voor de gebruiker. Wanneer er een ingeklapte accordion ding open wordt gemaakt scant de Narrator hoeveel items erin staan. 
 
  Het valt me op dat de Narrator bij het selecteren van de radio button dat de label als eerst wordt opgenoemd. Als de checkbox bijvoorbeeld wordt gemarkeerd dan hoor je:  “Onder de 10 euro |  Radio button | Selected | 1 of 4”.
  Ik heb geleerd dat je de input van de radio button met het label kan koppelen door de id en for van het label dezelfde naam te geven of de input in het label te schrijven.

  Caps lock f7 kopjes
  Caps lock f6 links


</details>



## Breakdownschets (week 1)

<details>
  <summary> Breakdown uitwerking </summary>
  
   ### Aantekeningen: 
  Ik heb de screenshot in figma geplakt en de stukken in sections gemarkeerd. Ik twijfelde of de sub tabs onder de H2s een list moet zijn. Na het op zoeken kwam ik er achter dat een list voor verticale lijstjes is. Ik heb het toen verbeterd naar een button omdat het een actie heeft.
  Ik vroeg me ook af of ik een link in een list mag doen.
  Ik heb ook geleerd dat je een svg gebruikt i.p.v. een img bij buttons.
  Voordat ik begon met de breakdown had ik stiekem al wat html geschreven om te kijken wat ik fout zou doen.
  Ik had veel gebruik gemaakt van sections waar dat niet hoefde. Ik heb sommigen veranderd naar een unordered list of link.

  Ook hoeft een enkele child niet nog eens in een sectie.
  Bij de volgende werkgroep ga ik vragen of de gemarkeerde h3tjes daadwerkelijk headings zijn of losse tabs.

  Bij het opzetten van de html zelf werd de nav lijst buiten de kader geduwd
  <img src="readme-images/Screenshot 2025-11-16 191455.png">

  ### Home pagina: 
  <img src="readme-images/breakdown_home.jpg" width="375px" alt="breakdown van de hele pagina">

  ### Hamburger menu: 
  <img src="readme-images/breakdown_hamburger.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### Detail pagina: 
  <!-- <img src="" width="375px" alt="breakdown van nog een dynamisch deel"> -->
</details>



## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  opzetten html ging goed.
  De hamburger button z-index werkte niet. kwam er toen achter dat de hamburger button niet binnenin de nav staat. 

  - Geleerd dat niet elke pief paf een sectie hoeft te zijn, een andere element is accurater.
  - Aria label direct aan kunnen roepen in css

  - Geleerd over verschillende selectoren
  - In de les flexbox en grid geleerd. Moeite met hoe grid werkte. Geleerd dat het gaat om de lijnen, niet om de vakjes.

  - Vergeten hoe je een blokje maakt. Even opzoeken in css en vertellen wat geleerd

  Wat ging goed: het opzetten van het html en commit push gaat soepel

  <img src="readme-images/voortgang_1.png" width="375px" alt="1e voortgang">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

Stiene                                                    
  | omdraaien titel & rondddraaiend grid          |          
  | h2 en button & uit grid titel center          |                  
 
  | Nicha
  |  |
  | Tabs dynamisch active en unactive|
 
 
  | Anne                                          |
  | een element en dropdown button disable state  |
 
  | Kasper
  |
 
  | Dylan
  | hamburger menu 2 buttons & custom properties

  ### Verslag van meeting
 
  - Grid column beter oefenen
  - Scroll-snap-type: x mandatory zegt tegen kind dat het moet snappen. scroll-snap-align: center; hoort erbij
  - motion reduced-motion :no-preference button
  - content: "wat je leest/ziet / wat de screen reader leest";
  - "content-visibility: visible" in een media query voor full window size wanneer je bv een summary details hebt
  - details stylization with details ::marker {content: '';} 
  dit is voor chrome en edge > voor elke browser kunnen verbergen!
  - summary::after { content: "+";}
  - html: <!-- <details open> --> css: details[open] summary::after { rotate: 45deg;} wanneer het open is kan je andere styling geven
  - chrome://flags/

  Resources: 
  - Emet cheat sheet: https://docs.emmet.io/cheat-sheet/
  - Adam argyle carousels with css: https://developer.chrome.com/blog/carousels-with-css
  - carousel configurator: https://chrome.dev/carousel-configurator/
  - kevin powell: animate details & summary with a few lines of CSS: https://www.youtube.com/watch?v=Vzj3jSUbMtI
  - active unactive https://codepen.io/shooft/pen/wBKyoWx https://codepen.io/Nika-v-the-typescripter/pen/myPBxYJ


</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het lukte me niet om de tabs dynamisch te wisselen. Ik had hulp gevraagd en kreeg een Dit komt denk ik do


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  - 
- Stiene haar grid was kapot gegaan, dit kwam door een -4 styling in de button die onder grid stond.
- Voor font ook custom properties
- Geen margin gebruiken, voorkeur aan padding
- 

Sources: 
- Grid template areas css tricks
- CSS grid generator
</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Stap 1: games section opmaak
  Te doen: pagina 2 breakdown, aria-labels, dark mode

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. [...](https://matthewlein.com/tools/ceaser)

</details>
