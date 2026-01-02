let currentGroup = {
  name: "",
  currency: "",
  members: []
};

function showCreateGroup() {
  hideAll();
  document.getElementById("createGroupPage").classList.add("active");
}

function goHome() {
  hideAll();
  document.getElementById("welcomePage").classList.add("active");
}

function hideAll() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
}

function createGroup() {
  const name = document.getElementById("groupName").value;
  const currency = document.getElementById("currency").value;

  if (!name) {
    alert("Enter group name");
    return;
  }

  currentGroup.name = name;
  currentGroup.currency = currency;
  currentGroup.members = [];

  localStorage.setItem("group", JSON.stringify(currentGroup));

  openGroup();
}

function openGroup() {
  hideAll();
  document.getElementById("groupPage").classList.add("active");
  document.getElementById("groupTitle").innerText = currentGroup.name;
}

function addMember() {
  const member = document.getElementById("memberName").value;
  if (!member) return;

  currentGroup.members.push(member);
  localStorage.setItem("group", JSON.stringify(currentGroup));

  document.getElementById("memberList").innerText =
    "Members: " + currentGroup.members.join(", ");

  document.getElementById("memberName").value = "";
}
