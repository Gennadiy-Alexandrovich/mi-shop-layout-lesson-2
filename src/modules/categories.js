import { getData } from "./api";


export const categoriesFunc = () => {
  const container = document.getElementById('categories-container')

  const render = (data) => {
    data.forEach((item) => {
      container.insertAdjacentHTML('beforeend', `
      <div class="col col-12 col-md-6 col-lg-4 mb-3">
              <a href="/catalog.html?id=${item.id}" class="card-link">
                <div class="card">
                  <img src="${item.preview}" class="card-img-top" alt="phones">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                  </div>
                </div>
              </a>
            </div>`)
    })
  }

  // fetch('http://localhost:3001/categories')//метод fetch работает с серверными запросами(делает запрос на сервер БД)
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })    // передаем в метод fetch мин. один параметр,делает запрос к БД и получает данные через какое-то время
  //полученные данные обрабатываются методом then, Данные приходят в виде обькета response
  // обьект response преобразуем в  массив данных методом  JSON()
  //console.log(response.json());//получаем Promise {<pending>}
  //return response.json() получаем Promise который обрабатывае следующим then с  данными (data) .then((data) =>
  // console.log(data) получаем данные ((3) [{…}, {…}, {…}]) которые можно обрабатывать напр.поместить в ф-ю
  getData('/categories')
    .then((data) => {
      render(data);
    })
    .catch((error) => {
      console.error('Произошла ошибка');
    })
}