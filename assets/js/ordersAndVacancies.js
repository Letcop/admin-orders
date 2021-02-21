let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('.orders_body');
let ordersBtn = document.querySelector('.orders_btn');
let ordersPage = document.querySelector('.orders_page');
let vacancyPage = document.querySelector('.vacancy_page');
let vacanciesBtn = document.querySelector('.vacancies_btn');
let titleBtns = document.querySelectorAll('.title_btns div');
let myRegion = document.querySelector('.my_region');
let regionLists = document.querySelectorAll('.regions ul li');
let addActive = document.querySelectorAll('.add_active');
let moderationBtn = document.querySelector('.moderation_btn');
let activeOrdersBtn = document.querySelector('.active_btn');
let blockedBtn = document.querySelector('.blocked_btn');
let moderationList = document.querySelectorAll('.moderation_list');
let blockedOrder = document.querySelectorAll('.moderation_list .fa-window-close')
let activeModal = document.getElementById('activeModal');
let blockedModal = document.getElementById('blockedModal');
let addFile = document.getElementById('addFile');
let profession = document.querySelector('.profession');
let professionLists = document.querySelectorAll('.left_choose ul li');
let direction = document.querySelector('.direction');
let directionLists = document.querySelectorAll('.right_choose ul li');
let editOrders = document.querySelectorAll('td .edit');
let editModal = document.getElementById('editModal');
let closeEditing = document.querySelector('.close_editing');
let activedOrderBtn = document.querySelector('.actived_order');
let blockedOrderBtn = document.querySelector('.blocked_order');
let blockedText = document.querySelector('.bloced_page');
let blockedEditBtn = document.querySelector('.blocked_text .close_bloced_page');
let blockedTextList = document.querySelector('.blocked_text textarea');
let blockingMode = document.querySelectorAll('.blocked_text .blocking_mode div');
let userPage = document.querySelector('.user_page');
let userInfoOpen = document.querySelector('.modal_body .user big');
let saveBtn = document.querySelector('.buttons .save_btn');
let saveModal = document.querySelector('.modal_save');
let keySkills = document.querySelector('.key_skills input');
let addedKeys = document.querySelector('.added_keys');
let skillsList = document.querySelector('.key_skills_list');
let closeKeys = document.querySelector('.key_skills_list i');
let btnAddKeys = document.querySelector('.key_skills .addKeys');
let keySkillsList = document.querySelectorAll('.key_skills_list li');
let userEditWrapper = document.querySelector('.userEditWrapper');
let closeBlocedPage = document.querySelector('.close_bloced_page');
let blockingOrder = document.querySelector('.blocking_order');
let activeText = document.getElementById('activeText');
let blockingText = document.getElementById('blockingText');
let dataStatus = document.getElementById('dataStatus');
let noStatus = document.getElementById('noStatus');
// End orders keys

// Start vacancy keys

