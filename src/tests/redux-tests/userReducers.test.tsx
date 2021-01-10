import { userReducer } from "../../redux/reducers/userReducer";
import { ActionTypes } from "../../redux/actions";

describe('user reducers test', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(
      {
        userList: [],
        searchKey: "",
        filteredUserList: [],
        isLoading: false,
        error: ""
      }
    )
  })

  it('should toggle isloading to ture', () => {
    expect(userReducer({}, {
      type: ActionTypes.FETCH_ALL_USERS_START,
      payload: true
    })).toEqual(
      {
        isLoading: true,
        error: ""
      }
    )
  })

  it('should write some error message', () => {
    expect(userReducer({}, {
      type: ActionTypes.FETCH_ALL_USERS_FAILURE,
      payload:"something wrong happened"
    })).toEqual({
      isLoading: false,
      error: "something wrong happened"
    })
  })

  it('should fecth data success',() => {
    expect(userReducer({}, {
      type: ActionTypes.FETCH_ALL_USERS_SUCCESS,
      payload:{name:"test",id:1}
    })).toEqual({
      isLoading: false,
      userList:{name:"test",id:1}
    })
  })
});