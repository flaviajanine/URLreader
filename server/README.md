# Url Reader Server

* GET: /urls returns the list of all urls saved in db

* POST: /urls save all urls in db

* DELETE: /urls clear all db

* push to bluemix
```
cf push urlreaderServer -b https://github.com/cloudfoundry/nodejs-buildpack.git
```