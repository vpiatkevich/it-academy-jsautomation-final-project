const homePage = require('../pageobjects/homePage');
const experiencesListingPage = require('../pageobjects/experiencesListingPage');
const topNavigation = require('../pageobjects/components/topNavigation');
const experienceDetailsPage = require('../pageobjects/experienceDetailsPage');

describe.only('Experience Details Page', () => {

    it('EDP contains experience description', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await expect(experienceDetailsPage.experienceDescriptionText).toBeDisplayed();
    })

    it('EDP contains location info', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await expect(experienceDetailsPage.experienceLocationInfo).toBeDisplayed();
    })

    it('EDP contains important information section', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await expect(experienceDetailsPage.importantInformationSection).toBeDisplayed();
    })

    it('EDP contains booking widget', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await expect(experienceDetailsPage.bookingWidget).toBeDisplayed();
    })

    it('EDP contains "More Experiences" section', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await expect(experienceDetailsPage.moreExperiencesSection).toBeDisplayed();
    })

    it('"More experience" section offers 5 more different experiences', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.filterExperiencesByCity('Tromsø');
        await experiencesListingPage.selectFirstAvailableExperience();
        await expect(experienceDetailsPage.moreExperienceCards).toBeElementsArrayOfSize(5);
    })
    
})
