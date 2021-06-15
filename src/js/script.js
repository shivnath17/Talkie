const SPACE = "Space"
const INITIAL_CAMERA_SELECTOR = "#yDmH0d > c-wiz > div > div > div:nth-child(9) > div.crqnQb > div > div > div.vgJExf > div > div > div.ZUpb4c > div.oORaUb.NONs6c > div > div.EhAUAc > div.GOH7Zb > div > div"
const INITIAL_MIC_SELECTOR = "#yDmH0d > c-wiz > div > div > div:nth-child(9) > div.crqnQb > div > div > div.vgJExf > div > div > div.ZUpb4c > div.oORaUb.NONs6c > div > div.EhAUAc > div.ZB88ed > div > div > div"
const JOIN_SELECTOR = "#yDmH0d > c-wiz > div > div > div:nth-child(9) > div.crqnQb > div > div > div.vgJExf > div > div > div.d7iDfe.NONs6c > div > div.Sla0Yd > div > div.XCoPyb > div.uArJ5e.UQuaGc.Y5sE8d.uyXBBb.xKiqt"
const MIC_SELECTOR = "#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.Kn8SEb > div > div.a1GRr.PjGUeb > div > div > span > button"


const sleep = async (msec) => {
    return new Promise(resolve => setTimeout(resolve, msec));
}


window.addEventListener('load', async () => {
    const INITIAL_CAMERA = document.querySelector(INITIAL_CAMERA_SELECTOR)
    const INITIAL_MIC = document.querySelector(INITIAL_MIC_SELECTOR)
    const JOIN = document.querySelector(JOIN_SELECTOR)

    INITIAL_CAMERA.click()
    INITIAL_MIC.click()
    await sleep(10000);
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