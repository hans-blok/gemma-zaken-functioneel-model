## Vertaling van HTTP-methoden naar functionele handelingen

| Technisch begrip | HTTP-methode | Functionele handeling (NL) | Toelichting |
|-----------------|-------------|----------------------------|-------------|
| Endpoint | GET | **Raadplegen van …** | Beschikbaar stellen van actuele gegevens voor inzage of verwerking. |
| Endpoint | POST | **Registreren van …** / **Starten van …** | Vastleggen van een nieuwe registratie op basis van een aanleiding. |
| Endpoint | PUT | **Wijzigen van …** | Aanpassen van de volledige registratie. |
| Endpoint | PATCH | **Bijwerken van …** | Wijzigen van een deel van de registratie. |
| Endpoint | DELETE | **Intrekken van …** / **Beëindigen van …** | Functioneel beëindigen van een registratie, met inachtneming van archivering. |

## Terminologische afspraken

| Technisch (API) | Functioneel (publicatie) |
|-----------------|--------------------------|
| Endpoint | **Functionele handeling** |
| Operation | **Functionele bewerking** |
| Resource | **Object** |
| HTTP method | **Technische realisatiekeuze** |
| API call | **Service-aanroep** |

## Statusaanduidingen

| Technisch | Functioneel Nederlands | Gebruik |
|----------|-----------------------|---------|
| Active | **Actief** | Beschikbaar |
| Deprecated | **Vervallen** | Niet meer bedoeld voor nieuw gebruik |
| Deprecated | **Wordt uitgefaseerd** | Tijdelijk nog toegestaan |
| Removed | **Niet meer beschikbaar** | Functioneel beëindigd |

## Normatieve toelichting

> In deze documentatie worden HTTP-methoden en endpoints niet als primaire begrippen gebruikt.  
> De beschreven handelingen geven de **functionele intentie en het effect** weer; de technische realisatie via API’s is hieraan ondergeschikt.
