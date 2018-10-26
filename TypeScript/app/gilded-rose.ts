export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class TypedItem extends Item {
  type: string;

  constructor(name, sellIn, quality, type) {
    super(name, sellIn, quality);
    this.type = type;
  }
}

export class GildedRose {
  items: Array<TypedItem>;

  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].type != 'cheese' && this.items[i].type != 'ticket') {
        if (this.items[i].quality > 0) {
          if (this.items[i].type != 'sulfuras') {
            if (this.items[i].type === 'conjured') {
              this.items[i].quality = this.items[i].quality - 2
            } else {
              this.items[i].quality = this.items[i].quality - 1
            }
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].type == 'ticket') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].type != 'sulfuras') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].type != 'cheese') {
          if (this.items[i].type != 'ticket') {
            if (this.items[i].quality > 0) {
              if (this.items[i].type != 'sulfuras') {
                if (this.items[i].type === 'conjured') {
                  this.items[i].quality = this.items[i].quality - 2
                } else {
                  this.items[i].quality = this.items[i].quality - 1
                }
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }
}

export const production = new GildedRose(
  [
    new TypedItem('+5 Dexterity Vest', 10, 20, 'normal'),
    new TypedItem('Aged Brie', 2, 0, 'cheese'),
    new TypedItem('Elixir of the Mongoose', 5, 7, 'normal'),
    new TypedItem('Sulfuras, Hand of Ragnaros', 0, 80, 'sulfuras'),
    new TypedItem('Backstage passes to a TAFKAL80ETC concert', 15, 20, 'ticket'),
    new TypedItem('Conjured Mana Cake', 3, 6, 'conjured'),
  ]
);
