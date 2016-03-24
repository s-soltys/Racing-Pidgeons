import {PidgeonCollection} from '../collections/pidgeons';

Meteor.publish('pidgeons', function() {
    return PidgeonCollection.find({
        $or: [
            {
                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
            }
        ]
    });
});