document.getElementById("searchButton").addEventListener("click", function () {
    filterTable();
});

function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filmCode");
    filter = input.value.toUpperCase();
    table = document.getElementById("filmTable");
    tr = table.getElementsByTagName("tr");

    var found = false;

    for (i = 1; i < tr.length; i++) {
        var columns = tr[i].getElementsByTagName("td");


        for (var j = 0; j < columns.length; j++) {
            td = columns[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    found = true;
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    if (!found) {
        alert("No film with the code, name, genre, or country was found.");
    }
}