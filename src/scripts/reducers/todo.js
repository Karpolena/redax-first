
let initState = {
    title: "test",
    list: ["hello"]
}

const addTodo = (state, action) => {
    state.list.push(action.payload)
    return Object.assign({}, state);
}

const removeTodo = (state, action) => {
    state.list = state.list.filter(itm => itm != action.payload);
    return Object.assign({}, state);
}

const Todo = (state = initState, action) => {
    switch(action.type) {
        case "add-todo": 
            return addTodo(state, action);
        case "remove-todo": 
            return removeTodo(state, action);
        default: return state;
    }
}
export default Todo;