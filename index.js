import "./style.css";

const images = {
  treasure: "💰",
  leafs: "🍃",
  tree: "🌲"
};

const trees = document.querySelectorAll(".tree");
const treasure = document.querySelector(".treasure");

trees.forEach(tree => {
  tree.addEventListener("mouseleave", e => (tree.innerHTML = images.tree));
  tree.addEventListener("mouseover", e => {
    if (tree.classList.contains("treasure")) {
      tree.innerHTML = images.treasure;
      alert("You Win! Congratz!");
    } else tree.innerHTML = images.leafs;
  });
});
