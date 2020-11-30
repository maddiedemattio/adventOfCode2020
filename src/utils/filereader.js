import { promises } from 'fs';

const filereader = async (filePath) => {
    try {
        let data = await promises.readFile(filePath, "utf-8");
        return data;
    } catch (e) {
        console.log("e", e);
    }
}

export default filereader