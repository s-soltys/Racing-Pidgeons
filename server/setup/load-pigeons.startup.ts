import {PigeonCollection, Pigeon} from '../../collections/pigeons';
import * as faker from 'faker';

export module LoadPigeons {
    export function generatePigeon(owner: string): Pigeon {
        return {
            idNumber: faker.internet.ip(),
            sex: faker.internet.userName(),
            color: faker.internet.userName(),
            owner: owner,
            father: null,
            mother: null
        };
    }
    
    export function insertFakePigeons() {
        let numberOfPigeonsPerUser = 20;
        let users = Meteor.users.find();

        users.forEach((user: Meteor.User) => {
            let pigeonsForUser = PigeonCollection.find({ owner: user._id });

            let itemsToAdd = numberOfPigeonsPerUser - pigeonsForUser.count();
            
            console.log(`Adding ${ itemsToAdd } pigeons to ${ user._id }`);
            
            if (itemsToAdd > 0) {
                for (let i = 0; i < itemsToAdd; i++) {
                    let pigeon = generatePigeon(user._id);
                    PigeonCollection.insert(pigeon);
                }
            }
        });
    };
}