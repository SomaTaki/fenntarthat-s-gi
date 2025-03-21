function megjelenitTamogatas() {
    const osszeg = document.getElementById("tamogatasOsszeg").value;
    const tamogatottNev = document.getElementById("tamogatottNev").value;
    const eredmeny = document.getElementById("tamogatasEredmeny");

    if (tamogatottNev.trim() === "") {
        eredmeny.innerHTML = "Kérlek, add meg kit szeretnél támogatni!";
        eredmeny.style.color = "red";
        return;
    }

    eredmeny.innerHTML = `Támogatás elküldve! ${tamogatottNev} részére ${osszeg} Ft összegben.`;
    eredmeny.style.color = "green";
}

document.getElementById("tamogatasOsszeg").addEventListener("input", function() {
    document.getElementById("osszegErtek").innerText = this.value;
});