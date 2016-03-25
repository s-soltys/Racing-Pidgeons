import {Pipe} from 'angular2/core';
 
@Pipe({
    name: 'displayUser'
})
export class DisplayUser {
    transform(user: Meteor.User): string {
        if (!user) {
            return 'User not found!';
        }
        
        if (user.username) {
            return user.username;
        }
        
        if (user.emails) {
            return user.emails[0].address;
        }
        
        return 'User data not found!';
    }
}