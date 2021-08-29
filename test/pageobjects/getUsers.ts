import fetch from 'node-fetch';

class APISample {
 async getUserDetail() {
 const res = await fetch('https://gorest.co.in/public/v1/users/1');
const json = await res.json();
return json; 
}

 async createUser(){
    const res = await fetch('https://gorest.co.in/public/v1/users/1', {
        method: 'POST',
        headers: {
            Authorization: ''
        },
        body: {
            //add json body
        }

});
 
 }
}

export default new APISample();
