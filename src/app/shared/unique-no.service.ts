import { Injectable } from '@angular/core';

@Injectable()
export class UniqueNoService {

    constructor() { }

    generate(){
        var rid = (new Date().getTime()).toString(36);
        return rid;
    }
}