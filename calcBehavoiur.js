document.addEventListener("DOMContentLoaded", () => {
    // Convert HTMLCollection to an array using Array.from
    const btns = Array.from(document.getElementsByClassName("calcBtn"));
    const display = document.getElementById("inp");

    const clearErrorMessages = () => {
        if (
            display.value === "Enter a valid expression" ||
            display.value === "Can't calculate !!"
        ) {
            display.value = "";
        }
    };

    const parser = (res) => {
        if (res === Infinity || isNaN(res)) {
            display.value = "Can't calculate !!";
            return undefined;
        } else {
            return res;
        }
    };

    const evaluateExpression = () => {
        try {
            const result = parser(eval(display.value));
            if (result !== undefined) {
                display.value = result;
            }
        } catch (e) {
            display.value = "Enter a valid expression";
        }
    };

    display.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            clearErrorMessages();
            evaluateExpression();
        }
    });

    btns.forEach((element) => {
        element.addEventListener("click", (e) => {
            const val = e.target.innerText;
            clearErrorMessages();

            if (val === "C") {
                display.value = "";
            } else if (val === "B") {
                display.value = display.value.slice(0, -1);
            } else if (val === "=") {
                evaluateExpression();
            } else {
                display.value += val;
            }
        });

        // Adding visual feedback for button presses
        element.addEventListener("mousedown", () => {
            element.classList.add("active");
        });
        element.addEventListener("mouseup", () => {
            element.classList.remove("active");
        });
    });
});
