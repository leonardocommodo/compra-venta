<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserType;
class userTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserType::insert([
            [
                'id'=> 1,
                'code' => 'ADMIN',
                'name'=> 'Administrador',
                'created_at'=> now(),
                'updated_at'=> now(),
            ],
            [
                'id'=> 2,
                'code' => 'ALD',
                'name'=> 'Aliado',
                'created_at'=> now(),
                'updated_at'=> now(),
            ],
            [
                'id'=> 3,
                'code' => 'VEN',
                'name'=> 'Vendedor',
                'created_at'=> now(),
                'updated_at'=> now(),
            ],
        ]);
    }
}
