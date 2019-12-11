import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { func, number } from 'prop-types'
import { Range } from 'rc-slider'
import { setRangeAction } from '../actions/main'
import 'rc-slider/assets/index.css'

const dotStyle = {
  color: 'blue',
  width: '1px',
  height: '10px',
  bottom: '0px',
}

const TrimmerPanel = ({ duration, start, end, setRange }) => {
  const rangeOnChangeHandler = position => {
    const [startPosition, endPosition] = position
    setRange(startPosition, endPosition)
  }
  return (
    <Container>
      <Range
        dotStyle={dotStyle}
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
