
function submitRegistration() {
    var registrationData = {
        name: $("#name").val(),
        username: $("#username").val(),
        password: $("#password").val(),
        email: $("#email").val(),
        dob: $("#dob").val(),
        gender: $("input[name='gender']:checked").val(),
        address: $("#address").val(),
        city: $("#city").val(),
        pincode: $("#pincode").val(),
        state: $("#state").val(),
    };
    console.log(JSON.stringify(registrationData));
        displayData(registrationData);
}
    // Using jQuery for AJAX POST request
//     $.ajax({
//         type: "POST",
//         url: "data-list.html", // Replace with the actual endpoint or page
//         data: registrationData,
//         success: function(response) {
//             // Display the data list container
//             $("#dataListContainer").show();

//             // Dynamically add the submitted data to the table
//             var row = $("<tr>");
//             row.append($("<td>").text(registrationData.ID));
//             row.append($("<td>").text(registrationData.name));
//             row.append($("<td>").text(registrationData.username));
//             // Add more cells as needed

//             // Append the new row to the table
//             $("#userTableBody").append(row);

//             // You can clear the form if needed
//             $("#registrationForm")[0].reset();
//         },
//         error: function(error) {
//             console.error("Error:", error);
//         }
//     });
// }

function displayData(userData) {
    $.ajax({
        type: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts', // Using JSONPlaceholder for testing
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: function(response) {
            // Redirect to a new page and display the response
            window.location.href = 'data.html?data=' + JSON.stringify(response);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}