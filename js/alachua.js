let countyData;
fetch('js/json.json')
    .then(response => response.json())
    .then(data => {
        countyData = data;
        populateCountyList();
    });

function populateCountyList() {
    const countyList = document.getElementById('countyList');
    for (const county in countyData) {
        const li = document.createElement('li');
        li.className = 'nav-item mb-2';
        li.innerHTML = `
            <a class="btn btn-outline-primary w-100 text-center sidebar-btn rounded-pill" href="#" onclick="loadCounty('${county}')">
                <i class="bi bi-geo-alt-fill"></i> ${countyData[county].name}
            </a>
        `;
        countyList.appendChild(li);
    }
}

function loadCounty(countyId) {
    const county = countyData[countyId];
    const contentArea = document.getElementById('countyContent');
    const welcomeSection = document.getElementById('welcomeSection');
    let websiteList = '';
    
    county.websites.forEach(site => {
        websiteList += `
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${site.name}</h5>
                        <p class="card-text">${site.description}</p>
                        <a href="${site.url}" class="btn btn-primary" target="_blank">Visit Website</a>
                    </div>
                </div>
            </div>
        `;
    });

    contentArea.innerHTML = `
        <div class="col-12 mb-4">
            <h2>${county.name}</h2>
        </div>
        ${websiteList}
    `;

    welcomeSection.style.display = 'none';
    contentArea.style.display = 'flex';
}