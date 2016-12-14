import type { Action } from './types';
export const SELECT_ITEM = 'SELECT_ITEM';

export function selectItem(index : number) : Action {
  return {type: SELECT_ITEM, payload: index};
}
