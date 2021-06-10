import { rejects } from "assert";
import { resolve } from "path";
import { Courses } from "./interfaces/courses.interface";

export class JsonConfig{
    private _josnFliePath: string = './assets/json/courses.json';
    private fs = require('fs');

    public get getJsonFilePath(): string{
        return this._josnFliePath;
    }
    
    readJsonFile = () => {
        return new Promise<Courses[]>((resolve, reject) =>{
            this.fs.readFile(this._josnFliePath, 'utf8', (err, jsonString) => {
                if(err){
                    console.log('อ่านไฟล์ล้มเหลว', err);
                    reject(err);
                    return;
                }
                resolve(JSON.parse(jsonString));
            });
        })
       
    };
}

