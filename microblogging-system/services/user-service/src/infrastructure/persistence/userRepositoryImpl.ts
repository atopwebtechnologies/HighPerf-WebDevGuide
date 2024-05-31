import { IUserRepository } from '../../domain/repositories/userRepository';
import { UserAggregate } from '../../domain/aggregates/userAggregate';

export class UserRepositoryImpl implements IUserRepository {
    private users: Map<string, UserAggregate> = new Map();

    async create(user: UserAggregate): Promise<void> {
        this.users.set(user.user.userID, user);
        console.log("HERE", this.users)
    }

    async findById(userID: string): Promise<UserAggregate> {
        const user = this.users.get(userID);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async findByEmail(email: string): Promise<UserAggregate> {
        for (let user of this.users.values()) {
            if (user.user.email === email) {
                return user;
            }
        }
        throw new Error('User not found');
    }

    async update(user: UserAggregate): Promise<void> {
        if (!this.users.has(user.user.userID)) {
            throw new Error('User not found');
        }
        this.users.set(user.user.userID, user);
    }

    async delete(userID: string): Promise<void> {
        if (!this.users.delete(userID)) {
            throw new Error('User not found');
        }
    }
}
