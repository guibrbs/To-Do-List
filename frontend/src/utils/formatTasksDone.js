export const formatTasksDone = (array) => {
    const tasksDone = getTasksDone(array);
    if (array.length === 0) return "Vazio"
    else if (tasksDone === array.length) return "Concluído"
    return (`${tasksDone}/${array.length} feitos`)
}

export const getTasksDone = (array) => {
    var tasksDone = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i].done === true){
            tasksDone++;
        }
    }
    return tasksDone;
}