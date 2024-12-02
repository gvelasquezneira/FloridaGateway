let countyData = {};

fetch('js/json.json')
    .then(response => response.json())
    .then(data => {
        countyData = data;
    })
    .catch(error => console.error('Error loading JSON:', error));

const dropdownMenu = document.querySelector('.dropdown-menu');
dropdownMenu.addEventListener('click', (e) => {
    const selectedCounty = e.target.textContent.trim();
    if (countyData[selectedCounty.toLowerCase()]) {
        loadCounty(selectedCounty.toLowerCase());
    }
});

function loadCounty(countyId) {
    const county = countyData[countyId];
    if (!county) return;

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
