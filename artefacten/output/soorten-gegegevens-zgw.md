# Soorten gegevens binnen Zaakgericht Werken (ZGW)

Dit document beschrijft de belangrijkste soorten gegevens binnen Zaakgericht Werken (ZGW) en hoe deze zich verhouden tot de Common Ground-componenten.

## Procesgegevens

Procesgegevens beschrijven hoe een afhandelproces moet verlopen. Voor het beheren van de benodigde (meta)gegevens wordt gebruikgemaakt van een Zaakafhandelcomponent (ZAC). 

- Bij gebruik van een **generieke ZAC** zal bij veel processen sprake zijn van een vergelijkbare set procesgegevens.
- Bij een **specifieke ZAC** zijn er vaak aanvullende procesgegevens, specifiek voor de betrokken zaaktypen.

## Zaakgegevens

Zaakgegevens beschrijven de gegevens die over individuele zaken moeten worden vastgelegd tijdens het afhandelen daarvan. Denk bijvoorbeeld aan:

- zaaktype;
- begin- en einddatum;
- betrokkenen;
- besluiten;
- documenten;
- de doorlopen zaakstatussen.

Voor het beheren van deze gegevens gebruiken medewerkers een generieke of specifieke ZAC. De zaakgegevens worden persistente vastgelegd via de Zakenregistratiecomponent (ZRC). 

De minimale set zaakgegevens en hun onderlinge relaties die gemeenten, samenwerkende organisaties en klanten nodig hebben, is beschreven in het informatiemodel RGBZ (Referentiemodel Gemeentelijke Basisgegevens Zaken).

## Zaaktypegegevens

Zaaktypegegevens beschrijven een groep gelijksoortige zaken. Ze leggen onder andere vast:

- welke gegevens moeten worden vastgelegd;
- hoe het afhandelproces eruitziet;
- welke regels gelden voor archivering en bewaartermijnen;
- welke statussen en resultaten mogelijk zijn.

Zaaktypen worden vastgelegd via een Zaaktypenregistratiecomponent (ZTC) in een zaaktypenregister (ZTC, Zaaktypencatalogus). Applicaties (bijvoorbeeld een ZAC) kunnen actuele én historische zaaktypegegevens ophalen via de Zaaktypenregistratiecomponent.

## (Zaak)documenten

(Zaak)documenten worden tijdens de afhandeling van een zaak binnen de gemeente geproduceerd of van buiten ontvangen. Ze worden als verzameling bij een zaak behorende documenten opgeslagen via de Documentregistratiecomponent (DRC).

De zaakgegevens die via de ZRC zijn vastgelegd en de documenten die via de DRC zijn vastgelegd vormen samen het **zaakdossier**.

## Verdere informatie

- ZGW API's (Zaken, Documenten, Zaaktypen):
	- GitHub-repo VNG Realisatie: https://github.com/VNG-Realisatie/gemma-zaken
- Informatiemodel RGBZ:
	- GEMMAonline (overzicht RGBZ): https://www.gemmaonline.nl
- Common Ground en GEMMA:
	- VNG Realisatie (GEMMA en Common Ground): https://www.vngrealisatie.nl

## Afkortingen

| Afkorting | Voluit                                            | Toelichting                                                      |
|----------|----------------------------------------------------|------------------------------------------------------------------|
| ZGW      | Zaakgericht Werken                                 | Referentie-architectuur voor zaakafhandeling bij gemeenten      |
| ZAC      | Zaakafhandelcomponent                              | Applicatie waarmee medewerkers zaken afhandelen                 |
| ZRC      | Zakenregistratiecomponent                          | Component voor registratie van zaken                            |
| ZTC      | Zaaktypenregistratiecomponent / Zaaktypencatalogus | Component/catalogus voor zaaktypen                              |
| DRC      | Documentregistratiecomponent                       | Component voor registratie en ontsluiting van documenten        |
| DTC      | Documenttypencatalogus                             | Catalogus met typen documenten en bijbehorende metadata         |
| RGBZ     | Referentiemodel Gemeentelijke Basisgegevens Zaken  | Informatiemodel voor zaak- en zaakgerelateerde gegevens         |