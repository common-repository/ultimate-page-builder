window.addEventListener('beforeunload', function (e) {
    var dialogText = 'Changes you made may not be saved.';
    if (_upb_status.dirty) {
        e.returnValue = dialogText;
        return dialogText;
    }
});