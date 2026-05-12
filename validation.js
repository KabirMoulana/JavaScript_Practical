 function validateForm(){
            let txtName = document.getElementById("firstname").value;
            let txtEmail = document.getElementById("email").value;
            let txtMoblie = document.getElementById("mobile").value;
        

        if(txtName == "")
        {
            alert("Please enter the name!");
            return false;
        }

        if(txtEmail=="")
        {
            alert("Please enter the email!");
            return false;
        }

        if(isNaN(txtMobile) == "")
        {
            alert("Please enter mobile number!");
            return false;
        }
            return false;
 }