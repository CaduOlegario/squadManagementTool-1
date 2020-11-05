export const HandleApi = (api, handleLoader, setData, sendNotification) => {
    handleLoader(true);
    api().then(response => {
        if(response) {
            setData(response);
            handleLoader(false);
            sendNotification(true);
        } else {
            setData([]);
            handleLoader(false);
            sendNotification(false);
        }
    }).catch(() => {
        handleLoader(false);
        sendNotification(false);
    });
};