async function fillTable(url, table) {
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    const response = await fetch(url);
    const data = await response.json();

    //console.log(data[0]);

    // clear our table
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    //puttinh headers

    for (const key in data[0]) {
        const HeaderElement = document.createElement("th");
        HeaderElement.textContent = headerText;
        tableHead.querySelector('tr').appendChild(HeaderElement)
    }

    for (let i = 0; i < data.length; i++) {
        const obj = Object.values(data[i]);
        const rowElement = document.createElement("tr");
        for (const cellText of obj) {
            if (typeof (cellText) === 'object') {
                const cellElement = document.createElement("td");
                cellElement.textContent = Object.values(cellText);
                rowElement.appendChild(cellElement);
            } else {
                const cellElement = document.createElement("td");
                cellElement.textContent = cellText;
                rowElement.appendChild(cellElement);
            }
            tableBody.appendChild(rowElement);
        }
    }

    fillTable('http://localhost:3333/', document.querySelector('table'));

}