let titleBtnsVacancy = document.querySelectorAll('.title_btns_vacancy div');
let myRegionVacancy = document.querySelector('.regions_vacacy .my_region');
let regionVacancyLists = document.querySelectorAll('.regions_vacacy ul li');
let addActiveVacancy = document.querySelectorAll('.add_active_vacancy');
let blockedVacancy = document.querySelectorAll('.moderation_list_vacancy .blocked_vacancy')
let activeBtnVacancy = document.querySelector('.active_btn_vacancy');
let moderationBtnVacancy = document.querySelector('.moderation_btn_vacancy');
let blockedBtnVacancy = document.querySelector('.blocked_btn_vacancy');
let editVacancyBtns = document.querySelectorAll('.edit_vacancy')
let editModalVacancy = document.getElementById('editModalVacancy');
let professionVacancy = document.querySelector('.profession_vacancy');
let professionVacancyLists = document.querySelectorAll('.left_choose_vacancy ul li');
let addFileVacancy = document.getElementById('addFileVacancy');
let keyVacancySkills = document.querySelector('.key_skills_vacancy input');
let addedKeysVacancy = document.querySelector('.added_keys_vacancy');
let skillsListVacancy = document.querySelector('.key_skills_list_vacancy');
let closeKeysVacancy = document.querySelector('.key_skills_vacancy i');
let btnAddKeysVacancy = document.querySelector('.key_skills_vacancy .addKeysVacancy');
let keyVacancySkillsList = document.querySelectorAll('.key_skills_list_vacancy li');
let userInfoOpenVacancy = document.querySelector('.modal_body .userVacancy big');
let userVageVacancy = document.querySelector('.user_page_vacancy');
let closeEditingVacancy = document.querySelector('.close_editing_vacancy');
let activeTextVacancy = document.getElementById('activeTextVacancy');
let blockingTextVacancy = document.getElementById('blockingTextVacancy');
let dataStatusVacancy = document.getElementById('dataStatusVacancy');
let noStatusVacancy = document.getElementById('noStatusVacancy');
let saveVacancyBtn = document.querySelector('.save_vacancy_btn');
let removeVacancyBtn = document.querySelector('.remove_vacancy_btn');
let activedEditVacancy = document.querySelector('.actived_edit_vacancy');
let blockedEditVacancy = document.querySelector('.blocked_edit_vacancy');





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
    vacancyPage.style.display = 'block'
  });

  ordersBtn.addEventListener('click', () => {
    ordersBtn.classList.add('active_head');
    vacanciesBtn.classList.remove('active_head');
    ordersPage.style.display = 'block'
    vacancyPage.style.display = 'none'
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
      blockedText.style.display = 'flex'

      blockingOrder.addEventListener('click', () => {
        if(blockedTextList.value == '') {
          blockedTextList.style.border = '2px solid red'
        }else {
          blockedModal.style.display = 'flex'
          let blockedList =  blocked.parentElement.parentElement;
          blockedList.classList.add('blocked_list');
          blockedList.classList.remove('moderation_list');
          blockedList.classList.remove('added_active');
          setTimeout(function() {
            blocked.style.display = 'none';
            blockedList.style.display = 'none';
            blockedModal.style.display = 'none'
            blockedText.style.display = 'none'
            blockedTextList.style.border = 'none'
            blockedTextList.value = ''
            blockingText.style.display = 'inline-block'
            noStatus.style.display = 'none'
            blockedOrderBtn.style.display = 'none'
          }, 1500)}
      })

      

 blockingMode.forEach(text => {
  text.addEventListener('click', () => {
    blockedTextList.value = text.textContent;

  })
});
    })
  });
  
  
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
     activeText.style.display = 'inline-block'
     noStatus.style.display = 'none'
     blockingText.style.display = 'none'
     blockedOrderBtn.style.display = 'block'
     activedOrderBtn.style.display = 'none'
  });

  });

  // Модерация
  moderationBtn.addEventListener('click', () => {
    let activeList = document.querySelectorAll('.added_active');
    let moderationList = document.querySelectorAll('.moderation_list');
    let blockedList = document.querySelectorAll('.blocked_list');
    moderationList.forEach(moder => {
      moder.style.display = 'revert'
      noStatus.style.display = 'inline-block'
      blockedOrderBtn.style.display = 'inline-block'
      activedOrderBtn.style.display = 'inline-block'
      blockingText.style.display = 'none'
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
      blockingText.style.display = 'inline-block'
      dataStatus.style.display = 'inline-block'
      noStatus.style.display = 'none'
      blockedOrderBtn.style.display = 'none'
      activeText.style.display = 'none'
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
  });

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

// Блокировать

blockedOrderBtn.addEventListener('click', () => {
  blockedText.style.display = 'flex'
  activedOrderBtn.style.display = 'inline-block'
   noStatus.style.display = 'none'
   activeText.style.display = 'none'
   blockingText.style.display = 'inline-block'
   blockedOrderBtn.style.display = 'none'
});

blockedEditBtn.addEventListener('click', () => {
  blockedText.style.display = 'none'
});

closeBlocedPage.addEventListener('click', () => {
  blockedText.style.display = 'none'
});

userInfoOpen.addEventListener('mouseover', () => {
  userPage.style.display = 'block'
});
userInfoOpen.addEventListener('mouseout', () => {
  userPage.style.display = 'none'
});

userInfoOpen.addEventListener('click', () => {
  userEditWrapper.style.display = 'flex'
});

saveVacancyBtn.addEventListener('click', () => {
  // saveModal.style.display = 'flex'
  // alert()
})


// Добавить ключевые навыки

keySkills.addEventListener('click', () => {
  skillsList.style.display = 'block';
  keySkills.nextElementSibling.classList.add('key_skills_class');
  keySkills.classList.add('key_skills_input');
});

keySkillsList.forEach(elem => {
  elem.addEventListener('click', () => {
    skillsList.style.display = 'none'
    keySkills.classList.remove('key_skills_input');

    let div = document.createElement('div');
    addedKeys.append(div)
    div.textContent = elem.innerText

    let i = document.createElement('i');
    i.className = 'fas fa-times-circle' 
    div.append(i);

    let removeKey = document.querySelectorAll('.added_keys i')

    removeKey.forEach(ithis => {
      ithis.addEventListener('click', () => {
        ithis.parentElement.remove()
      })
    })

  })
  
})

closeKeys.addEventListener('click', () => {
  skillsList.style.display = 'none'
  keySkills.classList.remove('key_skills_input');
});

keySkills.addEventListener('keyup', () => {
  btnAddKeys.style.display = 'block';
  
})

  btnAddKeys.addEventListener('click', () => {


  let div1 = document.createElement('div');
  addedKeys.append(div1);
  div1.textContent = keySkills.value

  let i = document.createElement('i');
    i.className = 'fas fa-times-circle' 
    div1.append(i);
  
  skillsList.style.display = 'none'
  keySkills.classList.remove('key_skills_input');

  keySkills.value = ''
  btnAddKeys.style.display = 'none';

  let removeKey = document.querySelectorAll('.added_keys i')

  removeKey.forEach(ithis => {
    ithis.addEventListener('click', () => {
      ithis.parentElement.remove()
    })
  })

 });

 activedOrderBtn.addEventListener('click', () => {
  activedOrderBtn.style.display = 'none'
   noStatus.style.display = 'none'
   activeText.style.display = 'inline-block'
   blockingText.style.display = 'none'
   blockedOrderBtn.style.display = 'inline-block'
 });

})();




