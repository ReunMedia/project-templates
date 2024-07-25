# PHP Project Template

A starter template for PHP projects.

## Getting started

### Initialize Composer and install dev dependencies

```sh
composer init
```

```sh
composer config sort-packages true
```

```sh
composer require --dev ergebnis/composer-normalize friendsofphp/php-cs-fixer phpstan/phpstan pestphp/pest
```

### Add scripts to `composer.json`

```json
"scripts": {
    "test": "vendor/bin/pest",
    "dev": [
        "Composer\\Config::disableProcessTimeout",
        "php -S 0.0.0.0:8080 -t public"
    ],
    "lint": [
        "vendor/bin/php-cs-fixer fix .",
        "vendor/bin/phpstan"
    ]
}
```

### Normalize `composer.json`

```sh
composer normalize
```

> [!TIP]
> After initial setup, remove the section above and replace README with the
> template below the line.

---

# My Project

Short description of the project.

## Installation

```sh
composer require myorg/mypackage
```

## Configuration

Add configuration steps here.

## Usage

Describe how to use the package.

## Development

This repository includes a [dev container](https://containers.dev/) that can be
used to launch a development environment.

Run tests:

```sh
composer test
```

Start dev server:

```sh
composer dev
```

Run PHP CS Fixer and PHPStan:

```sh
composer lint
```
