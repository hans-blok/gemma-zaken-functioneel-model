# Zaken Berichten - Functionele Beschrijving

**Versie**: 1.6.0  
**Datum**: 10 februari 2026

## Inleiding

Dit document beschrijft de **functionele structuur van berichten** die gebruikt worden binnen de Zaken functionaliteit. 

Voor terminologie en achtergrond, zie: [Terminologie](../../algemeen/terminologie.md)

Voor functionele handelingen, zie: [Zaken Functies v1.6.0](functies-v1.6.0.md)

## Functionele Beschrijving van de Berichten
### AuditTrail

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| uuid | string (uuid) | Unieke identificatie van de audit regel. |
| bron | unknown | De naam van het component waar de wijziging in is gedaan. Uitleg bij mogelijke waarden: * `ac` - Autorisaties API * `nrc` - Notificaties API * `zrc` - Zaken API * `ztc` - Catalogi API * `drc` - Documenten API * `brc` - Besluiten API * `cmc` - Contactmomenten API * `kc` - Klanten API * `vrc` - Verzoeken API |
| applicatieId | string | Unieke identificatie van de applicatie, binnen de organisatie. |
| applicatieWeergave | string | Vriendelijke naam van de applicatie. |
| gebruikersId | string | Unieke identificatie van de gebruiker die binnen de organisatie herleid kan worden naar een persoon. |
| gebruikersWeergave | string | Vriendelijke naam van de gebruiker. |
| actie | string | De uitgevoerde handeling. De bekende waardes voor dit veld zijn hieronder aangegeven, maar andere waardes zijn ook toegestaan. Uitleg bij mogelijke waarden: * `create` - Object aangemaakt * `list` - Lijst van objecten opgehaald * `retrieve` - Object opgehaald * `destroy` - Object verwijderd * `update` - Object bijgewerkt * `partial_update` - Object deels bijgewerkt |
| actieWeergave | string | Vriendelijke naam van de actie. |
| resultaat | integer | HTTP status code van de API response van de uitgevoerde handeling. |
| hoofdObject | string (uri) | De URL naar het hoofdobject van een component. |
| resource | string | Het type resource waarop de actie gebeurde. |
| resourceUrl | string (uri) | De URL naar het object. |
| toelichting | string | Toelichting waarom de handeling is uitgevoerd. |
| resourceWeergave | string | Vriendelijke identificatie van het object. |
| aanmaakdatum | string (date-time) | De datum waarop de handeling is gedaan. |
| wijzigingen | unknown |  |

### KlantContact **VERVALLEN**

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| identificatie | string | De unieke aanduiding van een KLANTCONTACT |
| datumtijd | string (date-time) | De datum en het tijdstip waarop het KLANTCONTACT begint |
| kanaal | string | Het communicatiekanaal waarlangs het KLANTCONTACT gevoerd wordt |
| onderwerp | string | Het onderwerp waarover contact is geweest met de klant. |
| toelichting | string | Een toelichting die inhoudelijk het contact met de klant beschrijft. |

### Resultaat

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| resultaattype | string (uri) | URL-referentie naar het RESULTAATTYPE (in de Catalogi API). |
| toelichting | string | Een toelichting op wat het resultaat van de zaak inhoudt. |

### Rol

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| betrokkene | string (uri) | URL-referentie naar een betrokkene gerelateerd aan de ZAAK. |
| betrokkeneType | unknown | Type van de `betrokkene`. Uitleg bij mogelijke waarden: * `natuurlijk_persoon` - Natuurlijk persoon * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon * `vestiging` - Vestiging * `organisatorische_eenheid` - Organisatorische eenheid * `medewerker` - Medewerker |
| afwijkendeNaamBetrokkene | string | De naam van de betrokkene waaronder deze in relatie tot de zaak aangesproken wil worden. |
| roltype | string (uri) | URL-referentie naar een roltype binnen het ZAAKTYPE van de ZAAK. |
| omschrijving | string | Omschrijving van de aard van de ROL, afgeleid uit het ROLTYPE. |
| omschrijvingGeneriek | string | Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE. Uitleg bij mogelijke waarden: * `adviseur` - (Adviseur) Kennis in dienst stellen van de behandeling van (een deel van) een zaak. * `behandelaar` - (Behandelaar) De vakinhoudelijke behandeling doen van (een deel van) een zaak. * `belanghebbende` - (Belanghebbende) Vanuit eigen en objectief belang rechtstreeks betrokken zijn bij de behandeling en/of de uitkomst van een zaak. * `beslisser` - (Beslisser) Nemen van besluiten die voor de uitkomst van een zaak noodzakelijk zijn. * `initiator` - (Initiator) Aanleiding geven tot de start van een zaak. * `klantcontacter` - (Klantcontacter) Het eerste aanspreekpunt zijn voor vragen van burgers en bedrijven. * `zaakcoordinator` - (Zaakcoördinator) Er voor zorg dragen dat de behandeling van de zaak in samenhang uitgevoerd wordt conform de daarover gemaakte afspraken. * `mede_initiator` - Mede-initiator |
| roltoelichting | string | Verduidelijking van de ROL van de BETROKKENE in de ZAAK. |
| registratiedatum | string (date-time) | De datum waarop dit object is geregistreerd. |
| indicatieMachtiging | unknown | Indicatie machtiging. Uitleg bij mogelijke waarden: * `gemachtigde` - De betrokkene in de rol bij de zaak is door een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen * `machtiginggever` - De betrokkene in de rol bij de zaak heeft een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen |
| contactpersoonRol | unknown | De gegevens van de persoon die anderen desgevraagd in contact brengt met medewerkers van de BETROKKENE, een NIET-NATUURLIJK PERSOON of VESTIGING zijnde, of met BETROKKENE zelf, een NATUURLIJK PERSOON zijnde, vanuit het belang van BETROKKENE in haar ROL bij een ZAAK. |
| statussen | array | De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn. |

### Status

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| statustype | string (uri) | URL-referentie naar het STATUSTYPE (in de Catalogi API). |
| datumStatusGezet | string (date-time) | De datum waarop de ZAAK de status heeft verkregen. |
| statustoelichting | string | Een, voor de initiator van de zaak relevante, toelichting op de status van een zaak. |
| indicatieLaatstGezetteStatus | boolean | Het gegeven is afleidbaar uit de historie van de attribuutsoort Datum status gezet van van alle statussen bij de desbetreffende zaak. |
| gezetdoor | string (uri) | De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn. |
| zaakinformatieobjecten | array |  |

### Zaak

