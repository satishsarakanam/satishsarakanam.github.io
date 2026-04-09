rm -r ./dist
mkdir dist
cp satishsarakanam.pdf ./dist/
cp satishsarakanamdocx.docx ./dist/
cp -r certificates/* ./dist
cp -r images css libs ./dist/
cp index.html favicon.png httpsServer.js ./dist/
uglifyjs js/*.js -o ./dist/bundle.min.js -c -m
uglifycss ./css/*.css > ./dist/css/style.min.css
awk '{gsub("<script src=\"./js/templates.js\"></script>","");print}' ./dist/index.html > ./dist/tmpfile.html && cat ./dist/tmpfile.html > ./dist/index.html
awk '{gsub("<script src=\"./js/global.js\"></script>","");print}' ./dist/index.html > ./dist/tmpfile.html && cat ./dist/tmpfile.html > ./dist/index.html
awk '{gsub("<script src=\"./js/script.js\"></script>","<script src=\"./bundle.min.js?v='$(date +"%s")'\"></script>");print}' ./dist/index.html > ./dist/tmpfile.html && cat ./dist/tmpfile.html > ./dist/index.html
awk '{gsub("<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style.css\">","<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style.min.css?v='$(date +"%s")'\">");print}' ./dist/index.html > ./dist/tmpfile.html && cat ./dist/tmpfile.html > ./dist/index.html
rm ./dist/tmpfile.html
rm ./dist/css/style.css