// Start vacancy page

(function handleVacancyPage() {

  for(let i = 0; i < titleBtnsVacancy.length; i++) {
    titleBtnsVacancy[i].onclick = function() {
      let btn = titleBtnsVacancy[0];

      while(btn) {
        if(btn.tagName === 'DIV') {
          btn.classList.remove('active_vacancy_btn')
        }
        btn = btn.nextSibling
      }
      this.classList.add('active_vacancy_btn')
    }
  }


    // Добавить регион
    let clickOpen4;
    myRegionVacancy.addEventListener('click', () => {
  
      if(clickOpen4 == 1) {
        myRegionVacancy.nextElementSibling.style.display = 'none';
        myRegionVacancy.children[0].classList.remove('opened_region');
        return clickOpen4 = 0;
      } else {
        myRegionVacancy.children[0].classList.add('opened_region');
        myRegionVacancy.nextElementSibling.style.display = 'block';
    
       
        regionVacancyLists.forEach(elem => {
          elem.addEventListener('click', () => {
            myRegionVacancy.children[0].value = elem.innerText;
            myRegionVacancy.nextElementSibling.style.display = 'none';
            myRegionVacancy.children[0].classList.remove('opened_region');
          })
        })
  
        return clickOpen4 = 1;
      }
      
    });

      // Добавить активный для вакансии
  addActiveVacancy.forEach(elem => {
    elem.addEventListener('click', () => {
      let moderation = elem.parentElement.parentElement;
      let closeModal = activeModal.children[0].children[0]

      moderation.classList.add('added_active_vacancy');
      moderation.classList.remove('moderation_list_vacancy');
      activeModal.style.display = 'flex'

      
      setTimeout(function() {
        elem.style.display = 'none';
        moderation.style.display = 'none'
        activeModal.style.display = 'none'
      }, 1500)
      
    })
  });

    //  Заблокированые для вакансии

    blockedVacancy.forEach(blocked => {
      blocked.addEventListener('click', () => {
        blockedText.style.display = 'flex'
  
        blockingOrder.addEventListener('click', () => {
          if(blockedTextList.value == '') {
            blockedTextList.style.border = '2px solid red'
          }
          else {
            blockedModal.style.display = 'flex'
            let blockedList =  blocked.parentElement.parentElement;
            blockedList.classList.add('blocked_list_vacancy');
            blockedList.classList.remove('moderation_list_vacancy');
            blockedList.classList.remove('added_active_vacancy');
            setTimeout(function() {
              blocked.style.display = 'none';
              blockedList.style.display = 'none';
              blockedModal.style.display = 'none'
              blockedText.style.display = 'none'
              blockedTextList.style.border = 'none'
              blockedTextList.value = ''
              blockingText.style.display = 'inline-block'
              noStatus.style.display = 'none'
              blockedOrderBtn.style.display = 'none'
            }, 1500)
          }
        })
  
        
      })
    });

  // Активные вакансии
  activeBtnVacancy.addEventListener('click', () => {
    let activeList = document.querySelectorAll('.added_active_vacancy');
    let moderationList = document.querySelectorAll('.moderation_list_vacancy');
    let blockedList = document.querySelectorAll('.blocked_list_vacancy');

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
     activeTextVacancy.style.display = 'inline-block'
     noStatusVacancy.style.display = 'none'
     blockingTextVacancy.style.display = 'none'
     blockedEditVacancy.style.display = 'block'
     activedEditVacancy.style.display = 'none'
  });

  });

    // Модерация вакансии
    moderationBtnVacancy.addEventListener('click', () => {
      let activeList = document.querySelectorAll('.added_active_vacancy');
      let moderationList = document.querySelectorAll('.moderation_list_vacancy');
      let blockedList = document.querySelectorAll('.blocked_list_vacancy');
      moderationList.forEach(moder => {
        moder.style.display = 'revert'
        noStatusVacancy.style.display = 'inline-block'
        blockedEditVacancy.style.display = 'inline-block'
        activedEditVacancy.style.display = 'inline-block'
        blockingTextVacancy.style.display = 'none'
      });
  
      activeList.forEach(active => {
        active.style.display = 'none'
      });
  
      blockedList.forEach(blocked => {
        blocked.style.display = 'none'
      });
  
    });

      // Заблокированые вакансии
  blockedBtnVacancy.addEventListener('click', () => {
    let activeList = document.querySelectorAll('.added_active_vacancy');
    let moderationList = document.querySelectorAll('.moderation_list_vacancy');
    let blockedList = document.querySelectorAll('.blocked_list_vacancy');
    blockedList.forEach(blocked => {
      blocked.style.display = 'revert'
      blocked.children[3].children[0].style.display = 'block'
      blockingTextVacancy.style.display = 'inline-block'
      dataStatusVacancy.style.display = 'inline-block'
      noStatusVacancy.style.display = 'none'
      blockedEditVacancy.style.display = 'none'
      activeTextVacancy.style.display = 'none'
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
  });

  editVacancyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      editModalVacancy.style.display = 'flex'
    })
  });


  // Добавить профессия для вакансии

