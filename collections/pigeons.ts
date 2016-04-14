export const PigeonCollection = new Mongo.Collection<Pigeon>('pigeons');

export interface Pigeon {
    _id?: string;
    idNumber: string;
    sex: string;
    color: string;
    owner: string;
    mother: string;
    father: string;
    status?: string;
}

PigeonCollection.allow({
    insert: function(userId: string, pigeon: Pigeon) {
        var user = Meteor.user();
        return !!user;
    },
    update: function(userId: string, pigeon: Pigeon) {
        var user = Meteor.user();
        return !!user;
    },
    remove: function(userId: string, pigeon: Pigeon) {
        var user = Meteor.user();
        return !!user;
    }
});