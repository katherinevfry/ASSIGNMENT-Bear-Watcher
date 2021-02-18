import '../styles/main.scss';

const bears = [
  {
    name: 'bearybear',
    imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/23/2019/10/shutterstock_1318940468-d60b405.jpg?quality=90&resize=620%2C413'
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bearBuilder = (array) => {
  let card = '';
  array.forEach((element) => {
    card += `<div class='card w-25 p-3'>
<img src='${element.imgUrl}' class='card-img-top' alt='bearycool'>
<div class='card-body'>
<p class='card-text'>${element.name}</p>
</div>
</div>`;
  });
  printToDom('#bearCave', card);
};

const init = () => {
  bearBuilder(bears);
};

init();
