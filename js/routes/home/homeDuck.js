import type { Action } from '../actions/types';

// Constants
export const SELECT_ITEM = 'SELECT_ITEM';

// Actions
export function selectItem(index : number) : Action {
  return {type: SELECT_ITEM, payload: index};
}

// Action Handlers
const ACTION_HANDLERS = {
  [SELECT_ITEM]: (state, action) => {
    return {...state, selectedItemId: action.payload};
  }
}

// Reducer
const initialState = {
  list: [
    [
      {id: 1, title: 'Sườn xào chua ngọt', views: 0,
       imageUrl: 'http://comnha24h.com/wp-content/uploads/2014/07/suon-xao-chua-ngot-2.jpg'},
      {id: 2, title: 'Mực xào sả ớt', views: 0,
       imageUrl: 'http://amthuc.hongphong.gov.vn/wp-content/uploads/2015/04/muc-xao-sa-ot2.png'}
    ],
    [
      {id: 3, title: 'Cơm chiên dương châu', views: 0,
      imageUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg'},
      {id: 4, title: 'Canh chua cá hú', views: 0,
      imageUrl: 'https://1.bp.blogspot.com/-U7nphYWlJ4k/V060w7kYJEI/AAAAAAAAAXg/RxKmisXDPdI0Ymy0_mOIo2CGRbi4A-M-QCLcB/s320/canh%2Bchua.jpg'}
    ],
    [
      {id: 5, title: 'Cá kho tộ', views: 0,
       imageUrl: 'http://tcndulichhanoi.edu.vn/wp-content/uploads/2016/06/ca-kho.jpg'},
      {id: 6, title: 'Sườn xào chua ngọt', views: 0,
       imageUrl: 'http://comnha24h.com/wp-content/uploads/2014/07/suon-xao-chua-ngot-2.jpg'}
    ]
  ],
  selectedItemId: undefined,
};

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
