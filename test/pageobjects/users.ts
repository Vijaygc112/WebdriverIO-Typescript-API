export class Users {
    id: number;
    name : string;
    email : string;
    gender : string;
    status : string;

    constructor(userResponse: any) {
        this.id = userResponse.id;
        this.name = userResponse.name;
        this.email = userResponse.email;
        this.gender = userResponse.gender;
        this.status = userResponse.status;      
    }

}