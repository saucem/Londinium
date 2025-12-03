const sheetId = '19ZTft-kY-jXMkCo3tA-bwF5IsT0OhR6cC7tXx5oFnx4';
const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

fetch(csvUrl)
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n').map(row => row.split(','));
    console.log('CSV Data:', rows);
  })
  .catch(error => console.error('Error:', error));
