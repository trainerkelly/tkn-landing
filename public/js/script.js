const bodyId = document.getElementById("body");
const subscribeBtn = document.getElementById("mc-embedded-subscribe");
const modeBtn = document.getElementById("mode-btn");
const modeIcon = document.getElementById("mode-icon");
const currentMode = localStorage.getItem('mode');

// functions 
function subscribeBtnProgress() {
    subscribeBtn.textContent = "Subscribing...";
    setTimeout(subscribeBtnConfirmation, 1000);

} // ChatGPT helped 

function subscribeBtnConfirmation() {
    subscribeBtn.textContent = "Subscribed!";
    setTimeout(resetSubscribeBtn, 1200);

} // ChatGPT helped 

function resetSubscribeBtn() {
    subscribeBtn.textContent = "Subscribe";
} // ChatGPT helped 

function modeToggle(e) {
    e.preventDefault(); 

    const currentMode = bodyId.getAttribute("data-mode");

    if (currentMode === "light") {
        darkMode();    
    }

    if (currentMode === "dark") {
        lightMode();
    }
    
};

function lightMode() {
    const currentMode = bodyId.getAttribute("data-mode");
    subscribeBtn.classList.add('mode-btn-transition');

    if (currentMode === "dark") {
        bodyId.setAttribute("data-mode", "light");
        modeIcon.innerHTML = `
            <svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <g transform="matrix(1.20412,0,0,1.20412,-2.49724,-2.4495)">
                <g transform="matrix(0.499275,0,0,0.499275,4.97407,6.07097)">
                    <circle cx="14.072" cy="11.875" r="10.115" style="stroke-width:1px;"/>
                </g>
                <g transform="matrix(1,0,0,1.27479,0.0777502,1.20527)">
                    <path d="M11.341,4.506C11.341,4.506 9.798,4.178 11.008,3.008C12.219,1.838 12,0.971 12,0.971C12,0.971 13.569,2.597 12.318,3.423C11.067,4.249 12.539,4.506 12.539,4.506L11.341,4.506Z"/>
                </g>
                <g transform="matrix(0.707107,0.707107,-0.90141,0.90141,11.3489,-3.96841)">
                    <path d="M11.341,4.506C11.341,4.506 9.798,4.178 11.008,3.008C12.219,1.838 12,0.971 12,0.971C12,0.971 13.569,2.597 12.318,3.423C11.067,4.249 12.539,4.506 12.539,4.506L11.341,4.506Z"/>
                </g>
                <g transform="matrix(2.22045e-16,1,-1.27479,2.22045e-16,22.7947,0.343191)">
                    <path d="M11.341,4.506C11.341,4.506 9.798,4.178 11.008,3.008C12.219,1.838 12,0.971 12,0.971C12,0.971 13.569,2.597 12.318,3.423C11.067,4.249 12.533,4.506 12.533,4.506L11.341,4.506Z"/>
                </g>
                <g transform="matrix(-0.707107,0.707107,-0.90141,-0.90141,27.6993,11.4853)">
                    <path d="M11.248,4.44C11.248,4.44 9.798,4.178 11.008,3.008C12.219,1.838 12,0.971 12,0.971C12,0.971 13.569,2.597 12.318,3.423C11.067,4.249 12.539,4.506 12.539,4.506L11.248,4.44Z"/>
                </g>
                <g transform="matrix(-1,2.77556e-16,-4.44089e-16,-1.27479,23.6734,22.7947)">
                    <path d="M11.341,4.506C11.341,4.506 9.798,4.178 11.008,3.008C12.219,1.838 12,0.971 12,0.971C12,0.971 13.569,2.596 12.318,3.423C11.114,4.219 12.828,4.446 12.539,4.506L11.341,4.506Z"/>
                </g>
                <g transform="matrix(-0.707107,-0.707107,0.90141,-0.90141,12.7304,27.7895)">
                    <path d="M11.283,4.406C11.283,4.406 9.798,4.178 11.008,3.008C12.219,1.838 12,0.971 12,0.971C12,0.971 13.569,2.597 12.318,3.423C11.067,4.249 12.517,4.433 12.517,4.433L11.283,4.406Z"/>
                </g>
                <g transform="matrix(-4.44089e-16,-1,1.27479,-6.66134e-16,1.28457,23.6734)">
                    <path d="M11.355,4.444C11.355,4.444 9.798,4.178 11.008,3.008C12.219,1.838 12,0.971 12,0.971C12,0.971 13.569,2.597 12.318,3.423C11.067,4.249 12.53,4.444 12.53,4.444L11.355,4.444Z"/>
                </g>
                <g transform="matrix(0.707107,-0.707107,0.90141,0.90141,-3.91183,12.6753)">
                    <path d="M12.539,4.506C12.539,4.506 11.231,4.483 11.093,4.427C10.714,4.272 10.12,3.866 11.008,3.008C12.219,1.838 12,0.971 12,0.971C12,0.971 13.569,2.597 12.318,3.423C11.067,4.249 12.539,4.506 12.539,4.506Z"/>
                </g>
            </g>
        </svg>
      `;
        localStorage.setItem('mode', 'light');
        // console.log("Setting to light mode!");
        // console.log(bodyId.dataset.mode);
    }
}

function darkMode() {
    const currentMode = bodyId.getAttribute("data-mode");

    if (currentMode === "light") {
        bodyId.setAttribute("data-mode", "dark")
        modeIcon.innerHTML = `
            <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <g transform="matrix(1.16859,0.796569,-0.796569,1.16859,5.03694,-9.02652)">
                <path d="M7.657,3.628C8.777,2.973 10.079,2.598 11.469,2.598C15.645,2.598 19.035,5.989 19.035,10.165C19.035,14.341 15.645,17.731 11.469,17.731C11.05,17.731 10.639,17.697 10.239,17.632C13.602,17.064 16.167,14.135 16.167,10.612C16.167,6.682 12.977,3.492 9.047,3.492C8.572,3.492 8.107,3.539 7.657,3.628Z" />
            </g>
        </svg>
        `;
        localStorage.setItem('mode', 'dark');
        // console.log("Setting to dark mode!");
        // console.log(bodyId.dataset.mode);
    } 
}

// localStorage check 
if (currentMode) {
    bodyId.setAttribute("data-mode", currentMode);

    if (currentMode === "dark") {
        modeIcon.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
        <g transform="matrix(1.16859,0.796569,-0.796569,1.16859,5.03694,-9.02652)">
            <path d="M7.657,3.628C8.777,2.973 10.079,2.598 11.469,2.598C15.645,2.598 19.035,5.989 19.035,10.165C19.035,14.341 15.645,17.731 11.469,17.731C11.05,17.731 10.639,17.697 10.239,17.632C13.602,17.064 16.167,14.135 16.167,10.612C16.167,6.682 12.977,3.492 9.047,3.492C8.572,3.492 8.107,3.539 7.657,3.628Z" style="stroke-width:0.42px;"/>
        </g>
    </svg>`
    };
}


// event listeners
modeBtn.addEventListener('click', modeToggle);
subscribeBtn.addEventListener('click', subscribeBtnProgress);