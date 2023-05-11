const homePage = require('../pageobjects/homePage');
const experiencesListingPage = require('../pageobjects/experiencesListingPage');

describe('Introduction Activity Box', () => {
    
    it('"anywhere" is displayed as default destination filter', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await expect(homePage.destinationDropdownValue).toHaveText('anywhere')
    })

    it('"any activity" is displayed as default activity filter', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await expect(homePage.activityDropdownValue).toHaveText('any activity')
    })

    it('User can open a list of all available experiences with no filters', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await homePage.discoverOurExperiencesButton.click();
        await expect(experiencesListingPage.allFilterCheckboxes).not.toHaveElementClassContaining('checked');
    })

    it('User can open a list of experiences filtered by destination', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await homePage.destinationDropdown.click();
        await homePage.selectFilterInActivityBox('Tromsø');
        await homePage.discoverOurExperiencesButton.click();
        await expect(experiencesListingPage.tromsoDestinationCheckbox).toHaveElementClassContaining('checked');
    })

    it('User can open a list of experiences filtered by activity', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await homePage.activityDropdown.click();
        await homePage.selectFilterInActivityBox('Northern Lights');
        await homePage.closeActivityBoxFiltersButton.click();
        await homePage.discoverOurExperiencesButton.click();
        await expect(experiencesListingPage.northernLightsActivityCheckbox).toHaveElementClassContaining('checked');
    })
})
