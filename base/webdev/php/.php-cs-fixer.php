<?php

/**
 * Reun Media PHP CS Fixer configuration file.
 *
 * @author Reun Media <company@reun.eu>
 * @copyright 2020-2024 Reun Media
 *
 * @see https://github.com/Reun-Media/project-templates/blob/master/base/webdev/php/.php-cs-fixer.php
 *
 * @version 3.0.0
 *
 * @since 2024-06-13 Last modification date
 */

declare(strict_types=1);

use PhpCsFixer\Config;

$config = new Config();

return $config
    ->setRiskyAllowed(true)
    ->setRules([
        "@PER-CS2.0" => true,
        "@PhpCsFixer" => true,

        "declare_strict_types" => true,

        // Prefer double quotes
        "single_quote" => false,

        // Allows us to use /** @disregard */
        "phpdoc_to_comment" => false,

        // These two rules allow us to use `#region` comments for region
        // folding
        "single_line_comment_spacing" => false,
        "single_line_comment_style" => [
            "comment_types" => [
                'asterisk',
            ],
        ],
    ])
;
