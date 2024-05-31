import { User } from '../../domain/entities/user';
import { Profile } from '../../domain/value-objects/profile';
import { UserAggregate } from '../../domain/aggregates/userAggregate';
import { IUserRepository } from '../../domain/repositories/userRepository';
import { generateUniqueId } from '../../infrastructure/utils/generateUniqueId';

class UserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async register(username: string, email: string, password: string): Promise<void> {
        const userID = generateUniqueId();
        const newUser = new User(userID, username, email, password);
        const profile = new Profile('', '', '', '');
        const userAggregate = new UserAggregate(newUser, profile);
        await this.userRepository.create(userAggregate);
    }

    async login(email: string, password: string): Promise<UserAggregate> {
        const user = await this.userRepository.findByEmail(email);
        if (user && user.user.password === password) {
            return user;
        } else {
            throw new Error('Invalid email or password');
        }
    }

    async updateProfile(userID: string, profile: Profile): Promise<void> {
        const userAggregate = await this.userRepository.findById(userID);
        if (!userAggregate) {
            throw new Error('User not found');
        }
        userAggregate.profile = profile;
        await this.userRepository.update(userAggregate);
    }
}

export default UserService;
