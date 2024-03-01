const SPACE = "Space"
const INITIAL_CAMERA_TOOLTIP = "Turn off camera (ctrl + e)"
const INITIAL_MIC_TOOLTIP = "Turn off microphone (ctrl + d)"
const JOIN_SELECTOR = '//*[@id="yDmH0d"]/c-wiz/div/div/div[24]/div[3]/div/div[2]/div[4]/div/div/div[2]/div[1]/div[2]/div[1]/div[1]/button'

const MIC_SELECTOR = "#yDmH0d > c-wiz > div > div > div:nth-child(24) > div.crqnQb > div.fJsklc.nulMpf.Didmac.G03iKb > div > div > div.Tmb7Fd > div > div.fswXR > div > div.GKGgdd > span > button"


const sleep = async (msec) => {
    return new Promise(resolve => setTimeout(resolve, msec));
}

const getElementByXpath = (path) => {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


window.addEventListener('load', async () => {
    await sleep(3000);

    const INITIAL_CAMERA = document.querySelector(`[data-tooltip='${INITIAL_CAMERA_TOOLTIP}']`)
    const INITIAL_MIC = document.querySelector(`[data-tooltip='${INITIAL_MIC_TOOLTIP}']`)
    const JOIN = getElementByXpath(JOIN_SELECTOR)

    INITIAL_CAMERA.click()
    INITIAL_MIC.click()
    await sleep(5000);
    JOIN?.click()

    let micStatus = false

    document.addEventListener('keydown', (event) => {
        const code = event.code;
        if (code === SPACE && !micStatus) {
            micStatus = true;
            document.querySelector(MIC_SELECTOR).click()
        }
        
    }, false);
    
    document.addEventListener('keyup', (event) => {
        const code = event.code;
        if (code === SPACE && micStatus) {
            micStatus = false;
            document.querySelector(MIC_SELECTOR).click()
        }
        
    }, false);

})