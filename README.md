# gmail_hide_categories.user.js

By default, Gmail moves all "promotions" (read: marketing spam) into
your inbox. You can enable categories in settings to have tabs like
"promotions", "updates", etc, however it still gives you big ugly
notifications of new promotions. I find this to be total BS because
if you pay for Google Workspace you pay for it to filter spam. So, I
made this grease monkey script to solve that.

Google uses an aggressive JS app that automatically re-adds elements
if you modify the UI in any way. Additionally, it's all obfuscated,
so reverse engineering it would take way too long. Instead, I used
a stupidly simple approach: a position absolute div on top of it.
The elements underneath aren't changed so the JS reads everyting as
"fine." But a high z-index ensures the overlay blocks the elements out.

