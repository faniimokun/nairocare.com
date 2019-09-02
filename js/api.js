
   document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("submit").addEventListener("click", function(e) {
      var PBFKey = "FLWPUBK-85c3703685f0d4df927fdafa3e854d97-X";
      var email = document.getElementById('email').value;
      var amount = document.getElementById('amount').value;
      var fullname = document.getElementById('fullName').value;
      
      
      getpaidSetup({
        PBFPubKey: PBFKey,
        customer_email: email,
        customer_firstname: fullname,
        customer_lastname: false,
        custom_description: "Pay Internet",
        custom_logo: "https://res.cloudinary.com/laviedegeorge/image/upload/v1567198184/startng/nairo_images/nairocare-main-trans_szcp2z.png",
        custom_title: "NairoCare",
        amount: amount,
        customer_phone: "234099940409",
        country: "NG",
        currency: "NGN",
        txref: "rave-3869796",
        //integrity_hash: "6800d2dcbb7a91f5f9556e1b5820096d3d74ed4560343fc89b03a42701da4f30",
        onclose: function() {},
        callback: function(response) {
          var flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a 					server page to complete status check.
          console.log("This is the response returned after a charge", response);
          if (
            response.tx.chargeResponseCode == "00" ||
            response.tx.chargeResponseCode == "0"
          ) {
            // redirect to a success page
          } else {
            // redirect to a failure page.
          }
        }
      });
    });
    });
      
