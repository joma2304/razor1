// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const date = new Date().toISOString().slice(0, 10); //Hämta datum i YYYY-MM-DD
document.getElementById("date-span").innerHTML = date; // Sätt texten till p-element i header