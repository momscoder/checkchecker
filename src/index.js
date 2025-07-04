async function getReceipt (uiField, dateField) {
    let formData = new FormData();
    formData.append('orig_date', dateField);
    formData.append('orig_ui', uiField);
    return await(await fetch(`https:\\ch.info-center.by/ajax/check1.php`, {
        method: 'POST',
        body: formData
    })).json();
}

module.exports = {
    getReceipt: getReceipt
};