
// Array zum Speichern von Kosten
let expenses = [];

// Funktion zum Hinzufügen von Kosten
function addExpense() {
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (description && date && category && !isNaN(amount)) {
    expenses.push({ description, date, category, amount });
    updateTable();
    clearForm();
  } else {
    alert('Bitte füllen Sie alle Felder korrekt aus.');
  }
}

// Funktion zum Aktualisieren der Kostenübersicht
function updateTable() {
  const table = document.getElementById('expenseTable');
  // Lösche alle vorhandenen Zeilen
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  let totalAmount = 0;

  // Füge neue Zeilen hinzu
  expenses.forEach(expense => {
    const row = table.insertRow(-1);
    row.insertCell(0).textContent = expense.description;
    row.insertCell(1).textContent = expense.date;
    row.insertCell(2).textContent = expense.category;
    row.insertCell(3).textContent = expense.amount.toFixed(2);

    totalAmount += expense.amount;
    row.insertCell(4).textContent = totalAmount.toFixed(2);
  });
}

// Funktion zum Zurücksetzen des Eingabeformulars
function clearForm() {
  document.getElementById('description').value = '';
  document.getElementById('date').value = '';
  document.getElementById('category').value = '';
  document.getElementById('amount').value = '';
}
