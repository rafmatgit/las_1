import "./style.css";
import { Howl, Howler } from "howler";

const { Howl, Howler } = require("howler");

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
      tree.innerHTML = images.treasure;
      alert("You Win! Congratz!");
    } else tree.innerHTML = images.leafs;
  });
});

const sound = new Howl({
  src: [
    "C:Users\rafalOneDrivePulpitProgramowanieCoolio_feat_LV_-_Gangstas_Paradise_Qoret.com.mp3"
  ]
});
sound.play();
