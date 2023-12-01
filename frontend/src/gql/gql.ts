/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation Mutation($deleteAdId: String!) {\n\t\tdeleteAd(id: $deleteAdId)\n\t}\n": types.MutationDocument,
    "\n\tquery Ads {\n\t\tads {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timgUrl\n\t\t\tprice\n\t\t\towner\n\t\t\tlocation\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\ttags {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n": types.AdsDocument,
    "\n\tquery Ad($adId: String!) {\n\t\tad(id: $adId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timgUrl\n\t\t\tlocation\n\t\t\towner\n\t\t\tprice\n\t\t\ttags {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.AdDocument,
    "\n\tmutation CreateAd($input: AdInput!) {\n\t\tcreateAd(input: $input) {\n\t\t\tid\n\t\t}\n\t}\n": types.CreateAdDocument,
    "\n\tquery Tags {\n\t\ttags {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": types.TagsDocument,
    "\n\tmutation CreateCategory($input: CategoryInput!) {\n\t\tcreateCategory(input: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n\t}\n": types.CreateCategoryDocument,
    "\n\tmutation CreateTag($input: TagInput!) {\n\t\tcreateTag(input: $input) {\n\t\t\tid\n\t\t}\n\t}\n": types.CreateTagDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation Mutation($deleteAdId: String!) {\n\t\tdeleteAd(id: $deleteAdId)\n\t}\n"): (typeof documents)["\n\tmutation Mutation($deleteAdId: String!) {\n\t\tdeleteAd(id: $deleteAdId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Ads {\n\t\tads {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timgUrl\n\t\t\tprice\n\t\t\towner\n\t\t\tlocation\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\ttags {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Ads {\n\t\tads {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timgUrl\n\t\t\tprice\n\t\t\towner\n\t\t\tlocation\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\ttags {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Ad($adId: String!) {\n\t\tad(id: $adId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timgUrl\n\t\t\tlocation\n\t\t\towner\n\t\t\tprice\n\t\t\ttags {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Ad($adId: String!) {\n\t\tad(id: $adId) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\timgUrl\n\t\t\tlocation\n\t\t\towner\n\t\t\tprice\n\t\t\ttags {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateAd($input: AdInput!) {\n\t\tcreateAd(input: $input) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateAd($input: AdInput!) {\n\t\tcreateAd(input: $input) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Tags {\n\t\ttags {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Tags {\n\t\ttags {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateCategory($input: CategoryInput!) {\n\t\tcreateCategory(input: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateCategory($input: CategoryInput!) {\n\t\tcreateCategory(input: $input) {\n\t\t\tid\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateTag($input: TagInput!) {\n\t\tcreateTag(input: $input) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateTag($input: TagInput!) {\n\t\tcreateTag(input: $input) {\n\t\t\tid\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;