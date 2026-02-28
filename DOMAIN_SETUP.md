# How to Link Your Hostinger Domain to Netlify

To get your website to load securely at `https://closurepointsolutions.com`, follow these standard steps to connect your Netlify-hosted site to your Hostinger domain.

## Step 1: Add the Domain in Netlify
1. Log in to your [Netlify](https://app.netlify.com/) dashboard.
2. Select your site (e.g., `closure-point-solutions`).
3. Go to **Domain management** (or Settings > Domain management).
4. Click **Add custom domain**.
5. Enter your domain: `closurepointsolutions.com` and click **Verify**.
6. When prompted, confirm that you own the domain by clicking **Add domain**.

## Step 2: Configure DNS in Hostinger
Netlify gives you two ways to point your domain. The primary recommended way is to use an **A Record** and a **CNAME Record**.

1. Log in to your [Hostinger](https://hpanel.hostinger.com/) account.
2. Go to **Domains** and select `closurepointsolutions.com`.
3. Locate **DNS / Nameservers** on the left menu.
4. Update the DNS records as follows:

   **For the root domain (`closurepointsolutions.com`):**
   * **Type:** A
   * **Name:** `@`
   * **Points to:** `75.2.60.5` (This is Netlify's standard load balancer IP)
   * **TTL:** Default (or 14400)

   *(If Hostinger already has an 'A' record for `@`, **edit** it instead of creating a new one.)*

   **For the "www" subdomain (`www.closurepointsolutions.com`):**
   * **Type:** CNAME
   * **Name:** `www`
   * **Points to:** `[your-site-name].netlify.app` (Replace with your actual default Netlify URL)
   * **TTL:** Default (or 14400)

   *(If there's an existing CNAME for `www`, edit it to point to your Netlify URL.)*

## Step 3: Wait for DNS Propagation
DNS changes can take anywhere from a few minutes to 24 hours to propagate across the global internet. You can use a tool like [whatsmydns.net](https://www.whatsmydns.net/) to check if the `A` record for `closurepointsolutions.com` points to `75.2.60.5` globally.

## Step 4: Enable HTTPS (SSL) on Netlify
Once the DNS has propagated:
1. Go back to your Netlify dashboard under **Settings > Domain management**.
2. Scroll down to the **HTTPS** section.
3. Click **Verify DNS configuration**.
4. Netlify will automatically provision a free Let's Encrypt SSL certificate for you, ensuring your site loads with the secure padlock (`https://`).

## Step 5: Configure Email Notifications for the Contact Form
Your website has a built-in contact form powered by Netlify Forms. To ensure you receive emails at `closurepointsolutions@gmail.com` when a user sends a message:
1. In your Netlify Site Dashboard, go to **Site configuration**.
2. Select **Forms** from the left sidebar.
3. Scroll down to **Form notifications**.
4. Click **Add notification** and choose **Email notification**.
5. Set the "Event to listen for" to **New form submission**.
6. Enter `closurepointsolutions@gmail.com` into the "Email to notify" field and click Save!

---

*Note: As an alternative to Step 2, Netlify also provides "Netlify DNS" where you change the **Nameservers** in Hostinger to point to Netlify (`dns1.p01.nsone.net`, etc.). Using A/CNAME records (described above) is generally safer if you also use Hostinger for Email hosting.*
