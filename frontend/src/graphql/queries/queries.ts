import { graphql } from '../../gql';
import gql from 'graphql-tag';

export const GET_CATEGORIES = gql(/* GraphQL */ `
	query Categories {
		categories {
			id
			title
		}
	}
`);
