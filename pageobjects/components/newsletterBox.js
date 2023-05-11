const BasePage = require('../basePage');
const { Key } = require('webdriverio');

class NewsletterBox extends BasePage {
    get emailInputField() {
        return $(`//input[@id='email-3971bc63-86d6-4dce-b394-bb646d9d015e']`);
    }

    get messageAfterSubmit() {
        return $(`//div[contains(@class,'submitted-message')]`);
    }

    get emailFieldErrorMessage() {
        return $(`.hs-error-msg.hs-main-font-element`);
    }

    get personalDataLink() {
        return $(`.personal-data-link`);
    }

    async submitEmail(email) {
        await this.emailInputField.waitForExist({timeout: 2000});
        await this.emailInputField.scrollIntoView();
        await this.emailInputField.setValue(email);
        await this.emailInputField.click();
        await browser.keys(Key.Enter);
    }
}

module.exports = new NewsletterBox();