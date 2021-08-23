
import APISample from '../pageobjects/getUsers';

const chai = require('chai');

describe('Test run', () => {
    it('Print the name of the user', async() => {    
    const response = await APISample.getUserDetail();
    console.log(response.name);
    });

}); 


