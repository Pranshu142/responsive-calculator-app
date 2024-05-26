document.addEventListener("DOMContentLoaded", () => {
    // Convert HTMLCollection to an array using Array.from
    const btns = Array.from(document.getElementsByClassName("calcBtn"));
    const display = document.getElementById("inp");
    let parser = (res) => {
        if (res == Infinity || isNaN(res)) {
            display.value = "Can't calculate !!";
            return undefined;
        }
        else return res;
    }

    display.addEventListener("keypress", (e) => {
        if (
            display.value === "Enter a valid expression" ||
            display.value === "Can't calculate !!"
        ) {
            display.value = "";
        }
        try {

            if (e.key === "Enter")

                if (parser(eval(display.value)) != undefined)
                    display.value = parser(eval(display.value));
        } catch (e) {
            display.value = "Enter a valid expression";
        }
    });

    btns.forEach((element) => {
        element.addEventListener("click", (e) => {
            console.log(e);
            console.log(e.target.innerText);
            let val = e.target.innerText;
            if (
                display.value === "Enter a valid expression" ||
                display.value === "Can't calculate !!"
            ) {
                display.value = "";
            }
            if (val != "B" && val != "C" && val != "=") display.value += val;
            if (val === "C") display.value = "";
            if (val === "B") {
                let first = display.value;
                display.value = first.substring(0, first.length - 1);
            }
            if (val === "=") {
                try {
                    if (parser(eval(display.value)) != undefined)
                        display.value = parser(eval(display.value));
                } catch (e) {
                    display.value = "Enter a valid expression";
                }
            }
        });
    });
});
