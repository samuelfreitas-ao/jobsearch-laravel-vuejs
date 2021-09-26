<?php

namespace Database\Seeders;

use App\Models\Job;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Job::create([
            'title' => 'Técnico de IT', 'description' => null,
            'start_time' => date('Y-m-d H:i:s', time() - 3600), 'end_time' => date('Y-m-d H:i:s', time() + 3600 * 24 * 30),
            'company_id' => 1
        ]);
        Job::create([
            'title' => 'Gestor de projectos', 'description' => null,
            'start_time' => date('Y-m-d H:i:s', time()), 'end_time' => date('Y-m-d H:i:s', time() + 3600 * 24 * 30),
            'company_id' => 2
        ]);
        Job::create([
            'title' => 'Gestor de projectos', 'description' => null,
            'start_time' => date('Y-m-d H:i:s', time()), 'end_time' => date('Y-m-d H:i:s', time() + 3600 * 24 * 30),
            'company_id' => 3
        ]);
    }
}
