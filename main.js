let switchButtons = document.querySelectorAll(".switchbox");
switchButtons.forEach(x => {
    let checkBox = x.querySelector("input");
    x.innerHTML += `
        <div>
            <span>${x.dataset.true}</span>
            <span>${x.dataset.false}</span>
            <div class="pointer"></div>
        </div>
    `;
    checkBox.addEventListener("change", (e) => {
    });
});