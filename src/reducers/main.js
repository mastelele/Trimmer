import produce from 'immer'
import { SET_TRACK_DURATION, SET_RANGE } from '../actions/actionTypes'

const defaultState = {
  duration: 10,
  start: 0,
  end: 0,
}

const main = (state = defaultState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_TRACK_DURATION: {
        const { duration } = action
        draft.duration = duration
        break
      }
      case SET_RANGE: {
        const {
          data: { start, end },
        } = action
        draft.start = start
        draft.end = end
        break
      }
      default:
        break
    }
  })

export default main
