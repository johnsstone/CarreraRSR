/* JavaScript */

/* Send email or comments */

  function sendMail() {
    var link = 'mailto:hello@domain.com?subject=Message from '
             +document.getElementById('email_address').value
             +'&body='+document.getElementById('email_address').value;
    window.location.href = link;
    console.log(link);
    alert( "Thanks for emailing us!!" );
}



