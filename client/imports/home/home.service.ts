
import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {
    private subList: Array<any> = [];
    constructor() { }

    subscribe(cb: any) {
        if (cb) this.subList.push(cb);
    }

    publish(data: any) {
        this.subList.forEach((cb: any, i)=>{
            cb(data);
        });
    }
}