# Clear My Record Clinic App

The Clear My Record backend is focused on providing a backend management solution to those who are helping people seek expungement under the laws of the state of Missouri. Effective January 1, 2018, the State of Missouri greatly expanded the convictions qualifying for expungement.

**Note: Any arguments you should pass your own values into will be wrapped in <>**

## App Engine

### Dependencies
- gcloud
- mysql client

### Deployment

Currently this application is designed to be deploy via Google App Engine. You can deploy the app by doing the following:

Create a Google Cloud Project, or use an existing one. To do this via the gcloud cli:
`gcloud projects create <project_name>`

Create a CloudSql MySql instance following the steps under **Create an Instance** here:
https://cloud.google.com/sql/docs/mysql/quickstart

Create an application key for the CMR app:
`php artisan key:generate --show`

Copy the app.yaml.sample file to app.yaml:
`cp app.yaml.sample app.yaml`

Update the app.yaml file to include:
- The app key you generated above
- Your database information

Use the Google [cloudsql_proxy](https://cloud.google.com/sql/docs/mysql/quickstart-proxy-test) to connect to your instance locally from a terminal:
`cloud_sql_proxy -instances=<YOUR_INSTANCE_CONNECTION_NAME>=tcp:3306`

Open another terminal window and create a database in your MySql instance (You will be prompted for the root user password you set up when you created the instance):
`mysql -h 127.0.0.1 -u root -p -e "CREATE DATABASE laravel;"`

Create a session table for the database, and run the migration command to populate all tables needed for the application:
`php artisan session:table`
`DB_DATABASE=laravel DB_USERNAME=root DB_PASSWORD=YOUR_DB_PASSWORD php artisan migrate --force`

Deploy the application by running the following in the directory:
`gcloud app deploy`

## Docker Deployment

### Dependencies
You will need the following dependencies:
- docker
- docker-compose

### Deployment
This application can also be deployed via docker with docker-compose. You can find the dockerfiles for the app (app.dockerfile) and web (web.dockerfile) in the dockerfiles directory.

Build the images locally. You can do this with the following commands:
`docker build -f app.dockerfile . -t <image-name>`
`docker build -f web.dockerfile . -t <image-name>`

You can then use the self signed certs in the `certs` directory of this repository, and spin up the containers with docker-compose:
`LE_DIR=./certs/ docker-compose -f dockerfiles/docker-compose.prod.yaml up`

You ten can reach the app at 0.0.0.0 in your browser.

## Local testing with Vagrant

TO BE FILLED IN

## Testing in macOS

These instructions assume you have git, npm,
composer, php, mysql installed,
that you have a running Laravel environment with Valet.


Adjust:

1. `DB_` setting to reflect the database you will use
2. `TEST_USER_PASSWORD` to the test password you want for the inital user.
    See `database/seeds/UserTableSeeder.php` for user name
3. `MAIL_` should be adjusted if you are going to test Forgot password or other functions that mail.
3. If you regenerate Passport Keys you man need to adjust `PASSWORD_CLIENT_ID`

### Install the dependencies

```
composer install
npm install
npm run dev
```

### Crate database tables and seed them

```
php artisan migrate
php artisan db:seed
```

### Setup Passport

You can skip this if you are not going to use the API.

````
php artisan passport:keys --force
````

### Setup hosting

You can setup any `apache` hosting environment you would like.

For OSX with [Valet](https://laravel.com/docs/5.8/valet) installed the following will work from the
top directory of your project

```
valet link
valet open
```

You should now beable to login as `paulb@savagesoft.com`  Using the password you set in the `.env`



