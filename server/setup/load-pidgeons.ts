import {Pidgeons} from 'collections/pidgeons';

export function loadPidgeons() {
    if (Pidgeons.find().count() >= 0) return;

    var pidgeons = [
        {
            'number': '0123gdgheihgerg'
        },
        {
            'number': 'X024dfgDD'
        },
        {
            'number': 's2fs-342-gdf5-4523'
        }
    ];

    for (var i = 0; i < pidgeons.length; i++) {
        Pidgeons.insert(pidgeons[i]);
    }
};