import { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'

import Button from '@mui/material/Button'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import MenuItem from '@mui/material/MenuItem'

import { Link, NavLink } from 'react-router-dom'

const pages = [
  {
    id: 1,
    page: 'Home',
    path: '/',
  },
  { id: 2, page: 'Mortgage solutions', path: '/solutions' },
  { id: 3, page: 'Case Studies', path: '/case-studies' },
  { id: 4, page: 'Contact Us', path: '/contact-us' },
]

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      sx={{
        marginBottom: 0,
        backgroundColor: 'primary.main',
        position: 'fixed',
        top: 0,
        zIndex: 1,
      }}
      position='static'>
      <Toolbar sx={{ mx: 5 }} disableGutters>
        <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
          <NavLink className='navlink' to='/'>
            {' '}
            <img
              className='logo-underlying'
              src='/assets/logo MMB V4.png'
              alt='logo'
            />
          </NavLink>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            sx={{ padding: 0 }}
            color='inherit'>
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}>
            {pages.map((page) => (
              <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>
                  <NavLink className='navlink-toggle' to={page.path}>
                    {page.page}
                  </NavLink>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Typography
          variant='h5'
          noWrap
          component='a'
          href=''
          sx={{
            mr: 2,
            padding: 3,
            display: { xs: 'flex', md: 'none' },
            fontFamily: 'Cardo',
            fontWeight: 700,
            fontSize: '1.3rem',
            color: 'inherit',
            textDecoration: 'none',
            justifyContent: 'center',
          }}>
          MyMortgageBoutique
        </Typography>
        <Box
          sx={{
            width: 0.8,
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
          }}>
          {pages.map((page) => (
            <Button key={page.id}>
              <NavLink className='navlink' to={page.path}>
                {page.page}
              </NavLink>
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
          }}>
          <IconButton
            href='https://www.linkedin.com/in/fabrice-martignat/'
            target='_blank'
            rel='noreferrer'>
            <LinkedInIcon sx={{ color: 'white', fontSize: 30 }} />
          </IconButton>
          <IconButton
            href='https://github.com/'
            target='_blank'
            rel='noreferrer'>
            <GitHubIcon sx={{ color: 'white', fontSize: 30, marginLeft: 4 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
