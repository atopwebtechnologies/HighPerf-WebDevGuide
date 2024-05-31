import { User } from '../entities/user';
import { Profile } from '../value-objects/profile';

export class UserAggregate {
    constructor(
        public user: User,
        public profile: Profile
    ) { }
}
