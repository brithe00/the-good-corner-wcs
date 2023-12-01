import 'reflect-metadata';
import { dataSource } from './config/db';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { AdResolver } from './resolvers/Ad';
import { CategoryResolver } from './resolvers/Category';
import { TagResolver } from './resolvers/Tag';

const start = async () => {
	await dataSource.initialize();

	const schema = await buildSchema({
		resolvers: [AdResolver, CategoryResolver, TagResolver],
	});

	const server = new ApolloServer({ schema });

	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
	});

	console.log(`🚀  Server ready at: ${url}`);
};

start();
