const BasePage = require('./basePage');

class BasketPage extends BasePage {
        
    get emptyBasketText() {
        return $(`//b[@class='cb-text-muted']`);
    }

    get addedActivitiesIndicator() {
        return $(`//a[@class='cb-selected']`)
    }

    get trashCanIcon() {
        return $(`.cb--trash-can`);
    }

    get itemInBasket() {
        return $(`.cb-cart-item`);
    }

    get continueToNextStepButton() {
        return $(`//div[@class='cb-action']//div//a[contains(@class, 'cb-btn-primary')]`)
    }

    get cancelReservationButton() {
        return $(`.cb-btn-secondary.cb-btn-lg`);
    }

    get areYouSureConfirmationButton() {
        return $(`//a[@class='cb-btn cb-btn-primary cb-btn-lg cb-mfp-close']`);
    }

    async removeItemFromBasket() {
        await this.trashCanIcon.scrollIntoView();
        await this.trashCanIcon.click();
        await this.itemInBasket.waitForDisplayed({reverse:true});
    }

}

module.exports = new BasketPage();