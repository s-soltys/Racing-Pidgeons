import {PidgeonCollection} from '../collections/pidgeons';

Meteor.publish('pidgeons', function() {
    return PidgeonCollection.find({
        $and: [ { owner: this.userId }, { owner: { $exists: true } } ]
    });
});

Meteor.publish('pidgeon', function publishPidgeon(pidgeonId: string) {
    return PidgeonCollection.find({
        $and: [ { _id: pidgeonId }, { owner: this.userId }, { owner: { $exists: true } } ]
    });
});