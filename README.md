# GEMMA Zaken – Functioneel Model

Deze repository bevat het **functioneel model van GEMMA Zaken**.  
Het doel is om de **betekenis, intentie en het functionele gebruik** van zaakgericht werken te beschrijven, **los van technische API-specificaties**.

Waar de technische standaard zich richt op *hoe* systemen met elkaar communiceren, richt dit functionele model zich op *wat* er functioneel gebeurt en *waarom*.

---

## Doel en positionering

Deze repository is bedoeld als **aanvulling op de technische GEMMA Zaken API-standaard**.

De focus ligt op:
- functionele capabilities rond zaakgericht werken;
- gebruiksscenario’s en ketens;
- functionele betekenis van services en handelingen;
- gemeenschappelijk begrippenkader voor architecten, product owners en informatiemanagers.

Dit maakt deze repository geschikt als:
- startpunt voor architectuur en ontwerp;
- referentie voor functionele duiding;
- brug tussen beleid, informatiearchitectuur en techniek.

---

## Wat deze repository **wel** bevat

- Functionele beschrijving van zaakgericht werken
- Capabilities en functionele verantwoordelijkheden
- Gebruiksscenario’s (bijv. zaak starten, document koppelen, beslissen, afhandelen)
- Functionele duiding van services
- Relatie tussen functionaliteit en onderliggende API’s (conceptueel)

---

## Wat deze repository **niet** bevat

- Technische API-specificaties
- Endpoint-definities
- JSON-schema’s of validatieregels
- Implementatie-instructies
- Product- of leveranciersspecifieke keuzes

Voor die onderwerpen wordt verwezen naar de **GEMMA Zaken API-standaard**.

---

## Relatie met de technische standaard

Dit functionele model:
- **vervangt de technische standaard niet**;
- **interpreteert en duidt** deze op functioneel niveau;
- biedt context die nodig is om API’s correct en consistent toe te passen.

Je kunt deze repository lezen **zonder technische voorkennis**, maar ze is expliciet bedoeld om **naast** de technische documentatie te bestaan.

---

## Doelgroep

Deze repository is primair bedoeld voor:
- Informatie- en domeinarchitecten
- Solution architects
- Product owners en informatiemanagers
- Beleidsmedewerkers betrokken bij digitale dienstverlening
- Ontwerpers van gemeentelijke ketens en processen

---

## Structuur (indicatief)

De documentatie is functioneel opgebouwd, bijvoorbeeld langs de volgende lijnen:

- `capabilities/`  
  Functionele mogelijkheden van zaakgericht werken

- `scenario’s/`  
  Praktische gebruiksscenario’s en ketens

- `services/`  
  Functionele beschrijving van services (los van API’s)

- `begrippen/`  
  Uitleg en afbakening van kernbegrippen

- `mapping/`  
  Conceptuele relatie tussen functionaliteit en API-standaard

De exacte structuur kan evolueren naarmate het model groeit.

---

## Status en ontwikkeling

Deze repository is **levend** en in ontwikkeling.  
Feedback, verbetervoorstellen en praktijkervaringen zijn welkom, mits ze bijdragen aan:
- helderheid;
- consistentie;
- functionele duiding.

---

## Lokale Development

Voor het lokaal bekijken van de documentatie:

```bash
# Installeer MkDocs
pip install mkdocs mkdocs-material

# Start de development server
mkdocs serve

# Bekijk de documentatie op:
# http://localhost:8000
```

De documentatie wordt automatisch bijgewerkt wanneer je bestanden wijzigt.

---

## Licentie

Deze repository valt onder dezelfde open principes als de overige GEMMA-documentatie, tenzij anders vermeld.

---

## Slotopmerking

Dit functionele model helpt om **zaakgericht werken te begrijpen vóórdat het wordt geïmplementeerd**.

Niet de techniek staat centraal, maar de **bedoeling**.
