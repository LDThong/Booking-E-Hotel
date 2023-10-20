const initState = {
    booking: [],
}; 

const rootReducer= (state = initState, action) => {
    /*
        {
            type: "booking/addBookings",
            payload: {...},
        }
    */
    switch (action.type) {
        case 'booking/addBookings':
            return {
                ...state, /* Tiến hành cập nhật lại state = state trước đó*/
                booking: [
                    ...state.booking,
                    {} /** Thêm object vào state */
                ]
            } /** Sau khi thực hiện sẽ trả về một state mới với danh sách booking đã được cập nhật */
        default:
            return state;
    };
};

export default rootReducer;