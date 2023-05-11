const BasePage = require('../basePage');

class TopNavigation extends BasePage {
    get basketIcon() {
        return $(`.icon-basket`);
    }

    get heartsIcon() {
        return $(`.icon.icon-heart2`);
    }

    navigationBarTab(tabName) {
        return $(`//a[normalize-space()='${tabName}']`);
    }

    async goTo(tabName) {
        await this.navigationBarTab(tabName).click();
    }

    async openBookmarks() {
        await this.heartsIcon.click();
    }
}

module.exports = new TopNavigation();