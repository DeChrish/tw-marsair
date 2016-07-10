module.exports = {
  'redirect - should redirect to home page if user clicks MarsAir logo' : function (browser) {
    browser
      .url('http://pradeepchristhuraj.marsair.tw/')
      .waitForElementVisible('body', 1000)
      .setValue('select[id=departing]', 'July')
      .setValue('select[id=returning]', 'December (two years from now)')
      .setValue('input[id=promotional_code','AF1-FJK-001')
      .waitForElementVisible('input[type=submit]', 1000)
      .click('input[type=submit]')
      .pause(1000)
      .verify.containsText('.promo_code', 'Promotional code AF1-FJK-001 used: 10% discount!')
      .click('a')
      .verify.containsText('#content h2', 'Welcome to MarsAir!')
      .end();
  }
}