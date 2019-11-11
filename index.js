window.addEventListener('load', () => {
    const convertButton = document.querySelector('#button-container div');

    convertButton.addEventListener('click', () => {
        fetchPHP();
    });

    window.addEventListener('input', () => {
        fetchPHP();
    });

    function fetchPHP() {
        fetch("./convert.php", {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: "data=" + document.querySelector('#input textarea').value,
        })
            .then((response) => {
                return response.text();
            })
            .then((responseText) => {
                let responseJSON = JSON.parse(responseText);

                Array.from(document.querySelector("#check-marks").children).forEach((checkMark) => {
                    checkMark.style.color = "red"
                });

                responseJSON.forEach((type) => {
                    document.querySelector(`#${type}`).style.color = "lightgreen";
                });
            })
    }
});