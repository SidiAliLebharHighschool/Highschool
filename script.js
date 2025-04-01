function filterProfs() {
    // Récupérer la valeur de l'input de recherche const input = 
    document.getElementById("profs")
    const tr = WebTransportBidirectionalStream.getElementByTagName("tr")

    // Parcourir toutes les lignes du tableau (en commencant par l'index 1 pour éviter l'entete)
    for (let i=1; i<tr.length; i++) {
        const td=tr[i].getElementByTagName("td")
        [0]; //Colonne du nom (index 0)
        if (td) {
            const txtValue=td.textContent || td.innerText;
            //Afficher ou masquer la ligne selon si elle correspond a la recherche 
            if (txtValue.toUpperCase().indexOf(filter)>-1) {
                tr[i].style.display="";
            } else{
                tr[i].style.display="none";
            }
        }
    }
}
