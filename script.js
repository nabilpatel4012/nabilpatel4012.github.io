document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (event) {
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";
  });
});
