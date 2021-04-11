const Alert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const showmsg = document.querySelector("#showmsg");
  container.insertBefore(div, showmsg);

  setTimeout(() => document.querySelector(".alert").remove(), 1000);
};

export default Alert;
