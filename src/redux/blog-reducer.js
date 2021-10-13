let initialState = {
    data: [
        {id: 1, title: 'Title 1', subtitle: 'Subtitle 1', text: 'Hey hi one'},
        {id: 2, title: 'Title 2', subtitle: 'Subtitle 2', text: 'Hey hi two'},
    ]
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default blogReducer;