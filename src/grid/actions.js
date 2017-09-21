import * as actions from './constants';

export function onAddInstance(instance) {
    return dispatch => {
        dispatch({
            type: actions.ADD_INSTANCE,
            payload: instance
        });
    };

}

//   onAddItem() {
//     this.setState({
//       items: this.state.items.concat({
//         i: 'n' + this.state.newCounter,
//         x: this.state.items.length * 2 % (this.state.cols || 12),
//         y: Infinity, // puts it at the bottom
//         w: 2,
//         h: 2
//       }),
//       // Increment the counter to ensure key is always unique.
//       newCounter: this.state.newCounter + 1
//     });
//   },