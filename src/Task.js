//Primera linea que escribo en la tarea, que me tomara, 3 dias? Bueno seria.
//Primero pense empezar lo mas basico que serian los estados de las tareas. 
//Pense en Enums, pero no hay enums en js :(, asi que esto es lo mas similar que hay dentro de js. 
//Por lo que cada enum tiene un valor asignado en memoria, INMUTABLE.
const TaskState = Object.freeze({
  PENDING: 'Pending',
  DOING: 'Doing', //Quien es M.R?
  DONE: 'Done'
});

class Task { //30 minutos para esto, como se nota que hoy en dia ya no se pica codigo. 
    constructor(name, state = TaskState.PENDING){
    this.name = name;
    this.state = state;
    } 

    
}