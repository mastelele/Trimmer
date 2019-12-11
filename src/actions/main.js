import { SET_TRACK_DURATION, SET_RANGE } from './actionTypes'

export function setTrackDurationAction(duration) {
  return (dispatch, getState) => {
    const { start, end, duration: lastDuration } = getState().main
    const ratio = duration / lastDuration
    dispatch({
      type: SET_TRACK_DURATION,
      duration,
    })
    dispatch({
      type: SET_RANGE,
      data: {
        start: Math.floor(start * ratio),
        end: Math.floor(end * ratio),
      },
    })
  }
}

export function setRangeAction(start, end) {
  return dispatch => {
    dispatch({
      type: SET_RANGE,
      data: {
        start,
        end,
      },
    })
  }
}
