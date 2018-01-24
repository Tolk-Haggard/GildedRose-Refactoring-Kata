import { expect } from 'chai';
import { Item, GildedRose, production } from '../app/gilded-rose';

describe('Run It', function() {
    console.log('BEFORE');
    production.items.forEach(item => {
        console.log(JSON.stringify(item));
    });

    production.updateQuality();

    console.log('\n\nAFTER');
    production.items.forEach(item => {
        console.log(JSON.stringify(item));
    });
});

describe('Gilded Rose', function() {

    it('should foo', function() {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('fixme');
    });

});
