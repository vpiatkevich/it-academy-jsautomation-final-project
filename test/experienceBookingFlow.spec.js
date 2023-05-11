const homePage = require('../pageobjects/homePage');
const experiencesListingPage = require('../pageobjects/experiencesListingPage');
const topNavigation = require('../pageobjects/components/topNavigation');
const basketPage = require('../pageobjects/basketPage');
const experienceDetailsPage = require('../pageobjects/experienceDetailsPage');

describe('Experience Booking Flow', () => {
    
    it('By default Basket is empty', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.basketIcon.click();
        await expect(basketPage.emptyBasketText).toHaveText('Your basket is empty');
    })

    it('User can add an experience into basket', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await experienceDetailsPage.selectFirstAvailableDate();
        await experienceDetailsPage.addAdultPassenger();
        await experienceDetailsPage.clickNextButton();
        await experienceDetailsPage.clickBookButton();
        await expect(basketPage.addedActivitiesIndicator).toBeDisplayed();
    })

    it('User can remove an experience from basket', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await experienceDetailsPage.selectFirstAvailableDate();
        await experienceDetailsPage.addAdultPassenger();
        await experienceDetailsPage.clickNextButton();
        await experienceDetailsPage.clickBookButton();
        await basketPage.removeItemFromBasket();
        await expect(basketPage.emptyBasketText).toHaveText('Your basket is empty');
    })

    it('User can proceed to Payment page after adding experience into basket', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await experienceDetailsPage.selectFirstAvailableDate();
        await experienceDetailsPage.addAdultPassenger();
        await experienceDetailsPage.clickNextButton();
        await experienceDetailsPage.clickBookButton();
        await basketPage.continueToNextStepButton.click();
        await expect(browser).toHaveUrlContaining('/paymentdetails');
    })

    it('User can clear basket via canceling reservation', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await experienceDetailsPage.selectFirstAvailableDate();
        await experienceDetailsPage.addAdultPassenger();
        await experienceDetailsPage.clickNextButton();
        await experienceDetailsPage.clickBookButton();
        await basketPage.cancelReservationButton.click();
        await basketPage.areYouSureConfirmationButton.click();
        await topNavigation.basketIcon.click();
        await expect(basketPage.emptyBasketText).toHaveText('Your basket is empty');
    })
    
})
