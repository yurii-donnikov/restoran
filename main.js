
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


let objectEmployee
let objectEmployees
let x 
let y

function createCard () {
  for(let i = 0; i < restaurant.employees.length; i++){
    if(!cardBlock.children[i]) {
      employeeCard = cardBlock.appendChild(document.createElement('div'))
      employeeCard.className = 'employeeCard'
      for(let j in restaurant.employees[i]) {
        itemBlockInfo = employeeCard.appendChild(document.createElement('div'));
        itemBlockInfo.className = 'itemBlockInfo'
        item = itemBlockInfo.appendChild(document.createElement('div'));
        itemInfo = itemBlockInfo.appendChild(document.createElement('div'));
        item.innerHTML = j;
        itemInfo.innerHTML = restaurant.employees[i][j];
        itemInfo.className = j;
      }
      
      let names = document.createElement('div')
      names.innerText = 'change'
      changeEmployee = employeeCard.appendChild(names)
      changeEmployee.className = 'changeEmployee';
      changeEmployee.addEventListener('click', () => {
        myWindow.style = `display: block`;
        // objectEmployee = restaurant.employees[i];
        
        evnt = event.target
        console.log(evnt.parentNode)
        isFlag = true;
        for(let i = 0; i < cardBlock.children.length; i++){
          if(evnt.parentNode === cardBlock.children[i]){
            x = i
            console.log(i)
          }
        }
      })
      let deleteBtn = document.createElement('div');
      deleteBtn.innerText = 'delete'
      deleteBtn.className = 'buttonDelete'
      buttonDelete = employeeCard.appendChild(deleteBtn)
      buttonDelete.addEventListener('click', () => {
        for(let i = 0; i < cardBlock.children.length; i++){
          if(event.target.parentNode === cardBlock.children[i]){
            y = i
            console.log(y)
          }
        }
        restaurant.employees.splice(y, 1)
        event.target.parentNode.remove()
      })
    }
    // employeeCard = cardBlock.appendChild(document.createElement('div'))
    // employeeCard.className = 'employeeCard'
    // for(let j in restaurant.employees[i]) {
    //   itemBlockInfo = employeeCard.appendChild(document.createElement('div'));
    //   itemBlockInfo.className = 'itemBlockInfo'
    //   item = itemBlockInfo.appendChild(document.createElement('div'));
    //   itemInfo = itemBlockInfo.appendChild(document.createElement('div'));
    //   item.innerHTML = j;
    //   itemInfo.innerHTML = restaurant.employees[i][j];
    //   itemInfo.className = j;
    // }
    
    // let names = document.createElement('div')
    // names.innerText = 'change'
    // changeEmployee = employeeCard.appendChild(names)
    // changeEmployee.className = 'changeEmployee';
    // changeEmployee.addEventListener('click', () => {
    //   myWindow.style = `display: block`;
    //   // objectEmployee = restaurant.employees[i];
      
    //   evnt = event.target
    //   console.log(evnt.parentNode)
    //   isFlag = true;
    //   for(let i = 0; i < cardBlock.children.length; i++){
    //     if(evnt.parentNode === cardBlock.children[i]){
    //       x = i
    //       console.log(i)
    //     }
    //   }
    // })
    // let deleteBtn = document.createElement('div');
    // deleteBtn.innerText = 'delete'
    // deleteBtn.className = 'buttonDelete'
    // buttonDelete = employeeCard.appendChild(deleteBtn)
    // buttonDelete.addEventListener('click', () => {
    //   for(let i = 0; i < cardBlock.children.length; i++){
    //     if(event.target.parentNode === cardBlock.children[i]){
    //       y = i
    //       console.log(y)
    //     }
    //   }
    //   restaurant.employees.splice(y, 1)
    //   event.target.parentNode.remove()
    // })
  }


}
createCard ()





let j



