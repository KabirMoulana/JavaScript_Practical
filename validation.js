 function validateForm(){
            let txtName = document.getElementById("firstname").value;
            let txtEmail = document.getElementById("email").value;
        

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
            return false;
 }