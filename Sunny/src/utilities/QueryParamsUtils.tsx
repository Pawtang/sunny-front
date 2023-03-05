
export const mapQueryParamsToObject = (p : string) => {
    if (p === "" || !p) {
        return {};
    }
    const obj: {[key: string] : string} = {};
    const params = p.substring(1).split('&');
    params.forEach(param => {
        const split = param.split("=");
        obj[split[0]] = split[1];
    })

    return obj;
}