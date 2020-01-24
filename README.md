Final Submission

Name: Ong Yin Ming Jonas<br/>
Matriculation Number: A0155237E

1. README is this document
2. Screenshot of Rails startup is titled: rails_startup_screen.png
3. Writeup is titled: cvwo_finalsubmission.pdf
4. Database dump is titled: pg_database_dump (not required to run application but here for completeness)

How to Run
1. get Docker, docker-compose
2. in the current directory, `$ docker-compose up --build`
3. go to localhost:3000, please allow several moments for the thing to load

Database: Database is seeded automatically using file `backend/bin/entry` which calls `backend/db/seeds.rb`.

NOTE: for the subsequent time (any time after the first time) you can try going to backend/bin/entry and comment out the `rails db:seed` before running step2 docker-compose. This prevents conflicting database entries due to the uniqness constraints on certain fields.

This seeds the database with dummy data, but on subsequent times, comment the line again to prevent conflicting entries in the database


