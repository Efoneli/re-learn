console.log('Running')

showStars(5)

function showStars(rows) {
    for (let row = 2; row <= rows; row++) {
        let pattern = ''
        for (let i = 0; i < row; i++) 
            pattern += '*';
        console.log(pattern);
        }
    }

    showPrimes(20)

    function showPrimes(limit) {
        
    }
