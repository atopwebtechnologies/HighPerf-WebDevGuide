import { UserAggregate } from '../aggregates/userAggregate';

export interface IUserRepository {
    create(user: UserAggregate): Promise<void>;
    findById(userID: string): Promise<UserAggregate>;
    findByEmail(email: string): Promise<UserAggregate>;
    update(user: UserAggregate): Promise<void>;
    delete(userID: string): Promise<void>;
}
