const BasePage = require('./basePage');

class HomePage extends BasePage {

    get destinationDropdownValue() {
        return $(`#titleValue`);
    }

    get destinationDropdown(){
        return $(`.title-opener`);
    }

    get activityDropdownValue() {
        return $(`#activityValue`);
    }

    get activityDropdown(){
        return $(`.activity-opener`);
    }

    get discoverOurExperiencesButton() {
        return $(`.d-none.btn`);
    }

    get closeActivityBoxFiltersButton() {
        return $(`.close.selectBtn`);
    }

    activityBoxFilters(filterOption){
        return $(`//label//span[contains(text(),'${filterOption}')]`)
    }

    selectFilterInActivityBox(filterOption) {
        this.activityBoxFilters(filterOption).click();
    }
}

module.exports = new HomePage;