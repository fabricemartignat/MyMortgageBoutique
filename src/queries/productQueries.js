import { gql } from '@apollo/client'

const GET_PRODUCTS = gql`
  query getProducts {
    pricing {
      rate_type
      repayment_option
      pricing
      term
      id
    }
  }
`
// fetched data including the base rate from the database in Hasura
const GET_PRICING = gql`
  query getProduct(
    $rate_type: String!
    $repayment_option: String!
    $term: Int!
  ) {
    pricing(
      where: {
        rate_type: { _eq: $rate_type }
        _and: {
          repayment_option: { _eq: $repayment_option }
          _and: { term: { _eq: $term } }
        }
      }
    ) {
      pricing
      rate_type
      term
      repayment_option
      pricing_product_feature {
        features
      }
    }

    baserate {
      base_rate
      id
    }
  }
`

export const GET_BASERATE = gql`
  query getProduct {
    baserate {
      base_rate
      id
    }
  }
`

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      excerpt
      scenario
      challenges
      solution
      conclusion
      image_url
      area
      capital_raised
      post_keywords {
        keyword {
          keyword
        }
      }
    }
  }
`

// fetch a single post by id to retrieve the post details

const GET_POSTDETAIL = gql`
  query getPost($id: Int!) {
    posts(where: { id: { _eq: $id } }) {
      id
      title
      excerpt
      scenario
      challenges
      solution
      conclusion
      image_url
      area
      capital_raised
      post_keywords {
        keyword {
          keyword
        }
      }
    }
  }
`

// fetch keywords for the filter case studies feature

const GET_KEYWORDS = gql`
  query getKeywords {
    keywords {
      id
      keyword
    }
  }
`

export { GET_PRODUCTS, GET_PRICING, GET_POSTS, GET_POSTDETAIL, GET_KEYWORDS }
