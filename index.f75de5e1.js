"use strict";
const inputs = document.querySelectorAll(".field-text");
for (const input of inputs){
    const label = document.createElement("label");
    label.classList.add("field-label");
    if (!input.id) input.id = "sign-in-" + input.name;
    label.setAttribute("for", input.id);
    label.textContent = input.name;
    input.before(label);
    const placeholderText = input.name[0].toUpperCase() + input.name.slice(1);
    input.setAttribute("placeholder", placeholderText);
}

//# sourceMappingURL=index.f75de5e1.js.map
