import { ActionTypes, getAllUsersStart, filterUsersByName } from '../../redux/actions';


describe('user actions tests', () => {
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
  })
})