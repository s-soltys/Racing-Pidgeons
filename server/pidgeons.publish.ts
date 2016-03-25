import {PidgeonCollection} from '../collections/pidgeons';

Meteor.publish('pidgeons', function(options: Object, numberSearch: string) {
    var numberRegex = { '$regex': '.*' + (numberSearch || '') + '.*', '$options': 'i' };
    
    return PidgeonCollection.find({
        $and: [{ number: numberRegex }, { owner: this.userId }, { owner: { $exists: true } }]
    }, options);
});

Meteor.publish('pidgeon', function publishPidgeon(pidgeonId: string) {
    return PidgeonCollection.find({
        $and: [{ _id: pidgeonId }, { owner: this.userId }, { owner: { $exists: true } }]
    });
});