let clickOpen5;
professionVacancy.addEventListener('click', () => {

  if(clickOpen5 == 1) {
    professionVacancy.nextElementSibling.style.display = 'none';
    professionVacancy.children[0].classList.remove('opened_region', 'boxShadow');
    professionVacancy.nextElementSibling.classList.remove('boxShadow');
    return clickOpen5 = 0;
  } else {
    professionVacancy.children[0].classList.add('opened_region', 'boxShadow');
    professionVacancy.nextElementSibling.style.display = 'block';
    professionVacancy.nextElementSibling.classList.add('boxShadow');
   
    professionVacancyLists.forEach(elem => {
      elem.addEventListener('click', () => {
        professionVacancy.children[0].value = elem.innerText;
        professionVacancy.nextElementSibling.style.display = 'none';
        professionVacancy.children[0].classList.remove('opened_region', 'boxShadow');
        professionVacancy.nextElementSibling.classList.remove('boxShadow');
      })
    })

    return clickOpen5 = 1;
  }
  
});


  // Добавить файл
  addFileVacancy.addEventListener('change', (e) => {
    let addedFile = document.querySelector('.added_file_vacancy');
    addedFile.textContent = e.target.files[0].name
    addFileVacancy.previousElementSibling.innerText = 'Файл добавлен';
    addFileVacancy.previousElementSibling.style.color = '#00cf4d'

    addFileVacancy.nextElementSibling.classList.add('fa-check-circle')
  });

  // Добавить ключевые навыки для вакансии

