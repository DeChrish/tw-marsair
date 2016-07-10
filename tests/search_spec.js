module.exports = {
  'basic search - ticket available message' : ''+function (browser) {
    browser
      .url('http://pradeepchristhuraj.marsair.tw/')
      .waitForElementVisible('body', 1000)
      .setValue('select[id=departing]', 'July')
      .setValue('select[id=returning]', 'December (two years from now)')
      .waitForElementVisible('input[type=submit]', 1000)
      .click('input[type=submit]')
      .pause(1000)
      .verify.containsText('#content', 'Seats available! Call 0800 MARSAIR to book!')
      .end();
  },
  'basic search - No availability message' : function (browser) {
    browser
      .url('http://pradeepchristhuraj.marsair.tw/')
      .waitForElementVisible('body', 1000)
      .setValue('select[id=departing]', 'July')
      .setValue('select[id=returning]', 'December (next year)')
      .waitForElementVisible('input[type=submit]', 1000)
      .click('input[type=submit]')
      .pause(1000)
      .verify.containsText('#content', 'Sorry, there are no more seats available.')
      .end();
  }
};