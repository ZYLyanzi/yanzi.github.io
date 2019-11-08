import productConf from '@/config/product.conf'
import devConf from '@/config/dev.conf'
let config = null
if( /^appv2.17weima.com/.test(window.location.host) ) {
    config = productConf
}else {
    config = devConf
}
export default config
