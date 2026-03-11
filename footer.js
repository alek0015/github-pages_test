class Footer extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
            <footer class="footer bg-dark text-light text-center py-3" id="footer">
                <div class="container-fluid">
                    <div class="row justify-content-between text-start">
                    <div class="col-md-4 my-3 mx-5">
                        <h3>Contact Us</h3>
                        <p> </p>
                        <div class="row ps-4">
                        <p>GitHub:</p>
                        <p>Email (Business inquiries only):</p>
                        <address id="email-contact"> <a href="mailto:lego0006@algonquinlive.com">lego0006@algonquinlive.com</a></address>
                        <address id="email-contact"> <a href="mailto:alek0015@algonquinlive.com">alek0015@algonquinlive.com</a></address>
                        </div>
                    </div>
                    <div class="col-md-5 my-3 mx-4 text-start">
                        <p class="form-label">Report an Issue:</p>
                        <form method="post" id="issueForm" onsubmit="return false;">
                            <textarea id="nameInput" rows="1" placeholder="Your name" class="form-control mb-2 w-50" style="resize:none;" required></textarea>
                            <textarea id="issueInput" class="form-control" rows="8" placeholder="Describe your issue..." wrap="soft" required></textarea>
                            <div class="container-fluid text-end">
                                <input type="submit" id="submitIssueBtn" class="btn btn-outline-primary mt-2">
                            </div>
                        </form>
                    </div>
                    </div>
                    <div class='row text-center'>
                        <p style="font-size: 12px;"><i>Background image design by Freepik</i></p>
                    </div>
                </div>
                <div id="hearBackModal" class="modal">
                    <div class="modal-content">
                        <div class="row mb-3 text-end">
                            <span class="close">&times;</span>
                        </div>
                        <div class="row text-center justify-content-center">
                            <h3>Would you like to receive updates about your report?</h3>
                            <div class="d-flex justify-content-center gap-3 my-4">
                                <form id="followUpForm">
                                    <input type="radio" id="yes" name="followUp" value="yes">
                                    <label for="yes" style="font-size: 16px;">Yes</label>
                                    <input type="radio" id="no" name="followUp" value="no" checked>
                                    <label for="no" style="font-size: 16px;">No</label>
                                </form>
                            </div>
                        </div>

                        <form method="post" id="modalForm" onsubmit="return false;">
                            <div class="row text-center justify-content-center">
                                <div class="col-7">
                                    <input type="email" id="modalEmailInput" name="followUpEmail" class="form-control w-60 mx-auto my-4" placeholder="Enter your email" required>
                                </div>
                            </div>
                            <div class="row text-center justify-content-center">
                                <div class="col-6">
                                    <button type="submit" id="modalSubmitBtn" class="btn btn-outline-primary w-40 mt-4">Submit</button>
                                </div>
                            </div>
                        </form>

                        <script>
                            const emailField = document.getElementById("modalEmailInput");
                            document.querySelectorAll('input[name="followUp"]').forEach(radio => {
                                radio.addEventListener("change", () => {
                                    if (radio.value === "yes") {
                                        emailField.required = true;
                                        emailField.closest(".row").style.display = "flex";
                                    } else {
                                        emailField.required = false;
                                        emailField.closest(".row").style.display = "none";
                                    }
                                });
                            });

                            const modalForm = document.getElementById("modalForm");
                            if (modalForm) {
                                modalForm.addEventListener("submit", ...);
                            }
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

                                if (res.ok) {
                                    alert("Your issue has been submitted!");
                                } else {
                                    alert("Failed to submit issue.");
                                }
                            });
                        </script>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);