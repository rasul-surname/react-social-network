import {act} from "@testing-library/react";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let SET_TOTAL = 'SET-TOTAL';
let TOGGAL_IS_FETCHING = 'TOGGAL-IS-FETCHING';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://i.pinimg.com/originals/3a/9b/dd/3a9bdd452ff107dd46c8f13be9596dd6.jpg',
        //     followed: false, fullName: 'Rasul', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl: 'https://i.pinimg.com/originals/3a/9b/dd/3a9bdd452ff107dd46c8f13be9596dd6.jpg',
        //     followed: true, fullName: 'Ahmed', status: 'I am a manager', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoUrl: 'https://i.pinimg.com/originals/3a/9b/dd/3a9bdd452ff107dd46c8f13be9596dd6.jpg',
        //     followed: false, fullName: 'Magomed', status: 'I am a director', location: {city: 'NewYourk', country: 'America'}},
    ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL:
            return {...state, totalUsersCount: action.total}
        case TOGGAL_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalAC = (total) => ({type: SET_TOTAL, total})
export const setIsFetchingAC = (isFetching) => ({type: TOGGAL_IS_FETCHING, isFetching})

export default usersReducer;