import { User } from 'src/app/shared/models';
import { UserService } from 'src/app/core/services/application/user.service';

export class UserHelper {
    private user: User;

    constructor(private userService: UserService) {
        console.log("UserHelper");
    }

    public getUserDetails(id: number): User {
        this.userService.getById(id).subscribe((user: User) => {
            this.user = user;
        });
        return this.user;
    }
}