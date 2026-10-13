import oriImage from "./ori.jpg";
import {greeting} from "./greeting.js";
import "./styles.css";

const image = document.createElement("img");
image.src = oriImage;

document.appendChild(image);

console.log(greeting);  