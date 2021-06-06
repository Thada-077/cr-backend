export class JsonConfig{
    private _josnFliePath: string = '.\assets\json\courses.json';
    private fs = require('fs');

    public get getJsonFilePath(): string{
        return this._josnFliePath;
    }
    
    readJsonFile = () => {
        return this.fs.readFile(this._josnFliePath, 'utf8', (err, jsonString) => {
            if(err){
                console.log('อ่านไฟล์ล้มเหลว', err);
            }

            console.log('ข้อมูล : ', jsonString);
            return JSON.parse(jsonString);
        });
    };
}
