# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'remark_web'
set :repo_url, 'git@github.com:alterego-labs/remark_web.git'

# Default branch is :master
set :branch, `git rev-parse --abbrev-ref HEAD`.to_s.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/opt/remark/remark_web'

# Default value for :scm is :git
set :scm, :git

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

# Default value for :pty is false
set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 2

set :slack_webhook, 'https://hooks.slack.com/services/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'

set :slack_revision, `git rev-parse origin/#{fetch(:branch)}`.to_s.strip!
set :slack_msg_updated, nil
set :slack_fallback_updated, "#{fetch(:slack_deploy_user)} deployed #{fetch(:application)} on #{fetch(:stage)}"
set :slack_fields_updated, [
  {
    title: "Project",
    value: "<https://github.com/alterego-labs/#{fetch(:application)}|#{fetch(:application)}>",
    short: true
  },
  {
    title: "Environment",
    value: fetch(:stage),
    short: true
  },
  {
    title: "Deployer",
    value: fetch(:slack_deploy_user),
    short: true
  },
  {
    title: "Revision",
    value: "<https://github.com/alterego-labs/#{fetch(:application)}/commit/#{fetch(:slack_revision)}|#{fetch(:slack_revision)[0..6]}>",
    short: true
  },
  {
    title: "Branch",
    value: "<https://github.com/alterego-labs/#{fetch(:application)}/tree/#{fetch(:branch)}|#{fetch(:branch)}>",
    short: true
  }
]

# set :slack_via_slackbot, true
# set :slack_team, 'alterego-labs'
# set :slack_token, 'nlybjv5sP0Lt4UteGrU89QhI'
# set :slack_channel, 'remark_dev'

namespace :deploy do

  after :restart, :clear_cache do
    on roles(:web) do
      # within release_path do
      #   execute :npm, 'run dist'
      # end
    end
  end

end

task :npm_install do
  on roles(:web) do
    within release_path do
      execute :npm, 'install'
    end
  end
end

task :generate_dist do
  on roles(:web) do
    within release_path do
      execute :npm, 'run dist'
    end
  end
end

after 'deploy:updated', 'npm_install'
after 'npm_install', 'generate_dist'
after 'deploy:update', 'deploy:cleanup'

#
# task :npm_dist do
#   on roles(:web) do
#     within release_path do
#       execute :npm, 'run dist'
#     end
#   end
# end
