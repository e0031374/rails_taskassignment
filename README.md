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


To inspect the database container
1. `sudo docker ps` to get the container id
2. `sudo docker exec -it <container id> sh` to connect to container
3. `psql -U docker` to access the postgres, note: i believe username was defined in the rails migration of the backend
4. `\l` to view all databases
5. `\c docker` to connect to the database with name: docker (also specified in rails db config)
NOTE: when in doubt of changes not applying use: `docker-compose up --build` to rebuild new containers


