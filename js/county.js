// Load county data
let countyData;
fetch('data/counties.json')
    .then(response => response.json())
    .then(data => {
        countyData = data;
        populateCountyDropdown();
        populateCountyList();
    });

function populateCountyDropdown() {
    const dropdown = document.getElementById('countyDropdown');
    for (const county in countyData) {
        const li = document.createElement('li');
        li.innerHTML = `<a class='dropdown-item' href='#' onclick='loadCounty("${county}")'>${countyData[county].name}</a>`;
        dropdown.appendChild(li);
    }
}

function populateCountyList() {
    const countyList = document.getElementById('countyList');
    for (const county in countyData) {
        const li = document.createElement('li');
        li.className = 'nav-item mb-2';
        li.innerHTML = `
            <a class='btn btn-outline-primary w-100 text-center sidebar-btn rounded-pill' href='#' onclick='loadCounty("${county}")'>
                ${countyData[county].name}
            </a>`;
        countyList.appendChild(li);
    }
}

function loadCounty(countyId) {
    const county = countyData[countyId];
    if (!county) return;

    const contentArea = document.getElementById('countyContent');
    let websiteList = '';

    county.websites.forEach(site => {
        let buttons = '';
        if (Array.isArray(site.urls)) {
            site.urls.forEach((url, index) => {
                buttons += `<a href="${url}" class='btn btn-primary mb-2 me-2' target='_blank'>Link ${index + 1}</a>`;
            });
        } else if (site.url) {
            buttons = `<a href="${site.url}" class='btn btn-primary mb-2 me-2' target='_blank'>Visit Website</a>`;
        }

        websiteList += `
            <div class='website col-md-6 mb-4'>
                <div class='card h-100'>
                    <div class='card-body'>
                        <h5 class='card-title'>${site.name}</h5>
                        <p class='card-text'>${site.description}</p>
                        ${buttons}
                    </div>
                </div>
            </div>`;
    });

    contentArea.innerHTML = `
        <div class='col-12 mb-4'>
            <h2>${county.name}</h2>
        </div>${websiteList}`;

    contentArea.style.display = 'flex';
}