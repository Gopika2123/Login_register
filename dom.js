function register(){
    var user=username.value
    var password=pwd.value
    // to store data in local storage
    localStorage.setItem('username',user)
    localStorage.setItem('password',password)
    alert('register successfully')
    window.location="dom3(login).html"
}
function login(){
    var user=username.value
    var password=pwd.value
        // to get data in local storage

        if(user==localStorage.getItem("username")){
            if(password==localStorage.getItem("password")){
                alert('login successfully')
                window.location="dom4(home).html"

            }
        
                   else{
                       alert('invalid password')
                       }
                    }
        else{
          alert('invalid username')
            }
        }

        homepage.innerHTML=`welcome ${localStorage.getItem("username")}`
        function logout(){
            localStorage.removeItem('username')
            localStorage.removeItem("password")
            window.location="dom3(login).html"
        }