Een zaak in de context van zaakgericht werken bij Nederlandse overheden, een afgebakend proces dat wordt uitgevoerd om een bepaald doel te bereiken voor een burger, bedrijf of andere instantie. Denk bijvoorbeeld aan het aanvragen van een paspoort, het doen van een melding openbare ruimte, of het aanvragen van een vergunning.

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| identificatie | string | De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK. |
| bronorganisatie | string | Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef |
| omschrijving | string | Een korte omschrijving van de zaak. |
| toelichting | string | Een toelichting op de zaak. |
| zaaktype | string (uri) | URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt |
| registratiedatum | string (date) | De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt. |
| verantwoordelijkeOrganisatie | string | Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die eindverantwoordelijk is voor de behandeling van de zaak. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef |
| startdatum | string (date) | De datum waarop met de uitvoering van de zaak is gestart |
| einddatum | string (date) | De datum waarop de uitvoering van de zaak afgerond is. |
| einddatumGepland | string (date) | De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt. |
| uiterlijkeEinddatumAfdoening | string (date) | De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn. |
| publicatiedatum | string (date) | Datum waarop (het starten van) de zaak gepubliceerd is of wordt. |
| communicatiekanaal | string (uri) | Het medium waarlangs de aanleiding om een zaak te starten is ontvangen. URL naar een communicatiekanaal in de VNG-Referentielijst van communicatiekanalen. |
| productenOfDiensten | array | De producten en/of diensten die door de zaak worden voortgebracht. Dit zijn URLs naar de resources zoals die door de producten- en dienstencatalogus-API wordt ontsloten. De producten/diensten moeten bij het zaaktype vermeld zijn. |
| vertrouwelijkheidaanduiding | unknown | Aanduiding van de mate waarin het zaakdossier van de ZAAK voor de openbaarheid bestemd is. Optioneel - indien geen waarde gekozen wordt, dan wordt de waarde van het ZAAKTYPE overgenomen. Dit betekent dat de API _altijd_ een waarde teruggeeft. |
| betalingsindicatie | unknown | Indicatie of de, met behandeling van de zaak gemoeide, kosten betaald zijn door de desbetreffende betrokkene. Uitleg bij mogelijke waarden: * `nvt` - Er is geen sprake van te betalen, met de zaak gemoeide, kosten. * `nog_niet` - De met de zaak gemoeide kosten zijn (nog) niet betaald. * `gedeeltelijk` - De met de zaak gemoeide kosten zijn gedeeltelijk betaald. * `geheel` - De met de zaak gemoeide kosten zijn geheel betaald. |
| betalingsindicatieWeergave | string | Uitleg bij `betalingsindicatie`. |
| laatsteBetaaldatum | string (date-time) | De datum waarop de meest recente betaling is verwerkt van kosten die gemoeid zijn met behandeling van de zaak. |
| zaakgeometrie | unknown | Punt, lijn of (multi-)vlak geometrie-informatie, in GeoJSON. |
| verlenging | unknown | Gegevens omtrent het verlengen van de doorlooptijd van de behandeling van de ZAAK |
| opschorting | unknown | Gegevens omtrent het tijdelijk opschorten van de behandeling van de ZAAK |
| selectielijstklasse | string (uri) | URL-referentie naar de categorie in de gehanteerde 'Selectielijst Archiefbescheiden' die, gezien het zaaktype en het resultaattype van de zaak, bepalend is voor het archiefregime van de zaak. |
| hoofdzaak | string (uri) | URL-referentie naar de ZAAK, waarom verzocht is door de initiator daarvan, die behandeld wordt in twee of meer separate ZAAKen waarvan de onderhavige ZAAK er één is. |
| deelzaken | array | URL-referenties naar deel ZAAKen. |
| relevanteAndereZaken | array | Een lijst van relevante andere zaken. |
| eigenschappen | array |  |
| rollen | array |  |
| status | string (uri) | Indien geen status bekend is, dan is de waarde 'null' |
| zaakinformatieobjecten | array |  |
| zaakobjecten | array |  |
| kenmerken | array | Lijst van kenmerken. Merk op dat refereren naar gerelateerde objecten beter kan via `ZaakObject`. |
| archiefnominatie | unknown | Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. Uitleg bij mogelijke waarden: * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats. * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden. |
| archiefstatus | unknown | Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. Uitleg bij mogelijke waarden: * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd. * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt. * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden. * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats. |
| archiefactiedatum | string (date) | De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg. |
| resultaat | string (uri) | URL-referentie naar het RESULTAAT. Indien geen resultaat bekend is, dan is de waarde 'null' |
| opdrachtgevendeOrganisatie | string | De krachtens publiekrecht ingestelde rechtspersoon dan wel ander niet-natuurlijk persoon waarbinnen het (bestuurs)orgaan zetelt dat opdracht heeft gegeven om taken uit te voeren waaraan de zaak invulling geeft. |
| processobjectaard | string | Omschrijving van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, de zaak betrekking heeft. |
| startdatumBewaartermijn | string (date) | De datum die de start markeert van de termijn waarop het zaakdossier vernietigd moet worden. |
| processobject | unknown | Specificatie van de attribuutsoort van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, de zaak betrekking heeft en dat bepalend is voor de start van de archiefactietermijn. |

### ZaakBesluit

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| besluit | string (uri) | URL-referentie naar het BESLUIT (in de Besluiten API). |

### ZaakContactMoment

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| contactmoment | string (uri) | URL-referentie naar het CONTACTMOMENT (in de Contactmomenten API). |

### ZaakEigenschap

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| eigenschap | string (uri) | URL-referentie naar de eigenschap (in de Catalogi API). |
| naam | string | De naam van de EIGENSCHAP (overgenomen uit de Catalogi API). |
| waarde | string | De waarde van de EIGENSCHAP. |

### ZaakInformatieObject

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| informatieobject | string (uri) | URL-referentie naar het INFORMATIEOBJECT (in de Documenten API), waar ook de relatieinformatie opgevraagd kan worden. |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| aardRelatieWeergave | unknown |  |
| titel | string | De naam waaronder het INFORMATIEOBJECT binnen het OBJECT bekend is. |
| beschrijving | string | Een op het object gerichte beschrijving van de inhoud vanhet INFORMATIEOBJECT. |
| registratiedatum | string (date-time) | De datum waarop de behandelende organisatie het INFORMATIEOBJECT heeft geregistreerd bij het OBJECT. Geldige waardes zijn datumtijden gelegen op of voor de huidige datum en tijd. |
| vernietigingsdatum | string (date-time) | De datum waarop het informatieobject uit het zaakdossier verwijderd moet worden. |
| status | string (uri) | De bij de desbetreffende ZAAK behorende STATUS waarvoor het ZAAK-INFORMATIEOBJECT relevant is (geweest) met het oog op het bereiken van die STATUS en/of de communicatie daarover. |

