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
      <Grid item xs={4} >
        <Grid container direction="column">
          <TextField label="Название статьи" style={{ width: '200px' }} />
          <TextField label="Автор" style={{ width: '200px', marginTop: '16px' }} />
          <TextField label="Текст статьи" multiline={true} rows={4} style={{ width: '400px', marginTop: '16px' }} />
        </Grid>
      </Grid>
      <Grid item xs={8}>
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
