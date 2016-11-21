import { InventoryClonePage } from './app.po';

describe('inventory-clone App', function() {
  let page: InventoryClonePage;

  beforeEach(() => {
    page = new InventoryClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
