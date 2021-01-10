import {
  ActionTypes,
  getAllUsersStart,
  filterUsersByName,
  getAllUsers,
} from '../../redux/actions';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { usersUrl } from '../../urls/urls';


const middlewares = [thunk];
const mockStore = configureStore<any, ThunkDispatch<any, void, AnyAction>>(middlewares);
const store = mockStore([])
const mock = new MockAdapter(axios);


describe('user actions tests', () => {
  beforeEach(() => { store.clearActions() });

  it('should start loading users', () => {
    const startAction = {
      type: ActionTypes.FETCH_ALL_USERS_START,
      payload: false
    }
    expect(getAllUsersStart()).toEqual(startAction)
  });

  it('should search by keyword', () => {
    const searchAction = {
      type: ActionTypes.FILTER_USERS_BY_NAME,
      payload: 'keyword'
    }
    expect(filterUsersByName('keyword')).toEqual(searchAction)
  });

  it('should fetch user success', () => {
    mock.onGet(usersUrl).reply(200,[{ id: 1, name: "bret" }, { id: 2, name: "antonette" }])

    const expectedActions = [
      { type: ActionTypes.FETCH_ALL_USERS_START, payload: false },
      { type: ActionTypes.FETCH_ALL_USERS_SUCCESS, payload: [{ id: 1, name: "bret" }, { id: 2, name: "antonette" }] }
    ]

    return store.dispatch(getAllUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})