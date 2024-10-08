import GitHubIcon from '@mui/icons-material/GitHub'
import { AppBar, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'

export function ServiceHeader({
  version,
  authComponent,
  logoSrc
}: {
  authComponent?: React.ReactNode
  version: string
  logoSrc: string
}) {
  return (
    <>
      <AppBar position={'static'} color={'transparent'}>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            <img src={logoSrc} height='55px' alt='evidently logo' />
            <span style={{ verticalAlign: 'super', fontSize: '0.75rem' }}>{version}</span>
          </Typography>
          {authComponent}
          <Link href={'https://github.com/evidentlyai/evidently'}>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href={'https://docs.evidentlyai.com/'}>
            <Button>Docs</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}
