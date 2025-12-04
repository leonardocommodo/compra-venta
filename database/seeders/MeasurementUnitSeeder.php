<?php

namespace Database\Seeders;

use App\Models\MeasurementUnit;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MeasurementUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MeasurementUnit::create([
            'code' => 'KG',
            'name'=> 'Kilogramos',
        ]);

        MeasurementUnit::create([
            'code' => 'LT',
            'name'=> 'Litros',
        ]);

        MeasurementUnit::create([
            'code' => 'GR',
            'name'=> 'Gramos',
        ]);

        MeasurementUnit::create([
            'code' => 'U',
            'name'=> 'Unidad',
        ]);
    }
}
