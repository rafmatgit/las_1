import "./style.css";

const images = {
  treasure: "💰",
  leafs: "🍃"
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
