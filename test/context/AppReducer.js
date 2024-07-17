export default (state, action) => {
    switch (action.type) {
        case 'ADD_COMPONENT':
            return {
                ...state,
                components: [...state.components, action.payload]
            };
        case 'UPDATE_COMPONENT':
            return {
                ...state,
                components: state.components.map(component =>
                    component.id === action.payload.id ? action.payload : component
                )
            };
        case 'SELECT_COMPONENT':
            return {
                ...state,
                selectedComponent: action.payload
            };
        default:
            return state;
    }
};
