#!/bin/sh -x

#
# Reun Media PHP Docker container entrypoint
#
# @author Reun Media <company@reun.eu>
# @copyright 2024 Reun Media
#
# @see https://github.com/Reun-Media/project-templates/blob/master/base/webdev/docker/entrypoint.php.sh
#
# @version 1.0.0
#
# @since 2024-08-30 Last modification date
#

# Run in /app directory
cd /app || exit

# Run database migrations and generate Doctrine proxies
# TODO - Comment or remove these if you don't use doctrine
php cli.php migrations:migrate latest --no-interaction --allow-no-migration
php cli.php orm:generate-proxies

# Since above commands are run as root, we ne need to set the owner of the
# databases to allow PHP to access them
chown -R www-data:www-data /app/_data /app/_data-shared

exec docker-php-entrypoint "$@"
