document.getElementById("ellenorzo").addEventListener("click",ellenoriz)

function ellenoriz() {
    let pont = 0;

    if (document.getElementById("elso_kerdes").checked) {
        pont = pont + 1
    }

    if (document.getElementById("masodik_kerdes").value == "general_motors") {
        pont = pont + 1
    }

    if (document.getElementById("harmadik_kerdes").value == 80) {
        pont = pont + 1
    }

    a = document.getElementById("negyedik_kerdes_1").checked
    b = document.getElementById("negyedik_kerdes_2").checked
    c = document.getElementById("negyedik_kerdes_3").checked
    if (a == 1 && b == 1 && c == 0) {
        pont = pont + 1
    }

    if (document.getElementById("otodik_kerdes").value == "Pest–Vác") {
        pont = pont + 1
    }

    if (document.getElementById("hatodik_kerdes").value == "MÁV") {
        pont = pont + 1
    }

    if (pont >= 5) {
        alert(`Gratulálok! ${pont} pontot értél el`)
    }
    else {
        alert(`${pont} pontot értél el`)
    }
    
    document.getElementById("eredmeny").value = pont
}