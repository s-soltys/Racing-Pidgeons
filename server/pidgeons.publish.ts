import {PidgeonCollection} from '../collections/pidgeons';

Meteor.publish('pidgeons', function(options: Object) {
    return PidgeonCollection.find({
        $and: [{ owner: this.userId }, { owner: { $exists: true } }]
    }, options);
});

Meteor.publish('pidgeon', function publishPidgeon(pidgeonId: string) {
    return PidgeonCollection.find({
        $and: [{ _id: pidgeonId }, { owner: this.userId }, { owner: { $exists: true } }]
    });
});