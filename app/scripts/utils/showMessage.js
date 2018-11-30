export const logMsg = text => console.log(text);

export const showError = text =>
    console.log(`%c❌${text}`, "color: #f45; font-weight: bold;");

export const showSuccess = text =>
    console.log(`%c🎉${text}`, "color: #00c15b; font-weight: bold;");
