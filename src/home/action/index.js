export const TEST_ACTION = "test_type"

export default function sayName (name = '李金珂666') {        
    return async function (dispatch) {
        dispatch({
            type: TEST_ACTION,
            name
        })
    }
}