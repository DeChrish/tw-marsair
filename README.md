# webdriver test for MarsAir App
# Test data is hardcoded

Initial Setup

~ packages required

1. nodejs - v5.10.1
2. npm - v3.8.3
3. nightwatch - v0.9.5
4. selenium-server-standalone-2.53.1


Running selenium server manually
	To run the selenium server manually, from the directory with the jar run the following:
	$ java -jar selenium-server-standalone-{VERSION}.jar

Install packages
	npm install

Test execution
	$ ./node_modules/.bin/nightwatch [source] 	
		
Currently default commandline and xml report is generated.