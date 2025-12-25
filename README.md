# Secure Notes

主要是透過 Cloudflare 的 workers & Pages 來架設的雲端加密筆記。
透過使用者自訂的密碼，在送出到 Cloudflare 的 workers 中進行加密，再將加密後的資料儲存到 Cloudflare 的 KV 中。
使用者在登入時，再將使用者自訂的密碼送到 Cloudflare 的 workers 中進行解密，再將解密後的資料顯示在使用者面前。
