import React from 'react'
import Box from '@mui/material/Box'
import { FlutterView } from './FlutterView/FlutterView'
import { Grid, TextField } from '@mui/material'

function App() {
  const [clicks, setClicks] = React.useState(0)
  const handleClicksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clicks = parseInt(event.target.value, 10) || 0
    setClicks(clicks)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField label="Текст 1" />
        <TextField label="Текст 2" />
        <TextField label="Текст 3" />
      </Grid>
      <Grid item xs={6}>
        <Box style={{ width: '400px', height: '600px', border: '2px solid black', margin: '16px' }} >
          <FlutterView
            assetBase={process.env.PUBLIC_URL + '/flutter/'}
            src={process.env.PUBLIC_URL + '/flutter/main.dart.js'}
            onClicksChange={setClicks}
            clicks={clicks}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default App
