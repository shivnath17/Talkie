const SPACE = "Space"
const INITIAL_CAMERA_SELECTOR = "#yDmH0d > c-wiz > div > div > div:nth-child(25) > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.ZUpb4c > div.oORaUb.XDitY.NONs6c > div > div.EhAUAc > div.GOH7Zb > div > div.U26fgb.JRY2Pb.mUbCce.kpROve.yBiuPb.y1zVCf.HNeRed.M9Bg4d"
const INITIAL_MIC_SELECTOR = "#yDmH0d > c-wiz > div > div > div:nth-child(25) > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.ZUpb4c > div.oORaUb.NONs6c > div > div.EhAUAc > div.ZB88ed > div > div > div.U26fgb.JRY2Pb.mUbCce.kpROve.yBiuPb.y1zVCf.HNeRed.M9Bg4d"
const JOIN_SELECTOR = "#yDmH0d > c-wiz > div > div > div:nth-child(25) > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.d7iDfe.NONs6c > div.shTJQe > div.jtn8y > div.XCoPyb > div:nth-child(1) > button > div.VfPpkd-RLmnJb"
const MIC_SELECTOR = "#yDmH0d > c-wiz > div > div > div:nth-child(24) > div.crqnQb > div.fJsklc.nulMpf.Didmac.G03iKb > div > div > div.Tmb7Fd > div > div.fswXR > div > div.GKGgdd > span > button"


const sleep = async (msec) => {
    return new Promise(resolve => setTimeout(resolve, msec));
}


window.addEventListener('load', async () => {
    const INITIAL_CAMERA = document.querySelector(INITIAL_CAMERA_SELECTOR)
    const INITIAL_MIC = document.querySelector(INITIAL_MIC_SELECTOR)
    const JOIN = document.querySelector(JOIN_SELECTOR)

    INITIAL_CAMERA.click()
    INITIAL_MIC.click()
    await sleep(5000);
    JOIN.click()

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