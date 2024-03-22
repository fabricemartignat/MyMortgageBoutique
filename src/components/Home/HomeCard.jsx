import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'

import { Link } from 'react-router-dom'

const HomeCard = ({ title, text }) => {
  return (
    <Paper elevation={7}>
      <Box>
        <Card
          sx={{
            minHeight: '15rem',

            textAlign: 'center',
            position: 'relative',
            backgroundColor: '#fafafa',
          }}>
          <CardContent>
            <Typography
              variant='subtitle2'
              component='p'
              sx={{ fontSize: '1.5rem', color: 'secondary.main' }}
              gutterBottom>
              {title}
            </Typography>

            <Typography
              variant='body2'
              component='p'
              sx={{
                fontSize: '1rem',
                padding: '1rem',
                textShadow: '1px 1px 1px rgb(226, 226, 222)',
              }}>
              {text}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ position: 'absolute', bottom: '1rem' }}>
              <button className='button-hero'>
                <Link className='link-hero' to='solutions'>
                  Explore our solutions
                </Link>
              </button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Paper>
  )
}

export default HomeCard
