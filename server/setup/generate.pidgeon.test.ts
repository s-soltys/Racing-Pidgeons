import {LoadPidgeons} from './load-pidgeons';

describe('Setup', () => {
    it('generates pidgeons', () => {
        let owner = "xxx";
        var pidgeon = LoadPidgeons.generatePidgeon(owner);
        
        chai.assert.equal(pidgeon.owner, owner);
        chai.assert.isNotNull(pidgeon.sex);
        chai.assert.isNotNull(pidgeon.color);
        chai.assert.isNotNull(pidgeon.number);
    });
});