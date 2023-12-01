export const addUser = (data) => {
    return {
        type: 'listUser/addUser',
        payload: data,
    }
}

export const searchFilterUser = (text) => {
    return{
        type: 'filters/searchFilterUser',
        payload: text,
    }
}