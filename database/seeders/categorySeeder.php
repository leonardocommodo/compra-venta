<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class categorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'code' => 'LTC',
            'name' => 'Lacteos',
        ]);

        Category::create([
            'code' => 'BDB',
            'name' => 'Bebidas',
        ]);
    }
}
