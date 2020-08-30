(function() {
	"use strict";
	function startDownload(){	
		let tables = document.getElementsByTagName("table");
		let csvs = [];
		for(var i=0;i<tables.length;i++){
			let table = tables[i].cloneNode(true);
			let csv = [];
			let rows = table.rows;				
			for (let i = 0; i < rows.length; i++) {
				let row = [], cols = rows[i].querySelectorAll("td, th");	
				for (let j = 0; j < cols.length; j++) {
					row.push(cols[j].innerText);
				}
				csv.push(row.join(","));  				
			}  
			let downloadLink = document.createElement("a");
			downloadLink.download = "table"+i+".csv"
			downloadLink.href = window.URL.createObjectURL(new Blob([csv.join("\r\n")], {type: "text/csv"}));
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
			downloadLink.click();	
		}
	}
	startDownload();
})();
