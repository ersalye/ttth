
function checkUnread()
{
    const elements = document.querySelectorAll(\'.CxUIE, .unread\');
        let count = 0;for (let i = 0; i < elements.length; i++) 
        {
            if (elements[i].querySelectorAll(\'*[data-icon="muted"]\').length === 0) {count++;}}updateBadge(count);
        }

function updateBadge(count)
{
    if(count && count>=1)
    {
        rambox.setUnreadCount(count);
    }
    else
    {
        rambox.clearUnreadCount();
    }
}setInterval(checkUnread, 1e3);(async()=>{try{const a=await window.navigator.serviceWorker.getRegistrations();for(const b of a)b.unregister()}catch(a){}})();





webview whatsapp =  document.getElementById( 'WhatsappWebview')
webview.addEventListener("dom-ready", function(e) {

}