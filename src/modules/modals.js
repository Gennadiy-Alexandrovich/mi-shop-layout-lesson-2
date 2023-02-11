export const openModal = (modal) => {
  // const layout = document.createElement('div')//создаем перем-ю и в неё записываем div
  // layout.classList.add('modal-backdrop')//в div ддобавляем два класса
  // layout.classList.add('fade')
  // document.body.append(layout)//добавляем созданный div в документ body
  document.body.insertAdjacentHTML('beforeend', `
  <div class="modal-backdrop fade"></div>
  `)//добавляем созданный div в документ body


  modal.classList.add('d-block');

  setTimeout(() => {
    const layout = document.querySelector('.modal-backdrop')
    layout.classList.add('show')
    modal.classList.add('show')
  }, 200)
}

export const closeModal = (modal) => {
  const layout = document.querySelector('.modal-backdrop')
  modal.classList.remove('show');
  layout && layout.classList.remove('show')

  setTimeout(() => {
    modal.classList.remove('d-block');
    layout && layout.remove()
  }, 500)

}