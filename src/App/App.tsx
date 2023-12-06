import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { FlutterView } from './FlutterView/FlutterView'
import { Button, Grid, TextField } from '@mui/material'
import Article from './Article';
import ImageUploader from './ImageUploader';
import ImageDisplay from './ImageDisplay';

function App() {

  const [articles, setArticles] = useState<Article[]>([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [images, setImages] = useState<Uint8Array[]>([])

  const addNewArticle = () => {
    const newArticle = new Article(title, author, text, new Date().toISOString(), images);
    setArticles([...articles, newArticle]);
    setTitle('');
    setAuthor('');
    setText('');
    setImages([]);
  };

  const uploadImage = (image: Uint8Array) => {
    setImages([...images, image])
  }


  return (
    <Grid container spacing={2}>
      <Grid item xs={4} >
        <Grid container direction="column">
          <TextField label="Название статьи" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '200px' }} />
          <TextField label="Автор" value={author} onChange={(e) => setAuthor(e.target.value)} style={{ width: '200px', marginTop: '16px' }} />
          <TextField
            label="Текст статьи"
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline={true} rows={4}
            style={{ width: '400px', marginTop: '16px', marginBottom: '16px' }} />
          <ImageUploader onImageUpload={uploadImage} />
          <Grid container spacing={2}>
            {images?.map((value, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
                <ImageDisplay imageData={value} />
              </Grid>
            ))}
          </Grid>

          <Button onClick={addNewArticle} style={{ height: '50px', marginTop: '16px' }}>Добавить статью</Button>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Box style={{ width: '400px', height: '600px', border: '2px solid black', margin: '16px' }} >
          <FlutterView
            assetBase={process.env.PUBLIC_URL + '/flutter/'}
            src={process.env.PUBLIC_URL + '/flutter/main.dart.js'}
            articles={articles}
            onArticlesChanged={setArticles}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default App
