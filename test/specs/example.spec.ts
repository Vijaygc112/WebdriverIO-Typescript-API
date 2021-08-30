
import APISample from '../pageobjects/getUsers';
import { Users }  from '../pageobjects/users'

// describe('Create a user', () => {
//     it('Create a user by test123'), () => {


//     } 
// }
// )


describe('Test run', () => {
    it('Print the name of the user', async ()=> {    
    const jsonresponse =  await APISample.getUserDetail();
    console.log(jsonresponse);
    console.log(jsonresponse.data.name);

    const user1 = new Users(jsonresponse.data);

    console.log('>>>>>>>>>>>>>>>')
    console.log(user1);
    console.log('>>>>>>>>>>>>>>>')
    console.log('>>>>>>>>>>>>>>>')
    console.log(JSON.stringify(user1));
    console.log('>>>>>>>>>>>>>>>')


});

}); 


