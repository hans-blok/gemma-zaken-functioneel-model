# Zaken Berichten - Functionele Beschrijving

**Versie**: 1.6.0  
**Datum**: 10 februari 2026

## Inleiding

Dit document beschrijft de **functionele structuur van berichten** die gebruikt worden binnen de Zaken functionaliteit. 

Voor terminologie en achtergrond, zie: [Terminologie](../../algemeen/terminologie.md)

Voor functionele handelingen, zie: [Zaken Functies v1.6.0](functies-v1.6.0.md)

## Functionele beschrijving van de berichten
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
