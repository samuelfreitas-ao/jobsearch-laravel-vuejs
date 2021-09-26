<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::create(['name' => 'Unitel', 'description' => 'Empresa de telecomunicação']);
        Company::create(['name' => 'Itec', 'description' => 'Empre de IT']);
        Company::create(['name' => 'Sonangol', 'description' => 'Empresa petrolíferas']);
    }
}
