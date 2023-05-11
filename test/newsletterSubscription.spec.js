const homePage = require('../pageobjects/homePage');
const newsletterBox = require('../pageobjects/components/newsletterBox');
const testData = require("../testData/testData.json")

describe('Newsletter subcription', () => {
    
    it('User can submit newsletter form using valid email', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await newsletterBox.submitEmail(testData.validFormatEmail);
        await expect(newsletterBox.messageAfterSubmit).toHaveText('Thanks for submitting the form.');
    })

    it('User cannot submit newsletter form using empty email field', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await newsletterBox.submitEmail(testData.emptyField);
        await expect(newsletterBox.emailFieldErrorMessage).toHaveText('Please complete this required field.');
    })

    it('User cannot submit newsletter form using email with invalid format', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await newsletterBox.submitEmail(testData.invalidFormatEmail);
        await expect(newsletterBox.emailFieldErrorMessage).toHaveText('Email must be formatted correctly.');
    })

    it('Newsletter box contains link to Privacy Policy page', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await newsletterBox.personalDataLink.click();
        await expect(browser).toHaveUrlContaining('/privacy');
    })
    
})
