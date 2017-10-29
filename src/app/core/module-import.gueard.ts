export function throwIfAlredyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been Loaded`);
    }
}