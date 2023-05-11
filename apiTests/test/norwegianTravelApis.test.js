const axios = require('axios');
const validator = require('jsonschema');
const getfirstavailabledatesSchema = require('../data/GET.getfirstavailabledates.v1.json');
const experiencesSchema = require('../data/POST.experiences.v1.json');
const testData = require('../../testData/testData.json')

describe(`Norwegian Travel API tests`, function () {
    describe('Get available dates for activity', function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://book.norwegian.travel/en/activitytransport/getfirstavailabledates', {
                params: {
                    'preferedDate': '03%2F13%2F2023%2000%3A00%3A00',
                    'cbisproductid': `${testData.productId}`
                  }
            })
        });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })

        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, getfirstavailabledatesSchema);
            expect(result.valid).toEqual(true)
        })
    })

    describe('Add activity to bookmarks', function () {
        let response;
        beforeAll(async () => {
            response = await axios({
                method: "POST",
                url: 'https://www.norwegian.travel/experiences',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'cookie': `${testData.addToBookmarksCookie}`,
                },
                data: 'CRAFT_CSRF_TOKEN=cc3IHmKSSLMl2GP2EOhBhvd1nUW_QzFhZ1WfeEoPtJneEHsxQtQ7Oxu0kmg4-y_sQbI0l1mNJ-2tHcsa_Q5GMx0g6iwEPYDOn2RIa3K8T08%3D&action=wishlist%2Fitems%2Ftoggle&fields%5BitemSection%5D=activity&elementId=163453'
                
        })
    });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })

        test('json schema should be valid', async () => {
            const result = await validator.validate(response.data, experiencesSchema);
            expect(result.valid).toEqual(true)
        })
    })

    describe('Send forgot password request', function () {
        let response;
        beforeAll(async () => {
            response = await axios({
                method: "POST",
                url: 'https://book.norwegian.travel/en/mypage/sendpasswordreminder',
                headers: {
                    'content-type': 'application/json'
                },
                data: '{"email":"${testData.validFormatEmail}"}'
                
        })
    });

        test('status code should be 200', async () => {
            expect(response.status).toEqual(200)
        })
    })
    
})