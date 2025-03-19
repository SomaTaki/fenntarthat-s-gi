var map = L.map('leaflet-map').setView([47.4979, 19.0402], 13);  

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.4979, 19.0402]).addTo(map)
    .bindPopup('Budapest, Fenntarthatósági Központ')
    .openPopup();


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Köszönjük, hogy kapcsolatba lépett velünk!");
        document.getElementById("contactForm").reset();  
    } else {
        alert("Kérjük, töltse ki az összes mezőt!");
    }
})

