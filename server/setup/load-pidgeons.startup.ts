import {PidgeonCollection, Pidgeon} from '../../collections/pidgeons';
import * as faker from 'faker';

export module LoadPidgeons {
    export function generatePidgeon(owner: string): Pidgeon {
        return {
            idNumber: faker.internet.ip(),
            sex: faker.internet.userName(),
            color: faker.internet.userName(),
            owner: owner,
            father: null,
            mother: null
        };
    }
    
    export function insertFakePidgeons() {
        let numberOfPidgeonsPerUser = 20;
        let users = Meteor.users.find();

        users.forEach((user: Meteor.User) => {
            let pidgeonsForUser = PidgeonCollection.find({ owner: user._id });

            let itemsToAdd = numberOfPidgeonsPerUser - pidgeonsForUser.count();
            
            console.log(`Adding ${ itemsToAdd } pidgeons to ${ user._id }`);
            
            if (itemsToAdd > 0) {
                for (let i = 0; i < itemsToAdd; i++) {
                    let pidgeon = generatePidgeon(user._id);
                    PidgeonCollection.insert(pidgeon);
                }
            }
        });
    };
}