import {PigeonCollection} from './../../collections/pigeons';

Meteor.publish('pigeons', function(options: Object, numberSearch: string) {
    var numberRegex = { '$regex': '.*' + (numberSearch || '') + '.*', '$options': 'i' };
    
    return PigeonCollection.find({
        $and: [{ idNumber: numberRegex }, { owner: this.userId }, { owner: { $exists: true } }]
    }, options);
});

Meteor.publish('pigeon', function publishPigeon(pigeonId: string) {
    return PigeonCollection.find({
        $and: [{ _id: pigeonId }, { owner: this.userId }, { owner: { $exists: true } }]
    });
});