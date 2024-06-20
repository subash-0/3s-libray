
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import 'jspdf-autotable'
export const exportToExcel = ({data}) => {
    
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Data");
        XLSX.writeFile(wb, "3s_library_record.xlsx");

}
export const exportToPdf = ({data,columns}) => {
    const doc = new jsPDF();
    const tableColumn = columns.map(col => col.name);
   
        const tableRows = data.map(row => {
            const rowData = columns.map(col => {
              const cellData = typeof col.selector === 'function' ? col.selector(row) : row[col.selector];
              return cellData !== undefined ? cellData : '';
            });
            return rowData;
          });
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("3s_library_record.pdf");
  };

  