
    function downloadTable() {
        const tableElement = document.querySelector('.comparison-table');
        const rows = tableElement.rows;
        const pdfData = [];

        // Extract data from table rows
        for (let i = 0; i < rows.length; i++) {
            const rowData = [];
            const cells = rows[i].cells;
            for (let j = 0; j < cells.length; j++) {
                rowData.push(cells[j].innerText); // You can adjust this if needed
            }
            pdfData.push(rowData);
        }

        // Define the PDF document structure
        const docDefinition = {
            content: [
                {
                    table: {
                        body: pdfData,
                    },
                },
            ],
        };

        // Create and download the PDF
        pdfMake.createPdf(docDefinition).download('filament_comparison_table.pdf');
    }

