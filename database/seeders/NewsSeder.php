<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Database\Factories\NewsFactory;
use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class NewsSeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('news')->insert([
        //     'title' => fake()->title(),
        //     'deskripsi' => fake()->paragraph(2, true),
        //     'category' => fake()->sentence(),
        //     'author' => fake()->email(),
        // ]);
        News::factory()->count(45)->create();
    }
}
