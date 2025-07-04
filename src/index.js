async function getReceipt(uiField, dateField) {
    let formData = new FormData();
    formData.append('orig_date', dateField);
    formData.append('orig_ui', uiField);
    await fetch(`https:\\ch.info-center.by/ajax/check1.php`, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data.status);
            return data;
        })
}