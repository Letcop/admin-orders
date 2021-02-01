let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('.orders_body');
let ordersBtn = document.querySelector('.orders_btn');
let ordersPage = document.querySelector('.orders_page');
let vacanciesBtn = document.querySelector('.vacancies_btn');
let titleBtns = document.querySelectorAll('.title_btns div');
let myRegion = document.querySelector('.my_region');
let regionLists = document.querySelectorAll('.regions ul li');
let addActive = document.querySelectorAll('.add_active');
let moderationBtn = document.querySelector('.moderation_btn');
let activeOrdersBtn = document.querySelector('.active_btn');
let blockedBtn = document.querySelector('.blocked_btn');
let moderationList = document.querySelectorAll('.moderation_list');
let blockedOrder = document.querySelectorAll('.fa-window-close')
let activeModal = document.getElementById('activeModal');
let blockedModal = document.getElementById('blockedModal');
let addFile = document.getElementById('addFile');
let profession = document.querySelector('.profession');
let professionLists = document.querySelectorAll('.left_choose ul li');
let direction = document.querySelector('.direction');
let directionLists = document.querySelectorAll('.right_choose ul li');
let editOrders = document.querySelectorAll('td .edit');
let editModal = document.getElementById('editModal');
let closeEditing = document.querySelector('.close_editing')

// start chat
showChat.addEventListener('click', () => {
  chatText.style.display = 'none'
});

let click;
chat.addEventListener('click', () => {
  if(click == 0) {
  chatText.style.display = 'none'
  return click = 1;
  }
  else {
  chatText.style.display = 'block'
  return click = 0;
  }
});
// End chat


