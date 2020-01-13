# README


REMINDER:
to deploy onto heroku, ensure /tmp/pids exist, you need to make it manually
it is in the gitignore here








This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


| Verb   | URI                                               | Remarks                                             |
|--------|---------------------------------------------------|-----------------------------------------------------|
| GET    | /api/v1/tasks/:id/labels(.:format)                | Query for all Labels associated with the given Task |
| GET    | /api/v1/tasks(.:format)                           | Query for all Tasks                                 |
| POST   | /api/v1/tasks(.:format)                           | Create a Task by JSON                               |
| GET    | /api/v1/tasks/:id(.:format)                       | Query for a specific Task                           |
| PATCH  | /api/v1/tasks/:id(.:format)                       | Update a given Task                                 |
| DELETE | /api/v1/tasks/:id(.:format)                       | Delete a Task                                       |
| GET    | /api/v1/labels/:id/tasks(.:format)                | Query for all Tasks associated with a give Label    |
| GET    | /api/v1/labels(.:format)                          | Query for all Labels                                |
| POST   | /api/v1/labels(.:format)                          | Create a Label by JSON                              |
| GET    | /api/v1/labels/:id(.:format)                      | Query for a specific Label                          |
| PATCH  | /api/v1/labels/:id(.:format)                      | Update a given Label                                |
| DELETE | /api/v1/labels/:id(.:format)                      | Delete a Label                                      |
| GET    | /api/v1/tasklabels(.:format)                      | Query for all Task-Label relationships              |
| POST   | /api/v1/tasklabels(.:format)                      | Create a Task-Label relationship                    |
| GET    | /api/v1/tasklabels/:id(.:format)                  | Query for a specific Task-Label relationship        |
| DELETE | /api/v1/tasklabels/:id(.:format)                  | Delete a Task-Label relationship                    |
| DELETE | /api/v1/tasklabels/:task_id/:label_id(.:format)   | Delete a Task-Label relationship                    |