let parent
window.addEventListener('load', () => {
// createCard()
// windowLoad()

})
let evnt
let flags = true
// function windowLoad () {
// for(let i = 0; i < document.getElementsByClassName('cardBlock')[0].children.length; i++){
//   // function createElmnt () {
//   //   console.log( ' i')
//   //   // myWindow.style = `display: block`;
//   //   // evnt = event.target
//   //   // isFlag = true;
//   //   // j = i
//   // }
//   // function deleteElmnt () {
//   //   //console.log(i)
//   //   // document.getElementsByClassName()
//   //   //restaurant.employees.splice(i, 1)
//   //   event.target.parentNode.remove()
//   //   console.log(restaurant.employees)
//   //   // for(let j = 0; j < document.getElementsByClassName('cardBlock')[0].children.length; j++) {

//   //   document.getElementsByClassName('changeEmployee')[0].removeEventListener('click', createElmnt)
//   //   console.log(1233)
//   //   document.getElementsByClassName('buttonDelete')[0].removeEventListener('click', deleteElmnt)
//   //  windowLoad()
//     // }
//   }
//   // document.getElementsByClassName('changeEmployee')[i].addEventListener('click', createElmnt)
//   // document.getElementsByClassName('buttonDelete')[i].addEventListener('click', deleteElmnt)

// }
// }


buttonAddCard.addEventListener('click', () => {
console.log(isFlag)
j = true;
myWindow.style = `display: block`;
})









buttonSave.addEventListener('click', () => {
//console.log(j)
//if(j !== undefined){
  changeCard()
//}
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
  for(let i = 0; i < elemCard.length; i++) {
    if(elemCard[i].value !== '') {
      let mm = elemCard[i].placeholder
      restaurant.employees[x][mm] = elemCard[i].value
      //console.log(restaurant.employees[j])
      evnt.parentElement.children[i].children[1].innerText = elemCard[i].value
      elemCard[i].value = ''
    }
  }
  isFlag = false;
} else {
  let obj = {};
  for(let i = 0; i < elemCard.length; i++) {
    if(elemCard[i].value !== '') {
      let nameElem = elemCard[i].placeholder;
      obj[nameElem] = elemCard[i].value;
      console.log(elemCard[i].value, (elemCard[i].value === "true"))
      elemCard[i].value = ''
    }
  }
  restaurant.employees.push(obj)
  console.log(restaurant.employees)
  createCard()
}
myWindow.style = `display: none`
}























//==============================================






































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
  //console.log(typeof i)
  if(i === 'isWorks') {
    let div = document.createElement('div');
    div.innerHTML = `<p>${i}</p>
    <input type="radio" id="contactChoice1" name="isWorks" value="true">
   <label for="contactChoice1">yes</label>
   <input type="radio" id="contactChoice2" name="isWorks" value="false">
   <label for="contactChoice2">no</label>`
   div.className = 'inputInfo'
   modalWindow.appendChild(div)
  } else {
    if(i === 'isLeader') {
      let div = document.createElement('div');
      
      div.innerHTML = `<p>${i}</p>
      <input type="radio" id="contactChoice3" name="isLeader" value="true" >
     <label for="contactChoice3">yes</label>
     <input type="radio" id="contactChoice4" name="isLeader" value="false">
     <label for="contactChoice4">no</label>`
     div.className = 'inputInfo'
     modalWindow.appendChild(div)
    } 
    else{
      let input = document.createElement('input');
      input.type = 'text';
      input.placeholder = i;
      input.className = 'inputInfo'
      //  input.className = `input_${i}`
      modalWindow.appendChild(input)
    }
  }


}
let buttonSave = modalWindow.appendChild(document.createElement('div'))
buttonSave.innerText = 'SAVE'
buttonSave.className = 'buttonSave'


let objectEmployee
let objectEmployees
let x 
let y

