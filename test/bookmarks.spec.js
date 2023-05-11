const homePage = require('../pageobjects/homePage');
const topNavigation = require('../pageobjects/components/topNavigation');
const experiencesListingPage = require('../pageobjects/experiencesListingPage');
const heartsPage = require('../pageobjects/heartsPage');

describe('Bookmarks (Hearts)', () => {

    it('By default Bookmarks list is empty', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.openBookmarks();
        await expect(heartsPage.noBookmarksError).toHaveText(`Oh no! Your list is empty...`);
    })

    it('User can add an experience into Bookmarks list', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.addExperienceToBookmarksByIndex(0);
        await topNavigation.openBookmarks();
        await expect(heartsPage.noBookmarksError).not.toBeDisplayed();
    })

    it('User can remove a single experience from Bookmarks list', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.addExperienceToBookmarksByIndex(0);
        await topNavigation.openBookmarks();
        await heartsPage.removeFromBasketButton.click();
        await expect(heartsPage.noBookmarksError).toHaveText(`Oh no! Your list is empty...`);
    })

    it('User can add multiple experiences into Bookmarks list', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.addExperienceToBookmarksByIndex(0);
        await experiencesListingPage.addExperienceToBookmarksByIndex(1);
        await topNavigation.openBookmarks();
        await expect(heartsPage.addedExperienceCards).toBeElementsArrayOfSize(2);
    })

    it('User can remove multiple experiences using "Clear all" button', async () => {
        await homePage.navigate('https://www.norwegian.travel/');
        await topNavigation.goTo('Things to do');
        await experiencesListingPage.addExperienceToBookmarksByIndex(0);
        await experiencesListingPage.addExperienceToBookmarksByIndex(1);
        await topNavigation.openBookmarks();
        await heartsPage.clearAllButton.click();
        await expect(heartsPage.noBookmarksError).toHaveText(`Oh no! Your list is empty...`);
    })
    
})
