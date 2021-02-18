import printToDom from '../helpers/printToDom';

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

export default bearBuilder;
