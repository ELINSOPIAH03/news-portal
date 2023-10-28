<?php

namespace Database\Factories;

use App\Models\News;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = News::class;
    public function definition()
    {
        
        return [
            //
            'title' => $this->faker->word,
            'deskripsi' => $this->faker->paragraph(2, true),
            'category' => $this->faker->sentence,
            'author' => $this->faker->unique()->safeEmail,

            // 'title' => fake()->str_random(5),
            // 'deskripsi' => fake()->paragraph(2, true),
            // 'category' => fake()->sentence(),
            // 'author' => fake()->email(),
        ];
        
    }
}
