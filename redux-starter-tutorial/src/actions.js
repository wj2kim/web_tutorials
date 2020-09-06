import * as actions from './actionTypes';

// export function bugAdded(descriptions) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug1",
//         }
//     }
// }

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
})

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id,
    }
})