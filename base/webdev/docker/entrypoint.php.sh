#!/bin/sh -x

#
# Reun Media PHP Docker container entrypoint
#
# @author Reun Media <company@reun.eu>
# @copyright 2024 Reun Media
#
# @see https://github.com/ReunMedia/project-templates
#
# @version 1.0.1
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
