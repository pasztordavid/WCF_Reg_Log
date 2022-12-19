    var state = false;

    document.getElementById("stateButton").onclick = function (){
        if(state){
            state=!state;
            document.getElementById('idField').innerHTML="";
            document.getElementById('reg').innerHTML="Bejelentkezés";
        }
        else{
            state=!state;
            var contentText=`
            <input type="text" id="felhasznalonev" placeholder="Felhasználó név" ><br>  
            <input type="text" id="email" placeholder="Email"><br>
            <input type="text" id="jelszo" placeholder="Jelszó"><br>
            <input type="text" id="teljesnev" placeholder="Teljes Név" ><br>
            <input type="checkbox" id="active"> Aktivitás<br>
            <input type="number" id="rank" placeholder="Jogosultság"><br>
            <input type="checkbox" id="ban" >Ban?<br><hr>
            <button type="submit" id="button1" class="btn btn-light">Regisztráció</button><br><hr>
            <button onclick="document.location='index.html'" class="btn btn-light">Vissza</button>
            `;
            document.getElementById('idField').innerHTML=contentText;   
            document.getElementById('reg').innerHTML="Regisztráció";  

           /*axios 
            .get('https://localhost:5001/api/Users/GetUser')
            .then((response)=>{
                console.log(response.data);
                document.getElementById("felhasznalonev").textContent = response.data[1].uname;
                //document.getElementById("email").textContent = response.data[1].email;
                document.getElementById("jelszo").textContent = response.data[1].pwd;
            });*/

            let felhInput = document.getElementById("felhasznalonev");
            let emailInput = document.getElementById("email");
            let jelszoInput = document.getElementById("jelszo");
            let nevInput = document.getElementById("teljesnev")
            let aktivInput = document.getElementById("active");
            let jogosInput = document.getElementById("rank");
            let banInput = document.getElementById("ban");
            let gomb = document.getElementById("button1");
        
            gomb.addEventListener("click", () => {
            let felhnev = felhInput.value;
            let email = emailInput.value;
            let jelszo = jelszoInput.value;
            let teljesnev = nevInput.value;
            let aktivitas = aktivInput.value;
            let jogosultsag = jogosInput.value;
            let ban = banInput.value;
        
            felhnev = String(felhnev);
            email = String(email);
            jelszo = String(jelszo);
            teljesnev = String(teljesnev);
            aktivitas = Boolean(aktivitas);
            jogosultsag = Number(jogosultsag);
            ban = Boolean(ban);
            
           axios.post('https://localhost:5001/api/Users/PostUser', 
            {
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
        }
    }
//login

let felhInput1 = document.getElementById("felhasznalonev1");
let jelszoInput1 = document.getElementById("jelszo1");
let loginGomb1 = document.getElementById("belepesGomb");
let jogosMegadas1 = document.getElementById("jogos1");

loginGomb1.addEventListener("click", () => {
let felhnev1 = felhInput1.value;
let jelszo1 = jelszoInput1.value;
let rang1 = jogosMegadas1.value;
felhnev1 = String(felhnev1);
jelszo1 = String(jelszo1);
rang1 = Number(rang1);

axios.post(`https://localhost:5001/api/Login?uname=${felhnev1}&pwd=${jelszo1}&rank=${rang1}`, 
{
    uname: felhnev1,
    pwd: jelszo1,
    rank: rang1
})
    .then((response) => {
        document.getElementById("engedely").innerHTML = response.data;
        switch (rang1) {
            case 0:
                document.getElementById("belepesGomb").onclick=location.href="user.html";
                break;
            case 1:
                document.getElementById("belepesGomb").onclick=location.href='admin.html';
                break;
        }
    /*if(response.data===""){
        alert("Sikertelen bejelentkezés")
    }else if(rang1===0){
        document.getElementById("belepesGomb").onclick=location.href="user.html";
    }else if(rang1==1){
        document.getElementById("belepesGomb").onclick=location.href='admin.html';
    }else{
        alert("Add meg a rankod!");
    }
    */
    });
    
});
