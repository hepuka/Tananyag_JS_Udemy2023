function htmlspecialchars(formData) {
  return formData
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  //    return formData.replace(
  //      /[<>"&]/g,
  //      (ch) => ({ "<": "&lt;", ">": "&gt;", '"': "&quot;", "&": "&amp;" }[ch])
  //    );

  //   var Letters = {
  //     "<": "&lt;",
  //     ">": "&gt;",
  //     '"': "&quot;",
  //     "&": "&amp;",
  //   };

  //   return formData
  //     .split("")
  //     .map((c) => Letters[c] || c)
  //     .join("");
}
console.log(htmlspecialchars("<h2>Hello World</h2>"));
