import React from 'react'
import styled from '@emotion/styled'
import Trimmer from './components/Trimmer'

const App = () => {
  return (
    <AppContainer>
      <Trimmer></Trimmer>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div({
  height: '100vh',
  width: '100vw',
  background: '#EEF5FF',
  display: 'flex',
  alignItems: 'center',
})
