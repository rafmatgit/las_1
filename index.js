import "./style.css";
import { Howl, Howler } from "howler";

const { Howl, Howler } = require("howler");

const sound = new Howl({
  src: ["./sound.mp3"],
  onload() {
    console.log(1);
  }
});

const images = {
  treasure: "💰",
  leafs: "🍃",
  tree: "🌲"
};

const trees = document.querySelectorAll(".tree");

trees.forEach(tree => {
  tree.addEventListener("mouseleave", e => (tree.innerHTML = images.tree));
  tree.addEventListener("mouseover", e => {
    if (tree.classList.contains("treasure")) {
      sound.play();
      tree.innerHTML = images.treasure;
      alert("You Win! Congratz!");
    } else tree.innerHTML = images.leafs;
  });
});
