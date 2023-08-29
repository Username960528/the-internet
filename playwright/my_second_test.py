import re
from playwright.sync_api import Page, expect

def test_homepage_has_Playwright_in_title_and_get_started_link_linking_to_the_intro_page(page: Page):
    page.goto("http://the-internet.herokuapp.com/")

    expect(page).to_contain_text("A/B Testing")

    #create locator
    a_and_b_testing = page.get_by_text("A/B Testing")

    #Click
    a_and_b_testing.click()


    expect(page).to_contain_text("Also known as split testing. This is a way in which businesses are able to simultaneously test and learn from different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).")
