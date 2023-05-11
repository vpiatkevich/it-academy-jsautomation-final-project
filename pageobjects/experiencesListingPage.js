const BasePage = require('./basePage');

class ExperiencesListingPage extends BasePage {
        
    get tromsoDestinationCheckbox() {
        return $(`#destination-checkbox-20`);
    }

    get northernLightsActivityCheckbox() {
        return $(`#type-of-activity-checkbox-4863`);
    }

    get allFilterCheckboxes() {
        return $$(`//input[@type='checkbox']`);
    }

    get allAddToHeartsButtons() {
        return $$(`//i[@class='text-danger icon-heart2']`);
    }

    get readMoreButtons() {
        return $$(`//a[@class='btn btn-primary']`);
    }

    get geoTagsOnListedExperiences() {
        return $$(`//span[@class='fz-14 text-primary fw-bold']`);
    }

    filterLabel(name) {
        return $(`//label[normalize-space()='${name}']`);
    }

    async selectFirstAvailableExperience(){
        await this.readMoreButtons[0].click();
    }

    async filterExperiencesByCity(cityName){
        await this.filterLabel(cityName).click()
        await this.geoTagsOnListedExperiences[0].waitUntil(async function () {
            return (await this.getText()) === `${cityName}`
        }, {
            timeout: 5000,
            timeoutMsg: 'Geotags on page expected to be different after 5s due to enabling some city filter'
        })
    }

    async addExperienceToBookmarksByIndex(index){
        await this.allAddToHeartsButtons[index].click();
    }
}

module.exports = new ExperiencesListingPage();