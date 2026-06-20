

// Dependency Graph

var tasks = {
'a': {
  job: function (finish) {
    setTimeout(function () {
      console.log('a done');
      finish();
    }, 5000);
  }
},
'b': {
  job: function (finish) {
    setTimeout(function () {
      console.log('b done');
      finish();
    }, 2000);
  }
},
'c': {
  job: function (finish) {
    setTimeout(function () {
      console.log('c done');
      finish();
    }, 2000);
  },
  dependencies: ['a', 'b']
},
'd': {
  job: function (finish) {
    setTimeout(function () {
      console.log('d done');
      finish();
    }, 1000);
  },
  dependencies: []
},
'e': {
  job: function (finish) {
    setTimeout(function () {
      console.log('e done');
      finish();
    }, 2000);
  },
  dependencies: ['c', 'b']
}
};


const runTasks = (tasks, cb) => {
    
    const taskQueue = []
    
    const doneMap = {}
    
    function finish(key) {
       doneMap[key] =  true 
    }

    
    function checkIfPendingTaskAndExecute() {
        taskQueue.forEach((taskName, index) => {
             const {dependencies, job} = tasks[taskName]
             const isAllDependenciesExecuted = dependencies.reduce((acc, elem) => {
                return acc && doneMap[elem]
            }, true)
            if(isAllDependenciesExecuted) {
                 const finishIndividual = () => {
                    finish(taskName)
                    
                 }
                job(finishIndividual)
            }
        })
    }
    
    const taskKeys = Object.keys(tasks)
    
    taskKeys.forEach((name, index) => {
        
        const taskObj = tasks[name]
        const {dependencies, job} = taskObj
        
        if(dependencies && dependencies.length > 0) {
            
            const isAllDependenciesExecuted = dependencies.reduce((acc, elem) => {
                return acc && doneMap[elem]
            }, true)
            
            if(isAllDependenciesExecuted) {
                
                const finishIndividual = () => {
                    finish(name)
                    checkIfPendingTaskAndExecute()
                    
                }
                
                job(finishIndividual)
                
            }
            
            if(!isAllDependenciesExecuted) {
                taskQueue.push(name)
            }
        } else {
             
        const finishIndividual = () => {
            finish(name)
            
        }
          job(finishIndividual)  
        }
    })
    
    // console.log("takKeys", taskKeys)
};




runTasks(tasks, function () {
console.log('all done');
});

