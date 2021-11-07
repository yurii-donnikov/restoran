//document.getElementsByClassName('page').innerHTML = 'qwe'




class Restaurant {
    constructor() {
      this.departments = [
        {
          number: 1,
          name: 'hall'
        },
        {
          number: 2,
          name: 'cook'
        },
        {
          number: 4,
          name: 'dessert cook'
        },
      ];
      this.employees = [
        {
          name:'maks',
          position: 'barman',
          isLeader: false,
          salary: 100,
          isWorks: true,
          department: 1,
        },
        {
          name:'oleg',
          position: 'ofitsiant',
          isLeader: false,
          salary: 100,
          isWorks: false,
          department: 1,
        },
        {
          name:'marina',
          position: 'ofitsiant',
          isLeader: false,
          salary: 100,
          isWorks: true,
          department: 1,
        },
        {
          name:'rita',
          position: 'ofitsiant',
          isLeader: false,
          salary: 100,
          isWorks: true,
          department: 1,
        },
        {
          name:'semen',
          position: 'ofitsiant',
          isLeader: true,
          salary: 40,
          isWorks: true,
          department: 1,
        },
        {
          name:'ivan',
          position: 'cook',
          isLeader: false,
          salary: 100,
          isWorks: true,
          department: 2,
        },
        {
          name:'mari',
          position: 'assistant-cook',
          isLeader: false,
          salary: 100,
          isWorks: true,
          department: 2,
        },
        {
          name:'anna',
          position: 'assistant-cook',
          isLeader: false,
          salary: 110,
          isWorks: true,
          department: 2,
        },
        {
          name:'dima',
          position: 'cleaner',
          isLeader: false,
          salary: 100,
          isWorks: true,
          department: 2,
        },
        {
          name:'igor',
          position: 'dessert cook',
          isLeader: false,
          salary: 150,
          isWorks: false,
          department: 4,
        },
        {
          name:'Lexa',
          position: 'dessert cook',
          isLeader: false,
          salary: 120,
          isWorks: true,
          department: 4,
        }
      ]
    }

    sumSalary(callback){
      let result = {};
      if(this.departments.length && this.employees.length) {
        this.employees.forEach((employee) => {
          if(callback(employee)){
            if(result[employee.department]) {
              result[employee.department] += employee.salary;
            } else {
              result[employee.department] = employee.salary;
            }
          }
        })
        return result;
      }
      return null;
    }

    averageSalary(callback){
      let result = 0;
      let count = 0;
      if(this.departments.length && this.employees.length) {
        this.employees.forEach((employee) => {
          if(callback(employee)){
            count++;
            result += employee.salary;
          }
        })
        return result/count;
      }
      return null;
    }

    salaryMinToMax(callback){
      let result = {};
      if(this.departments.length && this.employees.length) {
        this.departments.forEach((department) => {
          result[department.number] = {};
          this.employees.forEach((employee) => {
            if(callback(employee) && department.number === employee.department){
                if(result[department.number][employee.position]){
                  if(result[department.number][employee.position].min > employee.salary){
                    result[department.number][employee.position].min = employee.salary;
                  }
                  if(result[department.number][employee.position].max < employee.salary){
                    result[department.number][employee.position].max = employee.salary;
                  }
                } else {
                  result[department.number][employee.position] = {};
                  result[department.number][employee.position].min = employee.salary;
                  result[department.number][employee.position].max = employee.salary;
                }
            }
          })
          if(Object.keys(result[department.number]).length === 0){
            delete result[department.number];
          }
        })
        return result;
      }
      return null;
    }

    amountEmployee (callback) {
      let result = 0;
      if(this.departments.length && this.employees.length) {
        this.employees.forEach((employee) => {
          if(callback(employee)) {
            result++;
          }
        })
        return result;
      }
      return null;
    }

    departmentLeader(callback){
        let leader = [];
        let notLeader = [];
        if(this.departments.length && this.employees.length) {
          this.employees.forEach((employee) => {
            if(employee.isLeader) {
                leader.push(employee.department);
            }
            if(callback(employee)){
                notLeader.push(employee.department);
            }
          })
          if(leader.toString() === notLeader.toString()) {
            return leader;
          }
          leader.forEach((item) => {
            for(let i = 0; i < notLeader.length; i++){
              if(item === notLeader[i]){
                notLeader.splice(i, 1);
                i--;
              }
            }
          })
          for(let i = 1; i < notLeader.length; i++){
            if(notLeader[i] === notLeader[i - 1]){
              notLeader.splice(i, 1);
              i--;
            }
          }
          return notLeader;
        }
        return null;
    }
  }
  let restaurant = new Restaurant()










