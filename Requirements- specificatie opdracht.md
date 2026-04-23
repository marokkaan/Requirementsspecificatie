![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/196d6418121468e55c753f79cc7d721990da3eb6/voorbladfoto.png)
# Inhoudsopgave
- [Inleiding](#Inleiding)
- [Organisatorische Context](#Organisatorische-Context)
- [Actoren](#Actoren)
- [Bedrijfsprocesanalyse](#Bedrijfsprocesanalyse)
- [Productvisie](#Productvisie)
- [User stories](#User-stories)
- [DoR en DoD](#DoR-en-DoD)
- [Sitemap](#Sitemap)
- [Wireframes](#Wireframes)
- [Conclusie](#Conclusie)
# Inleiding
Chocolate Firm bevindt zich in een competitieve markt waarin klantbeleving en merkloyaliteit steeds bepalender worden voor succes. Op dit moment verloopt de communicatie met klanten via losse kanalen en handmatige processen, wat leidt tot vertraging, beperkte personalisatie en een hoge werkdruk bij de klantenservice. Om deze knelpunten op te lossen en beter in te spelen op de behoeften van zowel particuliere als zakelijke klanten, is besloten een nieuw digitaal platform te ontwikkelen. 

De applicatie stelt klanten in staat om aangekochte chocoladeproducten te registreren, gedetailleerde productinformatie te raadplegen, vragen te stellen via een AI-chatbot, klachten in te dienen en deel te nemen aan een actieve community. Daarnaast integreert de app met interne systemen zoals ERP, CRM en BI-tools, waardoor processen efficiënter verlopen en de organisatie datagedreven beslissingen kan nemen. 

Dit document beschrijft de requirements specificatie van het te ontwikkelen systeem. Hierbij wordt eerst de organisatorische context geschetst, gevolgd door een analyse van de betrokken actoren en bedrijfsprocessen. Vervolgens wordt de productvisie uitgewerkt en vertaald naar concrete user stories met acceptatiecriteria. Tot slot worden de Definition of Ready en Definition of Done, de sitemap en de wireframes gepresenteerd. Samen bieden deze onderdelen een compleet en gestructureerd overzicht van het systeem en de eisen waaraan het moet voldoen. 

# Organisatorische Context

## Missie 

De missie van de Chocolate Firm is het leveren van hoogwaardige en duurzame chocoladeproducten die bijdragen aan een eerlijke productieketen en een optimale klantbeleving. 

## Visie 

De Chocolate Firm wil uitgroeien tot een innovatief en invloedrijke chocolademerk waarin technologie wordt ingezet om klanten een persoonlijke en transparante ervaring te bieden. 

## Strategie 

De strategie van de Chocolate Firm is gebaseerd op drie belangrijke onderdelen: klantgerichtheid, digitalisering en duurzaamheid. Deze pijlers vormen samen de basis voor de manier waarop de organisatie waarde creëert voor zowel klanten als de interne organisatie. 

## Strategie 1: Klantgerichtheid 

In de Chocolate Firm draait alles om de klant. De organisatie streeft ernaar om klanten beter te begrijpen en te bedienen door middel van data-analyse en op maat gemaakte diensten. Door inzicht te verkrijgen in het gedrag, de voorkeuren en de aankoopgeschiedenis van klanten, kan de organisatie effectiever inspelen op hun wensen. De mobiele app zal dit proces verbeteren door klanten de kans te geven om producten te registreren, wat leidt tot het beschikbaar stellen van waardevolle gegevens. Wat op maat gemaakte aanbevelingen kan voorstellen die passen bij eerdere aankopen en voorkeuren in smaak. De app biedt bovendien directe communicatie met de klant door middel van notificaties en een chatbot, wat ervoor zorgt dat vragen snel worden beantwoord en klanten zich beter gesteund voelen. Dit zorgt voor een goede band tussen de klant en het bedrijf. 

## Strategie 2: Digitalisering 

De Chocolate Firm richt zich intensief op digitalisering om processen effectiever te maken en een consistente klantervaring te garanderen. Door het combineren van diverse systemen, waaronder ERP, CRM en BI-tools, wordt informatie op een centrale manier beheerd en gedeeld binnen de organisatie. Dit vermindert het aantal fouten en garandeert dat de gegevens altijd up-to-date blijven. De mobiele applicatie is hierin cruciaal als de verbinding tussen deze systemen en de klant. Dit stelt klanten in staat om in real-time informatie te krijgen over producten, bestellingen en beschikbaarheid, terwijl de organisatie tegelijkertijd efficiënter kan functioneren en beter kan reageren op veranderingen. 

## Strategie 3: Duurzaamheid 

Duurzaamheid is een erg belangrijk onderdeel van de bedrijfsstrategie van de Chocolate Firm. De organisatie hecht veel waarde aan eerlijke handel, transparantie en verantwoorde productie. Dit blijkt onder meer uit het verduidelijken van de oorsprong van cacao en het toepassen van certificeringen zoals Fairtrade. Daarnaast communiceert de organisatie actief richting klanten over duurzame initiatieven en verbeteringen binnen de keten. De mobiele applicatie maakt deze informatie toegankelijk en begrijpelijk voor de eindgebruiker, waardoor klanten bewuster worden van hun keuzes en de impact daarvan. Hiermee draagt de app niet alleen bij aan transparantie, maar ook aan het versterken van het duurzame uitstraling van de organisatie. 

## Doelstellingen 

De belangrijkste doelstellingen van de Chocolate Firm met betrekking tot deze applicatie zijn: 

Verhogen van klantloyaliteit door een gepersonaliseerde en interactieve gebruikerservaring. 
Verbeteren van klanttevredenheid door snelle toegang tot productinformatie en ondersteuning. 
Verlagen van servicekosten door self-service functionaliteiten zoals FAQ’s en chatbot. 
Verzamelen van data-inzichten om producten en diensten continu te verbeteren. 
Versterken van merkbeleving door storytelling, community en gamification. 
Ondersteunen van duurzaamheid door transparante communicatie en bewustwording. 

## Organogram

![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/d206e0bfbcc13d6ace13226388be02cb715fd18c/organogram.png)

## Stakeholderanalyse 

Binnen dit project zijn verschillende stakeholders betrokken, elk met hun eigen belangen: 

## Interne stakeholders 

## Management 
Het management is verantwoordelijk voor het behalen van de strategische doelstellingen van de organisatie. Hun belang ligt vooral bij het versterken van de concurrentiepositie en het verhogen van klantloyaliteit. Daarnaast willen zij inzicht krijgen in data en prestaties om op die manier strategische beslissingen te kunnen nemen. 
IT-afdeling 
De IT-afdeling is verantwoordelijk voor de ontwikkeling, implementatie en het onderhoud van de applicatie. Hun belang ligt bij een stabiele, veilige en schaalbare oplossing die goed integreert met bestaande systemen zoals ERP, CRM en BI-tools. Ook hechten zij waarde aan goede performance, minimale downtime en het eenvoudig kunnen doorvoeren van updates. 

## Marketingteam 
Het marketingteam richt zich op het verbeteren van de klantbeleving en het versterken van het merk. Hun belang ligt bij effectieve klantcommunicatie, gepersonaliseerde content en het kunnen uitvoeren van gerichte campagnes. De applicatie dient hen te helpen bij het verzamelen van klantgegevens en het bieden van relevante promoties en aanbevelingen. 

## Klantenservice 
De klantenservice maakt gebruik van de applicatie om klantvragen en klachten efficiënter af te handelen. Hun belang ligt bij duidelijke informatie, gebruiksvriendelijke tools en inzicht in klantgegevens. Dit helpt hen om sneller en beter ondersteuning te bieden en de klanttevredenheid te verhogen. 

## Externe stakeholders 

## Consumenten (B2C) 
Consumenten zijn de eindgebruikers van de applicatie. Hun belang ligt bij gebruiksgemak, duidelijke en transparante informatie en een prettige gebruikerservaring. Zij verwachten snelle toegang tot productinformatie, eenvoudige registratie van producten en ondersteuning bij vragen of problemen. 

## Zakelijke klanten (B2B) 
Zakelijke klanten, zoals retailers en horecapartners, hebben andere behoeften dan consumenten. Hun belang ligt bij inzicht in voorraad, levertijden, bestellingen en productinformatie. De applicatie moet hen ondersteunen bij het efficiënt beheren van hun inkoop en het plannen van hun bedrijfsactiviteiten. 

## Cacaoboeren en leveranciers 
Deze stakeholders spelen een belangrijke rol in de productieketen. Hun belang ligt bij eerlijke handel, transparantie en erkenning van hun bijdrage. Door informatie over herkomst en productie zichtbaar te maken in de app, krijgen zij meer zichtbaarheid richting de eindklant. 

## Certificeringsorganisaties 
Certificeringsorganisaties controleren of producten voldoen aan bepaalde duurzaamheids- en kwaliteitsnormen. Hun belang ligt bij een correcte en transparante communicatie van keurmerken zoals Fairtrade. De applicatie moet deze informatie betrouwbaar en duidelijk weergeven. 

## Overheden en toezichthouders 
Deze partijen zien toe op de naleving van wet- en regelgeving. Hun belang ligt bij het beschermen van consumenten en het waarborgen van privacy en dataveiligheid. De applicatie moet voldoen aan relevante wetgeving, zoals de AVG/GDPR, en zorgvuldig omgaan met persoonsgegevens. 
 

# Actoren

## Interne actoren 

## Consument (B2C-klant) 
De consument is een particuliere klant die chocoladeproducten koopt via reguliere verkoopkanalen zoals winkels of de webshop. Via de app kan de consument zijn aangekochte producten registreren met een QR-code of batchnummer, een persoonlijk dashboard raadplegen met productinformatie en houdbaarheid, recepten en tutorials bekijken, klachten indienen, bestellingen plaatsen en deelnemen aan de community. De consument ontvangt gepersonaliseerde aanbevelingen op basis van aankoopgeschiedenis en voorkeuren. 

## B2B-klant 
De B2B-klant is een zakelijke afnemer zoals een horecabedrijf, retailer of cateraar. Naast de standaard functionaliteiten heeft de B2B-klant toegang tot aanvullende informatie over levertijden, voorraadstatus en productieplanning. Via de app kan de B2B-klant direct nabestellingen plaatsen gekoppeld aan het ERP-systeem, zonder tussenkomst van een verkoopmedewerker. 

## Klantenservicemedewerker 
De klantenservicemedewerker is een interne medewerker die tijdens kantooruren bereikbaar is via de live chatfunctie in de app. Deze actor heeft toegang tot het CRM-systeem om klantprofielen in te zien en zo gepersonaliseerde hulp te bieden. De medewerker handelt complexe vragen en klachten af die de AI-chatbot niet zelfstandig kan oplossen, en kan compensaties of vervangingen goedkeuren. 

## Beheerder 
De beheerder is een interne gebruiker die de app beheert via een backoffice-omgeving. De admin beheert gebruikersaccounts, productregistraties, contentbeheer (recepten, productkaarten, tutorials), app-instellingen en notificatiecampagnes. Ook bewaakt de admin de privacy-instellingen en zorgt voor naleving van AVG/GDPR-vereisten. De beheerder heeft de hoogste toegangsrechten binnen het systeem. 

## Geautomatiseerde actoren 

AI-chatbot De AI-chatbot is een geautomatiseerde actor die 24/7 beschikbaar is binnen de app. De chatbot beantwoordt veelgestelde vragen over productinformatie, allergenen, bestellingen, klachten en duurzaamheid. De chatbot is gekoppeld aan het CRM-systeem, waardoor antwoorden gepersonaliseerd worden op basis van de klanthistorie. Bij complexe vragen escaleert de chatbot automatisch naar een klantenservicemedewerker of biedt een terugbelfunctie aan. 

## Externe systeemactoren 

## ERP-systeem 
Het ERP-systeem is een externe actor die real-time gegevens levert over voorraadniveaus, bestellingen, levertijden en seizoensbeschikbaarheid van producten. De app synchroniseert met het ERP om klanten actuele informatie te tonen en directe bestellingen mogelijk te maken. Wijzigingen in de voorraad of productieplanning worden automatisch doorgegeven aan de app. 

## CRM-systeem 
Het CRM-systeem is een externe actor die klantprofielen, aankoopgeschiedenis en communicatievoorkeuren bijhoudt. De app maakt gebruik van CRM-data om gepersonaliseerde aanbevelingen, notificaties en klantenservice-ervaringen te leveren. Elke interactie van een klant met de app wordt teruggeschreven naar het CRM, zodat klantprofielen altijd actueel blijven. 

## BI-tool 
De BI-tool is een externe actor die geanonimiseerde gebruiksdata ontvangt vanuit de app. Deze data omvat klantgedrag, smaakvoorkeuren, aankooppatronen en community-activiteit. De BI-tool verwerkt deze informatie tot inzichten die worden gedeeld met de afdelingen Marketing, Productontwikkeling en Klantenservice voor strategische besluitvorming en productkwaliteitsverbetering. 

# Bedrijfsprocesanalyse

## Huidige situatie (IST)

Op dit moment verloopt het proces rondom klantinteractie en productinformatie grotendeels via losse kanalen en handmatige stappen.

Klanten kopen chocoladeproducten via winkels of zakelijke kanalen, maar hebben daarna beperkt inzicht in productinformatie zoals herkomst, allergenen of houdbaarheid. Deze informatie is vaak alleen beschikbaar op de verpakking of via externe websites.

Bij vragen of problemen moeten klantencontact opnemen met de klantenservice via e-mail, telefoon of externe portals. Dit proces kost veel tijd en is niet altijd gebruiksvriendelijk. Klachten en retourmeldingen worden handmatig verwerkt, waardoor de afhandeling langer duurt en foutgevoelig kan zijn.

Daarnaast is er weinig directe communicatie met klanten. Updates over nieuwe producten, duurzaamheid of seizoensaanbod bereiken klanten vaak via algemene marketingkanalen, zoals e-mail of sociaal media, en zijn niet gepersonaliseerd.

Voor de organisatie zelf is er beperkte integratie tussen systemen zoals ERP, CRM en BI-tools, waardoor data verspreid is en minder efficiënt gebruikt wordt.

## Knelpunten

Hierboven is al kort benoemd wat er allemaal misgaat in de huidige situatie, maar hier nog even een kleine overzicht:

- Klanten hebben beperkte toegang tot productinformatie na aankoop
- Klantvragen en klachten worden handmatig en traag afgehandeld
- Geen centraal platform voor klantinteractie
- Communicatie is niet gepersonaliseerd
- Data is verspreid over meerdere systemen
- Weinig inzicht in klantgedrag en voorkeuren
- Klantenservice heeft hoge werkdruk door handmatige processen

Om deze knelpunten op te lossen streven we naar een gewenste situatie.

## Gewenste situatie (SOLL)

In de gewenste situatie maakt de Chocolate Firm gebruik van een centrale mobiele applicatie die alle klantinteracties samenbrengt.

Klanten kunnen hun producten eenvoudig registreren via QR-codes en krijgen direct toegang tot uitgebreide en gepersonaliseerde productinformatie via een persoonlijk dashboard.

De applicatie biedt automatische notificaties over houdbaarheid, nieuwe producten en relevante updates. Klanten kunnen eenvoudig vragen stellen via een AI-chatbot of contact opnemen met de klantenservice via geïntegreerde chatfuncties.

Klachten en retourmeldingen worden digitaal ingediend en (gedeeltelijk) automatisch verwerkt, inclusief statusupdates en mogelijke oplossingen of compensaties.

De app is gekoppeld aan interne systemen zoals ERP, CRM en BI-tools, waardoor informatie real-time beschikbaar is en processen efficiënter verlopen. Deze real-time informatie is zichtbaar voor de Management zo kunnen strategieën worden toegepast op relevante data.

Daarnaast ontvangen klanten gepersonaliseerde aanbevelingen en aanbiedingen op basis van hun gedrag en voorkeuren, wat de klantbeleving en loyaliteit verhoogt.

## Gap-analyse (verschil IST vs SOLL)

Na het inklaart brengen van de IST-situatie en de SOLL-situatie kunnen we de belangrijkste verschillenen bepalen. De verschillen tussen de huidige en toekomstige situatie zijn:

### Van handmatige processen naar geautomatiseerde en digitale processen

In de huidige situatie worden veel processen, zoals het afhandelen van klachten, retourmeldingen en klantvragen, handmatig uitgevoerd. Dit kost veel tijd en is foutgevoelig. In de gewenste situatie worden deze processen grotendeels geautomatiseerd via de applicatie, waardoor de verwerkingstijd korter wordt en de kans op fouten afneemt.

### Van verspreide systemen naar geïntegreerde systemen

Op dit moment zijn systemen zoals ERP, CRM en BI-tools niet of nauwelijks met elkaar verbonden. Hierdoor is informatie verspreid over meerdere plekken en moeten medewerkers data handmatig combineren. De applicatie zorgt voor een centrale integratie van deze systemen, waardoor gegevens real-time beschikbaar zijn en consistent blijven.

### Van algemene communicatie naar gepersonaliseerde communicatie

De huidige communicatie richting klanten verloopt via algemene kanalen zoals e-mail en social media. Berichten zijn niet afgestemd op de individuele klant dit zorgt voor een minder sterke 'band' met de klant. Met de komst van de applicatie worden notificaties en aanbevelingen gepersonaliseerd op basis van aankoopgedrag, voorkeuren en productregistraties, wat de relevantie en betrokkenheid vergroot.

### Van beperkte klantinzichten naar datagedreven inzichten

Momenteel is er weinig inzicht in het gedrag en de voorkeuren van klanten. Beslissingen op het gebied van marketing en productontwikkeling worden daardoor niet altijd goed onderbouwd. De applicatie verzamelt geanonimiseerde gebruiksdata en koppelt deze aan BI-tools, zodat de organisatie beter onderbouwde beslissingen kan nemen.

### Van reactieve klantenservice naar proactieve ondersteuning

In de huidige situatie reageert de klantenservice pas nadat een klant contact opneemt. Dit leidt tot vertraging en een hogere werkdruk. Met de applicatie wordt ondersteuning proactief aangeboden via een AI-chatbot, automatische notificaties en statusupdates, waardoor klanten sneller geholpen worden en de werkdruk bij de klantenservice afneemt.

![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/bf725e100e94eef3b54058a4fc8aa0ea87d4c84d/gap%20analyse.png)

# Productvisie
Hieronder is ons Product Vision Board te zien voor de mobiele applicatie van de Chocolate Firm. Dit board geeft een overzicht van de productvisie, doelgroep, behoeften, belangrijkste functies, zakelijke doelstellingen, concurrenten, inkomstenmodellen, kostenposten en kanalen.
![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/d3f3d76ca161ccf5aca7f03085873c1360ecb833/productvision.png)

# User stories

# DoR en DoD

## Definition of Ready (DoR)

De Definition of Ready beschrijft wanneer een functionaliteit (feature) klaar is om ontwikkeld te worden. Dit voorkomt onduidelijkheid en fouten tijdens het ontwikkelproces.

### Een feature is “Ready” als:

- Het doel van de feature duidelijk is  
  *(bijvoorbeeld: klant kan een product registreren via QR-code)*  
- De functionaliteit helder is beschreven  
- Er acceptatiecriteria zijn opgesteld  
- De gebruikersflow globaal bekend is  
- Technische koppelingen bekend zijn  
  *(zoals ERP, CRM en BI-tool)*  
- De benodigde data duidelijk is (input en output)  
- Mogelijke uitzonderingen zijn benoemd  
  *(bijvoorbeeld: QR-code werkt niet of product wordt niet herkend)*  
- De feature klein genoeg is om binnen één sprint te ontwikkelen

## Definition of Done (DoD)

De Definition of Done beschrijft wanneer een feature volledig af is en klaar is voor gebruik.

### Een feature is “Done” als:

- De functionaliteit werkt volgens de gestelde eisen  
- Alle acceptatiecriteria zijn behaald  
- De feature is getest (functioneel en technisch)  
- De applicatie werkt op alle gekozen apparaten (bijv. iOS en Android)  
- De gebruikersinterface duidelijk en gebruiksvriendelijk is  
- Data correct wordt verwerkt en opgeslagen  
- De koppelingen werken met:
  - ERP-systeem (voorraad en bestellingen)  
  - CRM-systeem (klantgegevens)  
  - BI-tool (data-analyse)  
- Beveiliging is toegepast:
  - Tweefactorauthenticatie (2FA)  
  - Versleuteling van data (encryptie)  
- De prestaties goed zijn (snelle laadtijden)  
- De documentatie is bijgewerkt  
- De feature is goedgekeurd door de opdrachtgever of product owner  

# Sitemap

De sitemap geeft een overzicht van de structuur van de mobiele applicatie. Het laat zien welke schermen er zijn en hoe gebruikers door de app navigeren.

## Overzicht van de applicatie

```plaintext
Home / Dashboard
│
├── Producten
│   ├── Product registreren (QR-code / handmatig)
│   ├── Mijn producten
│   └── Product details
│
├── Ontdekken
│   ├── Recepten
│   ├── Video’s (van boon tot reep)
│   └── Productinformatie
│
├── Shop
│   ├── Producten bestellen
│   ├── Abonnementen
│   └── Bestellingen volgen
│
├── Klantenservice
│   ├── Klacht indienen
│   ├── Status volgen
│   └── FAQ / Chatbot
│
├── Community
│   ├── Forum
│   ├── Reviews
│   └── Challenges & badges
│
├── Events & Locaties
│   ├── Winkelzoeker
│   ├── Events / workshops
│   └── Inschrijven
│
└── Profiel
    ├── Instellingen
    ├── Privacy-instellingen
    └── Voorkeuren
````

# Wireframes
Voor het maken van de app is het belangrijk om een goed beeld te schetsen hoe wij de app eruit willen laten zien, zo hebben wij wireframes gemaakt.

![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/ca1bc54ddd5a6de6bfc26de395f09b9f36b84edf/afbeelding.png)
Hierboven zie je het startscherm. In dit scherm kan je inloggen als je al een account hebt of registreren als je er nog een moet maken.

![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/66026e2849007aa8071cc7afdff8ce20407b1107/homepagina.png)
Als je eenmaal ingelogd bent, kom je op het startscherm terecht. In dit startscherm zie je de belangrijkste dingen, zoals jouw producten en tot wanneer deze houdbaar zijn. Daarnaast zie je ook linksboven een QR-codefunctie. Zoals ik net al benoemd heb, zie je hier de belangrijkste dingen, maar wil je specifiek meer informatie krijgen over de ‘producten’, druk je op ‘producten’.

![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/5a7384e00133d227dbadf4179493ce1ef2274f9b/producten.png)
![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/d523aca592dd21c25593c55db177a20cda90226c/qr.png)

Na het klikken op 'producten', zie je de producten die jij hebt en daarnaast ook een functie waarbij je producten kan registreren.

![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/cbe7b8c66c9c713e8fc8c88cdb0a870117740090/afbeelding%20(4).png)

De 'ontdek' functie laat je kiezen tussen meer informatie verkrijgen over recepten, videos enzovoort.

![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/89c7e09f7600bf8568643e2ee9f0475a1eb121e4/afbeelding%20(5).png)

Natuurlijk is er ook een shop functie waarbij je repen gelijk kan kopen.

![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/a5ff700d89d7b29b8c32476197bd893c45d520d4/afbeelding%20(6).png)

De belangrijkste functie is toch wel echt de account functie, je hebt hier keuze tot 'klantenservice', 'community'. 'winkels & events' en 'profiel'

![image alt](https://github.com/marokkaan/Requirementsspecificatie/blob/200313dbee6164dba7e6d8d810c77c427db0a350/afbeelding%20(7).png)

Als je klikt op 'Klantenservice', kan je gelijk chatten met de klantenservice, ook heb je een FAQ functie en een functie om een klacht in te dienen.

De functie 'Winkels en Events', showt de dichtsbijzijnde winkels en profiel geeft je een functie om je wachtwoord aan te passen etc.
# Conclusie

















