$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DesktopPage.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop page test",
  "description": "\r\nAs a user I want to check desktop page and add product into cart",
  "id": "desktop-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5016081400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should arrange product in alphabetical order successfully",
  "description": "",
  "id": "desktop-page-test;user-should-arrange-product-in-alphabetical-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select product sort by \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see product arrange in alphabetical order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 1093597000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 440112200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 60933700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 477048600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeProductArrangeInAlphabeticalOrderSuccessfully()"
});
formatter.result({
  "duration": 276273600,
  "status": "passed"
});
formatter.after({
  "duration": 596340500,
  "status": "passed"
});
formatter.before({
  "duration": 4000127800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "User should add product to shopping cart successfully",
  "description": "",
  "id": "desktop-page-test;user-should-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select currency \"£Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select product sort by \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to \"HP LP3065\" product page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select date \"2022\",\"November\",\"30\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I add quantity \"1\" for product",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see product added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see shopping cart text",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I should see \"HP LP3065\" product name",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see \"2022-11-30\" delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see \"Product 21\" model name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see total price",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 961861500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 414003700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 19
    }
  ],
  "location": "DesktopPageSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 733649600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 446944900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 18
    }
  ],
  "location": "DesktopPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1106234400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 22
    }
  ],
  "location": "DesktopPageSteps.iShouldNavigateToProductPage(String)"
});
formatter.result({
  "duration": 24127200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 15
    },
    {
      "val": "November",
      "offset": 22
    },
    {
      "val": "30",
      "offset": 33
    }
  ],
  "location": "DesktopPageSteps.iSelectDate(String,String,String)"
});
formatter.result({
  "duration": 4610269400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "DesktopPageSteps.iAddQuantityForProduct(String)"
});
formatter.result({
  "duration": 83582400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 669429400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeProductAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 548039200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 1026979900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeShoppingCartText()"
});
formatter.result({
  "duration": 35327000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeProductName(String)"
});
formatter.result({
  "duration": 22207000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeDeliveryDate(String)"
});
formatter.result({
  "duration": 25415500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeModelName(String)"
});
formatter.result({
  "duration": 23987700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeTotalPrice()"
});
formatter.result({
  "duration": 18429400,
  "status": "passed"
});
formatter.after({
  "duration": 650212300,
  "status": "passed"
});
formatter.uri("LaptopAndNotebookPage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop And Notebook Page Test",
  "description": "\r\nAs a user I want to check functionality of laptop and notebook page",
  "id": "laptop-and-notebook-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3857283400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should arrange product in price high to low order successfully",
  "description": "",
  "id": "laptop-and-notebook-page-test;user-should-arrange-product-in-price-high-to-low-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on show all laptop and notebook",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select product sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see product arrange in price high to low order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 691934200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnShowAllLaptopAndNotebook()"
});
formatter.result({
  "duration": 410072000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 57316200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 439624500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProductArrangeInPriceHighToLowOrderSuccessfully()"
});
formatter.result({
  "duration": 125543000,
  "status": "passed"
});
formatter.after({
  "duration": 602460700,
  "status": "passed"
});
formatter.before({
  "duration": 4047494900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "User should place order successfully",
  "description": "",
  "id": "laptop-and-notebook-page-test;user-should-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on show all laptop and notebook",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select currency \"£Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select product sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Macbook\" from laptop and notebook page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to \"MacBook\" product",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see product macbook added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see shopping cart text",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should see \"MacBook\" product",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I change quantity \"2\" for product",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on update quantity",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see cart modified message",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I should see total price for macbook products",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should navigate to checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I should see new customer text",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on guest checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on continue button of guest checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I filled all mandatory field of checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on continue after fill all detail on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I add comments to text area about product order",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click checkbox of terms and condition",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on continue of checkout",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should see warning message regarding Payment method",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 724579000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnShowAllLaptopAndNotebook()"
});
formatter.result({
  "duration": 416123000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 19
    }
  ],
  "location": "DesktopPageSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 771135300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 441473600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Macbook",
      "offset": 18
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iSelectProductFromLaptopAndNotebookPage(String)"
});
formatter.result({
  "duration": 1245872700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 22
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iShouldNavigateToProduct(String)"
});
formatter.result({
  "duration": 26618100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 662195300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProductMacbookAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 542202200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 1003316500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeShoppingCartText()"
});
formatter.result({
  "duration": 32754200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 14
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProduct(String)"
});
formatter.result({
  "duration": 23827100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "LaptopAndNotebookPageSteps.iChangeQuantityForProduct(String)"
});
formatter.result({
  "duration": 89783700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnUpdateQuantity()"
});
formatter.result({
  "duration": 685976000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeCartModifiedMessage()"
});
formatter.result({
  "duration": 29579800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeTotalPriceForMacbookProducts()"
});
formatter.result({
  "duration": 38296400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 386561900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldNavigateToCheckoutPage()"
});
formatter.result({
  "duration": 27740700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeNewCustomerText()"
});
formatter.result({
  "duration": 542078200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnGuestCheckoutButton()"
});
formatter.result({
  "duration": 564219200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnContinueButtonOfGuestCheckoutPage()"
});
formatter.result({
  "duration": 44390200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iFilledAllMandatoryFieldOfCheckoutPage()"
});
formatter.result({
  "duration": 922489500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnContinueAfterFillAllDetailOnCheckoutPage()"
});
formatter.result({
  "duration": 47738300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iAddCommentsToTextAreaAboutProductOrder()"
});
formatter.result({
  "duration": 823875200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickCheckboxOfTermsAndCondition()"
});
formatter.result({
  "duration": 1052296100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnContinueOfCheckout()"
});
formatter.result({
  "duration": 1075160200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeWarningMessageRegardingPaymentMethod()"
});
formatter.result({
  "duration": 1043520100,
  "status": "passed"
});
formatter.after({
  "duration": 639957600,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "\r\nAs a user I want to check login/logout functionality",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4008239400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-page-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Login\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 48150200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 429564900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 36366800,
  "status": "passed"
});
formatter.after({
  "duration": 599207100,
  "status": "passed"
});
formatter.before({
  "duration": 3979118800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should login and logout successfully",
  "description": "",
  "id": "login-page-test;user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Login\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter email \"iampatel@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"HelloNum1\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"Logout\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 48797500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 426294800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iampatel@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 77703800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HelloNum1",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 61097100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 654153700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 29715000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 29575800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 657614000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 24371300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 410346100,
  "status": "passed"
});
formatter.after({
  "duration": 607021500,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "\r\nAs a user i want to do registration into tutorial ninja website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3932423900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-page-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Register\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 54719400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 705876900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 26620500,
  "status": "passed"
});
formatter.after({
  "duration": 623494300,
  "status": "passed"
});
formatter.before({
  "duration": 4024191600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should register account successfully",
  "description": "",
  "id": "register-page-test;user-should-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Register\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I filled all mandatory field of registration",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on continue button of registration page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see account successfully created message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"Logout\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 54947300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 732811000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iFilledAllMandatoryFieldOfRegistration()"
});
formatter.result({
  "duration": 410113800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnContinueButtonOfRegistrationPage()"
});
formatter.result({
  "duration": 1255216900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldSeeAccountSuccessfullyCreatedMessage()"
});
formatter.result({
  "duration": 27678400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnContinue()"
});
formatter.result({
  "duration": 369616300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 41424700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 714337300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 25884800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 393943700,
  "status": "passed"
});
formatter.after({
  "duration": 621673600,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu test of Homepage",
  "description": "\r\nAs a user I want to check top menu tab options on Homepage",
  "id": "top-menu-test-of-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4282486600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should navigate to desktop page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 1082798400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20018718400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 41886100,
  "status": "passed"
});
formatter.after({
  "duration": 598923000,
  "status": "passed"
});
formatter.before({
  "duration": 3787281300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "User should navigate to laptop and notebook page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-laptop-and-notebook-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select menu \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should navigate to laptop and notebook page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 677978600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20007822700,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToLaptopAndNotebookPageSuccessfully()"
});
formatter.result({
  "duration": 50979300,
  "status": "passed"
});
formatter.after({
  "duration": 591499300,
  "status": "passed"
});
formatter.before({
  "duration": 4316683100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "User should navigate to component page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-component-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I mouse hover and click on component tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select menu \"Show All Components\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should navigate to component page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnComponentTab()"
});
formatter.result({
  "duration": 733472500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Components",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20081894500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToComponentPageSuccessfully()"
});
formatter.result({
  "duration": 35558000,
  "status": "passed"
});
formatter.after({
  "duration": 617531100,
  "status": "passed"
});
});