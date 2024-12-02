let countyData;

fetch('js/county.json')
    .then(response => response.json())
    .then(data => {
        countyData = data;
    });

    function loadCounty(countyId) {
        const county = countyData[countyId]; 
        if (!county) return;
    
        const contentArea = document.getElementById('countyContent');
        contentArea.innerHTML = ''; 
        const welcomeSection = document.getElementById('welcomeSection');
        
        // Heading
        const countyHeader = `
            <div class="col-12 mb-4">
                <h2>${county.name}</h2>
            </div>
        `;
        contentArea.innerHTML += countyHeader;
    
        county.websites.forEach((site) => {
            const card = `
                <div class="website col-md-6 mb-4">
                    <div class="card h-100">
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
    