keyVacancySkills.addEventListener('click', () => {
  skillsListVacancy.style.display = 'block';
  keyVacancySkills.nextElementSibling.classList.add('key_skills_class');
  keyVacancySkills.classList.add('key_skills_input');
});

keyVacancySkillsList.forEach(elem => {
  elem.addEventListener('click', () => {
    skillsListVacancy.style.display = 'none'
    keyVacancySkills.classList.remove('key_skills_input');

    let div = document.createElement('div');
    addedKeysVacancy.append(div)
    div.textContent = elem.innerText

    let i = document.createElement('i');
    i.className = 'fas fa-times-circle' 
    div.append(i);

    let removeKeyVacancy = document.querySelectorAll('.added_keys_vacancy i')

    removeKeyVacancy.forEach(ithis => {
      ithis.addEventListener('click', () => {
        ithis.parentElement.remove()
      })
    })

  })
  
})

closeKeysVacancy.addEventListener('click', () => {
  skillsListVacancy.style.display = 'none'
  keyVacancySkills.classList.remove('key_skills_input');
});

keyVacancySkills.addEventListener('keyup', () => {
  btnAddKeysVacancy.style.display = 'block';
  
})

  btnAddKeysVacancy.addEventListener('click', () => {


  let div1 = document.createElement('div');
  addedKeysVacancy.append(div1);
  div1.textContent = keyVacancySkills.value

  let i = document.createElement('i');
    i.className = 'fas fa-times-circle' 
    div1.append(i);
  
  skillsListVacancy.style.display = 'none'
  keyVacancySkills.classList.remove('key_skills_input');

  keyVacancySkills.value = ''
  btnAddKeysVacancy.style.display = 'none';

  let removeKey = document.querySelectorAll('.added_keys_vacancy i')

  removeKey.forEach(ithis => {
    ithis.addEventListener('click', () => {
      ithis.parentElement.remove()
    })
  })

 });

 blockingMode.forEach(text => {
   text.addEventListener('click', () => {
     blockedTextList.value = text.textContent
   })
 });

 activedEditVacancy.addEventListener('click', () => {
  activedEditVacancy.style.display = 'none'
   noStatusVacancy.style.display = 'none'
   activeTextVacancy.style.display = 'inline-block'
   blockingTextVacancy.style.display = 'none'
   blockedEditVacancy.style.display = 'inline-block'
 });

 blockedEditVacancy.addEventListener('click', () => {
  blockedTextVacancy.style.display = 'flex'
  activedEditVacancy.style.display = 'inline-block'
   noStatusVacancy.style.display = 'none'
   activeTextVacancy.style.display = 'none'
   blockingTextVacancy.style.display = 'inline-block'
   blockedEditVacancy.style.display = 'none'
});

 userInfoOpenVacancy.addEventListener('mouseover', () => {
   userVageVacancy.style.display = 'block'
 });

 userInfoOpenVacancy.addEventListener('mouseout', () => {
   userVageVacancy.style.display = 'none'
 });

 
 userInfoOpenVacancy.addEventListener('click', () => {
  userEditWrapper.style.display = 'flex'
});

closeEditingVacancy.addEventListener('click', () => {
  editModalVacancy.style.display = 'none'
})
})()
