import React from 'react'
import styled from '@emotion/styled'
import TrimmerFooter from './TrimmerFooter'
import TrimmerPanel from './TrimmerPanel'

const Trimmer = () => {
  return (
    <Container>
      <TrimmerPanel></TrimmerPanel>
      <TrimmerFooter></TrimmerFooter>
    </Container>
  )
}

const Container = styled.div({
  margin: '0 10vw',
  height: '50vh',
  width: '100%',
  background: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: '0px 6px 12px #0052E01A',
  borderRadius: '10px',
})

export default Trimmer
