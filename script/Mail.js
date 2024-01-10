document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // its for preventing reloading of browser on clicking submit button.

        const serviceID = "service_31luxnj";
        const templateID = "template_umpyftn";

        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                console.log(" I am trying to see the actual response:",response);
                // alert("SUCCESS!");
                //when there will be alert of success enduser click on 'OK' the form will clear all the enteries
                document.getElementById("subject").value = ""
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                alert("Your message sent successfully!!")
              },
              (error) => {
                  console.log("FAILED...", error);
                  alert("FAILED...", error);
              }
          );
      });
