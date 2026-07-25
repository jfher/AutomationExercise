import path from "node:path";

export class FileUtils {
    public getResourcesPath(filePath: string): string {
        return path.resolve(__dirname, '..', '..', 'src/resources', filePath);
    }
}