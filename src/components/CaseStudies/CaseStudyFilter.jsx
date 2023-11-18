import { useState } from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'

import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'

import { useQuery } from '@apollo/client'
import { GET_KEYWORDS } from '../../queries/productQueries'

export default function CaseStudyFilter({ filterPosts }) {
  const [keyword, setKeyword] = useState('')

  // fetch keywords from utils for keyword filter
  const { data } = useQuery(GET_KEYWORDS)

  // handle form submit with keyword and filterPosts function from CaseStudiesPage

  function handleSubmit(e) {
    e.preventDefault()
    filterPosts(keyword)
    setKeyword('')
  }

  console.log('keyword', keyword)

  return (
    <Box
      sx={{
        marginBottom: '3rem',
        backgroundColor: '#14202e',
        padding: '1rem',
        borderRadius: '5px',
      }}>
      <Typography
        variant='h5'
        sx={{
          display: 'inline',
          paddingBottom: '0.5rem',
          fontWeight: 500,
          color: 'white',
          borderBottom: '4px solid #f39b04',
        }}>
        Filter case studies
      </Typography>
      <Box marginTop={3}>
        {data && (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex' }}>
              <TextField
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  width: '80%',
                }}
                size='small'
                select
                label='keyword'
                variant='filled'
                id='keyword-filter'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}>
                {/* // map over keywords and render a MenuItem for each keyword -check if data is loaded first */}

                {data.keywords.map((keyword) => {
                  return (
                    <MenuItem
                      key={keyword.id}
                      value={keyword.keyword}
                      sx={{ fontSize: 14 }}>
                      {keyword.keyword}
                    </MenuItem>
                  )
                })}
              </TextField>
              <Button
                type='submit'
                variant='contained'
                sx={{
                  backgroundColor: '#f39b04',
                  width: '15%',
                  marginLeft: '1rem',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#e96f3a',
                  },
                }}>
                Search
              </Button>
            </Box>
          </form>
        )}
      </Box>
    </Box>
  )
}
