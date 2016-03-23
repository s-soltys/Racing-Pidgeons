import {PidgeonCollection, Pidgeon} from 'collections/pidgeons';

export function loadPidgeons() {
    if (PidgeonCollection.find().count() >= 0) return;

    var pidgeons: Pidgeon[] = [
        { 'number': '000', sex: 'X', color: 'NA' },
        { 'number': '001', sex: 'X', color: 'NA' },
        { 'number': '002', sex: 'X', color: 'NA' }
    ];
    
    pidgeons.forEach(pidgeon => {
        PidgeonCollection.insert(pidgeon);
    });
};