//



  let mainBlock = document.getElementsByClassName('mainBlock')[0];
  let cardBlock = document.createElement('div')
  let buttonAddCard = document.createElement('div')
  buttonAddCard.className = 'buttonAddCard'
  buttonAddCard.innerText = 'add card'
  cardBlock.className = 'cardBlock'
  mainBlock.appendChild(cardBlock)
  mainBlock.appendChild(buttonAddCard)
  let changeEmployee;
  let employeeCard
  let itemBlockInfo
  let itemInfo
  let item
  let buttonDelete
  let isFlag = false;

  let myWindow = mainBlock.appendChild(document.createElement('div'))
  myWindow.className = 'myWindow'
  let backWindow = myWindow.appendChild(document.createElement('div'))
  backWindow.className = 'backWindow'
  let modalWindow = myWindow.appendChild(document.createElement('div'))
  modalWindow.className = 'modalWindow'
  for(let i in restaurant.employees[0]) {
   let input = document.createElement('input');
   input.type = 'text';
   input.placeholder = i;
   input.className = 'inputInfo'
  //  input.className = `input_${i}`
   modalWindow.appendChild(input)
  }
  let buttonSave = modalWindow.appendChild(document.createElement('div'))
  buttonSave.innerText = 'SAVE'
  buttonSave.className = 'buttonSave'




function createCard () {
  restaurant.employees.forEach((employee) => {
    employeeCard = cardBlock.appendChild(document.createElement('div'))
    employeeCard.className = 'employeeCard'

    for(let i in employee) {
      itemBlockInfo = employeeCard.appendChild(document.createElement('div'));
      itemBlockInfo.className = 'itemBlockInfo'
        item = itemBlockInfo.appendChild(document.createElement('div'));
        itemInfo = itemBlockInfo.appendChild(document.createElement('div'));
        item.innerHTML = i
        itemInfo.innerHTML = employee[i]
        itemInfo.className = i;
    }


    let names = document.createElement('div')
    names.innerText = 'change'
    changeEmployee = employeeCard.appendChild(names).className = 'changeEmployee';
    let deleteBtn = document.createElement('div');
    deleteBtn.innerText = 'delete'
    deleteBtn.className = 'buttonDelete'
    buttonDelete = employeeCard.appendChild(deleteBtn)
  })
}
createCard ()





  let j




  let parent
  window.addEventListener('load', () => {
    // createCard()
    windowLoad()

  })
let evnt
  function windowLoad () {
    for(let i = 0; i < document.getElementsByClassName('cardBlock')[0].children.length; i++){

      document.getElementsByClassName(changeEmployee)[i].addEventListener('click',
         function () {
           myWindow.style = `display: block`;
           evnt = event.target
           isFlag = true;
           j = i
         }
      )


      document.getElementsByClassName('buttonDelete')[i].addEventListener('click', function () {

        // document.getElementsByClassName()
        event.target.parentNode.remove()
          //document.getElementsByClassName('cardBlock')[0].removeChild(event.target.parentNode)


          windowLoad()
         }
      )
     }
  }

buttonAddCard.addEventListener('click', () => {
  console.log(isFlag)
  j = true;
  myWindow.style = `display: block`;
})









  buttonSave.addEventListener('click', () => {
    //console.log(j)
    if(j !== undefined){
      changeCard()
    }
 })



  backWindow.addEventListener('click', () => {
    for(let i = 0; i < document.getElementsByClassName('inputInfo').length; i++){
      document.getElementsByClassName('inputInfo')[i].value = '';
    }
    isFlag = false;
    myWindow.style = `display: none`;
  })



  let elem
  function changeCard () {
  //  console.log(123)
    let elemCard = document.getElementsByClassName('inputInfo')
    if(isFlag){
      let mas = []
      for(let i = 0; i < elemCard.length; i++) {
        if(elemCard[i].value !== '') {
          // for (let ind in restaurant.employees[j]) {
          //   mas.push(ind)
          // }
          let mm = elemCard[i].placeholder
          // restaurant.employees[j].mas[i] = elemCard[i].value
          restaurant.employees[j][mm] = elemCard[i].value
          console.log(restaurant.employees[j])

          //console.log(restaurant.employees[j])


           evnt.parentElement.children[i].children[1].innerText = elemCard[i].value
           elemCard[i].value = ''

        }
      }
      flag = false;
    } else {
      for(let i = 0; i < elemCard.length; i++) {
        if(elemCard[i].value !== '') {
          console.log(elemCard[i].value)
        }
      }
    //  console.log(12344)
    }
    myWindow.style = `display: none`
  }



























//document.getElementsByClassName('page').innerHTML = 'qwe'




