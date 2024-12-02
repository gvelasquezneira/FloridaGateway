let countyData = {};

fetch('js/county.json')
    .then(response => response.json())
    .then(data => {
        countyData = data; // Store the JSON data
        populateCountyDropdown(); // Populate dropdown after loading data
    })

function populateCountyDropdown() {
    const dropdown = document.getElementById('countyDropdown');
    
    for (const county in countyData) {
        const li = document.createElement('li');
        li.innerHTML = `<a class='dropdown-item' href='#' onclick='loadCounty("${county}")'>${countyData[county].name}</a>`;
        dropdown.appendChild(li);
    }
}

function loadCounty(countyId) {
    const county = countyData[countyId];
    if (!county) return; 

    const contentArea = document.getElementById('countyContent');
    const welcomeSection = document.getElementById('welcomeSection');

    contentArea.innerHTML = '';

    contentArea.innerHTML = `
        <div class="col-12 mb-4">
            <h2>${county.name}</h2>
        </div>
    `;

    county.websites.forEach(site => {
        const card = `
            <div class="col-md-6 mb-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${site.name}</h5>
                        <p class="card-text">${site.description}</p>
                        <a href="${site.url}" class="btn btn-primary" target="_blank">Visit Website</a>
                    </div>
                </div>
            </div>
        `;
        contentArea.innerHTML += card; // Append the card to the content area
    });

    welcomeSection.style.display = 'none';
    contentArea.style.display = 'flex';
}

    