require 'rake'

desc "Compile .scss stylesheets to .css for production."
task :production do
  # Do *NOT* use -t compressed. It truncates colors (#111111 to #111) and causes issues for IE.
  sh("sass -t compact ./css/style.scss:./css/style.css")
end

desc "Compile .scss stylesheets to .css and watch for changes."
task :development do
  sh("sass --watch ./css/style.scss:./css/style.css")
end

task :default => 'development'
