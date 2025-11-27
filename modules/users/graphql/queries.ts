import { gql } from '@apollo/client'

/**
 * GraphQL query to fetch all users
 */
export const GET_USERS = gql`
	query GetUsers {
		users {
			id
			name
			email
			createdAt
		}
	}
`
