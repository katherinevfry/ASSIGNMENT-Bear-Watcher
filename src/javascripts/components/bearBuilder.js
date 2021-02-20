import printToDom from '../helpers/printToDom';

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

export default bearBuilder;
