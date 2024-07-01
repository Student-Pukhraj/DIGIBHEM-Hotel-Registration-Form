function validation() {
    var N,E,P,B,A,X;
    N=document.getElementById('Name').value;
    E=document.getElementById('Email').value;
    P=document.getElementById('PhoneNumber').value;
    B=document.getElementById('BookingDate').value;
    A=document.getElementById('Aadhar').value;

    if (N==' ' || E==' ' || P==' ' || B==' ' || A==' ' ) 
        alert("Please fill all the details for Registration ");
    else 
    alert("Your Registration is Sucussful");
};