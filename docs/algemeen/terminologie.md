# Terminologie voor Zaakgericht Werken

**Versie**: 1.6.0  
**Datum**: 10 februari 2026

## Normatieve toelichting

> In deze documentatie worden HTTP-methoden en endpoints niet als primaire begrippen gebruikt.  
> De beschreven handelingen geven de **functionele intentie en het effect** weer; de technische realisatie via API's is hieraan ondergeschikt.

## Terminologische afspraken

Deze functionele beschrijving hanteert de volgende terminologische afspraken:

| Technisch (API) | Functioneel (publicatie) |
|-----------------|--------------------------|
| Endpoint | **Functionele handeling** |
| Operation | **Functionele bewerking** |
| Resource | **Object** |
| HTTP method | **Technische realisatiekeuze** |
| API call | **Service-aanroep** |

## Vertaling van HTTP-methoden naar functionele handelingen

| HTTP-methode | Functionele handeling (NL) | Toelichting |
|-------------|----------------------------|-------------|
| GET | **Raadplegen van …** | Beschikbaar stellen van actuele gegevens voor inzage of verwerking. |
| POST | **Registreren van …** / **Starten van …** | Vastleggen van een nieuwe registratie op basis van een aanleiding. |
| PUT | **Wijzigen van …** | Aanpassen van de volledige registratie. |
| PATCH | **Bijwerken van …** | Wijzigen van een deel van de registratie. |
| DELETE | **Intrekken van …** / **Beëindigen van …** | Functioneel beëindigen van een registratie, met inachtneming van archivering. |

## Statusaanduidingen

| Technisch | Functioneel Nederlands | Gebruik |
|----------|-----------------------|---------|
| Active | **Actief** | Beschikbaar |
| Deprecated | **Vervallen** | Niet meer bedoeld voor nieuw gebruik |
| Deprecated | **Wordt uitgefaseerd** | Tijdelijk nog toegestaan |
| Removed | **Niet meer beschikbaar** | Functioneel beëindigd |