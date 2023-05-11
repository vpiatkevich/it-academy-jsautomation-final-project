const BasePage = require('./basePage');

class ExperienceDetailsPage extends BasePage {

    get datePickerSection() {
        return $(`.cb-js-datepicker-section`);
    }

    get datesLoadingSpinner() {
        return $(`.cb-spinner-overlay.cb-js-date-loader`);
    }

    get bookingLoadingSpinner() {
        return $(`.cb-spinner-overlay.cb-js-booking-loader`);
    }

    get moreExperiencesSection() {
        return $(`.info-slider-section`)
    }

    get moreExperiencesHeader() {
        return $(`//h3[normalize-space()='More experiences at this destination']`)
    }

    get experienceDescriptionText() {
        return $(`.intro-text`);
    }

    get experienceLocationInfo() {
        return $(`.location.border-bottom-gray`);
    }

    get bookingWidget() {
        return $(`#booking-widget`);
    }

    get importantInformationSection() {
        return $(`.information.border-bottom-gray`)
    }

    get moreExperienceCards() {
        return $$(`.card-slide.slick-active`);
    }

    get nextButton() {
        return $(`//a[contains(@class, 'cb-test-next-btn')]`);
    }

    get bookButton() {
        return $(`//button[contains(@class, 'cb-test-book-btn')]`);
    }
    
    get freeDatesInDatePicker() {
        return $$(`//td[contains(@data-handler,'selectDay')]`);
    }

    get plusButtonsForPassengers() {
        return $$(`//button[contains(@class, 'cb-test-plus-btn')]`)
    }

    async selectFirstAvailableDate(){
        await this.datePickerSection.scrollIntoView();
        await this.datesLoadingSpinner.waitForDisplayed({reverse:true});
        await this.freeDatesInDatePicker[0].click();
    }

    async addAdultPassenger(){
        await this.bookingLoadingSpinner.waitForDisplayed({reverse:true});
        await this.plusButtonsForPassengers[0].scrollIntoView({ block: 'center', inline: 'center' });
        await this.plusButtonsForPassengers[0].click();
    }

    async addChildPassenger(){
        await this.bookingLoadingSpinner.waitForDisplayed({reverse:true});
        await this.plusButtonsForPassengers[1].scrollIntoView({ block: 'center', inline: 'center' });
        await this.plusButtonsForPassengers[1].click();
    }

    async clickNextButton(){
        await this.bookingLoadingSpinner.waitForDisplayed({reverse:true});
        await this.nextButton.waitForExist();
        await this.nextButton.waitForDisplayed({timeout:3000});
        await this.nextButton.scrollIntoView({ block: 'center', inline: 'center' });
        await this.nextButton.click();
    }

    async clickBookButton(){
        await this.bookingLoadingSpinner.waitForDisplayed({reverse:true});
        await this.bookButton.waitForDisplayed();
        await this.bookButton.click();
    }

}

module.exports = new ExperienceDetailsPage();