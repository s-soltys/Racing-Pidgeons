export const PidgeonCollection = new Mongo.Collection<Pidgeon>('pidgeons');

export interface Pidgeon {
    _id?: string;
    idNumber: string;
    sex: string;
    color: string;
    owner: string;
    mother: string;
    father: string;
    status?: string;
}

PidgeonCollection.allow({
    insert: function(userId: string, pidgeon: Pidgeon) {
        var user = Meteor.user();
        return !!user;
    },
    update: function(userId: string, pidgeon: Pidgeon) {
        var user = Meteor.user();
        return !!user;
    },
    remove: function(userId: string, pidgeon: Pidgeon) {
        var user = Meteor.user();
        return !!user;
    }
});