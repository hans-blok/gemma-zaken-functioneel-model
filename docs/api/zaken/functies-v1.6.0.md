# Zaken Functies - Functionele Beschrijving

**Versie**: 1.6.0  
**Datum**: 10 februari 2026

## Inleiding

Dit document beschrijft de **functionele handelingen** die beschikbaar zijn binnen de Zaken functionaliteit.

Voor terminologie en achtergrond, zie: [Terminologie](../../algemeen/terminologie.md)

Voor berichten structuren, zie: [Zaken Berichten v1.6.0](berichten-v1.6.0.md)

## Context

Een functionele beschrijving om een zaakregistratiecomponent (ZRC) te benaderen.

**Autorisatie**

Deze functionaliteit vereist autorisatie. Je kan de
[token-tool](https://zaken-auth.vng.cloud/) gebruiken om JWT-tokens te
genereren.


**Handige links**

* [Github VNG-realisatie](https://vng-realisatie.github.io/gemma-zaken/standaard)


## Deel 1: Overzicht functionele handelingen (Endpoints)

<div class="filter-container">
  <div class="filter-row">
    <select id="entiteit-filter" class="filter-select">
      <option value="">Alle entiteiten</option>
      <option value="klantcontacten">klantcontacten</option>
      <option value="resultaten">resultaten</option>
      <option value="rollen">rollen</option>
      <option value="statussen">statussen</option>
      <option value="zaakcontactmomenten">zaakcontactmomenten</option>
      <option value="zaakinformatieobjecten">zaakinformatieobjecten</option>
      <option value="zaakobjecten">zaakobjecten</option>
      <option value="zaakverzoeken">zaakverzoeken</option>
      <option value="zaken">zaken</option>
    </select>
    <select id="bereik-filter" class="filter-select">
      <option value="">Alle bereiken</option>
      <option value="meervoudig">Meervoudig</option>
      <option value="enkelvoudig">Enkelvoudig</option>
    </select>
    <select id="status-filter" class="filter-select">
      <option value="">Alle statussen</option>
      <option value="Actief">Actief</option>
      <option value="Vervallen">Vervallen</option>
    </select>
    <button id="apply-filters" class="filter-apply">Filter toepassen</button>
    <button id="clear-filters" class="filter-clear">Wis filters</button>
  </div>
</div>

<table id="functies-table" class="filterable-table">
<thead>
<tr>
<th>Functionele handeling</th>
<th>Entiteit</th>
<th>Bereik</th>
<th>Samenvatting</th>
<th>Status</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr data-status="Vervallen">
<td>Raadplegen van klantcontacten</td>
<td>klantcontacten</td>
<td>meervoudig</td>
<td>Alle KLANTCONTACTen opvragen.</td>
<td>Vervallen</td>
<td><a href="#klantcontact-list">Details</a></td>
</tr>
<tr data-status="Vervallen">
<td>Registreren van klantcontact</td>
<td>klantcontacten</td>
<td>meervoudig</td>
<td>Maak een KLANTCONTACT bij een ZAAK aan.</td>
<td>Vervallen</td>
<td><a href="#klantcontact-create">Details</a></td>
</tr>
<tr data-status="Vervallen">
<td>Raadplegen van klantcontact</td>
<td>klantcontacten</td>
<td>enkelvoudig</td>
<td>Een specifieke KLANTCONTACT opvragen.</td>
<td>Vervallen</td>
<td><a href="#klantcontact-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van resultaten</td>
<td>resultaten</td>
<td>meervoudig</td>
<td>Alle RESULTAATen van ZAAKen opvragen.</td>
<td>Actief</td>
<td><a href="#resultaat-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Registreren van resultaat</td>
<td>resultaten</td>
<td>meervoudig</td>
<td>Maak een RESULTAAT bij een ZAAK aan.</td>
<td>Actief</td>
<td><a href="#resultaat-create">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van resultaat</td>
<td>resultaten</td>
<td>enkelvoudig</td>
<td>Een specifieke RESULTAAT opvragen.</td>
<td>Actief</td>
<td><a href="#resultaat-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Wijzigen van resultaat</td>
<td>resultaten</td>
<td>enkelvoudig</td>
<td>Werk een RESULTAAT in zijn geheel bij.</td>
<td>Actief</td>
<td><a href="#resultaat-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Bijwerken van resultaat</td>
<td>resultaten</td>
<td>enkelvoudig</td>
<td>Werk een RESULTAAT deels bij.</td>
<td>Actief</td>
<td><a href="#resultaat-partial-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Beëindigen van resultaat</td>
<td>resultaten</td>
<td>enkelvoudig</td>
<td>Verwijder een RESULTAAT van een ZAAK.</td>
<td>Actief</td>
<td><a href="#resultaat-destroy">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van rollen</td>
<td>rollen</td>
<td>meervoudig</td>
<td>Alle ROLlen bij ZAAKen opvragen.</td>
<td>Actief</td>
<td><a href="#rol-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Registreren van rol</td>
<td>rollen</td>
<td>meervoudig</td>
<td>Maak een ROL aan bij een ZAAK.</td>
<td>Actief</td>
<td><a href="#rol-create">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van rol</td>
<td>rollen</td>
<td>enkelvoudig</td>
<td>Een specifieke ROL bij een ZAAK opvragen.</td>
<td>Actief</td>
<td><a href="#rol-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Beëindigen van rol</td>
<td>rollen</td>
<td>enkelvoudig</td>
<td>Verwijder een ROL van een ZAAK.</td>
<td>Actief</td>
<td><a href="#rol-destroy">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van statussen</td>
<td>statussen</td>
<td>meervoudig</td>
<td>Alle STATUSsen bij ZAAKen opvragen.</td>
<td>Actief</td>
<td><a href="#status-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Registreren van status</td>
<td>statussen</td>
<td>meervoudig</td>
<td>Maak een STATUS aan voor een ZAAK.</td>
<td>Actief</td>
<td><a href="#status-create">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van status</td>
<td>statussen</td>
<td>enkelvoudig</td>
<td>Een specifieke STATUS van een ZAAK opvragen.</td>
<td>Actief</td>
<td><a href="#status-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakcontactmomenten</td>
<td>zaakcontactmomenten</td>
<td>meervoudig</td>
<td>Alle ZAAKCONTACTMOMENTen opvragen.</td>
<td>Actief</td>
<td><a href="#zaakcontactmoment-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Registreren van zaakcontactmoment</td>
<td>zaakcontactmomenten</td>
<td>meervoudig</td>
<td>Maak een ZAAKCONTACTMOMENT aan.</td>
<td>Actief</td>
<td><a href="#zaakcontactmoment-create">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakcontactmoment</td>
<td>zaakcontactmomenten</td>
<td>enkelvoudig</td>
<td>Een specifiek ZAAKCONTACTMOMENT opvragen</td>
<td>Actief</td>
<td><a href="#zaakcontactmoment-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Beëindigen van zaakcontactmoment</td>
<td>zaakcontactmomenten</td>
<td>enkelvoudig</td>
<td>Verwijder een ZAAKCONTACTMOMENT.</td>
<td>Actief</td>
<td><a href="#zaakcontactmoment-destroy">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakinformatieobjecten</td>
<td>zaakinformatieobjecten</td>
<td>meervoudig</td>
<td>Alle ZAAK-INFORMATIEOBJECT relaties opvragen</td>
<td>Actief</td>
<td><a href="#zaakinformatieobject-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Registreren van zaakinformatieobject</td>
<td>zaakinformatieobjecten</td>
<td>meervoudig</td>
<td>Maak een ZAAK-INFORMATIEOBJECT relatie aan.</td>
<td>Actief</td>
<td><a href="#zaakinformatieobject-create">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakinformatieobject</td>
<td>zaakinformatieobjecten</td>
<td>enkelvoudig</td>
<td>Een specifieke ZAAK-INFORMATIEOBJECT relatie opvragen.</td>
<td>Actief</td>
<td><a href="#zaakinformatieobject-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Wijzigen van zaakinformatieobject</td>
<td>zaakinformatieobjecten</td>
<td>enkelvoudig</td>
<td>Werk een ZAAK-INFORMATIEOBJECT relatie in zijn geheel bij.</td>
<td>Actief</td>
<td><a href="#zaakinformatieobject-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Bijwerken van zaakinformatieobject</td>
<td>zaakinformatieobjecten</td>
<td>enkelvoudig</td>
<td>Werk een ZAAK-INFORMATIEOBJECT relatie deels bij.</td>
<td>Actief</td>
<td><a href="#zaakinformatieobject-partial-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Beëindigen van zaakinformatieobject</td>
<td>zaakinformatieobjecten</td>
<td>enkelvoudig</td>
<td>Verwijder een ZAAK-INFORMATIEOBJECT relatie.</td>
<td>Actief</td>
<td><a href="#zaakinformatieobject-destroy">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakobjecten</td>
<td>zaakobjecten</td>
<td>meervoudig</td>
<td>Alle ZAAKOBJECTen opvragen.</td>
<td>Actief</td>
<td><a href="#zaakobject-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Registreren van zaakobject</td>
<td>zaakobjecten</td>
<td>enkelvoudig</td>
<td>Maak een ZAAKOBJECT aan.</td>
<td>Actief</td>
<td><a href="#zaakobject-create">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakobject</td>
<td>zaakobjecten</td>
<td>enkelvoudig</td>
<td>Een specifieke ZAAKOBJECT opvragen.</td>
<td>Actief</td>
<td><a href="#zaakobject-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Wijzigen van zaakobject</td>
<td>zaakobjecten</td>
<td>enkelvoudig</td>
<td>Werk een ZAAKOBJECT zijn geheel bij.</td>
<td>Actief</td>
<td><a href="#zaakobject-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Bijwerken van zaakobject</td>
<td>zaakobjecten</td>
<td>enkelvoudig</td>
<td>Werk een ZAAKOBJECT deels bij.</td>
<td>Actief</td>
<td><a href="#zaakobject-partial-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Beëindigen van zaakobject</td>
<td>zaakobjecten</td>
<td>enkelvoudig</td>
<td>Verwijder een ZAAKOBJECT.</td>
<td>Actief</td>
<td><a href="#zaakobject-destroy">Details</a></td>
</tr>
<tr data-status="Vervallen">
<td>Raadplegen van zaakverzoeken</td>
<td>zaakverzoeken</td>
<td>meervoudig</td>
<td>Alle ZAAK-VERZOEKen opvragen.</td>
<td>Vervallen</td>
<td><a href="#zaakverzoek-list">Details</a></td>
</tr>
<tr data-status="Vervallen">
<td>Registreren van zaakverzoek</td>
<td>zaakverzoeken</td>
<td>meervoudig</td>
<td>Maak een ZAAK-VERZOEK aan.</td>
<td>Vervallen</td>
<td><a href="#zaakverzoek-create">Details</a></td>
</tr>
<tr data-status="Vervallen">
<td>Raadplegen van zaakverzoek</td>
<td>zaakverzoeken</td>
<td>enkelvoudig</td>
<td>Een specifieke ZAAK-VERZOEK opvragen.</td>
<td>Vervallen</td>
<td><a href="#zaakverzoek-retrieve">Details</a></td>
</tr>
<tr data-status="Vervallen">
<td>Beëindigen van zaakverzoek</td>
<td>zaakverzoeken</td>
<td>enkelvoudig</td>
<td>Verwijder een ZAAK-VERZOEK.</td>
<td>Vervallen</td>
<td><a href="#zaakverzoek-destroy">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaken</td>
<td>zaken</td>
<td>meervoudig</td>
<td>Alle ZAAKen opvragen.</td>
<td>Actief</td>
<td><a href="#zaak-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Registreren van zaak</td>
<td>zaken</td>
<td>meervoudig</td>
<td>Maak een ZAAK aan.</td>
<td>Actief</td>
<td><a href="#zaak-create">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaak</td>
<td>zaken</td>
<td>enkelvoudig</td>
<td>Een specifieke ZAAK opvragen.</td>
<td>Actief</td>
<td><a href="#zaak-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Wijzigen van zaak</td>
<td>zaken</td>
<td>enkelvoudig</td>
<td>Werk een ZAAK in zijn geheel bij.</td>
<td>Actief</td>
<td><a href="#zaak-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Bijwerken van zaak</td>
<td>zaken</td>
<td>enkelvoudig</td>
<td>Werk een ZAAK deels bij.</td>
<td>Actief</td>
<td><a href="#zaak-partial-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Beëindigen van zaak</td>
<td>zaken</td>
<td>enkelvoudig</td>
<td>Verwijder een ZAAK.</td>
<td>Actief</td>
<td><a href="#zaak-destroy">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van audittrail</td>
<td>zaken/{identificatie zaak}/audittrail</td>
<td>enkelvoudig</td>
<td>Alle audit trail regels behorend bij de ZAAK.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#audittrail-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van audittrail regel</td>
<td>zaken/{identificatie zaak}/audittrail</td>
<td>enkelvoudig</td>
<td>Een specifieke audit trail regel opvragen</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#audittrail-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakbesluiten</td>
<td>zaken/{zaak_uuid}/besluiten</td>
<td>meervoudig</td>
<td>Alle ZAAKBESLUITen opvragen.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakbesluit-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Registreren van zaakbesluit</td>
<td>zaken/{zaak_uuid}/besluiten</td>
<td>meervoudig</td>
<td>Maak een ZAAKBESLUIT aan.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakbesluit-create">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakbesluit</td>
<td>zaken/{zaak_uuid}/besluiten</td>
<td>enkelvoudig</td>
<td>Een specifiek ZAAKBESLUIT opvragen</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakbesluit-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Beëindigen van zaakbesluit</td>
<td>zaken/{zaak_uuid}/besluiten</td>
<td>enkelvoudig</td>
<td>Verwijder een ZAAKBESLUIT.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakbesluit-destroy">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakeigenschappen</td>
<td>zaken/{zaak_uuid}/zaakeigenschappen</td>
<td>meervoudig</td>
<td>Alle ZAAKEIGENSCHAPpen opvragen.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakeigenschap-list">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Registreren van zaakeigenschap</td>
<td>zaken/{zaak_uuid}/zaakeigenschappen</td>
<td>meervoudig</td>
<td>Maak een ZAAKEIGENSCHAP aan.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakeigenschap-create">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Raadplegen van zaakeigenschap</td>
<td>zaken/{zaak_uuid}/zaakeigenschappen</td>
<td>enkelvoudig</td>
<td>Een specifieke ZAAKEIGENSCHAP opvragen.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakeigenschap-retrieve">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Wijzigen van zaakeigenschap</td>
<td>zaken/{zaak_uuid}/zaakeigenschappen</td>
<td>enkelvoudig</td>
<td>Werk een ZAAKEIGENSCHAP in zijn geheel bij.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakeigenschap-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Bijwerken van zaakeigenschap</td>
<td>zaken/{zaak_uuid}/zaakeigenschappen</td>
<td>enkelvoudig</td>
<td>Werk een ZAAKEIGENSCHAP deels bij.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakeigenschap-partial-update">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Beëindigen van zaakeigenschap</td>
<td>zaken/{zaak_uuid}/zaakeigenschappen</td>
<td>enkelvoudig</td>
<td>Verwijder een ZAAKEIGENSCHAP.</td>
<td>Actief</td>
<td><a href="berichten-v1.6.0.md#zaakeigenschap-destroy">Details</a></td>
</tr>
<tr data-status="Actief">
<td>Starten van zoekopdracht</td>
<td>zaken/_zoek</td>
<td>meervoudig</td>
<td>Voer een (geo)-zoekopdracht uit op ZAAKen.</td>
<td>Actief</td>
<td><a href="#zaak-zoek">Details</a></td>
</tr>
</tbody>
</table>

<style>
.filter-container {
  margin-bottom: 20px;
  padding: 15px;
  background-color: var(--md-default-bg-color);
  border-radius: 8px;
  border: 1px solid var(--md-default-fg-color--lightest);
}

.filter-row {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}

.filter-input, .filter-select {
  padding: 8px 12px;
  border: 1px solid var(--md-default-fg-color--light);
  border-radius: 4px;
  background-color: var(--md-default-bg-color);
  color: var(--md-default-fg-color);
  font-size: 14px;
  min-width: 200px;
}

.filter-input:focus, .filter-select:focus {
  outline: none;
  border-color: var(--md-accent-fg-color);
  box-shadow: 0 0 0 2px var(--md-accent-fg-color--transparent);
}

.filter-clear {
  padding: 8px 16px;
  background-color: var(--md-primary-fg-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.filter-clear:hover {
  background-color: var(--md-primary-fg-color--dark);
}

.filter-apply {
  padding: 8px 16px;
  background-color: var(--md-accent-fg-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
  margin-right: 8px;
}

.filter-apply:hover {
  background-color: var(--md-accent-fg-color--transparent);
}

.filterable-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  table-layout: fixed;
}

.filterable-table th,
.filterable-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid var(--md-default-fg-color--lightest);
  white-space: normal;
  overflow-wrap: anywhere;
}

.filterable-table th {
  background-color: var(--md-default-fg-color--lightest);
  font-weight: 600;
  color: var(--md-default-fg-color);
}

.filterable-table th:nth-child(1),
.filterable-table td:nth-child(1) {
  width: 30%;
}

.filterable-table th:nth-child(2),
.filterable-table td:nth-child(2) {
  width: 18%;
}

.filterable-table th:nth-child(3),
.filterable-table td:nth-child(3) {
  width: 110px;
  min-width: 110px;
  max-width: 110px;
}

.filterable-table th:nth-child(4),
.filterable-table td:nth-child(4) {
  width: 32%;
}

.filterable-table th:nth-child(5),
.filterable-table td:nth-child(5) {
  width: 110px;
  min-width: 110px;
  max-width: 110px;
  white-space: nowrap;
}

.filterable-table th:nth-child(6),
.filterable-table td:nth-child(6) {
  width: 80px;
  min-width: 80px;
  max-width: 80px;
  white-space: nowrap;
  text-align: center;
}

.filterable-table tr:hover {
  background-color: #f8f9fa;
}

.filterable-table tr.hidden {
  display: none;
}

.status-actief {
  color: #2e7d32;
  font-weight: 600;
}

.status-vervallen {
  color: #d32f2f;
  font-weight: 600;
}

@media (max-width: 768px) {
  .filter-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-input, .filter-select {
    min-width: auto;
    width: 100%;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const entiteitFilter = document.getElementById('entiteit-filter');
  const bereikFilter = document.getElementById('bereik-filter');
  const statusFilter = document.getElementById('status-filter');
  const applyButton = document.getElementById('apply-filters');
  const clearButton = document.getElementById('clear-filters');
  const table = document.getElementById('functies-table');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  // Add status classes to table cells (now column 4 instead of 3)
  rows.forEach(row => {
    const statusCell = row.cells[4];
    const status = statusCell.textContent.trim().toLowerCase();
    statusCell.className = 'status-' + status;
  });

  function filterTable() {
    const entiteitValue = entiteitFilter.value.toLowerCase();
    const bereikValue = bereikFilter.value;
    const statusValue = statusFilter.value;

    rows.forEach(row => {
      const entiteit = row.cells[1].textContent.toLowerCase();
      const bereik = row.cells[2].textContent.toLowerCase();
      const status = row.dataset.status;

      // For entiteit filter, handle both simple entities and nested paths
      let entiteitMatch = true;
      if (entiteitValue) {
        entiteitMatch = entiteit === entiteitValue || 
                       entiteit.startsWith(entiteitValue + '/') ||
                       entiteit.startsWith(entiteitValue + '{');
      }
      
      const bereikMatch = !bereikValue || bereik === bereikValue.toLowerCase();
      const statusMatch = !statusValue || status === statusValue;

      if (entiteitMatch && bereikMatch && statusMatch) {
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
      }
    });

    updateRowCount();
  }

  function updateRowCount() {
    const visibleRows = rows.filter(row => !row.classList.contains('hidden')).length;
    const totalRows = rows.length;
    
    // Update or create row count display
    let countDisplay = document.getElementById('row-count');
    if (!countDisplay) {
      countDisplay = document.createElement('div');
      countDisplay.id = 'row-count';
      countDisplay.style.marginTop = '10px';
      countDisplay.style.fontSize = '14px';
      countDisplay.style.color = 'var(--md-default-fg-color--light)';
      table.parentNode.appendChild(countDisplay);
    }
    
    countDisplay.textContent = `Toont ${visibleRows} van ${totalRows} handelingen`;
  }

  function clearFilters() {
    entiteitFilter.value = '';
    bereikFilter.value = '';
    statusFilter.value = '';
    filterTable();
  }

  // Event listeners
  applyButton.addEventListener('click', filterTable);
  clearButton.addEventListener('click', clearFilters);

  // Initialize
  updateRowCount();
});
</script>

## Deel 2: Gedetailleerde Beschrijving Functionele Handelingen

### Klantcontact

#### klantcontact-list

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
