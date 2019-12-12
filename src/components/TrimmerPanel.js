import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { func, number } from 'prop-types'
import Slider from 'rc-slider'
import { setRangeAction } from '../actions/main'
import 'rc-slider/assets/index.css'

const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range)

const dotStyle = {
  width: '1px',
  height: '10px',
  bottom: '0px',
  borderRadius: 0,
  border: '1px solid #e9e9',
}

const tipProps = {
  placement: 'bottom',
  prefixCls: 'rc-slider-tooltip',
}

const TrimmerPanel = ({ duration, start, end, setRange }) => {
  const rangeOnChangeHandler = position => {
    const [startPosition, endPosition] = position
    setRange(startPosition, endPosition)
  }

  const tipFormatter = () => {
    const startSeconds = start / 10
    const endSeconds = end / 10
    const startMinutes = Math.floor(startSeconds / 60)
    const endMinutes = Math.floor(endSeconds / 60)
    return `${startMinutes}:${startSeconds % 60} - ${endMinutes}:${endSeconds}`
  }

  return (
    <Container>
      <Range
        tipProps={tipProps}
        dotStyle={dotStyle}
        tipFormatter={tipFormatter}
        min={0}
        max={duration / 0.1}
        dots
        allowCross={false}
        value={[start, end]}
        onChange={rangeOnChangeHandler}
      />
    </Container>
  )
}
const Container = styled.div({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #DEE3F0',
})

const mapStateToProps = state => ({
  duration: state.main.duration,
  start: state.main.start,
  end: state.main.end,
})

const mapDispatchToProps = {
  setRange: setRangeAction,
}

TrimmerPanel.propTypes = {
  setRange: func.isRequired,
  duration: number.isRequired,
  start: number.isRequired,
  end: number.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(TrimmerPanel)
