import scena from "../scena/scena.json";

export const scenaWidth = scena.width * scena.tileheight;
export const scenaHeigiht = scena.height * scena.tileheight;
export const scenaSize = (scenaWidth + scenaHeigiht) / 3;
export function getObjects(name) {
    let layers = scena.layers;
    let nameObject = name;
    let arrObject = [];
    let layersObjects = layers
        .map((x) => x.objects)
        .filter((f) => f !== undefined);
    layersObjects.map((x, i) =>
        x
            .filter((f2) => f2.name === nameObject)
            .map((x2, j) => (arrObject[j] = x2))
    );
    return arrObject;
}

export function getObject(name) {
    return scena.layers
        .filter((f, i) => f.name === name)
        .map((x, i) => x)[0];
}
export function getObjectData(name) {
    return scena.layers
        .filter((f, i) => f.name === name)
        .map((x, i) => x)[0].data;
}

export function getProperties(name) {
    if (this.getObject(name).properties) {
        return getObject(name).properties.map((pos) => pos);
    } else {
        return [];
    }
}

export function procentIn(n, p) {
    return (n / 100) * p;
}
export function procent(x) {
    let r = window.innerWidth + window.innerHeight;
    return procentIn(r, x);
}
export function procentX(x) {
    let r = window.innerWidth;
    return procentIn(r, x);
}
export function procentY(x) {
    let r = window.innerHeight;
    return procentIn(r, x);
}
export function procentInv(n, p) {
    return (p * 100) / n;
}

export function size(num) {
    return procent(procentInv(scenaSize, num));
}