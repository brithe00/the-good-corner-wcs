import { Ad } from 'src/entities/ad';
import { Query, Resolver } from 'type-graphql';

@Resolver(Ad)
class AdResolver {
	@Query(() => [Ad])
	read() {
		return Ad.find();
	}
}

export { AdResolver };
