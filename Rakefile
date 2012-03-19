require 'rake'

desc "Compile .scss stylesheets to .css for production."
task :production do
  # Do *NOT* use -t compressed. It truncates colors (#111111 to #111) and causes issues for IE.
  sh("sass -t compact ./sass/style.scss:./css/style.css")
end

desc "Compile .scss stylesheets to .css and watch for changes."
task :development do
  sh("sass --watch ./sass/style.scss:./css/style.css")
end

task :deploy => :production do
  version = Time.now.strftime('%Y%m%e%H%M%S')
  deploy_directory = "./deploy/#{version}"
  file_names = ['./css/style.css']

  file_names.each do |file_name|
    text = File.read(file_name)
    replace = text.gsub(/cloudfront.net\/images/, "cloudfront.net\/#{version}\/images")
    File.open(file_name, "w") { |file| file.puts replace }
  end

  FileUtils.rm_r(Dir.glob("./deploy/**"))
  FileUtils.mkdir_p(deploy_directory)
  FileUtils.cp_r %w(css js images), deploy_directory
end

task :default => 'development'
