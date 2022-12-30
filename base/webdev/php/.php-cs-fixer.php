<?php

/**
 * Reun Media PHP CS Fixer configuration file.
 *
 * @author Reun Media <company@reun.eu>
 * @copyright 2020-2022 Reun Media
 *
 * @see https://github.com/Reun-Media/project-templates/blob/master/base/webdev/php/.php-cs-fixer.php
 *
 * @version 2.0.0
 *
 * @since 2022-12-28 Last modification date
 */

declare(strict_types=1);

$config = new PhpCsFixer\Config();

return $config
    ->setRiskyAllowed(true)
    ->setRules([
        '@PSR12' => true,
        '@PSR12:risky' => true,
        '@Symfony' => true,
        '@Symfony:risky' => true,
        'align_multiline_comment' => true,
        'array_indentation' => true,
        'declare_strict_types' => true,
        'multiline_whitespace_before_semicolons' => true,
        'operator_linebreak' => true,
        'php_unit_internal_class' => true,
        'php_unit_test_class_requires_covers' => true,
        'single_quote' => false,
    ]);
