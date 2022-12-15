
$('.course-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 6,
        }
    }
})
$('.course-carousel1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2,
        },
       
    }
})
$('.faculty-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center:true,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        902:{
            items:1
        },
        1200: {
            items: 2,
        }
    }
})
$('.program-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
})

$(document).ready(function(){
    $.validator.addMethod("Phonenumber",function(value){
        return /[0-9]{10}/.test(value);
    },"Number only");
$("#myform").validate({
 rules:{
    u_name:{
        required:true,
        minlength:3,
        lettersonly:true
    },
    u_email:{required:true,email:true},
    u_city:{required:true,lettersonly:true},
    u_phone:{required:true,minlength:10,Phonenumber:true},
    u_message:{required:true}
 },
 messages:{
    u_name:{
        required:"Please Enter Your Name",
        minlength:"Name should be more then 3 characters",
    },
    u_email:{required:"Please Enter Your Email address"},
    u_city:{required:"Please Enter Your City Name"},
    u_phone:{
        required:"Please Enter Your Phone number",
    minlength:"Phone number Should be 10 charactor"},
    u_message:{required:"Please give your feedback"}
 }
});
});