class Restaurant {
  constructor() {
    this.departments = [
      {
        number: 1,
        name: 'hall'
      },
      {
        number: 2,
        name: 'cook'
      },
      {
        number: 4,
        name: 'dessert cook'
      },
    ];
    this.employees = [
      {
        name:'maks',
        position: 'barman',
        isLeader: false,
        salary: 100,
        isWorks: true,
        department: 1,
      },
      {
        name:'oleg',
        position: 'ofitsiant',
        isLeader: false,
        salary: 100,
        isWorks: false,
        department: 1,
      },
      {
        name:'marina',
        position: 'ofitsiant',
        isLeader: false,
        salary: 100,
        isWorks: true,
        department: 1,
      },
      {
        name:'rita',
        position: 'ofitsiant',
        isLeader: false,
        salary: 100,
        isWorks: true,
        department: 1,
      },
      {
        name:'semen',
        position: 'ofitsiant',
        isLeader: true,
        salary: 40,
        isWorks: true,
        department: 1,
      },
      {
        name:'ivan',
        position: 'cook',
        isLeader: false,
        salary: 100,
        isWorks: true,
        department: 2,
      },
      // {
      //   name:'mari',
      //   position: 'assistant-cook',
      //   isLeader: false,
      //   salary: 100,
      //   isWorks: true,
      //   department: 2,
      // },
      // {
      //   name:'anna',
      //   position: 'assistant-cook',
      //   isLeader: false,
      //   salary: 110,
      //   isWorks: true,
      //   department: 2,
      // },
      // {
      //   name:'dima',
      //   position: 'cleaner',
      //   isLeader: false,
      //   salary: 100,
      //   isWorks: true,
      //   department: 2,
      // },
      // {
      //   name:'igor',
      //   position: 'dessert cook',
      //   isLeader: false,
      //   salary: 150,
      //   isWorks: false,
      //   department: 4,
      // },
      // {
      //   name:'Lexa',
      //   position: 'dessert cook',
      //   isLeader: false,
      //   salary: 120,
      //   isWorks: true,
      //   department: 4,
      // }
    ]
  }

  sumSalary(callback){
    let result = {};
    if(this.departments.length && this.employees.length) {
      this.employees.forEach((employee) => {
        if(callback(employee)){
          if(result[employee.department]) {
            result[employee.department] += employee.salary;
          } else {
            result[employee.department] = employee.salary;
          }
        }
      })
      return result;
    }
    return null;
  }

  averageSalary(callback){
    let result = 0;
    let count = 0;
    if(this.departments.length && this.employees.length) {
      this.employees.forEach((employee) => {
        if(callback(employee)){
          count++;
          result += employee.salary;
        }
      })
      return result/count;
    }
    return null;
  }

  salaryMinToMax(callback){
    let result = {};
    if(this.departments.length && this.employees.length) {
      this.departments.forEach((department) => {
        result[department.number] = {};
        this.employees.forEach((employee) => {
          if(callback(employee) && department.number === employee.department){
            if(result[department.number][employee.position]){
              if(result[department.number][employee.position].min > employee.salary){
                result[department.number][employee.position].min = employee.salary;
              }
              if(result[department.number][employee.position].max < employee.salary){
                result[department.number][employee.position].max = employee.salary;
              }
            } else {
              result[department.number][employee.position] = {};
              result[department.number][employee.position].min = employee.salary;
              result[department.number][employee.position].max = employee.salary;
            }
          }
        })
        if(Object.keys(result[department.number]).length === 0){
          delete result[department.number];
        }
      })
      return result;
    }
    return null;
  }

  amountEmployee (callback) {
    let result = 0;
    if(this.departments.length && this.employees.length) {
      this.employees.forEach((employee) => {
        if(callback(employee)) {
          result++;
        }
      })
      return result;
    }
    return null;
  }

  departmentLeader(callback){
    let leader = [];
    let notLeader = [];
    if(this.departments.length && this.employees.length) {
      this.employees.forEach((employee) => {
        if(employee.isLeader) {
          leader.push(employee.department);
        }
        if(callback(employee)){
          notLeader.push(employee.department);
        }
      })
      if(leader.toString() === notLeader.toString()) {
        return leader;
      }
      leader.forEach((item) => {
        for(let i = 0; i < notLeader.length; i++){
          if(item === notLeader[i]){
            notLeader.splice(i, 1);
            i--;
          }
        }
      })
      for(let i = 1; i < notLeader.length; i++){
        if(notLeader[i] === notLeader[i - 1]){
          notLeader.splice(i, 1);
          i--;
        }
      }
      return notLeader;
    }
    return null;
  }
}
let restaurant = new Restaurant()










//



