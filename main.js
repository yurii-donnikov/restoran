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










//   let main_block = document.getElementsByClassName('main_block')[0];
//   let cardBlock = document.createElement('div')
//   cardBlock.className = 'cardBlock'
//   main_block.appendChild(cardBlock)
//   //let main_block = document.getElementsByClassName('main_block')[0];
//   let changeEmployee;
//   let employeeCard
//   let itemBlockInfo
//   let itemInfo
//   let item
//   let buttonDelete
//   let isFlag = false;

//   let myWindow = main_block.appendChild(document.createElement('div'))
//   myWindow.className = 'myWindow'
//   let backWindow = myWindow.appendChild(document.createElement('div'))
//   backWindow.className = 'backWindow'
//   let modalWindow = myWindow.appendChild(document.createElement('div'))
//   modalWindow.className = 'modalWindow'

//   for(let i in restaurant.employees[0]) {
//    let input = document.createElement('input');
//    input.type = 'text';
//    input.placeholder = i;
//    input.className = `input_${i}`
//    modalWindow.appendChild(input)

//   }
//   let buttonSave = modalWindow.appendChild(document.createElement('div'))
//   buttonSave.innerText = 'SAVE'
//   buttonSave.className = 'buttonSave'


//   restaurant.employees.forEach((employee) => {


//     employeeCard = main_block.appendChild(document.createElement('div'))
//     employeeCard.className = 'employeeCard'

//     for(let i in employee) {


//       itemBlockInfo = employeeCard.appendChild(document.createElement('div'));
//       itemBlockInfo.className = 'itemBlockInfo'
//         item = itemBlockInfo.appendChild(document.createElement('div'));
//         itemInfo = itemBlockInfo.appendChild(document.createElement('div'));
//         item.innerHTML = i
//         itemInfo.innerHTML = employee[i]
//         itemInfo.className = i;
//     }
//     let names = document.createElement('div')
//     names.innerText = 'change'
//     changeEmployee = employeeCard.appendChild(names).className = 'changeEmployee';
//     let deleteBtn = document.createElement('div');
//     deleteBtn.innerText = 'delete'
//     deleteBtn.className = 'buttonDelete'
//     buttonDelete = employeeCard.appendChild(deleteBtn)

//   })





//   let j

//   window.addEventListener('load', function windowLoad () {
//     console.log('qwe')
//     for(let i = 0; i < document.getElementsByClassName(changeEmployee).length; i++){
//       //console.log(i)
//       document.getElementsByClassName(changeEmployee)[i].addEventListener('click',
//          function () {
//            myWindow.style = `display: block`;
//            isFlag = true;
//            j = i
//          }
//       )
//       document.getElementsByClassName('buttonDelete')[i].addEventListener('click',
//          function () {
//           console.log(document.getElementsByClassName('buttonDelete')[i], i)
//            let deleteElem = document.getElementsByClassName("employeeCard")[i];
//            deleteElem.parentNode.removeChild(deleteElem);
//            //console.log(document.getElementsByClassName(changeEmployee).length, i)
//            windowLoad()
//          }
//       )
//      }
//   })







//   // for(let i = 0; i < document.getElementsByClassName(changeEmployee).length; i++){
//   //  document.getElementsByClassName(changeEmployee)[i].addEventListener('click',
//   //     function () {
//   //       myWindow.style = `display: block`;
//   //       isFlag = true;
//   //       j = i
//   //     }
//   //  )
//   //  document.getElementsByClassName('buttonDelete')[i].addEventListener('click',
//   //     function () {
//   //       let deleteElem = document.getElementsByClassName("employeeCard")[i];
//   //       deleteElem.parentNode.removeChild(deleteElem);
//   //     }
//   //  )
//   // }


//   buttonSave.addEventListener('click', () => {
//     console.log(j)
//     if(j !== undefined){
//       changeCard()
//       //document.getElementsByClassName('name')[j].innerText = 'bbbbbb'
//     }

//  })

//   backWindow.addEventListener('click', () => {
//     myWindow.style = `display: none`;
//   })

//   const [input_name, input_position, input_isLeader, input_salary, input_isWorks, input_department] = ['input_name', 'input_position', 'input_isLeader', 'input_salary', 'input_isWorks', 'input_department']
//   .map((className) => document.getElementsByClassName(className)[0])
//   const [name, position, isLeader, salary, isWorks, department] = ['name', 'position', 'isLeader', 'salary', 'isWorks', 'department']
//   .map((className) => document.getElementsByClassName(className))

//   function changeCard () {
//     if(isFlag){
//       if(input_name.value !== ''){
//         name[j].innerText = input_name.value;
//         restaurant.employees[j].name = input_name.value
//         input_name.value = ''

//         console.log(j)
//       }
//       if(input_position.value !== ''){
//         position[j].innerText = input_position.value;
//         restaurant.employees[j].position = input_position.value
//         input_position.value = ''

//         console.log(j)
//       }
//       if(input_isLeader.value !== ''){
//         isLeader[j].innerText = input_isLeader.value;
//         restaurant.employees[j].isLeader = input_isLeader.value
//         input_isLeader.value = ''

//         console.log(j)
//       }
//       if(input_salary.value !== ''){
//         salary[j].innerText = input_salary.value;
//         restaurant.employees[j].salary = input_salary.value
//         input_salary.value = ''

//         console.log(j)
//       }
//       if(input_isWorks.value !== ''){
//         isWorks[j].innerText = input_isWorks.value;
//         restaurant.employees[j].isWorks = input_isWorks.value
//         input_isWorks.value = ''

//         console.log(j)
//       }
//       if(input_department.value !== ''){
//         department[j].innerText = input_department.value;
//         restaurant.employees[j].department = input_department.value
//         input_department.value = ''

//         console.log(j)
//       }

//       flag = false;
//     }
//     myWindow.style = `display: none`
//   }
//   // window.onload = function() { alert('Страница загружена')}
// // window.addEventListener('load', function test () {
// //     console.log('ad')
// //     document.getElementsByClassName('buttonDelete')[0].addEventListener('click', () => {
// //       test()
// //     })
// //   }


// // main_block.addEventListener('click', () => {
// //   evn = event.target
// //   console.log(document.getElementsByClassName('name'))
// //   console.log(evn)
// // })







  let mainBlock = document.getElementsByClassName('mainBlock')[0];
  let cardBlock = document.createElement('div')
  cardBlock.className = 'cardBlock'
  mainBlock.appendChild(cardBlock)
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





  let j




  let parent
  window.addEventListener('load', () => windowLoad())

  function windowLoad () {
    for(let i = 0; i < document.getElementsByClassName('cardBlock')[0].children.length; i++){

      document.getElementsByClassName(changeEmployee)[i].addEventListener('click',
         function () {
           myWindow.style = `display: block`;
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











  buttonSave.addEventListener('click', () => {
    if(j !== undefined){
      changeCard()
    }
 })



  backWindow.addEventListener('click', () => {
    for(let i = 0; i < document.getElementsByClassName('inputInfo').length; i++){
      document.getElementsByClassName('inputInfo')[i].value = '';
    }
    myWindow.style = `display: none`;
  })



  let elem
  function changeCard () {
    let elemCard = document.getElementsByClassName('inputInfo')
    if(isFlag){
      for(let i = 0; i < elemCard.length; i++) {
        if(elemCard[i].value !== '') {
          elem = document.getElementsByClassName(elemCard[i].placeholder)
          elem[j].innerText  = elemCard[i].value
          elemCard[i].value = ''
        }
      }
      flag = false;
    }
    myWindow.style = `display: none`
  }
