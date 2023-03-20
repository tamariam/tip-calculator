'use strict';

const btns = document.querySelectorAll(`.btn`);
const billInput = document.querySelector(`.guess`);
const costumInput = document.querySelector('.costum');
const peopleInput = document.querySelector(`.second-input`);
const tipAmountDiv = document.querySelector('.span');

const totalAmount = document.querySelector('.span-2');
const resetBtn = document.querySelector('.reset');
const errorMessage = document.querySelector('.error');

billInput.addEventListener('click', function () {
  billInput.value = '';
  resetBtn.style.backgroundColor = ' #26C2AE';

  tipAmountDiv.innerText = '0.0';
  totalAmount.innerText = '0.0';

  costumInput.value = '';
  peopleInput.value = 0;
  errorMessage.style.display = 'none';
  peopleInput.style.border = 'none';
});
peopleInput.addEventListener('click', function () {
  peopleInput.value = 1;
  errorMessage.style.display = 'none';
  peopleInput.style.border = 'none';
  resetBtn.style.backgroundColor = ' #26C2AE';
});

const calculateBill = () => {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', calculateBill);
    for (let j = 0; j < btns.length; j++) {
      btns[j].classList.remove('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');

    // Call the calculateBill function
  }

  let numberPeople = Number(peopleInput.value);
  if (numberPeople < 1 || numberPeople == null) {
    errorMessage.style.display = 'block';
    peopleInput.style.border = '2px solid red';
    return;
  } else {
    peopleInput.value = numberPeople;
    errorMessage.style.display = 'none';
    peopleInput.style.border = 'none';
  }
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(event.target.value) / 100;

  // get the total tip amount
  const tipAmount = (bill * tipPercent) / numberPeople;

  // calculate the total (tip amount + bill)
  const total = tipAmount + bill;
  const perPersonTotal = total / numberPeople;

  // calculate the per person total (total divided by number of people)

  // update the perPersonTotal on DOM & show it to user
  totalAmount.innerText = `$${perPersonTotal.toFixed(2)}`;
  tipAmountDiv.innerText = `$${tipAmount.toFixed(2)}`;
  console.log(numberPeople);
};
resetBtn.addEventListener('click', function () {
  tipAmountDiv.innerText = '0.0';
  totalAmount.innerText = '0.0';
  // peopleInput.value = 1;
  billInput.value = 0;
  costumInput.value = '';
  resetBtn.style.backgroundColor = '#9FE8DF';
  errorMessage.style.display = 'none';
  peopleInput.style.border = 'none';
  peopleInput.value = 0;
  resetBtn.style.backgroundColor = ' #0D686D';
  for (let j = 0; j < btns.length; j++) {
    btns[j].classList.remove('active');
  }

  ///peri unda shevucvalo //
});
// const calculateCostumBill = () => {
//   let numberPeople = Number(peopleInput.value);
//   console.log(numberPeople);
//   // get bill from user input & convert it into a number
//   const costumBill = Number(costumInput.value);
//   // const billCostum = Number(costumInput.value);????????
//   // get the tip from user & convert it into a percentage (divide by 100)
//   const tipPercent = Number(btns[1].value) / 100;

//   // get the total tip amount
//   const tipAmount = costumBill * tipPercent;

//   // calculate the total (tip amount + bill)
//   const total = tipAmount + costumBill;
//   // const totalPerPerson = total / numberPeople;
//   // calculate the per person total (total divided by number of people)

//   // update the perPersonTotal on DOM & show it to user
//   totalAmount.innerText = `$${total.toFixed(2)}`;
//   tipAmountDiv.innerText = `$${tipAmount.toFixed(2)}`;

//   peopleInput.value = numberPeople;
// };
// btns.forEach(function (btn) {
//   btn.addEventListener('click', calculateBill());
// });????

// peopleInput.addEventListener('click', function () {
//   if (numberPeople < 1) {
//     alert('cant be 0');
//   }
//   peopleInput.innerText = 1;
// });
