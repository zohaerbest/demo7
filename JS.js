document.addEventListener('DOMContentLoaded', function () {
    const buyTicketButton = document.getElementById('buyTicket');
    const deleteTicketsButton = document.getElementById('deleteTickets');
    const ticketList = document.getElementById('ticketList');

    const tickets = [];

    buyTicketButton.addEventListener('click', function () {
        const movie = document.getElementById('movie').value;
        const quantity = document.getElementById('quantity').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Input-validering
        if (!movie || !quantity || !firstName || !lastName || !phone || !email) {
            alert('Vennligst fyll ut alle feltene.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Vennligst skriv inn en gyldig e-postadresse.');
            return;
        }

        if (!validatePhone(phone)) {
            alert('Vennligst skriv inn et gyldig telefonnummer.');
            return;
        }

        const ticket = {
            movie: movie,
            quantity: quantity,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };

        tickets.push(ticket);
        displayTickets();
        resetForm();
    });

    deleteTicketsButton.addEventListener('click', function () {
        tickets.length = 0;
        displayTickets();
    });

    function displayTickets() {
        ticketList.innerHTML = '';
        tickets.forEach(function (ticket, index) {
            const listItem = document.createElement('li');
            listItem.classList.add('ticket-list-item');
            listItem.textContent = `Billett ${index + 1}: Film - ${ticket.movie}, Antall - ${ticket.quantity}, Navn - ${ticket.firstName} ${ticket.lastName}, Telefon - ${ticket.phone}, E-post - ${ticket.email}`;
            ticketList.appendChild(listItem);
        });
    }

    function resetForm() {
        document.getElementById('movie').selectedIndex = 0;
        document.getElementById('quantity').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d{8}$/;
        return re.test(phone);
    }
});
