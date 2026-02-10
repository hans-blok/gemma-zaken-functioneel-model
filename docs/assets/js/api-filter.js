// API Endpoint Table Filtering
// Filtering functionaliteit voor HTTP methode en status

document.addEventListener('DOMContentLoaded', function() {
    // Zoek alle API endpoint tabellen
    const tables = document.querySelectorAll('table');
    
    tables.forEach(table => {
        // Controleer of dit een API endpoint tabel is
        const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent.trim());
        if ((headers.includes('HTTP Methode') || headers.includes('Functionele Handeling')) && headers.includes('Status')) {
            initializeTableFiltering(table);
        }
    });
});

function initializeTableFiltering(table) {
    // Verzamel alle unieke HTTP methodes en statussen
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const methods = new Set();
    const statuses = new Set();
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 4) {
            const method = cells[0].textContent.trim();
            const status = cells[3].textContent.trim();
            
            methods.add(method);
            statuses.add(status);
            
            // Voeg data attributen toe voor filtering
            row.setAttribute('data-method', method);
            row.setAttribute('data-status', status);
        }
    });
    
    // Bouw filter controls
    createFilterControls(table, Array.from(methods).sort(), Array.from(statuses).sort());
}

function createFilterControls(table, methods, statuses) {
    // Maak container voor filters
    const filterContainer = document.createElement('div');
    filterContainer.className = 'api-filters';
    filterContainer.innerHTML = `
        <div style="margin-bottom: 1rem; padding: 1rem; background: var(--very-light-blue, #f0f9ff); border-radius: 6px;">
            <h4 style="margin-top: 0; color: var(--primary-blue, #2563eb);">Filter Functionele Handelingen</h4>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
                <div>
                    <label for="method-filter" style="font-weight: 600; margin-right: 0.5rem;">Type handeling:</label>
                    <select id="method-filter" style="padding: 0.25rem; border-radius: 4px; border: 1px solid #ccc;">
                        <option value="">Alle handelingen</option>
                        ${methods.map(method => `<option value="${method}">${method}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="status-filter" style="font-weight: 600; margin-right: 0.5rem;">Status:</label>
                    <select id="status-filter" style="padding: 0.25rem; border-radius: 4px; border: 1px solid #ccc;">
                        <option value="">Alle statussen</option>
                        ${statuses.map(status => `<option value="${status}">${status}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="endpoint-search" style="font-weight: 600; margin-right: 0.5rem;">Zoek in endpoint:</label>
                    <input type="text" id="endpoint-search" placeholder="Bijv. /zaken" style="padding: 0.25rem; border-radius: 4px; border: 1px solid #ccc; width: 200px;">
                </div>
                <button id="clear-filters" style="padding: 0.25rem 0.5rem; background: var(--primary-blue, #2563eb); color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Wis filters
                </button>
            </div>
        </div>
    `;
    
    // Voeg filters toe voor de tabel
    table.parentNode.insertBefore(filterContainer, table);
    
    // Voeg event listeners toe
    const methodFilter = filterContainer.querySelector('#method-filter');
    const statusFilter = filterContainer.querySelector('#status-filter');
    const endpointSearch = filterContainer.querySelector('#endpoint-search');
    const clearButton = filterContainer.querySelector('#clear-filters');
    
    // Filter functie
    function applyFilters() {
        const selectedMethod = methodFilter.value;
        const selectedStatus = statusFilter.value;
        const searchTerm = endpointSearch.value.toLowerCase();
        
        const rows = table.querySelectorAll('tbody tr');
        let visibleCount = 0;
        
        rows.forEach(row => {
            const method = row.getAttribute('data-method');
            const status = row.getAttribute('data-status');
            const endpoint = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            
            const methodMatch = !selectedMethod || method === selectedMethod;
            const statusMatch = !selectedStatus || status === selectedStatus;
            const endpointMatch = !searchTerm || endpoint.includes(searchTerm);
            
            const isVisible = methodMatch && statusMatch && endpointMatch;
            
            if (isVisible) {
                row.style.display = '';
                visibleCount++;
            } else {
                row.style.display = 'none';
            }
        });
        
        // Update resultaat teller
        updateResultCount(filterContainer, visibleCount, rows.length);
    }
    
    // Event listeners
    methodFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    endpointSearch.addEventListener('input', applyFilters);
    
    clearButton.addEventListener('click', () => {
        methodFilter.value = '';
        statusFilter.value = '';
        endpointSearch.value = '';
        applyFilters();
    });
    
    // Voeg resultaat teller toe
    const resultCounter = document.createElement('div');
    resultCounter.id = 'result-counter';
    resultCounter.style.cssText = 'margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-gray, #6b7280);';
    filterContainer.querySelector('.api-filters > div').appendChild(resultCounter);
    
    // Eerste update
    applyFilters();
}

function updateResultCount(container, visible, total) {
    const counter = container.querySelector('#result-counter');
    if (counter) {
        counter.textContent = `Toont ${visible} van ${total} functionele handelingen`;
    }
}

// CSS Stijlen toevoegen
const style = document.createElement('style');
style.textContent = `
    .api-filters select,
    .api-filters input {
        font-family: inherit;
        font-size: 0.9rem;
    }
    
    .api-filters select:focus,
    .api-filters input:focus {
        outline: 2px solid var(--primary-blue, #2563eb);
        outline-offset: 2px;
    }
    
    .api-filters button:hover {
        background: var(--secondary-blue, #1e40af) !important;
    }
    
    @media (max-width: 768px) {
        .api-filters > div > div {
            flex-direction: column;
            align-items: flex-start !important;
        }
        
        .api-filters > div > div > div {
            width: 100%;
            margin-bottom: 0.5rem;
        }
        
        .api-filters input[type="text"] {
            width: 100% !important;
        }
    }
`;
document.head.appendChild(style);