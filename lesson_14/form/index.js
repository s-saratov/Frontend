// Выбираем необходимые элементы
const loanForm = document.getElementById('loanForm');
const resultDiv = document.getElementById('result');

// Создаём функцию для расчёта оплаты
const getAmount = (event) => {
    event.preventDefault(); // предотвращаем поведение формы по умолчанию при событи submit (метод preventDefault)

    // Получаем данные из полей формы (через элемент формы и атрибут name для поля)
    const loanAmount = Number(loanForm.loanAmount.value);
    const interestRate = Number(loanForm.interestRate.value) / 100 / 12; // преобразование процентов в десятичный формат и годовой ставки в месячную
    const loanTerm = Number(loanForm.loanTerm.value) * 12; //12 - количество месяце в году

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, - loanTerm));
    
    // Метод toFixed - округления числа до фиксированного количества знаков после запятой
    resultDiv.innerHTML = `<p>Your montly payment: ${monthlyPayment.toFixed(2)}$</p>`;
};

// Привязывам функцию к обрабточику события submit

// Основные правила для работы с событием submit:
// 1. Вызов метода addEventListener делаем для элемента формы (loanForm)
// 2. Внутри формы должна быть кнопка с тэгом submit

loanForm.addEventListener("submit", getAmount);