export let addToo = (payload) => {
    return {
        type: "add-todo",
        payload
    }
}

export let removeTodo = (payload) => {
    return {
        type: "remove-todo",
        payload
    }
}