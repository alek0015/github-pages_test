document.addEventListener("DOMContentLoaded", () =>{
    manageRadioSelection();
    followUpPopup();

    const modalForm = document.getElementById("modalForm");

    modalForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput")?.value;
        const issue = document.getElementById("issueInput")?.value;
    
        const followUpChoice = document.querySelector('input[name="followUp"]:checked').value;
        const followUpEmail = followUpChoice === "yes"
            ? document.getElementById("modalEmailInput").value
            : null;
        
        const res = await fetch("https://us-central1-boulderbud-demo.cloudfunctions.net/sendIssueReport", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                issue,
                followUpEmail
            })
        });
            
        if (res.ok)  
            alert("Your issue has been submitted!");
        else
            alert("Failed to submit issue.");

        cleanUp();
    });
});

function followUpPopup(){
    console.log("followUpPopup called");
    const modal = document.getElementById("hearBackModal");
    const span = document.querySelector("#hearBackModal .close");
    const btn = document.getElementById("submitIssueBtn");
    const form = document.getElementById("issueForm");

    if (!modal || !span || !btn || !form) {
        console.warn("Modal elements not found!");
        return;
    }

    btn.onclick = function(event){
        if(form.checkValidity()) {
            event.preventDefault(); // Prevent form submission
            modal.style.display = "block"; // Show the modal
        } 
    }
    span.onclick = function() { // Close the modal when the user clicks on <span> (x)
        modal.style.display = "none";
    }
    window.onclick = function(event) { // Close the modal if the user clicks outside of it
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function manageRadioSelection(){
    const emailInput = document.getElementById("modalEmailInput");

    const yesRadio = document.getElementById("yes");
    const noRadio = document.getElementById("no");
    
    yesRadio.addEventListener('change', () => {
        emailInput.style.display = "block";
        emailInput.required = true;
    });

    noRadio.addEventListener('change', () => {
        emailInput.style.display = "none";
        emailInput.required = false;
    });

    //Initialize since no is checked by default:
    if(noRadio.checked){
        emailInput.style.display = "none";
        emailInput.required = false;
    }
}

function cleanUp(){
    const form = document.getElementById("issueForm");
    const modal = document.getElementById("hearBackModal");
    const emailInput = document.getElementById("modalEmailInput");

    emailInput.value = "";
    modal.style.display = "none";
    form.reset();
}