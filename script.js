const idUser = document.getElementsByClassName('idUser')


    // let idUser=''
    let mainDiv = document.getElementsByClassName('anime')[0]

    
    console.log("mainDiv", mainDiv)
    function getidUser() {
        mainDiv.style.display = "none"
        
        mainDiv.innerHTML = ''
        const idUser = document.getElementsByClassName('idUser')[0].value;
        // console.log(idUser)
        if (idUser > 0 && idUser <= 10) {
            fetch('https://jsonplaceholder.typicode.com/users/' + idUser)
                .then(res => res.json())
                
                .then(res => {
    
                    // console.log(res)
                                
    
                    let paraEmail = document.createElement('p')
                    let paraName = document.createElement('p')
                    let phone = document.createElement('p')
                    paraEmail.innerHTML = "<p id='mainID1'>" + res.email + "</p>"
                    paraName.innerHTML = "<p id='mainID2'>" + res.name + "</p>"
                    paraName.innerHTML = "<p id='mainID3'>" + res.phone + "</p>"
                    mainDiv.appendChild(paraEmail)
                    mainDiv.appendChild(paraName)
                    mainDiv.appendChild(phone)
                    mainDiv.style.display = "block"
                    mainDiv.style.animation = 'Anime 5s forwards'
    
                    // document.body.appendChild(mainDiv)
    
                })
    
                .catch(error => console.error(error));
    
    
        } else {
    
    
    
            alert("nie est prawidlowa 1-10")
    
    
        }
    
    
    }

    // window.onload = function() { document.getElementsByClassName('Anime')[0].classList.add('translateAnimationClass'); }