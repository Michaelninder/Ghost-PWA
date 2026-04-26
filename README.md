# App Glitch Simulator (PWA)

A lightweight Progressive Web App (PWA) designed to simulate the interface of popular social media platforms while returning a persistent **"Service Unavailable"** error. 

### 🛡️ Use Case
This project is intended as a **Digital Safety Tool**. It provides "positive friction" for vulnerable users (such as the elderly or those prone to scams) by replacing addictive, high-risk apps with a non-functional placeholder that mimics a technical outage.

## 🚀 Features
- **PWA Ready:** Can be "installed" on iOS and Android to look like a native app.
- **Realistic Loading:** Displays a spinner to simulate a connection attempt before failing.
- **Zero Dependencies:** Pure HTML/CSS/JS. No backend required.
- **Customizable:** Easily switch between "Facebook Mode" and "TikTok Mode."

## 📂 Project Structure
- `index.html`: The core UI and "glitch" logic.
- `manifest.json`: Defines the app name, icon, and theme colors.
- `sw.js`: A basic Service Worker to satisfy PWA installation requirements.

---

## 🛠️ Setup & Deployment

### 1. Host on GitHub Pages
1. Create a new repository on GitHub.
2. Upload `index.html`, `manifest.json`, and `sw.js`. (or just Fork this repo)
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, set the source to `Deploy from a branch` and select `main`.
5. Your app will be live at `https://<your-username>.github.io/<repo-name>/`.

### 2. Configuration (TikTok vs. Facebook)
Before deploying, edit the files to match the app you want to simulate:

#### For TikTok Simulation
* **In `index.html`**:
    * Set `background-color` to `#000000`.
    * Set `.spinner` `border-left-color` to `#fe2c55`.
* **In `manifest.json`**:
    * `"name": "TikTok"`
    * `"short_name": "TikTok"`
    * `"theme_color": "#000000"`
    * Use a TikTok icon URL for the `icons` array.

#### For Facebook Simulation
* **In `index.html`**:
    * Set `background-color` to `#f0f2f5`.
    * Set `color` (text) to `#1c1e21`.
    * Set `.spinner` `border-left-color` to `#1877F2`.
* **In `manifest.json`**:
    * `"name": "Facebook"`
    * `"short_name": "Facebook"`
    * `"theme_color": "#1877F2"`
    * Use a Facebook icon URL for the `icons` array.

---

## 📲 Installation on Target Device

Once the site is live, follow these steps on the target phone:

### On iOS (Safari)
1. Open the URL in Safari.
2. Tap the **Share** button (square with an up arrow).
3. Scroll down and tap **Add to Home Screen**.
4. Confirm the name and tap **Add**.

### On Android (Chrome)
1. Open the URL in Chrome.
2. Tap the **three dots** in the top right.
3. Tap **Install app** or **Add to Home Screen**.

---

## 🛑 Recommended Workflow for Safety
To make this effective as a scam-prevention tool:

1.  **Hide/Delete the Real Apps:** Remove the actual TikTok/Facebook apps from the device.
2.  **Positioning:** Place the "Glitch" icon exactly where the original app used to be on the home screen.
3.  **Parental Controls:** Use iOS Screen Time or Android Digital Wellbeing to "Block" the installation of new apps or the use of the web browser for these specific domains.
4.  **DNS Blocking:** For a permanent solution, use a service like [NextDNS](https://nextdns.io/) to block `facebook.com` and `tiktok.com` at the network level.

## ⚖️ Disclaimer
This project is for personal, educational, and safety-related use only. Always use these tools in the best interest of the individual's safety and well-being.