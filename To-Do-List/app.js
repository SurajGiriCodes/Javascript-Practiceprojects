document.querySelector("#push").onclick = function () {
  if (document.querySelector("#containtId input").value.length == 0) {
    alert("Please Enter the Task");
  } else {
    document.querySelector("#viewText").innerHTML += `
      <div class = "textlist">
        <span id="spantext">
          ${document.querySelector("#containtId input").value}
        </span>
        <button class="remove">
        <i>❌</i>
        </button>
      </div>`;
    let remove_list = document.querySelectorAll(".remove");
    for (let i = 0; i < remove_list.length; i++) {
      remove_list[i].onclick = function () {
        this.parentElement.remove();
      };
    }
  }
  document.querySelector("#containtId input").value = "";
};
