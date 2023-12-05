import React, { useEffect, useRef, memo } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Article from '../Article'

// The global _flutter namespace
declare var _flutter: any

const divStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
}

interface FlutterViewProps {
  assetBase?: string;
  src?: string;
  articles: Article[];
  onArticlesChanged?: (article: Article[]) => void;
}

export const FlutterView: React.FC<FlutterViewProps> = memo(({
  assetBase = '',
  src = 'main.dart.js',
  onArticlesChanged,
  articles,
}) => {
  const flutterState = useRef<any>(null)
  const ref = useRef<HTMLDivElement>(null)

  const onFlutterAppLoaded = (state: any) => {
    flutterState.current = state
    state.onArticlesChanged(onArticlesChanged)
    state.setArticles(articles)
  }

  useEffect(() => {
    const target = ref.current
    let isRendered = true
    const initFlutterApp = async () => {
      if (!isRendered) return
      const engineInitializer = await new Promise<any>((resolve) => {
        console.log('setup Flutter engine initializer...')
        _flutter.loader.loadEntrypoint({
          entrypointUrl: src,
          onEntrypointLoaded: resolve,
        })
      })
      if (!isRendered) return

      console.log('initialize Flutter engine...')
      const appRunner = await engineInitializer?.initializeEngine({
        hostElement: target,
        assetBase: assetBase,
      })
      if (!isRendered) return

      console.log('run Flutter engine...')
      await appRunner?.runApp()
    }
    initFlutterApp()

    const eventListener = (event: Event) => {
      let state = (event as CustomEvent).detail
      onFlutterAppLoaded(state)
    }

    target?.addEventListener('flutter-initialized', eventListener, {
      once: true,
    })

    return () => {
      isRendered = false
      target?.removeEventListener('flutter-initialized', eventListener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    flutterState.current?.setArticles(articles)
  }, [articles])

  return (
    <div
      ref={ref}
      style={divStyle}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    </div>
  )
})
