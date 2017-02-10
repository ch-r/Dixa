PImage img;

void setup() {
  img = loadImage("image1.png", "png");
}

void draw() {
  image(img, 0, 0);
}