let mainBlock = document.getElementsByClassName('mainBlock')[0];
let cardBlock = document.createElement('div')
let buttonAddCard = document.createElement('div')
buttonAddCard.className = 'buttonAddCard'
buttonAddCard.innerText = 'add card'
cardBlock.className = 'cardBlock'
mainBlock.appendChild(cardBlock)
mainBlock.appendChild(buttonAddCard)
let changeEmployee;
let employeeCard
let itemBlockInfo
let itemInfo
let item
let buttonDelete
let isFlag = false;

let myWindow = mainBlock.appendChild(document.createElement('div'))
myWindow.className = 'myWindow'
let backWindow = myWindow.appendChild(document.createElement('div'))
backWindow.className = 'backWindow'
let modalWindow = myWindow.appendChild(document.createElement('div'))
modalWindow.className = 'modalWindow'
for(let i in restaurant.employees[0]) {
  let input = document.createElement('input');
  input.type = 'text';
  input.placeholder = i;
  input.className = 'inputInfo'
  //  input.className = `input_${i}`
  modalWindow.appendChild(input)
}
let buttonSave = modalWindow.appendChild(document.createElement('div'))
buttonSave.innerText = 'SAVE'
buttonSave.className = 'buttonSave'




function createCard () {
  restaurant.employees.forEach((employee) => {
    employeeCard = cardBlock.appendChild(document.createElement('div'))
    employeeCard.className = 'employeeCard'

    for(let i in employee) {
      itemBlockInfo = employeeCard.appendChild(document.createElement('div'));
      itemBlockInfo.className = 'itemBlockInfo'
      item = itemBlockInfo.appendChild(document.createElement('div'));
      itemInfo = itemBlockInfo.appendChild(document.createElement('div'));
      item.innerHTML = i
      itemInfo.innerHTML = employee[i]
      itemInfo.className = i;
    }


    let names = document.createElement('div')
    names.innerText = 'change'
    changeEmployee = employeeCard.appendChild(names).className = 'changeEmployee';
    let deleteBtn = document.createElement('div');
    deleteBtn.innerText = 'delete'
    deleteBtn.className = 'buttonDelete'
    buttonDelete = employeeCard.appendChild(deleteBtn)
  })
}
createCard ()





let j



let parent
window.addEventListener('load', () => {
  // createCard()
  windowLoad()

})
let evnt
let flags = true
function windowLoad () {
  for(let i = 0; i < document.getElementsByClassName('cardBlock')[0].children.length; i++){
    function createElmnt () {
      console.log( ' i')
      // myWindow.style = `display: block`;
      // evnt = event.target
      // isFlag = true;
      // j = i
    }
    function deleteElmnt () {
      //console.log(i)
      // document.getElementsByClassName()
      //restaurant.employees.splice(i, 1)
      event.target.parentNode.remove()
      console.log(restaurant.employees)
      // for(let j = 0; j < document.getElementsByClassName('cardBlock')[0].children.length; j++) {

      document.getElementsByClassName('changeEmployee')[0].removeEventListener('click', createElmnt)
      console.log(1233)
      document.getElementsByClassName('buttonDelete')[0].removeEventListener('click', deleteElmnt)
    //  windowLoad()
      // }
    }
    document.getElementsByClassName('changeEmployee')[i].addEventListener('click', createElmnt)
    document.getElementsByClassName('buttonDelete')[i].addEventListener('click', deleteElmnt)

  }
}


buttonAddCard.addEventListener('click', () => {
  console.log(isFlag)
  j = true;
  myWindow.style = `display: block`;
})









buttonSave.addEventListener('click', () => {
  //console.log(j)
  if(j !== undefined){
    changeCard()
  }
})



backWindow.addEventListener('click', () => {
  for(let i = 0; i < document.getElementsByClassName('inputInfo').length; i++){
    document.getElementsByClassName('inputInfo')[i].value = '';
  }
  isFlag = false;
  myWindow.style = `display: none`;
})



let elem
function changeCard () {
  //  console.log(123)
  let elemCard = document.getElementsByClassName('inputInfo')
  if(isFlag){
    let mas = []
    for(let i = 0; i < elemCard.length; i++) {
      if(elemCard[i].value !== '') {
        // for (let ind in restaurant.employees[j]) {
        //   mas.push(ind)
        // }
        let mm = elemCard[i].placeholder
        // restaurant.employees[j].mas[i] = elemCard[i].value
        restaurant.employees[j][mm] = elemCard[i].value
        console.log(restaurant.employees[j])

        //console.log(restaurant.employees[j])


        evnt.parentElement.children[i].children[1].innerText = elemCard[i].value
        elemCard[i].value = ''

      }
    }
    flag = false;
  } else {
    for(let i = 0; i < elemCard.length; i++) {
      if(elemCard[i].value !== '') {
        console.log(elemCard[i].value)
      }
    }
    //  console.log(12344)
  }
  myWindow.style = `display: none`
}

