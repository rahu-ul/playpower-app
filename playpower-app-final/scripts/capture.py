"""Capture listing / Photo Tour / Lightbox screenshots at 1280x619 (needs `pip install playwright`)."""
import os
from playwright.sync_api import sync_playwright

URL = os.environ.get("APP_URL", "http://localhost:4173")
os.makedirs("screenshots", exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1280, "height": 619})
    page.goto(URL)
    page.wait_for_timeout(600)
    page.screenshot(path="screenshots/01-listing.png")
    page.mouse.wheel(0, 900)
    page.wait_for_timeout(300)
    page.screenshot(path="screenshots/02-listing-scrolled.png")
    page.evaluate("window.scrollTo(0, 0)")
    page.click(".gallery-show-all")
    page.wait_for_timeout(500)
    page.screenshot(path="screenshots/03-photo-tour.png")
    page.locator(".photo-tour-category-image").nth(1).click()
    page.wait_for_timeout(400)
    page.screenshot(path="screenshots/04-lightbox.png")
    page.keyboard.press("ArrowRight")
    page.wait_for_timeout(300)
    page.screenshot(path="screenshots/05-lightbox-next.png")
    browser.close()