// Start orders page
(function handleOrdersPage() {
  vacanciesBtn.addEventListener('click', () => {
    vacanciesBtn.classList.add('active_head');
    ordersBtn.classList.remove('active_head');
    ordersPage.style.display = 'none'
  });

  ordersBtn.addEventListener('click', () => {
    ordersBtn.classList.add('active_head');
    vacanciesBtn.classList.remove('active_head');
    ordersPage.style.display = 'block'
  });



  for(let i = 0; i < titleBtns.length; i++) {
    titleBtns[i].onclick = function() {
      let btn = titleBtns[0];

      while(btn) {
        if(btn.tagName === 'DIV') {
          btn.classList.remove('active_orders_btn')
        }
        btn = btn.nextSibling
      }
      this.classList.add('active_orders_btn')
    }
  }


  // Добавить регион

  
    let clickOpen;
    myRegion.addEventListener('click', () => {
  
      if(clickOpen == 1) {
        myRegion.nextElementSibling.style.display = 'none';
        myRegion.children[0].classList.remove('opened_region');
        return clickOpen = 0;
      } else {
        myRegion.children[0].classList.add('opened_region');
        myRegion.nextElementSibling.style.display = 'block';
    
       
        regionLists.forEach(elem => {
          elem.addEventListener('click', () => {
            myRegion.children[0].value = elem.innerText;
            myRegion.nextElementSibling.style.display = 'none';
            myRegion.children[0].classList.remove('opened_region');
          })
        })
  
        return clickOpen = 1;
      }
      
    });

  // Добавить активный

  addActive.forEach(elem => {
    elem.addEventListener('click', () => {
      let moderation = elem.parentElement.parentElement;
      let closeModal = activeModal.children[0].children[0]

      moderation.classList.add('added_active');
      moderation.classList.remove('moderation_list');
      activeModal.style.display = 'flex'


      closeModal.onclick = function() {
        activeModal.style.display = 'none'
      }
      
      setTimeout(function() {
        elem.style.display = 'none';
        moderation.style.display = 'none'
        activeModal.style.display = 'none'
      }, 1500)
      
    })
  });

  
  //  Заблокированые 

  blockedOrder.forEach(blocked => {
    blocked.addEventListener('click', () => {
      blockedModal.style.display = 'flex'

      let blockedList =  blocked.parentElement.parentElement;
      blockedList.classList.add('blocked_list');
      blockedList.classList.remove('moderation_list');
      blockedList.classList.remove('added_active');
      setTimeout(function() {
        blocked.style.display = 'none';
        blockedList.style.display = 'none';
        blockedModal.style.display = 'none'
      }, 1500)
    })
  })
  
  
// Активные заказы
  activeOrdersBtn.addEventListener('click', () => {
    let activeList = document.querySelectorAll('.added_active');
    let moderationList = document.querySelectorAll('.moderation_list');
    let blockedList = document.querySelectorAll('.blocked_list');

    moderationList.forEach(moder => {
     moder.style.display = 'none'
   });
   
   blockedList.forEach(blocked => {
    blocked.style.display = 'none'
  });

   activeList.forEach(active => {
    active.style.display = 'revert'
     active.children[3].children[2].style.display = 'block'
     active.children[3].children[0].style.display = 'none'
  });

  });

  // Модерация
  moderationBtn.addEventListener('click', () => {
    let activeList = document.querySelectorAll('.added_active');
    let moderationList = document.querySelectorAll('.moderation_list');
    let blockedList = document.querySelectorAll('.blocked_list');
    moderationList.forEach(moder => {
      moder.style.display = 'revert'
    });

    activeList.forEach(active => {
      active.style.display = 'none'
    });

    blockedList.forEach(blocked => {
      blocked.style.display = 'none'
    });

  });

  // Заблокированые заказы
  blockedBtn.addEventListener('click', () => {
    let activeList = document.querySelectorAll('.added_active');
    let moderationList = document.querySelectorAll('.moderation_list');
    let blockedList = document.querySelectorAll('.blocked_list');
    blockedList.forEach(blocked => {
      blocked.style.display = 'revert'
      blocked.children[3].children[0].style.display = 'block'
    });

    moderationList.forEach(moder => {
      moder.style.display = 'none'
    });

    activeList.forEach(active => {
      active.style.display = 'none'
    });

  });

  editOrders.forEach(edit => {
    edit.addEventListener('click', () => {
      editModal.style.display = 'flex'
    })
  });

  closeEditing.addEventListener('click', () => {
    editModal.style.display = 'none'
  })

  // Добавить файл
  addFile.addEventListener('change', (e) => {
    let addedFile = document.querySelector('.added_file');
    addedFile.textContent = e.target.files[0].name
    addFile.previousElementSibling.innerText = 'Файл добавлен';
    addFile.previousElementSibling.style.color = '#00cf4d'

    addFile.nextElementSibling.classList.add('fa-check-circle')
  });


// Добавить профессия

let clickOpen2;
profession.addEventListener('click', () => {

  if(clickOpen2 == 1) {
    profession.nextElementSibling.style.display = 'none';
    profession.children[0].classList.remove('opened_region', 'boxShadow');
    profession.nextElementSibling.classList.remove('boxShadow');
    return clickOpen2 = 0;
  } else {
    profession.children[0].classList.add('opened_region', 'boxShadow');
    profession.nextElementSibling.style.display = 'block';
    profession.nextElementSibling.classList.add('boxShadow');
   
    professionLists.forEach(elem => {
      elem.addEventListener('click', () => {
        profession.children[0].value = elem.innerText;
        profession.nextElementSibling.style.display = 'none';
        profession.children[0].classList.remove('opened_region', 'boxShadow');
        profession.nextElementSibling.classList.remove('boxShadow');
      })
    })

    return clickOpen2 = 1;
  }
  
});

let clickOpen3;
direction.addEventListener('click', () => {

  if(clickOpen3 == 1) {
    direction.nextElementSibling.style.display = 'none';
    direction.children[0].classList.remove('opened_region', 'boxShadow');
    direction.nextElementSibling.classList.remove('boxShadow');
    return clickOpen3 = 0;
  } else {
    direction.children[0].classList.add('opened_region', 'boxShadow');
    direction.nextElementSibling.style.display = 'block';
    direction.nextElementSibling.classList.add('boxShadow');
   
    directionLists.forEach(elem => {
      elem.addEventListener('click', () => {
        direction.children[0].value = elem.innerText;
        direction.nextElementSibling.style.display = 'none';
        direction.children[0].classList.remove('opened_region', 'boxShadow');
        direction.nextElementSibling.classList.remove('boxShadow');
      })
    })

    return clickOpen3 = 1;
  }
  
});

})();