### ZaakObject

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| object | string (uri) | URL-referentie naar de resource die het OBJECT beschrijft. |
| zaakobjecttype | string (uri) | URL-referentie naar het ZAAKOBJECTTYPE (in de Catalogi API). |
| objectType | unknown | Beschrijft het type OBJECT gerelateerd aan de ZAAK. Als er geen passend type is, dan moet het type worden opgegeven onder `objectTypeOverige`.  Uitleg bij mogelijke waarden:  * `adres` - Adres * `besluit` - Besluit * `buurt` - Buurt * `enkelvoudig_document` - Enkelvoudig document * `gemeente` - Gemeente * `gemeentelijke_openbare_ruimte` - Gemeentelijke openbare ruimte * `huishouden` - Huishouden * `inrichtingselement` - Inrichtingselement * `kadastrale_onroerende_zaak` - Kadastrale onroerende zaak * `kunstwerkdeel` - Kunstwerkdeel * `maatschappelijke_activiteit` - Maatschappelijke activiteit * `medewerker` - Medewerker * `natuurlijk_persoon` - Natuurlijk persoon * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon * `openbare_ruimte` - Openbare ruimte * `organisatorische_eenheid` - Organisatorische eenheid * `pand` - Pand * `spoorbaandeel` - Spoorbaandeel * `status` - Status * `terreindeel` - Terreindeel * `terrein_gebouwd_object` - Terrein gebouwd object * `vestiging` - Vestiging * `waterdeel` - Waterdeel * `wegdeel` - Wegdeel * `wijk` - Wijk * `woonplaats` - Woonplaats * `woz_deelobject` - Woz deel object * `woz_object` - Woz object * `woz_waarde` - Woz waarde * `zakelijk_recht` - Zakelijk recht * `overige` - Overige |
| objectTypeOverige | string | Beschrijft het type OBJECT als `objectType` de waarde "overige" heeft. |
| objectTypeOverigeDefinitie | unknown | Verwijzing naar het schema van het type OBJECT als `objectType` de waarde "overige" heeft.  * De URL referentie moet naar een JSON endpoint   wijzen waarin het objecttype gedefinieerd is, inclusief het   [JSON-schema](https://json-schema.org/). * Gebruik het `schema` attribuut om te verwijzen naar het schema binnen   de objecttype resource (deze gebruikt het   [jq](http://stedolan.github.io/jq/) formaat. * Gebruik het `objectData` attribuut om te verwijzen naar de gegevens   binnen het OBJECT. Deze gebruikt ook het   [jq](http://stedolan.github.io/jq/) formaat.  Indien je hier gebruikt van maakt, dan moet je een OBJECT url opgeven en is het gebruik van objectIdentificatie niet mogelijk. De opgegeven OBJECT url wordt gevalideerd tegen het schema van het opgegeven objecttype. |
| relatieomschrijving | string | Omschrijving van de betrekking tussen de ZAAK en het OBJECT. |

### ZaakVerzoek **VERVALLEN**

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| verzoek | string (uri) | URL-referentie naar het VERZOEK (in de Klantinteracties API). |

**Functionele Handeling**: Raadplegen van klantcontacten  
**Endpoint**: `/klantcontacten`  
**Samenvatting**: Alle KLANTCONTACTen opvragen.   

**Beschrijving**: Alle KLANTCONTACTen opvragen.  **VERVALLEN**: gebruik de contactmomenten functionaliteit in plaats van deze handeling.

**Status**: Vervallen - Deze handeling wordt niet meer aanbevolen voor gebruik.

---

#### klantcontact-create

**Functionele Handeling**: Registreren van klantcontact  
**Endpoint**: `/klantcontacten`  
**Samenvatting**: Maak een KLANTCONTACT bij een ZAAK aan.  

**Beschrijving**: Indien geen identificatie gegeven is, dan wordt deze automatisch gegenereerd.  **VERVALLEN**: gebruik de contactmomenten functionaliteit in plaats van deze handeling.

**Status**: Vervallen - Deze handeling wordt niet meer aanbevolen voor gebruik.

---

#### klantcontact-retrieve

**Functionele Handeling**: Raadplegen van klantcontact  
**Endpoint**: `/klantcontacten/{uuid}`  
**Samenvatting**: Een specifieke KLANTCONTACT opvragen.   

**Beschrijving**: Een specifieke KLANTCONTACT opvragen.  **VERVALLEN**: gebruik de contactmomenten functionaliteit in plaats van deze handeling.

**Status**: Vervallen - Deze handeling wordt niet meer aanbevolen voor gebruik.

---

### Resultaat

#### resultaat-list

**HTTP Methode**: GET  
**Endpoint**: `/resultaten`  
**Samenvatting**: Alle RESULTAATen van ZAAKen opvragen.  

**Beschrijving**: Deze lijst kan gefilterd wordt met query-string parameters.

---

#### resultaat-create

**HTTP Methode**: POST  
**Endpoint**: `/resultaten`  
**Samenvatting**: Maak een RESULTAAT bij een ZAAK aan.  

**Beschrijving**: **Er wordt gevalideerd op:** - geldigheid URL naar de ZAAK - geldigheid URL naar het RESULTAATTYPE

---

#### resultaat-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/resultaten/{uuid}`  
**Samenvatting**: Een specifieke RESULTAAT opvragen.  

**Beschrijving**: Een specifieke RESULTAAT opvragen.

---

#### resultaat-update

**HTTP Methode**: PUT  
**Endpoint**: `/resultaten/{uuid}`  
**Samenvatting**: Werk een RESULTAAT in zijn geheel bij.  

**Beschrijving**: **Er wordt gevalideerd op**  - geldigheid URL naar de ZAAK - het RESULTAATTYPE mag niet gewijzigd worden

---

#### resultaat-partial-update

**HTTP Methode**: PATCH  
**Endpoint**: `/resultaten/{uuid}`  
**Samenvatting**: Werk een RESULTAAT deels bij.  

**Beschrijving**: **Er wordt gevalideerd op**  - geldigheid URL naar de ZAAK - het RESULTAATTYPE mag niet gewijzigd worden

---

#### resultaat-destroy

**HTTP Methode**: DELETE  
**Endpoint**: `/resultaten/{uuid}`  
**Samenvatting**: Verwijder een RESULTAAT van een ZAAK.  

**Beschrijving**: Verwijder een RESULTAAT van een ZAAK.

---

### Rol

#### rol-list

**HTTP Methode**: GET  
**Endpoint**: `/rollen`  
**Samenvatting**: Alle ROLlen bij ZAAKen opvragen.  

**Beschrijving**: Deze lijst kan gefilterd wordt met query-string parameters.

---

#### rol-create

**HTTP Methode**: POST  
**Endpoint**: `/rollen`  
**Samenvatting**: Maak een ROL aan bij een ZAAK.  

**Beschrijving**: Maak een ROL aan bij een ZAAK.

---

#### rol-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/rollen/{uuid}`  
**Samenvatting**: Een specifieke ROL bij een ZAAK opvragen.  

**Beschrijving**: Een specifieke ROL bij een ZAAK opvragen.

---

#### rol-destroy

**HTTP Methode**: DELETE  
**Endpoint**: `/rollen/{uuid}`  
**Samenvatting**: Verwijder een ROL van een ZAAK.  

**Beschrijving**: Verwijder een ROL van een ZAAK.

---

### Status

#### status-list

**HTTP Methode**: GET  
**Endpoint**: `/statussen`  
**Samenvatting**: Alle STATUSsen bij ZAAKen opvragen.  

**Beschrijving**: Deze lijst kan gefilterd wordt met query-string parameters.

---

#### status-create

**HTTP Methode**: POST  
**Endpoint**: `/statussen`  
**Samenvatting**: Maak een STATUS aan voor een ZAAK.  

**Beschrijving**: **Er wordt gevalideerd op** - geldigheid URL naar de ZAAK - geldigheid URL naar het STATUSTYPE - indien het de eindstatus betreft, dan moet het attribuut `indicatieGebruiksrecht` gezet zijn op alle informatieobjecten dieaan de zaak gerelateerd zijn  **Opmerkingen** - Indien het statustype de eindstatus is (volgens het ZTC), dan wordt de zaak afgesloten door de einddatum te zetten.

---

#### status-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/statussen/{uuid}`  
**Samenvatting**: Een specifieke STATUS van een ZAAK opvragen.  

**Beschrijving**: Een specifieke STATUS van een ZAAK opvragen.

---

### Zaakcontactmoment

#### zaakcontactmoment-list

**HTTP Methode**: GET  
**Endpoint**: `/zaakcontactmomenten`  
**Samenvatting**: Alle ZAAKCONTACTMOMENTen opvragen.  

**Beschrijving**: Alle ZAAKCONTACTMOMENTen opvragen.

---

#### zaakcontactmoment-create

**HTTP Methode**: POST  
**Endpoint**: `/zaakcontactmomenten`  
**Samenvatting**: Maak een ZAAKCONTACTMOMENT aan.  

**Beschrijving**: **Er wordt gevalideerd op:** - geldigheid URL naar het CONTACTMOMENT

---

#### zaakcontactmoment-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/zaakcontactmomenten/{uuid}`  
**Samenvatting**: Een specifiek ZAAKCONTACTMOMENT opvragen   

**Beschrijving**: Een specifiek ZAAKCONTACTMOMENT opvragen.

---

#### zaakcontactmoment-destroy

**HTTP Methode**: DELETE  
**Endpoint**: `/zaakcontactmomenten/{uuid}`  
**Samenvatting**: Verwijder een ZAAKCONTACTMOMENT.  

**Beschrijving**: Verwijder een ZAAKCONTACTMOMENT.

---

### Zaakinformatieobject

#### zaakinformatieobject-list

**HTTP Methode**: GET  
**Endpoint**: `/zaakinformatieobjecten`  
**Samenvatting**: Alle ZAAK-INFORMATIEOBJECT relaties opvragen   

**Beschrijving**: Deze lijst kan gefilterd wordt met query-string parameters.

---

#### zaakinformatieobject-create

**HTTP Methode**: POST  
**Endpoint**: `/zaakinformatieobjecten`  
**Samenvatting**: Maak een ZAAK-INFORMATIEOBJECT relatie aan.  

**Beschrijving**: Maak een ZAAK-INFORMATIEOBJECT relatie aan.  **Er wordt gevalideerd op** - geldigheid zaak URL - geldigheid informatieobject URL - `zaak.archiefstatus` moet gelijk zijn aan 'nog_te_archiveren'  - de combinatie informatieobject en zaak moet uniek zijn  **Opmerkingen** - De registratiedatum wordt door het systeem op 'NU' gezet. De `aardRelatie` wordt ook door het systeem gezet. - Bij het aanmaken wordt ook in de Documenten API de gespiegelde relatie aangemaakt, echter zonder de relatie-informatie.

---

#### zaakinformatieobject-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/zaakinformatieobjecten/{uuid}`  
**Samenvatting**: Een specifieke ZAAK-INFORMATIEOBJECT relatie opvragen.  

**Beschrijving**: Een specifieke ZAAK-INFORMATIEOBJECT relatie opvragen.

---

#### zaakinformatieobject-update

**HTTP Methode**: PUT  
**Endpoint**: `/zaakinformatieobjecten/{uuid}`  
**Samenvatting**: Werk een ZAAK-INFORMATIEOBJECT relatie in zijn geheel bij.  

**Beschrijving**: Je mag enkel de gegevens van de relatie bewerken, en niet de relatie zelf aanpassen.  **Er wordt gevalideerd op**  - informatieobject URL en zaak URL mogen niet veranderen

---

#### zaakinformatieobject-partial-update

**HTTP Methode**: PATCH  
**Endpoint**: `/zaakinformatieobjecten/{uuid}`  
**Samenvatting**: Werk een ZAAK-INFORMATIEOBJECT relatie deels bij.  

**Beschrijving**: Je mag enkel de gegevens van de relatie bewerken, en niet de relatie zelf aanpassen.  **Er wordt gevalideerd op**  - informatieobject URL en zaak URL mogen niet veranderen

---

#### zaakinformatieobject-destroy

**HTTP Methode**: DELETE  
**Endpoint**: `/zaakinformatieobjecten/{uuid}`  
**Samenvatting**: Verwijder een ZAAK-INFORMATIEOBJECT relatie.  

**Beschrijving**: De gespiegelde relatie in de Documenten API wordt door de Zaken API verwijderd. Consumers kunnen dit niet handmatig doen.

---

### Zaakobject

#### zaakobject-list

**HTTP Methode**: GET  
**Endpoint**: `/zaakobjecten`  
**Samenvatting**: Alle ZAAKOBJECTen opvragen.  

**Beschrijving**: Deze lijst kan gefilterd wordt met query-string parameters.

---

#### zaakobject-create

**HTTP Methode**: POST  
**Endpoint**: `/zaakobjecten`  
**Samenvatting**: Maak een ZAAKOBJECT aan.  

**Beschrijving**: Maak een ZAAKOBJECT aan.  **Er wordt gevalideerd op** - Indien de `object` URL opgegeveven is, dan moet deze een geldige  response (HTTP 200) geven. - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de `objectType` discriminator.

---

#### zaakobject-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/zaakobjecten/{uuid}`  
**Samenvatting**: Een specifieke ZAAKOBJECT opvragen.  

**Beschrijving**: Een specifieke ZAAKOBJECT opvragen.

---

#### zaakobject-update

**HTTP Methode**: PUT  
**Endpoint**: `/zaakobjecten/{uuid}`  
**Samenvatting**: Werk een ZAAKOBJECT zijn geheel bij.  

**Beschrijving**: **Er wordt gevalideerd op**  - De attributen `zaak`, `object` en `objectType` mogen niet gewijzigd worden. - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de objectType discriminator.

---

#### zaakobject-partial-update

**HTTP Methode**: PATCH  
**Endpoint**: `/zaakobjecten/{uuid}`  
**Samenvatting**: Werk een ZAAKOBJECT deels bij.  

**Beschrijving**: **Er wordt gevalideerd op**  - De attributen `zaak`, `object` en `objectType` mogen niet gewijzigd worden. - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de objectType discriminator.

---

#### zaakobject-destroy

**HTTP Methode**: DELETE  
**Endpoint**: `/zaakobjecten/{uuid}`  
**Samenvatting**: Verwijder een ZAAKOBJECT.  

**Beschrijving**: Verbreek de relatie tussen een ZAAK en een OBJECT door de ZAAKOBJECT resource te verwijderen.

---

### Zaakverzoek

#### zaakverzoek-list

**HTTP Methode**: GET  
**Endpoint**: `/zaakverzoeken`  
**Samenvatting**: Alle ZAAK-VERZOEKen opvragen.  

**Beschrijving**: Alle ZAAK-VERZOEKen opvragen.

**Status**: DEPRECATED - Deze endpoint wordt niet meer aanbevolen voor gebruik.

---

#### zaakverzoek-create

**HTTP Methode**: POST  
**Endpoint**: `/zaakverzoeken`  
**Samenvatting**: Maak een ZAAK-VERZOEK aan.  

**Beschrijving**: **Er wordt gevalideerd op** - geldigheid URL naar de VERZOEK

**Status**: DEPRECATED - Deze endpoint wordt niet meer aanbevolen voor gebruik.

---

#### zaakverzoek-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/zaakverzoeken/{uuid}`  
**Samenvatting**: Een specifieke ZAAK-VERZOEK opvragen.  

**Beschrijving**: Een specifieke ZAAK-VERZOEK opvragen.

**Status**: DEPRECATED - Deze endpoint wordt niet meer aanbevolen voor gebruik.

---

#### zaakverzoek-destroy

**HTTP Methode**: DELETE  
**Endpoint**: `/zaakverzoeken/{uuid}`  
**Samenvatting**: Verwijder een ZAAK-VERZOEK.  

**Beschrijving**: Verwijder een ZAAK-VERZOEK.

**Status**: DEPRECATED - Deze endpoint wordt niet meer aanbevolen voor gebruik.

---

### Zaak

#### zaak-list

**HTTP Methode**: GET  
**Endpoint**: `/zaken`  
**Samenvatting**: Alle ZAAKen opvragen.  

**Beschrijving**: Deze lijst kan gefilterd wordt met query-string parameters.

---

#### zaak-create

**HTTP Methode**: POST  
**Endpoint**: `/zaken`  
**Samenvatting**: Maak een ZAAK aan.  

**Beschrijving**: Indien geen identificatie gegeven is, dan wordt deze automatisch gegenereerd. De identificatie moet uniek zijn binnen de bronorganisatie.  **Er wordt gevalideerd op:** - geldigheid `zaaktype` URL - de resource moet opgevraagd kunnen worden uit de Catalogi API en de vorm van een ZAAKTYPE hebben. - `zaaktype` is geen concept (`zaaktype.concept = False`) - `laatsteBetaaldatum` mag niet in de toekomst liggen. - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie "nvt" is. - `barchiefnominatie` moet een waarde hebben indien archiefstatus niet de waarde "nog_te_archiveren" heeft. - `archiefactiedatum` moet een waarde hebben indien archiefstatus niet de waarde "nog_te_archiveren" heeft. - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren" hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut `status` de waarde "gearchiveerd" heeft. - `datumStatusGezet` mag niet voor de `startdatum` van de zaak liggen.

---

#### zaak-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/zaken/{uuid}`  
**Samenvatting**: Een specifieke ZAAK opvragen.  

**Beschrijving**: Een specifieke ZAAK opvragen.

---

#### zaak-update

**HTTP Methode**: PUT  
**Endpoint**: `/zaken/{uuid}`  
**Samenvatting**: Werk een ZAAK in zijn geheel bij.  

**Beschrijving**: **Er wordt gevalideerd op**  - `identificatie` mag niet gewijzigd worden. - `laatsteBetaaldatum` mag niet in de toekomst liggen. - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie "nvt" is. - `archiefnominatie` moet een waarde hebben indien `archiefstatus` niet de waarde "nog_te_archiveren" heeft. - `archiefactiedatum` moet een waarde hebben indien `archiefstatus` niet de  waarde "nog_te_archiveren" heeft. - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren"  hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut   `status` de waarde "gearchiveerd" heeft. **Opmerkingen** - er worden enkel zaken getoond van de zaaktypes waar u toe geautoriseerd  bent. - indien een zaak heropend moet worden, doe dit dan door een nieuwe status  toe te voegen die NIET de eindstatus is. Zie de `Status` resource.

---

#### zaak-partial-update

**HTTP Methode**: PATCH  
**Endpoint**: `/zaken/{uuid}`  
**Samenvatting**: Werk een ZAAK deels bij.  

**Beschrijving**: **Er wordt gevalideerd op**  - `identificatie` mag niet gewijzigd worden. - `laatsteBetaaldatum` mag niet in de toekomst liggen. - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie "nvt" is. - `archiefnominatie` moet een waarde hebben indien `archiefstatus` niet de waarde "nog_te_archiveren" heeft. - `archiefactiedatum` moet een waarde hebben indien `archiefstatus` niet de  waarde "nog_te_archiveren" heeft. - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren"  hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut   `status` de waarde "gearchiveerd" heeft. **Opmerkingen** - er worden enkel zaken getoond van de zaaktypes waar u toe geautoriseerd  bent. - indien een zaak heropend moet worden, doe dit dan door een nieuwe status  toe te voegen die NIET de eindstatus is. Zie de `Status` resource.

---

#### zaak-destroy

**HTTP Methode**: DELETE  
**Endpoint**: `/zaken/{uuid}`  
**Samenvatting**: Verwijder een ZAAK.  

**Beschrijving**: ***De gerelateerde resources zijn hierbij*** - `zaak` - de deelzaken van de verwijderde hoofzaak - `status` - alle statussen van de verwijderde zaak - `resultaat` - het resultaat van de verwijderde zaak - `rol` - alle rollen bij de zaak - `zaakobject` - alle zaakobjecten bij de zaak - `zaakeigenschap` - alle eigenschappen van de zaak - `zaakkenmerk` - alle kenmerken van de zaak - `zaakinformatieobject` - dit moet door-cascaden naar de Documenten API, zie ook: https://github.com/VNG-Realisatie/gemma-zaken/issues/791 (TODO) - `klantcontact` - alle klantcontacten bij een zaak

---

#### zaak--zoek

**HTTP Methode**: POST  
**Endpoint**: `/zaken/_zoek`  
**Samenvatting**: Voer een (geo)-zoekopdracht uit op ZAAKen.  

**Beschrijving**: Zoeken/filteren gaat normaal via de `list` operatie, deze is echter niet geschikt voor geo-zoekopdrachten.

---

### Audittrail

#### audittrail-list

**HTTP Methode**: GET  
**Endpoint**: `/zaken/{zaak_uuid}/audittrail`  
**Samenvatting**: Alle audit trail regels behorend bij de ZAAK.  

**Beschrijving**: Alle audit trail regels behorend bij de ZAAK.

---

#### audittrail-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/zaken/{zaak_uuid}/audittrail/{uuid}`  
**Samenvatting**: Een specifieke audit trail regel opvragen   

**Beschrijving**: Een specifieke audit trail regel opvragen.

---

### Zaakbesluit

#### zaakbesluit-list

**HTTP Methode**: GET  
**Endpoint**: `/zaken/{zaak_uuid}/besluiten`  
**Samenvatting**: Alle ZAAKBESLUITen opvragen.  

**Beschrijving**: Alle ZAAKBESLUITen opvragen.

---

#### zaakbesluit-create

**HTTP Methode**: POST  
**Endpoint**: `/zaken/{zaak_uuid}/besluiten`  
**Samenvatting**: Maak een ZAAKBESLUIT aan.  

**Beschrijving**: **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.**  De Besluiten API gebruikt dit endpoint om relaties te synchroniseren, daarom is dit endpoint in de Zaken API geimplementeerd.  **Er wordt gevalideerd op:** - geldigheid URL naar de ZAAK

---

#### zaakbesluit-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/zaken/{zaak_uuid}/besluiten/{uuid}`  
**Samenvatting**: Een specifiek ZAAKBESLUIT opvragen   

**Beschrijving**: Een specifiek ZAAKBESLUIT opvragen.

---

#### zaakbesluit-destroy

**HTTP Methode**: DELETE  
**Endpoint**: `/zaken/{zaak_uuid}/besluiten/{uuid}`  
**Samenvatting**: Verwijder een ZAAKBESLUIT.  

**Beschrijving**: ***LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.***  De Besluiten API gebruikt dit endpoint om relaties te synchroniseren, daarom is dit endpoint in de Zaken API geimplementeerd.

---

### Zaakeigenschap

#### zaakeigenschap-list

**HTTP Methode**: GET  
**Endpoint**: `/zaken/{zaak_uuid}/zaakeigenschappen`  
**Samenvatting**: Alle ZAAKEIGENSCHAPpen opvragen.   

**Beschrijving**: Alle ZAAKEIGENSCHAPpen opvragen.

---

#### zaakeigenschap-create

**HTTP Methode**: POST  
**Endpoint**: `/zaken/{zaak_uuid}/zaakeigenschappen`  
**Samenvatting**: Maak een ZAAKEIGENSCHAP aan.  

**Beschrijving**: Maak een ZAAKEIGENSCHAP aan.  **Er wordt gevalideerd op:** - geldigheid `eigenschap` URL - de resource moet opgevraagd kunnen worden uit de Catalogi API en de vorm van een EIGENSCHAP hebben. - de `eigenschap` moet bij het `ZAAK.zaaktype` horen

---

#### zaakeigenschap-retrieve

**HTTP Methode**: GET  
**Endpoint**: `/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}`  
**Samenvatting**: Een specifieke ZAAKEIGENSCHAP opvragen.  

**Beschrijving**: Een specifieke ZAAKEIGENSCHAP opvragen.

---

#### zaakeigenschap-update

**HTTP Methode**: PUT  
**Endpoint**: `/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}`  
**Samenvatting**: Werk een ZAAKEIGENSCHAP in zijn geheel bij.  

**Beschrijving**: **Er wordt gevalideerd op**  - Alleen de `waarde` mag gewijzigd worden

---

#### zaakeigenschap-partial-update

**HTTP Methode**: PATCH  
**Endpoint**: `/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}`  
**Samenvatting**: Werk een ZAAKEIGENSCHAP deels bij.  

**Beschrijving**: **Er wordt gevalideerd op**  - Alleen de `waarde` mag gewijzigd worden

---

#### zaakeigenschap-destroy

**HTTP Methode**: DELETE  
**Endpoint**: `/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}`  
**Samenvatting**: Verwijder een ZAAKEIGENSCHAP.  

**Beschrijving**: Verwijder een ZAAKEIGENSCHAP

---

## Deel 3: Functionele Beschrijving van de Berichten

### AuditTrail

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| uuid | string (uuid) | Unieke identificatie van de audit regel. |
| bron | unknown | De naam van het component waar de wijziging in is gedaan.  Uitleg bij mogelijke waarden:  * `ac` - Autorisaties API * `nrc` - Notificaties API * `zrc` - Zaken API * `ztc` - Catalogi API * `drc` - Documenten API * `brc` - Besluiten API * `cmc` - Contactmomenten API * `kc` - Klanten API * `vrc` - Verzoeken API |
| applicatieId | string | Unieke identificatie van de applicatie, binnen de organisatie. |
| applicatieWeergave | string | Vriendelijke naam van de applicatie. |
| gebruikersId | string | Unieke identificatie van de gebruiker die binnen de organisatie herleid kan worden naar een persoon. |
| gebruikersWeergave | string | Vriendelijke naam van de gebruiker. |
| actie | string | De uitgevoerde handeling.  De bekende waardes voor dit veld zijn hieronder aangegeven,                         maar andere waardes zijn ook toegestaan  Uitleg bij mogelijke waarden:  * `create` - Object aangemaakt * `list` - Lijst van objecten opgehaald * `retrieve` - Object opgehaald * `destroy` - Object verwijderd * `update` - Object bijgewerkt * `partial_update` - Object deels bijgewerkt |
| actieWeergave | string | Vriendelijke naam van de actie. |
| resultaat | integer | HTTP status code van de API response van de uitgevoerde handeling. |
| hoofdObject | string (uri) | De URL naar het hoofdobject van een component. |
| resource | string | Het type resource waarop de actie gebeurde. |
| resourceUrl | string (uri) | De URL naar het object. |
| toelichting | string | Toelichting waarom de handeling is uitgevoerd. |
| resourceWeergave | string | Vriendelijke identificatie van het object. |
| aanmaakdatum | string (date-time) | De datum waarop de handeling is gedaan. |
| wijzigingen | unknown |  |

### KlantContact

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| identificatie | string | De unieke aanduiding van een KLANTCONTACT |
| datumtijd | string (date-time) | De datum en het tijdstip waarop het KLANTCONTACT begint |
| kanaal | string | Het communicatiekanaal waarlangs het KLANTCONTACT gevoerd wordt |
| onderwerp | string | Het onderwerp waarover contact is geweest met de klant. |
| toelichting | string | Een toelichting die inhoudelijk het contact met de klant beschrijft. |

### Resultaat

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| resultaattype | string (uri) | URL-referentie naar het RESULTAATTYPE (in de Catalogi API). |
| toelichting | string | Een toelichting op wat het resultaat van de zaak inhoudt. |

### Rol

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| betrokkene | string (uri) | URL-referentie naar een betrokkene gerelateerd aan de ZAAK. |
| betrokkeneType | unknown | Type van de `betrokkene`.  Uitleg bij mogelijke waarden:  * `natuurlijk_persoon` - Natuurlijk persoon * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon * `vestiging` - Vestiging * `organisatorische_eenheid` - Organisatorische eenheid * `medewerker` - Medewerker |
| afwijkendeNaamBetrokkene | string | De naam van de betrokkene waaronder deze in relatie tot de zaak aangesproken wil worden. |
| roltype | string (uri) | URL-referentie naar een roltype binnen het ZAAKTYPE van de ZAAK. |
| omschrijving | string | Omschrijving van de aard van de ROL, afgeleid uit het ROLTYPE. |
| omschrijvingGeneriek | string | Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE.  Uitleg bij mogelijke waarden:  * `adviseur` - (Adviseur) Kennis in dienst stellen van de behandeling van (een deel van) een zaak. * `behandelaar` - (Behandelaar) De vakinhoudelijke behandeling doen van (een deel van) een zaak. * `belanghebbende` - (Belanghebbende) Vanuit eigen en objectief belang rechtstreeks betrokken zijn bij de behandeling en/of de uitkomst van een zaak. * `beslisser` - (Beslisser) Nemen van besluiten die voor de uitkomst van een zaak noodzakelijk zijn. * `initiator` - (Initiator) Aanleiding geven tot de start van een zaak .. * `klantcontacter` - (Klantcontacter) Het eerste aanspreekpunt zijn voor vragen van burgers en bedrijven .. * `zaakcoordinator` - (Zaakcoördinator) Er voor zorg dragen dat de behandeling van de zaak in samenhang uitgevoerd wordt conform de daarover gemaakte afspraken. * `mede_initiator` - Mede-initiator |
| roltoelichting | string |  |
| registratiedatum | string (date-time) | De datum waarop dit object is geregistreerd. |
| indicatieMachtiging | unknown | Indicatie machtiging  Uitleg bij mogelijke waarden:  * `gemachtigde` - De betrokkene in de rol bij de zaak is door een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen * `machtiginggever` - De betrokkene in de rol bij de zaak heeft een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen |
| contactpersoonRol | unknown | De gegevens van de persoon die anderen desgevraagd in contact brengt met medewerkers van de BETROKKENE, een NIET-NATUURLIJK PERSOON of VESTIGING zijnde, of met BETROKKENE zelf, een NATUURLIJK PERSOON zijnde , vanuit het belang van BETROKKENE in haar ROL bij een ZAAK. |
| statussen | array | De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn. |

### Status

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| statustype | string (uri) | URL-referentie naar het STATUSTYPE (in de Catalogi API). |
| datumStatusGezet | string (date-time) | De datum waarop de ZAAK de status heeft verkregen. |
| statustoelichting | string | Een, voor de initiator van de zaak relevante, toelichting op de status van een zaak. |
| indicatieLaatstGezetteStatus | boolean | Het gegeven is afleidbaar uit de historie van de attribuutsoort Datum status gezet van van alle statussen bij de desbetreffende zaak. |
| gezetdoor | string (uri) | De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn. |
| zaakinformatieobjecten | array |  |

### Zaak

Een zaak in de context van zaakgericht werken bij Nederlandse overheden, een afgebakend proces dat wordt uitgevoerd om een bepaald doel te bereiken voor een burger, bedrijf of andere instantie. Denk bijvoorbeeld aan het aanvragen van een paspoort, het doen van een melding openbare ruimte, of het aanvragen van een vergunning.

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| identificatie | string | De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK. |
| bronorganisatie | string | Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef |
| omschrijving | string | Een korte omschrijving van de zaak. |
| toelichting | string | Een toelichting op de zaak. |
| zaaktype | string (uri) | URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt |
| registratiedatum | string (date) | De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt. |
| verantwoordelijkeOrganisatie | string | Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die eindverantwoordelijk is voor de behandeling van de zaak. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef |
| startdatum | string (date) | De datum waarop met de uitvoering van de zaak is gestart |
| einddatum | string (date) | De datum waarop de uitvoering van de zaak afgerond is. |
| einddatumGepland | string (date) | De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt. |
| uiterlijkeEinddatumAfdoening | string (date) | De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn. |
| publicatiedatum | string (date) | Datum waarop (het starten van) de zaak gepubliceerd is of wordt. |
| communicatiekanaal | string (uri) | Het medium waarlangs de aanleiding om een zaak te starten is ontvangen. URL naar een communicatiekanaal in de VNG-Referentielijst van communicatiekanalen. |
| productenOfDiensten | array | De producten en/of diensten die door de zaak worden voortgebracht. Dit zijn URLs naar de resources zoals die door de producten- en dienstencatalogus-API wordt ontsloten. De producten/diensten moeten bij het zaaktype vermeld zijn. |
| vertrouwelijkheidaanduiding | unknown | Aanduiding van de mate waarin het zaakdossier van de ZAAK voor de openbaarheid bestemd is. Optioneel - indien geen waarde gekozen wordt, dan wordt de waarde van het ZAAKTYPE overgenomen. Dit betekent dat de API _altijd_ een waarde teruggeeft. |
| betalingsindicatie | unknown | Indicatie of de, met behandeling van de zaak gemoeide, kosten betaald zijn door de desbetreffende betrokkene.  Uitleg bij mogelijke waarden:  * `nvt` - Er is geen sprake van te betalen, met de zaak gemoeide, kosten. * `nog_niet` - De met de zaak gemoeide kosten zijn (nog) niet betaald. * `gedeeltelijk` - De met de zaak gemoeide kosten zijn gedeeltelijk betaald. * `geheel` - De met de zaak gemoeide kosten zijn geheel betaald. |
| betalingsindicatieWeergave | string | Uitleg bij `betalingsindicatie`. |
| laatsteBetaaldatum | string (date-time) | De datum waarop de meest recente betaling is verwerkt van kosten die gemoeid zijn met behandeling van de zaak. |
| zaakgeometrie | unknown | Punt, lijn of (multi-)vlak geometrie-informatie, in GeoJSON. |
| verlenging | unknown | Gegevens omtrent het verlengen van de doorlooptijd van de behandeling van de ZAAK |
| opschorting | unknown | Gegevens omtrent het tijdelijk opschorten van de behandeling van de ZAAK |
| selectielijstklasse | string (uri) | URL-referentie naar de categorie in de gehanteerde 'Selectielijst Archiefbescheiden' die, gezien het zaaktype en het resultaattype van de zaak, bepalend is voor het archiefregime van de zaak. |
| hoofdzaak | string (uri) | URL-referentie naar de ZAAK, waarom verzocht is door de initiator daarvan, die behandeld wordt in twee of meer separate ZAAKen waarvan de onderhavige ZAAK er één is. |
| deelzaken | array | URL-referenties naar deel ZAAKen. |
| relevanteAndereZaken | array | Een lijst van relevante andere zaken. |
| eigenschappen | array |  |
| rollen | array |  |
| status | string (uri) | Indien geen status bekend is, dan is de waarde 'null' |
| zaakinformatieobjecten | array |  |
| zaakobjecten | array |  |
| kenmerken | array | Lijst van kenmerken. Merk op dat refereren naar gerelateerde objecten beter kan via `ZaakObject`. |
| archiefnominatie | unknown | Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.  Uitleg bij mogelijke waarden:  * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats. * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden. |
| archiefstatus | unknown | Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.  Uitleg bij mogelijke waarden:  * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd. * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt. * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden. * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats. |
| archiefactiedatum | string (date) | De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg. |
| resultaat | string (uri) | URL-referentie naar het RESULTAAT. Indien geen resultaat bekend is, dan is de waarde 'null' |
| opdrachtgevendeOrganisatie | string | De krachtens publiekrecht ingestelde rechtspersoon dan wel ander niet-natuurlijk persoon waarbinnen het (bestuurs)orgaan zetelt dat opdracht heeft gegeven om taken uit te voeren waaraan de zaak invulling geeft. |
| processobjectaard | string | Omschrijving van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, de zaak betrekking heeft. |
| startdatumBewaartermijn | string (date) | De datum die de start markeert van de termijn waarop het zaakdossier vernietigd moet worden. |
| processobject | unknown | Specificatie van de attribuutsoort van het object, subject of gebeurtenis  waarop, vanuit archiveringsoptiek, de zaak betrekking heeft en dat bepalend is voor de start van de archiefactietermijn. |

### ZaakInformatieObject

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| informatieobject | string (uri) | URL-referentie naar het INFORMATIEOBJECT (in de Documenten API), waar ook de relatieinformatie opgevraagd kan worden. |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| aardRelatieWeergave | unknown |  |
| titel | string | De naam waaronder het INFORMATIEOBJECT binnen het OBJECT bekend is. |
| beschrijving | string | Een op het object gerichte beschrijving van de inhoud vanhet INFORMATIEOBJECT. |
| registratiedatum | string (date-time) | De datum waarop de behandelende organisatie het INFORMATIEOBJECT heeft geregistreerd bij het OBJECT. Geldige waardes zijn datumtijden gelegen op of voor de huidige datum en tijd. |
| vernietigingsdatum | string (date-time) | De datum waarop het informatieobject uit het zaakdossier verwijderd moet worden. |
| status | string (uri) | De bij de desbetreffende ZAAK behorende STATUS waarvoor het ZAAK-INFORMATIEOBJECT relevant is (geweest) met het oog op het bereiken van die STATUS en/of de communicatie daarover. |

### ZaakObject

| Element | Gegevenstype | Omschrijving |
|---------|-------------|---------------|
| url | string (uri) | URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object. |
| uuid | string (uuid) | Unieke resource identifier (UUID4) |
| zaak | string (uri) | URL-referentie naar de ZAAK. |
| object | string (uri) | URL-referentie naar de resource die het OBJECT beschrijft. |
| zaakobjecttype | string (uri) | URL-referentie naar het ZAAKOBJECTTYPE (in de Catalogi API). |
| objectType | unknown | Beschrijft het type OBJECT gerelateerd aan de ZAAK. Als er geen passend type is, dan moet het type worden opgegeven onder `objectTypeOverige`.  Uitleg bij mogelijke waarden:  * `adres` - Adres * `besluit` - Besluit * `buurt` - Buurt * `enkelvoudig_document` - Enkelvoudig document * `gemeente` - Gemeente * `gemeentelijke_openbare_ruimte` - Gemeentelijke openbare ruimte * `huishouden` - Huishouden * `inrichtingselement` - Inrichtingselement * `kadastrale_onroerende_zaak` - Kadastrale onroerende zaak * `kunstwerkdeel` - Kunstwerkdeel * `maatschappelijke_activiteit` - Maatschappelijke activiteit * `medewerker` - Medewerker * `natuurlijk_persoon` - Natuurlijk persoon * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon * `openbare_ruimte` - Openbare ruimte * `organisatorische_eenheid` - Organisatorische eenheid * `pand` - Pand * `spoorbaandeel` - Spoorbaandeel * `status` - Status * `terreindeel` - Terreindeel * `terrein_gebouwd_object` - Terrein gebouwd object * `vestiging` - Vestiging * `waterdeel` - Waterdeel * `wegdeel` - Wegdeel * `wijk` - Wijk * `woonplaats` - Woonplaats * `woz_deelobject` - Woz deel object * `woz_object` - Woz object * `woz_waarde` - Woz waarde * `zakelijk_recht` - Zakelijk recht * `overige` - Overige |
| objectTypeOverige | string | Beschrijft het type OBJECT als `objectType` de waarde "overige" heeft. |
| objectTypeOverigeDefinitie | unknown | Verwijzing naar het schema van het type OBJECT als `objectType` de waarde "overige" heeft.  * De URL referentie moet naar een JSON endpoint   wijzen waarin het objecttype gedefinieerd is, inclusief het   [JSON-schema](https://json-schema.org/). * Gebruik het `schema` attribuut om te verwijzen naar het schema binnen   de objecttype resource (deze gebruikt het   [jq](http://stedolan.github.io/jq/) formaat. * Gebruik het `objectData` attribuut om te verwijzen naar de gegevens   binnen het OBJECT. Deze gebruikt ook het   [jq](http://stedolan.github.io/jq/) formaat.  Indien je hier gebruikt van maakt, dan moet je een OBJECT url opgeven en is het gebruik van objectIdentificatie niet mogelijk. De opgegeven OBJECT url wordt gevalideerd tegen het schema van het opgegeven objecttype. |
| relatieomschrijving | string | Omschrijving van de betrekking tussen de ZAAK en het OBJECT. |

