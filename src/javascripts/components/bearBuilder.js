import printToDom from '../helpers/printToDom';
import bears from '../helpers/data/bearsData';

const bearBuilder = (array) => {
  let card = '';
  array.forEach((element) => {
    card += `<div class='card' style='width: 18rem;'>
<img src='${element.imgUrl}' class='card-img-top' alt='bearycool'>
<div class='card-body'>
<h3 class='card-text text-center'>${element.name}</h3>
</div>
</div>`;
  });
  printToDom('#bearCave', card);
};

const getBearStuff = (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const imgUrl = document.querySelector('#imgUrl').value;

  const obj = {
    name,
    imgUrl,
  };

  bears.push(obj);
  bearBuilder(bears);

  document.querySelector('form').reset();
};

export default getBearStuff;
