import {LoadPigeons} from './load-pigeons';

describe('Setup', () => {
    it('generates pigeons', () => {
        let owner = "xxx";
        var pigeon = LoadPigeons.generatePigeon(owner);
        
        chai.assert.equal(pigeon.owner, owner);
        chai.assert.isNotNull(pigeon.sex);
        chai.assert.isNotNull(pigeon.color);
        chai.assert.isNotNull(pigeon.number);
    });
});