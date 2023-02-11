
const authBtn = document.getElementById('open-auth-btn');
const modal = document.getElementById('auth-modal');
const closeBtns = modal.querySelectorAll('.close-btn');
const loginBtn = modal.querySelector('.login-btn')
const openCartBtn = document.getElementById('open-cart-btn')
const logoutBtn = document.getElementById('logout-btn')
const formControlClear = modal.querySelectorAll('.form-control')


const openModal = () => {
  // modal.style.display = 'block';
  modal.classList.add('d-block');


  setTimeout(() => {
    modal.classList.add('show')
  }, 200)
}

const closeModal = () => {

  modal.classList.remove('show');
  // formControlClear.value = '';


  setTimeout(() => {
    // modal.style.display = 'none'
    // modal.classList.add('d-none');
    modal.classList.remove('d-block');
  }, 500)

}

const login = () => {
  // authBtn.style.display = 'none'
  authBtn.classList.add('d-none');
  openCartBtn.classList.remove('d-none')
  logoutBtn.classList.remove('d-none')
  // openCartBtn.style.display = 'block'
  // logoutBtn.style.display = 'block'
  closeModal()
}

const logout = () => {
  authBtn.classList.remove('d-none');
  openCartBtn.classList.add('d-none')
  logoutBtn.classList.add('d-none')
}

const checkAuth = () => {//создаем ф-ю и смотрим есть ли данные в локалсторедже -localStorage
  //console.log(localStorage.getItem('auth'));//getItem(key) – получить данные по ключу key. из localStorage
  //console.log(JSON.parse(localStorage.getItem('auth')));//JSON.parse превращает данные из локалсторадж в обьект
  if (JSON.parse(localStorage.getItem('auth'))) {
    login()
  }
}

authBtn.addEventListener('click', () => {

  openModal()
})

// for (let i = 0; i < closeBtns.length; i++) {
//   console.log(closeBtns[i]);  Замена цикла for циклом forEach
// }
closeBtns.forEach((btn) => {//Одинаковые обработчики
  btn.addEventListener('click', () => {
    closeModal()

    formControlClear.forEach(function (item) {//отчистка инпутов
      item.value = "";
    });
  })
})

// closeBtns.forEach((btn) => {//Одинаковые обработчики
//   btn.addEventListener('click', closeModal)

// })

loginBtn.addEventListener('click', () => {

  const loginInput = modal.querySelector('#login-control')
  const passwordInput = modal.querySelector("#password-control")

  const user = {
    login: loginInput.value,
    password: passwordInput.value
  }

  localStorage.setItem('auth', JSON.stringify(user))//Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере.
  //setItem(key, value) – сохранить пару ключ/значение.в данном случае ключ назвали auth
  //JSON.stringify для преобразования объектов в JSON.(в строку)
  //Метод JSON.stringify(user) берёт объект и преобразует его в строку.     
  login();
})

logoutBtn.addEventListener('click', () => {

  localStorage.removeItem('auth')//localStorage.removeItem Удалите указанный элемент локального хранилища: удали ключ с именем auth

  logout();

})

checkAuth()