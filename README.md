# Dokumentasjon
## Krav til funksjonalitet:
Slik som beskrevet i oppgaveteksten, kan brukeren i vår applikasjon velge blant tre kategorier av bilder, tre kategorier av lyd og tre kategorier av tekst for deretter å generere en utstilling med fire kombinasjoner av disse mediene. Kategoriene brukeren kan velge mellom er hos oss Elephant, Giraffe og Dog for bilde, Jazz, Techno og Telephone for lyd, og Lyrics, Novel, og Poem for tekst.
Alle de fire genererte kombinasjonene vises i hver sin fane som man kan bla mellom. Ved å endre valgene i menyen og trykke “Generate art” får man generert en ny utstilling. Den første fanen er forsiden vår, som inneholder informasjon om hvordan applikasjonen fungerer.
Bildene våre er svg-filer og hentet fra åpne kilder på nettet. Kildene til hvert bilde finner du nederst i dokumentasjonen. Lydene våre er alle mp3-filer og er hentet fra Freesound.org. Tekstene er utdrag fra kjente sangtekster, dikt og noveller. Alle disse filene ligger i public-mappen til applikasjonen vår.
## Krav til teknologi:
### React
Vår løsning er en applikasjon som baserer seg på JavaScript-biblioteket React og JSX. Her har vi implementert alle UI-komponenter fra bunnen av, uten bruk av andre tredjeparts komponenter. Både bildene og teksten, som er en del av kunstverkene i oppgaven vår, hentes ved hjelp av AJAX og funksjonen fetch(). Lyden er håndtert med HTMLs innebygde audio-tag. Funksjonaliteten for tabs baserte vi på kildekoden fra denne nettsiden.
### AJAX
Et krav som stilles til prosjektet, er at filene kun skal lastes hvis de benyttes. Dette har vi løst ved at funksjonene som henter bilde, lyd og tekst kun kjøres hvis man går inn i den aktuelle fanen som skal vise frem det aktuelle kunstverket. Videre stilles det krav til at oppgaven ikke skal laste inn samme bilde flere ganger, men lagre det på klienten første gang det lastes opp. Nettleseren er smart og håndterer dette for oss. Når et bilde lastes inn første gang, vil det automatisk lagres i hurtigminne/cache. Dermed kan man bla mellom de ulike fanene, uten at bildene må lastes på nytt hver gang.
HTML Web Storage
Vi har i applikasjonen tatt i bruk HTML Web Storage, herunder local storage og session storage. Local storage har vi brukt til å kunne tilby brukeren lagring av en utvalgt galleri-kombinasjon. Her har vi implementert “Save art” og “Fetch art”, som lagrer og henter verdiene. Med session storage har vi laget metoder som gjør at du kan personalisere applikasjonen ved å skrive inn navnet ditt øverst i headeren. Navnet vil vises under varigheten av hver session, og vil bli slettet fra session storage når vinduet lukkes (ikke ved å kun refreshe siden).
### Responsive Web Design
Når det kommer til applikasjonens responsivitet, stilles det krav til at både layout og skalering skal se bra ut, og at funksjonalitet og brukerinteraksjon skal fungere godt både på mobil, tablet og PC. For å oppnå den ønskede funksjonaliteten har vi brukt media-queries, viewport og flexbox. Det inkluderer at bilder, tekst og lydbokser og øvrig innhold på nettsiden, skalerer. Applikasjonen skifter fra rad-basert layout til kolonne-basert layout i flexbox når man minimerer nettleser-vinduet, ved bruk av flex-direction. Vi har også satt breakpoint med media-query for når skjermen skal gå over til mobilvisning. Responsiviteten sikrer at nettsiden også er tilpasset visning på tablet. Alt dette har blitt oppnådd uten
Node.js og NPM
Vårt prosjekt baserer seg på Node.js og bruk av NPM (Node Package Manager). For å sette opp React applikasjonen brukte vi kommandoen npx create-react-app webprosjekt2. Vi har i tillegg brukt kommandoen npm start for å kjøre prosjektet, npm test for å kjøre testen vår og npm build for å lage build.
### Testing
Vi har satt opp en snapshottest ved å bruke Jest for å teste React-applikasjonen vår. Denne testen sjekker App.js render()-funksjonen. Vi har i tillegg testet applikasjonens responsivitet på ulike enheter: Pc, en iPhone og på en iPad. Her observerte vi at nettsidens elementer legger seg under hverandre når skjermen blir for liten til å opprettholde sidens layout og funksjonalitet med elementene ved siden av hverandre. Vi ser at alt av skalering og responsivitet er slik vi vil at det skal være, og applikasjonen fungerer godt på alle tre enhetene.
### Installering
Vi har lastet opp til server og gjort prosjektet vårt tilgjengelig på http://it2810-09.idi.ntnu.no/prosjekt2/.
### Bruk av GIT/Koding
Underveis i prosjektet har vi hatt som mål å følge de ulike konvensjonene som gjelder for de ulike teknologiene vi har benyttet oss av, og har ellers forsøkt å holde koden ryddig og mest mulig lettleselig for å gjøre samarbeidet lettere. Kommentarer er også lagt inn for å forklare kode der det har føltes nødvendig. GIT har vært et svært nyttig verktøy for oss underveis i prosjektet. Vi delte prosjektet inn i issues og brukte issue-boardet flittig til å holde styr på hvor langt vi var kommet i utviklingen. I tillegg oppdaterte vi issue-boardet ved å kontinuerlig  oppføre nye issues og endre status ved fremgang. Ved commit har vi prøvd å være konsekvente på å merke den med hvilket/hvilke issue(s) det løser.
### Kilder
* Tabs: https://alligator.io/react/tabs-component/
* Lyder: https://freesound.org/
* Elefant: http://thecraftchop.com/entries/svg/baby-elephant
* Elefant2: https://www.flaticon.com/free-icon/elephant-side-view_47101
* Elefant3: https://www.flaticon.com/free-icon/elephant_1419285
* Elefant4: https://svgsilh.com/image/304755.html
* Giraff1: https://www.flaticon.com/free-icon/giraffe-silhouette_47057
* Giraff2: http://thecraftchop.com/tags/entries/giraffe
* Giraff3: https://www.clipart.email/clipart/free-giraffe-clipart-black-and-white-18131.html
* Giraff4: https://www.clipart.email/clipart/free-giraffe-clipart-18153.html
* Dog1: https://www.svgrepo.com/svg/24782/dog
* Dog2: https://www.svgrepo.com/svg/26167/dog-face
* Dog3: https://www.svgrepo.com/svg/163658/angry-bulldog-face
* Dog4: https://commons.wikimedia.org/wiki/File:Dog.svg
