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
          salary: 100,
          isWorks: true,
          department: 1,
        },
        {
          name:'oleg',
          position: 'ofitsiant',
          salary: 100,
          isWorks: false,
          department: 1,
        },
        {
          name:'marina',
          position: 'ofitsiant',
          salary: 100,
          isWorks: true,
          department: 1,
        },
        {
          name:'rita',
          position: 'ofitsiant',
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
          salary: 100,
          isWorks: true,
          department: 2,
        },
        {
          name:'mari',
          position: 'assistant-cook',
          salary: 100,
          isWorks: true,
          department: 2,
        },
        {
          name:'anna',
          position: 'assistant-cook',
          salary: 110,
          isWorks: true,
          department: 2,
        },
        {
          name:'dima',
          position: 'cleaner',
          salary: 100,
          isWorks: true,
          department: 2,
        },
        {
          name:'igor',
          position: 'dessert cook',
          salary: 150,
          isWorks: false,
          department: 4,
        },
        {
          name:'Lexa',
          position: 'dessert cook',
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
  let btn;


  restaurant.employees.forEach((employee) => {
    let employe = main_block.appendChild(document.createElement('div'))
    employe.className = 'employee'

    
    for(let i in employee) {
        let blk = employe.appendChild(document.createElement('div'));
        blk.className = 'blk'
        let par = blk.appendChild(document.createElement('div'));
        let parr = blk.appendChild(document.createElement('div'));
        par.innerHTML = i
        parr.innerHTML = employee[i]

    }
    btn = employe.appendChild(document.createElement('div')).className = 'btn'
    document.getElementsByClassName(btn)[document.getElementsByClassName(btn).length - 1]
        .addEventListener('click', function () {console.log(Event.target)})

  })
  



//   document.getElementsByClassName(btn)[1].addEventListener('click', function () {
//       console.log(new Date())
//   })