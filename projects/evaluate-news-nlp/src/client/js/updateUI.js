function updateUI(data) {
    const results = document.getElementById("results");

    if (data.status.code === "0") {
        results.innerHTML = `<p>Agreement: <strong>${data.agreement}</strong></p>
       <p>Confidence: <strong>${data.confidence}/100</strong></p>
       <p>Irony: <strong>${data.irony}</strong></p>`

    } else {
        setError(data.status.msg);
    }
}

function showError(msg) {
    const results = document.getElementById("results");
    results.innerHTML = `<p style='color:red'>Error: ${msg}</p>`;
}
  
export { updateUI, showError };