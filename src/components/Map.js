import { getObject, scenaWidth, scenaHeigiht, size } from "../action";
export default class Map {
  x = 0;
  y = 0;
  width = 1250;
  height = 1250;
  name;
  img;
  image;
  constructor(img) {
    this.img = img;
    this.name = "";
  }
  loadImg(p5, img) {
    this.image = p5.loadImage(img);
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
