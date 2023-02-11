import { openModal, closeModal } from "./modals";
import { getData } from "./api";

export const authFunc = () => {

  const authBtn = document.getElementById('open-auth-btn');
  const modal = document.getElementById('auth-modal');
  const closeBtns = modal.querySelectorAll('.close-btn');
  const loginBtn = modal.querySelector('.login-btn')
  const openCartBtn = document.getElementById('open-cart-btn')
  const logoutBtn = document.getElementById('logout-btn')
  const formControlClear = modal.querySelectorAll('.form-control')
  const cartModal = document.getElementById('cart-modal');


  // const openModal = () => {
  //   // modal.style.display = 'block';
  //   modal.classList.add('d-block');


  //   setTimeout(() => {
  //     modal.classList.add('show')
  //   }, 200)
  // }

  // const closeModal = () => {

  //   modal.classList.remove('show');
  //   // formControlClear.value = '';


  //   setTimeout(() => {
  //     // modal.style.display = 'none'
  //     // modal.classList.add('d-none');
  //     modal.classList.remove('d-block');
  //   }, 500)
  // }

  function login() {
    // authBtn.style.display = 'none'
    authBtn.classList.add('d-none');
    openCartBtn.classList.remove('d-none');
    logoutBtn.classList.remove('d-none');
    // openCartBtn.style.display = 'block'
    // logoutBtn.style.display = 'block'
    closeModal(modal);
  }

  const logout = () => {
    authBtn.classList.remove('d-none');
    openCartBtn.classList.add('d-none')
    logoutBtn.classList.add('d-none')
  }

  const checkAuth = () => {//создаем ф-ю и смотрим есть ли данные в локалсторедже -localStorage
    //console.log(localStorage.getItem('auth'));//getItem(key) – получить данные по ключу key. из localStorage
    //console.log(JSON.parse(localStorage.getItem('auth')));//JSON.parse превращает данные из локалсторадж в обьект
    // if (JSON.parse(localStorage.getItem('auth'))) {
    //   login()
    // }

    const user = JSON.parse(localStorage.getItem('auth'))

    if (user) {
      getData('/profile').then((data) => {

        if ((data.login && data.login === user.login) &&//если data.login сущ-ет и равен введенным данным в базе данных ( "login": "admin")
          (data.password && data.password === user.password)//если data.login сущ-ет и равен введенным данным в базе данных ( "password": "1234")
        ) {

          login();
        }
      })
    }
  }

  authBtn.addEventListener('click', () => {

    openModal(modal)
  })

  // for (let i = 0; i < closeBtns.length; i++) {
  //   console.log(closeBtns[i]);  Замена цикла for циклом forEach
  // }
  closeBtns.forEach((btn) => {//Одинаковые обработчики
    btn.addEventListener('click', () => {
      closeModal(modal)

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

    getData('/profile').then((data) => {

      if ((data.login && data.login === user.login) &&//если data.login сущ-ет и равен введенным данным в базе данных ( "login": "admin")
        (data.password && data.password === user.password)//если data.login сущ-ет и равен введенным данным в базе данных ( "password": "1234")
      ) {
        // console.log("Успех");
        localStorage.setItem('auth', JSON.stringify(data))
        login();
      } else {
        alert('Вы ввели неверные данные')
      }
    })

    //localStorage.setItem('auth', JSON.stringify(user))//Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере.
    //setItem(key, value) – сохранить пару ключ/значение.в данном случае ключ назвали auth
    //JSON.stringify для преобразования объектов в JSON.(в строку)
    //Метод JSON.stringify(user) берёт объект и преобразует его в строку.     

  })

  logoutBtn.addEventListener('click', () => {

    localStorage.removeItem('auth')//localStorage.removeItem Удалите указанный элемент локального хранилища: удали ключ с именем auth

    logout();

  })

  openCartBtn.addEventListener('click', () => {
    openModal(cartModal)
  })

  checkAuth()
}