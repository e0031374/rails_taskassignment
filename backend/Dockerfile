FROM ruby:2.6.5
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
WORKDIR /usr/app
RUN gem install bundler
COPY ./Gemfile ./
COPY ./Gemfile.lock ./
RUN bundle install
COPY ./ ./
#CMD ["rails", "s", "-p", "3001"]
RUN ["chmod", "+x", "bin/entry"]
ENTRYPOINT ["bin/entry"]
#CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3001"]
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]


