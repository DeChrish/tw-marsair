module.exports = {
  'promo code - should display the promotional discount percentage when sum less than 10' : function (browser) {
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
      .end();
  },
  'promo code - should display the promotional discount percentage when sum more than 10' : ''+function (browser) {
    browser
      .url('http://pradeepchristhuraj.marsair.tw/')
      .waitForElementVisible('body', 1000)
      .setValue('select[id=departing]', 'July')
      .setValue('select[id=returning]', 'December (two years from now)')
      .setValue('input[id=promotional_code','AF1-FJK-540')
      .waitForElementVisible('input[type=submit]', 1000)
      .click('input[type=submit]')
      .pause(1000)
      .verify.containsText('.promo_code', 'Promotional code AF1-FJK-540 used: 10% discount!')
      .end();
  },
  'promo code - should display the promotional code invalid  message  when digital check fails' : function (browser) {
    browser
      .url('http://pradeepchristhuraj.marsair.tw/')
      .waitForElementVisible('body', 1000)
      .setValue('select[id=departing]', 'July')
      .setValue('select[id=returning]', 'December (two years from now)')
      .setValue('input[id=promotional_code','AF1-FJK-003')
      .waitForElementVisible('input[type=submit]', 1000)
      .click('input[type=submit]')
      .pause(1000)
      .verify.containsText('.promo_code', 'Sorry, code AF1-FJK-003 is not valid')
      .end();
  }
};