function display_alert(){
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const enroll = document.getElementById("enroll").value;
    const msg = document.getElementById("msg").value;
    const state = document.getElementById("state").value;
    const pincode = document.getElementById("pincode").value;
    
    alert(
        "fname : "+fname+" \n lname : "+lname+" \n email : "+email+" \n enroll : "+enroll+" \n msg : "+msg+" \n state : "+state+" \n pincode : "+pincode+" \n Form Submmited sassyfully");
}