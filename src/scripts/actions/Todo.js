export const addToo = (payload) => {
    return {
        type: "add-todo",
        payload
    }
};

export const removeTodo = (payload) => {
    return {
        type: "remove-todo",
        payload
    }
}