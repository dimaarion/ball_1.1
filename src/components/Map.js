import { getObject, scenaWidth, scenaHeigiht, size } from "../action";
export default class Map {
  x = 0;
  y = 0;
  width = 1250;
  height = 1250;
  name;
  img;
  image;
  constructor(name, img) {
    this.img = img;
    this.name = name;
  }
  loadImg(p5) {
    this.image = p5.loadImage(this.img);
    if (getObject(this.name).length !== 0) {
      //  console.log(getObject(this.name));
    } else {
      console.log("Error");
    }
  }

  create() {}

  view(p5) {
    if (this.image) {
      p5.image(this.image, 0, 0, size(scenaWidth), size(scenaHeigiht));
    }
  }
}
