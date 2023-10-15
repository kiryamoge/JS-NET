const row = document.querySelector(".row");
const renderCard = (image, languages, stringMn, element) => {
  row.insertAdjacentHTML(
    "beforeend",
    `<div class="col">
      <div class="card h-100">
        <img src="${image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.name.common}</h5>
          <p class="card-text">${element.region}</p>
          <p class="card-text">👪 ${element.population}</p>
          <p class="card-text">🤑${languages} </p>
          <p class="card-text">💲${stringMn} </p>
        </div>
      </div>
    </div>`
  );
};

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element, i) => {
      if ((i + 1) % 10 === 0) {
        const languages = element.languages
          ? Object.values(element.languages).join(",")
          : "-";
        const currencies = element.currencies ? Object.values(element.currencies) : [];
        const stringMn = currencies.length
          ? currencies.map((element) => element.name + " " + element.symbol).join(", ")
          : "-";
        renderCard(element.flags.svg, languages, stringMn, element);
      }
    });
  });