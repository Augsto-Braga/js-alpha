//Taxa de juros: 2% fixo + 0,1% ao dia de atraso

const clientName = document.getElementById("clientName");
const price = document.getElementById("price");
const buyDate = document.getElementById("buyDate");
const tableIndex = document.getElementById("1");
const tableName = document.getElementById("2");
const tableDate = document.getElementById("3");
const tablePrice = document.getElementById("4");
const tableDelay = document.getElementById("5");
const tableFees = document.getElementById("6");

const clients = [];

function insertData() {
  let due = new Date(buyDate.value);

  let client = {
    name: clientName.value,
    dueDate: due,
    buyPrice: Number(price.value),
  };

  clients.push(client);

  tableIndex.innerHTML += `<p>${clients.length}</p>`;
  tableName.innerHTML += `<p>${client.name}`;
  tableDate.innerHTML += `<p>${buyDate.value}</p>`;
  tablePrice.innerHTML += `<p>R$${client.buyPrice.toFixed(2)}</p>`;
}

function calculateFees() {
  const today = new Date();
  const timeInOneDay = 1000 * 60 * 60 * 24;

  let clientsAtt = [];

  clients.map((client) => {
    let diff = today - client.dueDate;

    let diffInDays = 0;
    let fee = 0;

    if (diff > 0) {
      diffInDays = Math.ceil(diff / timeInOneDay) - 1;

      let fixedFee = (client.buyPrice * 2) / 100;

      let variableFee = (client.buyPrice * diffInDays) / 1000;

      fee = fixedFee + variableFee;
    }

    tableDelay.innerHTML += `<p>${diffInDays}</p>`;
    tableFees.innerHTML += `<p>R$${fee.toFixed(2)}</p>`;
  });
}
