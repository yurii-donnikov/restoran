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

  let main_block = document.getElementsByClassName('main_block')[0];
  let changeEmployee;
  let employeeCard
  let itemBlockInfo
  let itemInfo
  let item 
  let isFlag = false;

  let myWindow = main_block.appendChild(document.createElement('div'))
  myWindow.className = 'myWindow'
  let backWindow = myWindow.appendChild(document.createElement('div'))
  backWindow.className = 'backWindow'
  let modalWindow = myWindow.appendChild(document.createElement('div'))
  modalWindow.className = 'modalWindow'

  for(let i in restaurant.employees[0]) {
   let input = document.createElement('input');
   input.type = 'text';
   input.placeholder = i;
   input.className = `input_${i}`
   modalWindow.appendChild(input)

  }
  let buttonSave = modalWindow.appendChild(document.createElement('div'))
  buttonSave.innerText = 'SAVE'
  buttonSave.className = 'buttonSave'


  restaurant.employees.forEach((employee) => {


    employeeCard = main_block.appendChild(document.createElement('div'))
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
    

  })

  



  let j
  for(let i = 0; i < document.getElementsByClassName(changeEmployee).length; i++){
    
   document.getElementsByClassName(changeEmployee)[i].addEventListener('click', 
      function () {
        myWindow.style = `display: block`;
        isFlag = true;
        //console.log(document.getElementsByClassName('name')[i].innerText = 'aaaa')
        j = i
        //console.log(i)
      } 
   )




  }


  buttonSave.addEventListener('click', () => {
    console.log(j)
    if(j !== undefined){
      changeCard()
      //document.getElementsByClassName('name')[j].innerText = 'bbbbbb'
    }
    
 })

  backWindow.addEventListener('click', () => {
    myWindow.style = `display: none`;
  })

  const [input_name, input_position, input_isLeader, input_salary, input_isWorks, input_department] = ['input_name', 'input_position', 'input_isLeader', 'input_salary', 'input_isWorks', 'input_department']
  .map((className) => document.getElementsByClassName(className)[0])
  const [name, position, isLeader, salary, isWorks, department] = ['name', 'position', 'isLeader', 'salary', 'isWorks', 'department']
  .map((className) => document.getElementsByClassName(className))

  function changeCard () {
    if(isFlag){
      if(input_name.value !== ''){
        name[j].innerText = input_name.value;
        restaurant.employees[j].name = input_name.value
        input_name.value = ''
        
        console.log(j)
      }
      if(input_position.value !== ''){
        position[j].innerText = input_position.value;
        restaurant.employees[j].position = input_position.value
        input_position.value = ''
        
        console.log(j)
      }
      if(input_isLeader.value !== ''){
        isLeader[j].innerText = input_isLeader.value;
        restaurant.employees[j].isLeader = input_isLeader.value
        input_isLeader.value = ''
        
        console.log(j)
      }
      if(input_salary.value !== ''){
        salary[j].innerText = input_salary.value;
        restaurant.employees[j].salary = input_salary.value
        input_salary.value = ''
        
        console.log(j)
      }
      if(input_isWorks.value !== ''){
        isWorks[j].innerText = input_isWorks.value;
        restaurant.employees[j].isWorks = input_isWorks.value
        input_isWorks.value = ''
        
        console.log(j)
      }
      if(input_department.value !== ''){
        department[j].innerText = input_department.value;
        restaurant.employees[j].department = input_department.value
        input_department.value = ''
        
        console.log(j)
      }
      flag = false;
    } 
    myWindow.style = `display: none`
  }


