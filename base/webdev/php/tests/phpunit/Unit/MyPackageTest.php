<?php

declare(strict_types=1);

namespace Reun\MyPacakge;

use Codeception\Specify;
use PHPUnit\Framework\TestCase;

/**
 * @internal
 *
 * @group unit
 *
 * @covers \Reun\MyPackage\MyClass
 */
final class MyPackageTest extends TestCase
{
    use Specify;

    public function testMyPackage(): void
    {
    }
}
