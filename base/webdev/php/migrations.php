<?php

/**
 * Reun Media Doctrine Migrations configuration.
 *
 * @author Kimmo Salmela <kimmo.salmela@reun.eu>
 * @copyright 2020 Reun Media
 *
 * @see https://github.com/Reun-Media/project-templates/blob/master/base/webdev/php/migrations.php
 *
 * @version 2.0.0
 */

declare(strict_types=1);

// https://www.doctrine-project.org/projects/doctrine-migrations/en/stable/reference/configuration.html
return [
    "migrations_paths" => [
        "App\\Doctrine\\Migrations" => "./src/App/Doctrine/Migrations",
    ],
];
