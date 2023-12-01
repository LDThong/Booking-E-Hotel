import { createSlice } from "@reduxjs/toolkit";

const initState = {
    search: '',
    status: 'All',
    role: []
}; 

export const filtersSilce = createSlice({
    name: 'filters',
    initState,
    reducer: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        }
    }
});

export const { searchFilterChange, statusFilterChange} = filtersSilce.actions;

export default filtersSilce.reducer;

// const rootReducer= (state = initState, action) => {
    //     /*
    //         {
    //             type: "listUser/addUser",
    //             payload: {...},
    //         }
    //     */
    //     switch (action.type) {
    //         case 'listUser/addUser':
    //             return {
    //                 ...state, /* Tiến hành cập nhật lại state = state trước đó*/
    //                 listUser: [
    //                     ...state.listUser,
    //                     {} /** Thêm object vào state */
    //                 ]
    //             } /** Sau khi thực hiện sẽ trả về một state mới với danh sách listUser đã được cập nhật */
    //         default:
    //             return state;
    //     };
    // };
    
    // export default rootReducer;