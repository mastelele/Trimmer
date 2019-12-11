import React from 'react'
import { func } from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { setTrackDurationAction } from '../actions/main'

const TrimmerFooter = ({ setTrackDUration }) => {
  const onChange = e => {
    const audio = document.createElement('audio')
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = event => {
      audio.src = event.target.result
      audio.addEventListener(
        'loadedmetadata',
        () => {
          const { duration } = audio
          setTrackDUration(+duration.toFixed(1))
        },
        false,
      )
    }

    reader.readAsDataURL(file)
  }
  return (
    <Container>
      <input
        id="file"
        className="inputfile"
        type="file"
        onChange={onChange}
      ></input>
      <label htmlFor="file">Upload</label>
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

const mapDispatchToProps = {
  setTrackDUration: setTrackDurationAction,
}

TrimmerFooter.propTypes = {
  setTrackDUration: func.isRequired,
}

export default connect(null, mapDispatchToProps)(TrimmerFooter)
