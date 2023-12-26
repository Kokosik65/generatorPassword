'use strict'

const lengthPassword = document.getElementById('lengthPassword');
const generation = document.getElementById('generation');
const result = document.getElementById('result');

generation.onclick = function() {
    function getPassword(min, max) {
        let isOutput = false;
        for (let i = 0; !isOutput; i++) {
            min = 1e20;
            max = 1e23;
            let random = Math.floor(Math.random() * (max - min + 1) + min);
            if (random.toString(36).length < 15) continue;

            let ArrayOfString = Array.from(String(random.toString(36)));

            for (let i = 1; i <= 4; i++) {
                let minirandom = Math.floor(Math.random() * (36 - 1 + 1) + 1);
                if (minirandom.toString(36).length > 1) continue;
                ArrayOfString[ArrayOfString.length - i] = minirandom.toString(36);

                return ArrayOfString.join('');
            }


        }
    }
    result.textContent = getPassword();

}