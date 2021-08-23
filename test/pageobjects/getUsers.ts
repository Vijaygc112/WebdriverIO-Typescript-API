import fetch from 'node-fetch';
interface Users {
    name : string;
    gender : string;
    probability : number;
    count : number;
}

class APISample {
 async getUserDetail(): Promise<any> {
return fetch('https://api.genderize.io?name=luc')
        .then(res => res.json())
        .then(res => {
            return res as Users[]
        });
    }
}

export default new APISample();