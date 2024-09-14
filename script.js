window.localStorage.elvNo = 5;
var cards_cont = document.getElementById('codepen');
for (let i = 1; i <= window.localStorage.elvNo; i++) {
    // Append the HTML for the card and modal
    cards_cont.innerHTML += `
    <div class="card">
        <img src="ELV.jpg" alt="Product Image" />
        <h2>Elevator ${i}</h2>
        <p id="labele${i}"></p>
        <div class="actions">
            <button class="btnn" data-bs-toggle="modal" data-bs-target="#modalElevator${i}" id="btn${i}">Change Its Type Now</button>
        </div>
        <div class="actions">
            <button type="button" class="btn btn-secondary" id="btne${i}">STATUS</button>
        </div>
    </div>

    <div class="modal fade" id="modalElevator${i}" tabindex="-1" aria-labelledby="modalElevator${i}Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalElevator${i}Label">Elevator ${i} Type</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <select class="form-select" id="elv${i}">
                        <option selected value="0">Update State</option>
                        <option value="1">In service - في الخدمة</option>
                        <option value="2">Failure - حالة عطل</option>
                        <option value="3">Maintenance - صيانة</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="saveChanges(${i})">Save changes</button>
                </div>
            </div>
        </div>
    </div>`;
}

// Make sure modals are initialized correctly
var modals = document.querySelectorAll('.modal');
modals.forEach(function (modal) {
    var modalInstance = new bootstrap.Modal(modal);
});
