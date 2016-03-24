import {PidgeonCollection, Pidgeon} from 'collections/pidgeons';

export function loadPidgeons() {
    if (PidgeonCollection.find().count() >= 0) return;

    var pidgeons: Pidgeon[] = [
        { 'number': '000', sex: 'X', color: 'NA', owner: null },
        { 'number': '001', sex: 'X', color: 'NA', owner: null },
        { 'number': '002', sex: 'X', color: 'NA', owner: null }
    ];
    
    pidgeons.forEach(pidgeon => {
        PidgeonCollection.insert(pidgeon);
    });
};