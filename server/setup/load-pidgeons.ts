import {PidgeonCollection, Pidgeon} from 'collections/pidgeons';

declare module Fake {
    export function sentence(length: number): string;
    export function fromArray(params: Object[]): Object;
}

export module LoadPidgeons {
    function generatePidgeon(owner: string): Pidgeon {
        return {
            'number': <string>Fake.sentence(1),
            'sex': <string>Fake.fromArray(['M', 'F', 'X']),
            'color': <string>Fake.fromArray(['R', 'G', 'B']),
            'owner': owner
        };
    }
    
    export function insertFakePidgeons() {
        let numberOfPidgeonsPerUser = 30;
        let users = Meteor.users.find();

        users.forEach((user: Meteor.User) => {
            let pidgeonsForUser = PidgeonCollection.find({ owner: user._id });

            let itemsToAdd = numberOfPidgeonsPerUser - pidgeonsForUser.count();
            if (itemsToAdd > 0) {
                for (let i = 0; i < itemsToAdd; i++) {
                    let pidgeon = generatePidgeon(user._id);
                    PidgeonCollection.insert(pidgeon);
                }
            }
        });
    };
}