function createCard () {
  for(let i = 0; i < restaurant.employees.length; i++){
    if(!cardBlock.children[i]) {
      employeeCard = cardBlock.appendChild(document.createElement('div'))
      employeeCard.className = 'employeeCard'
      for(let j in restaurant.employees[i]) {
        itemBlockInfo = employeeCard.appendChild(document.createElement('div'));
        itemBlockInfo.className = 'itemBlockInfo'
        item = itemBlockInfo.appendChild(document.createElement('div'));
        itemInfo = itemBlockInfo.appendChild(document.createElement('div'));
        item.innerHTML = j;
        itemInfo.innerHTML = restaurant.employees[i][j];
        itemInfo.className = j;
      }
      
      let names = document.createElement('div')
      names.innerText = 'change'
      changeEmployee = employeeCard.appendChild(names)
      changeEmployee.className = 'changeEmployee';
      changeEmployee.addEventListener('click', () => {
        myWindow.style = `display: block`;
        // objectEmployee = restaurant.employees[i];
        
        evnt = event.target
        console.log(evnt.parentNode)
        isFlag = true;
        for(let i = 0; i < cardBlock.children.length; i++){
          if(evnt.parentNode === cardBlock.children[i]){
            x = i
            console.log(i)
          }
        }
      })
      let deleteBtn = document.createElement('div');
      deleteBtn.innerText = 'delete'
      deleteBtn.className = 'buttonDelete'
      buttonDelete = employeeCard.appendChild(deleteBtn)
      buttonDelete.addEventListener('click', () => {
        for(let i = 0; i < cardBlock.children.length; i++){
          if(event.target.parentNode === cardBlock.children[i]){
            y = i
            console.log(y)
          }
        }
        restaurant.employees.splice(y, 1)
        event.target.parentNode.remove()
      })
    }

  }


}
createCard ()





let j



let parent
window.addEventListener('load', () => {
// createCard()
// windowLoad()

})
let evnt
let flags = true



buttonAddCard.addEventListener('click', () => {
console.log(isFlag)
j = true;
myWindow.style = `display: block`;
})









buttonSave.addEventListener('click', () => {

  changeCard()

})



backWindow.addEventListener('click', () => {
for(let i = 0; i < document.getElementsByClassName('inputInfo').length; i++){
  document.getElementsByClassName('inputInfo')[i].value = '';
}
isFlag = false;
myWindow.style = `display: none`;
})

let mas

let elem
function changeCard () {

let elemCard = document.getElementsByClassName('inputInfo')
if(isFlag){
  for(let i = 0; i < elemCard.length; i++) {
    if(document.getElementsByClassName('inputInfo')[i].children.length){
      mas = document.getElementsByClassName('inputInfo')[i]
      for(let j = 0; j < mas.children.length; j++) {
        if(mas.children[j].checked) {
          let mm = mas.children[j].name
          restaurant.employees[x][mm] = Boolean(mas.children[j].value === 'true')
          evnt.parentElement.children[i].children[1].innerText = '' + mas.children[j].value
          //+ mas.children[i].value

        }
      }

    } else {
      if(elemCard[i].value !== '') {
        let mm = elemCard[i].placeholder
        
        //console.log(restaurant.employees[j])
        if (elemCard[i].placeholder === 'salary' || elemCard[i].placeholder === 'department') {
          restaurant.employees[x][mm] = Number(elemCard[i].value)

        } else {
          restaurant.employees[x][mm] = elemCard[i].value
        }
        evnt.parentElement.children[i].children[1].innerText = elemCard[i].value
        elemCard[i].value = ''
      }
    }


  }
  isFlag = false;
} else {
  let obj = {};
  for(let i = 0; i < elemCard.length; i++) {
    let mass = document.getElementsByClassName('inputInfo')[i]
    if(mass.children.length){

      for(let j = 0; j < mass.children.length; j++) {
        if(mass.children[j].checked) {
          let namess = mass.children[j].name
          obj[namess] = Boolean(mass.children[j].value === 'true')

        }
      }
    } else {
      if(elemCard[i].value !== '') {
        let nameElem = elemCard[i].placeholder;
        if (elemCard[i].placeholder === 'salary' || elemCard[i].placeholder === 'department') {
          obj[nameElem] = Number(elemCard[i].value)
        } else {
          obj[nameElem] = elemCard[i].value;
        }
        elemCard[i].value = ''
      }
    }

  }
  restaurant.employees.push(obj)

  createCard()
}
myWindow.style = `display: none`
}


