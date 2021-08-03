"# code-challenge-launchpad-ex2" 

Req:
installed composer php
installed php 7 or higher

cd /var/www
git clone https://github.com/olivoil/code-challenge-launchpad-ex2.git

configure vhost test.domain.com --> /var/www/code-challenge-launchpad-ex2/public

execute chmod -R 777 /var/www/code-challenge-launchpad-ex2/storage
execute chmod -R 777 /var/www/code-challenge-launchpad-ex2/bootstrap/cache

execute cp .env.example .env
execute composer install
execute composer dump-autoload

go to vhost test.domain.com
