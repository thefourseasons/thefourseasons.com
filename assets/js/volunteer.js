
var submitForm = function(){
  form = $("form")[0];
  formData = {};
  formData.volunteer_name = form.name.value;
  formData.volunteer_photo = $('#photo')[0].files[0];
  formData.address = form.address.value;
  formData.country = form.country.selectedOptions[0].label;
  formData.state = form.state.selectedOptions[0].label;
  formData.pincode = form.pincode.value;
  formData.contact_number = form.phone.value;
  formData.volunteer_age = form.age.value;
  formData.volunteer_dob = form.dob.value;
  formData.volunteer_email = form.email.value;
  
  formData = JSON.stringify(formData);
  console.log(formData);
  $.ajax({
    url: 'http://127.0.0.1:8000/workwithus/volunteer',
    type: 'POST',
    crossDomain: true,
    data: formData,
    dataType: 'json',
    success: function(json) {
        alert("You have successfully registered as a Volunteer");
      },
    error: function(json){
      alert("Registration Failed");
    }
  });
};
