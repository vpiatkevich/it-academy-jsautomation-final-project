const BasePage = require('./basePage');

class HeartsPage extends BasePage {
        
    get noBookmarksError() {
        return $(`.empty-list-header.mb-30`);
    }

    get removeFromBasketButton() {
        return $(`//button[@class='trash-trash btn-remove-from-cart']`);
    }

    get clearAllButton() {
        return $(`button[class='btn btn-secondary trash']`);
    }

    get addedExperienceCards() {
        return $$(`//div[@class='card card-horizontal rounded mb-30']`);
    }

}

module.exports = new HeartsPage();