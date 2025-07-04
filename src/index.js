let uiField = ''; // УИ НА ЧЕКЕ
let dateField = ''; // АНАЛОГИЧНО
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
        // success result
        if (data.status === 'success') {
            let arr = JSON.parse(data.message.positions);
            arr.forEach(i => {
                console.log(i.product_name + ': ' + i.amount);
            });
        }
    })