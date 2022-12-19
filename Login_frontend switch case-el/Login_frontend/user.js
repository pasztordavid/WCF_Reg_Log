            let idInput = document.getElementById("id")
            let felhInput = document.getElementById("felhasznalonev");
            let emailInput = document.getElementById("email");
            let jelszoInput = document.getElementById("jelszo");
            let nevInput = document.getElementById("teljesnev")
            let aktivInput = document.getElementById("active");
            let jogosInput = document.getElementById("rank");
            let banInput = document.getElementById("ban");
            let gomb = document.getElementById("button1");
        
            gomb.addEventListener("click", () => {
            let id = idInput.value;
            let felhnev = felhInput.value;
            let email = emailInput.value;
            let jelszo = jelszoInput.value;
            let teljesnev = nevInput.value;
            let aktivitas = aktivInput.value;
            let jogosultsag = jogosInput.value;
            let ban = banInput.value;
        
            id = Number(id);
            felhnev = String(felhnev);
            email = String(email);
            jelszo = String(jelszo);
            teljesnev = String(teljesnev);
            aktivitas = Boolean(aktivitas);
            jogosultsag = Number(jogosultsag);
            ban = Boolean(ban);
            
           axios.put('https://localhost:5001/api/Users/PutUser', 
            {
                id: id,
                uname: felhnev,
                email: email,
                pwd: jelszo,
                fullname: teljesnev,
                active: aktivitas,
                rank: jogosultsag,
                ban: ban
            })
                .then((response) => {
                console.log(response.data);
                });
            });