const
  totalBalance = document.querySelector('.total__balance'),
  totalMoneyIncome = document.querySelector('.total__money-income'),
  totalMoneyExpenses = document.querySelector('.total__money-expenses'),
  historyList = document.querySelector('.history__list'),
  form = document.getElementById('form'),
  operationName = document.querySelector('.operation__name'),
  operationAmount = document.querySelector('.operation__amount');

let dbOperation = [{
    id: '1',
    description: 'Получил зарплату',
    amount: +30000,
  },
  {
    id: '2',
    description: 'Купил обувь',
    amount: -6000,
  },
  {
    id: '3',
    description: 'Купил книги',
    amount: -3000,
  },
  {
    id: '4',
    description: 'Подработка',
    amount: +4500,
  },
];

// let dbOperation = JSON.parse(localStorage.getItem('calc')) || [];

if (localStorage.getItem('calc')) {
  dbOperation = JSON.parse(localStorage.getItem('calc'));
};

// console.log('dbOperation: ', dbOperation);

// Functions
const generateId = () => `id${Math.round(Math.random()*1e8).toString(16)}`;

const renderOperation = elem => {

  const className = elem.amount < 0 ? 'history__item-minus' : 'history__item-plus';
  const listItem = document.createElement('li');

  listItem.classList.add('history__item');
  listItem.classList.add(className);

  listItem.innerHTML = `
    ${elem.description}
    <span class="history__money">${elem.amount} ₽</span>
    <button class="history__delete" data-id="${elem.id}">x</button>
  `;

  historyList.append(listItem);

};

const updateBalance = () => {
  const resultIncome = dbOperation.filter(elem => elem.amount > 0)
    .reduce((result, elem) => result + elem.amount, 0);
  const resultExpenses = dbOperation.filter(elem => elem.amount < 0)
    .reduce((result, elem) => result + elem.amount, 0);

  totalMoneyIncome.textContent = resultIncome + ' ₽';
  totalMoneyExpenses.textContent = resultExpenses + ' ₽';
  totalBalance.textContent = (resultIncome + resultExpenses) + ' ₽';

};

const deleteOperation = (event) => {
  if (event.target.classList.contains('history__delete')) {
    dbOperation = dbOperation.filter(elem => elem.id !== event.target.dataset.id);
    init();
  };
};

const init = () => {
  historyList.textContent = '';
  dbOperation.forEach(renderOperation);
  updateBalance();
  localStorage.setItem('calc', JSON.stringify(dbOperation));
};

const addOperation = (event) => {
  event.preventDefault();

  const operationNameValue = operationName.value,
    operationAmountValue = operationAmount.value;

  operationName.style.borderColor = '';
  operationAmount.style.borderColor = '';

  if (operationNameValue && operationAmountValue) {

    const operation = {
      id: generateId(),
      description: operationNameValue,
      amount: +operationAmountValue,
    };

    dbOperation.push(operation);
    init();

    console.log(dbOperation);

  } else {
    if (!operationNameValue) operationName.style.borderColor = 'red';
    if (!operationAmountValue) operationAmount.style.borderColor = 'red';
  }

  operationName.value = '';
  operationAmount.value = '';
};

// Events
form.addEventListener('submit', addOperation);
historyList.addEventListener('click', deleteOperation);

init();