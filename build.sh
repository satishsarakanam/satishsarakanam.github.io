rm -r ./docs
mkdir docs
cp satishsarakanam.pdf ./docs/
cp satishsarakanamdocx.docx ./docs/
cp -r certificates/* ./docs
cp -r images css libs ./docs/
cp index.html favicon.png httpsServer.js ./docs/
uglifyjs js/*.js -o ./docs/bundle.min.js -c -m
uglifycss ./css/*.css > ./docs/css/style.min.css
awk '{gsub("<script src=\"./js/templates.js\"></script>","");print}' ./docs/index.html > ./docs/tmpfile.html && cat ./docs/tmpfile.html > ./docs/index.html
awk '{gsub("<script src=\"./js/global.js\"></script>","");print}' ./docs/index.html > ./docs/tmpfile.html && cat ./docs/tmpfile.html > ./docs/index.html
awk '{gsub("<script src=\"./js/script.js\"></script>","<script src=\"./bundle.min.js?v='$(date +"%s")'\"></script>");print}' ./docs/index.html > ./docs/tmpfile.html && cat ./docs/tmpfile.html > ./docs/index.html
awk '{gsub("<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style.css\">","<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style.min.css?v='$(date +"%s")'\">");print}' ./docs/index.html > ./docs/tmpfile.html && cat ./docs/tmpfile.html > ./docs/index.html
rm ./docs/tmpfile.html
rm ./docs/css/style.css
